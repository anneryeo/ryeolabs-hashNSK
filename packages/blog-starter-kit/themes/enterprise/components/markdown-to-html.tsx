import { useEmbeds } from '@starter-kit/utils/renderer/hooks/useEmbeds';
import { markdownToHtml } from '@starter-kit/utils/renderer/markdownToHtml';
import { memo } from 'react';

type Props = {
	contentMarkdown: string;
};

function MarkdownToHtmlComponent({ contentMarkdown }: Props) {
	const content = markdownToHtml(contentMarkdown);
	useEmbeds({ enabled: true });

	return (
		<>
			<div
				className="hashnode-content-style mx-auto w-full px-5 md:max-w-screen-md"
				dangerouslySetInnerHTML={{ __html: content }}
			/>
			<style jsx global>{`
				.hashnode-content-style p { text-align: left; }
				.hashnode-content-style pre,
				.hashnode-content-style code,
				.hashnode-content-style blockquote,
				.hashnode-content-style table,
				.hashnode-content-style h1,
				.hashnode-content-style h2,
				.hashnode-content-style h3,
				.hashnode-content-style h4,
				.hashnode-content-style h5,
				.hashnode-content-style h6,
				.hashnode-content-style ul,
				.hashnode-content-style ol {
					text-align: left;
				}
			`}</style>
		</>
	);
}

export const MarkdownToHtml = memo(MarkdownToHtmlComponent);
