import Link from 'next/link';
import { useAppContext } from './contexts/appContext';
import { GithubSVG, HashnodeSVG, LinkedinSVG, RssSVG, XSVG, InstagramSVG, FacebookSVG, YoutubeSVG, WebsiteSVG } from './icons';

type SocialLinksProps = {
	isSidebar?: boolean;
	variant?: 'default' | 'header';
};

export const SocialLinks = ({ isSidebar, variant = 'default' }: SocialLinksProps) => {
	const { publication } = useAppContext();
	const hasSocialLinks = publication?.links
		? !Object.values(publication.links!).every((val) => val === '')
		: false;

	const baseContainer =
		variant === 'header'
			? `col-span-1 flex flex-row flex-wrap gap-1 md:flex-nowrap ${isSidebar ? 'justify-start' : 'justify-start'}`
			: `col-span-1 flex flex-row flex-wrap gap-1 text-slate-600 dark:text-neutral-300 md:flex-nowrap ${
				  isSidebar ? 'justify-start' : 'justify-end'
			  }`;

	const btnClass =
		variant === 'header'
			? 'flex items-center justify-center rounded-full border border-white p-2 text-white hover:bg-white/10'
			: 'flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600';

	return (
		<>
			<div className={baseContainer}>
				{hasSocialLinks && (
					<>
						{(publication.links as any)?.instagram && (
							<a
								href={(publication.links as any).instagram}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Instagram, external website, opens in new tab"
								className={btnClass}
							>
								<InstagramSVG className="h-5 w-5 stroke-current" />
							</a>
						)}

						{(publication.links as any)?.facebook && (
							<a
								href={(publication.links as any).facebook}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Facebook, external website, opens in new tab"
								className={btnClass}
							>
								<FacebookSVG className="h-5 w-5 stroke-current" />
							</a>
						)}

						{(publication.links as any)?.youtube && (
							<a
								href={(publication.links as any).youtube}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on YouTube, external website, opens in new tab"
								className={btnClass}
							>
								<YoutubeSVG className="h-5 w-5 stroke-current" />
							</a>
						)}

						{(publication.links as any)?.website && (
							<a
								href={(publication.links as any).website}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Visit our website, external website, opens in new tab"
								className={btnClass}
							>
								<WebsiteSVG className="h-5 w-5 stroke-current" />
							</a>
						)}
						{publication.links?.twitter && (
							<a
								href={publication.links.twitter}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Twitter, external website, opens in new tab"
								className={btnClass}
							>
								<XSVG className="h-5 w-5 stroke-current" />
							</a>
						)}
						{publication.links?.github && (
							<a
								href={publication.links.github}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Github, external website, opens in new tab"
								className={btnClass}
							>
								<GithubSVG className="h-5 w-5 stroke-current" />
							</a>
						)}
						{publication.links?.linkedin && (
							<a
								href={publication.links.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Linkedin, external website, opens in new tab"
								className={btnClass}
							>
								<LinkedinSVG className="h-5 w-5 stroke-current" />
							</a>
						)}
						{publication.links?.hashnode && (
							<a
								href={publication.links.hashnode}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Hashnode, external website, opens in new tab"
								className={btnClass}
							>
								<HashnodeSVG className="h-5 w-5 stroke-current" />
							</a>
						)}
					</>
				)}

				<Link
					prefetch={false}
					href={`/rss.xml`}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Open blog XML Feed, opens in new tab"
					className={btnClass}
				>
					<RssSVG className="h-5 w-5 stroke-current" />
				</Link>
			</div>
		</>
	);
};
