import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useEffect, useState } from 'react';
import { PublicationNavbarItem } from '../generated/graphql';
import { Button } from './button';
import { useAppContext } from './contexts/appContext';
import HamburgerSVG from './icons/svgs/HamburgerSVG';
import { PublicationLogo } from './publication-logo';
import PublicationSidebar from './sidebar';
import { SocialLinks } from './social-links';

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

export const Header = () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '/';
	const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>();
	const { publication } = useAppContext();
	const [clientPublication, setClientPublication] = useState<typeof publication | null>(null);
	const effectivePublication = clientPublication ?? publication;
	const navbarItems = effectivePublication.preferences.navbarItems.filter(hasUrl);
	const visibleItems = navbarItems.slice(0, 3);
	const hiddenItems = navbarItems.slice(3);

	const toggleSidebar = () => {
		setIsSidebarVisible((prevVisibility) => !prevVisibility);
	};

	useEffect(() => {
		// fetch latest publication data client-side to ensure header/footer show up-to-date links
		const endpoint = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
		const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST;
		if (!endpoint || !host) return;

		let mounted = true;

		const query = `query PublicationByHost($host: String!) { publication(host: $host) { title preferences { navbarItems { label url } logo links { twitter github linkedin hashnode } } } }`;

		fetch(endpoint, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ query, variables: { host } }),
		})
			.then((res) => res.json())
			.then((json) => {
				if (!mounted) return;
				const pub = json?.data?.publication;
				if (pub) {
					// merge minimal shape into existing publication to avoid losing fields
					setClientPublication({ ...publication, ...pub });
				}
			})
			.catch(() => {
				/* ignore */
			});

		return () => {
			mounted = false;
		};
	}, [publication]);

	const navList = (
		<ul className="flex flex-row items-center gap-2 text-white">
			{visibleItems.map((item) => (
				<li key={item.url}>
					<a
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
						className="transition-200 block max-w-[200px] truncate text-ellipsis whitespace-nowrap rounded-full p-2 transition-colors hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
					>
						{item.label}
					</a>
				</li>
			))}

			{hiddenItems.length > 0 && (
				<li>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild>
							<button className="transition-200 block rounded-full p-2 transition-colors hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white">
								More
							</button>
						</DropdownMenu.Trigger>

						<DropdownMenu.Portal>
							<DropdownMenu.Content
								className="w-48 rounded border border-gray-300 bg-white text-neutral-950 shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
								align="end"
								sideOffset={5}
							>
								{hiddenItems.map((item) => (
									<DropdownMenu.Item asChild key={item.url}>
										<a
											href={item.url}
											target="_blank"
											rel="noopener noreferrer"
											className="transition-200 block truncate p-2 transition-colors hover:bg-slate-100 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
										>
											{item.label}
										</a>
									</DropdownMenu.Item>
								))}
							</DropdownMenu.Content>
						</DropdownMenu.Portal>
					</DropdownMenu.Root>
				</li>
			)}
		</ul>
	);

	return (
		<header className="border-b bg-[#C20005] py-2 dark:border-neutral-800 dark:bg-neutral-900">
			<div className="w-full px-5">
				<div className="flex w-full flex-row items-center justify-between gap-5">
					<div className="flex flex-row items-center gap-2">
						<div className="lg:hidden">
							<Button
								type="outline"
								label=""
								icon={<HamburgerSVG className="h-5 w-5 stroke-current" />}
								className="rounded-xl border-transparent !px-3 !py-2 text-white hover:bg-slate-900 dark:hover:bg-neutral-800"
								onClick={toggleSidebar}
							/>

							{isSidebarVisible && (
								<PublicationSidebar navbarItems={navbarItems} toggleSidebar={toggleSidebar} />
							)}
						</div>
						<div className="hidden lg:flex items-center gap-4">
							<PublicationLogo />
							{/* show social icons in header on large screens */}
							<div className="hidden lg:block">
								<SocialLinks variant="header" />
							</div>
						</div>
					</div>
					<div className="flex flex-row items-center gap-5 text-slate-300">
						<nav className="hidden lg:block">{navList}</nav>
					</div>
				</div>
			</div>
			<div className="mt-3 flex justify-center lg:hidden">
				<PublicationLogo />
			</div>
		</header>
	);
};
