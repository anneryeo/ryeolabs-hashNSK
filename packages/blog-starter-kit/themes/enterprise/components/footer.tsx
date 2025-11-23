import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="border-t py-10 dark:border-neutral-800 ">
			<Container className="px-5">
				{PUBLICATION_LOGO ? (
					<div className="mb-2 flex w-full flex-row justify-center">
						<Link
							href={'/'}
							aria-label={`${publication.title} home page`}
							className="flex flex-row items-center gap-5"
						>
							<img className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
						</Link>
					</div>
				) : (
					<p className="mb-20 text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
						{publication.title}
					</p>
				)}
				<div className="flex w-full justify-center">
					<div className="flex flex-col items-center gap-5 text-slate-600 dark:text-neutral-300">
						<SocialLinks />
						<p>&copy; 2025 Ryeo Labs </p>
						<p className="max-w-xl text-center text-sm text-slate-500 dark:text-neutral-400">
							Ryeo Labs draws inspiration from the word Ryeo, which originally came from 'Rey' (Reyes) whose meaning shifts across cultures: in Korean (려 / 려) it evokes Beauty, in Chinese (麗 / 璀燦) it signifies Splendour, and in Pakistani (ریو / اژدہا) tradition it carries the spirit of the Dragon. Together, these roots embody elegance, brilliance, and power—values at the heart of our innovation.
						</p>
					</div>
				</div>
			</Container>
		</footer>
	);
};
