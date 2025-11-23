import Image from 'next/image';
import Link from 'next/link';

type Props = {
	title: string;
	src: string;
	slug?: string;
	priority?: boolean;
	banner?: boolean;
};

export const CoverImage = ({ title, src, slug, priority = false, banner = false }: Props) => {
	const postURL = `/${slug}`;

	const image = banner ? (
		<div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[40vh]">
			<Image
				src={src}
				alt={`Cover Image for ${title}`}
				className="w-full object-cover"
				fill
				unoptimized
				priority={priority}
			/>
		</div>
	) : (
		<div className="relative pt-[52.5%]">
			<Image
				src={src}
				alt={`Cover Image for ${title}`}
				className="w-full rounded-md border object-cover hover:opacity-90 dark:border-neutral-800"
				fill
				unoptimized
				priority={priority}
			/>
		</div>
	);

	return (
		<div className="sm:mx-0">
			{slug ? (
				<Link href={postURL} aria-label={title}>
					{image}
				</Link>
			) : (
				image
			)}
		</div>
	);
};
