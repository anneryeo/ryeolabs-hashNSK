import { NextPageContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Container } from '../components/container';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Layout } from '../components/layout';

type Props = {
	statusCode?: number;
};

function Error({ statusCode }: Props) {
	return (
		<Layout>
			<Head>
				<title>{statusCode ? `${statusCode} - Error` : 'Error'} | RYEO LABS</title>
			</Head>
			<Header />
			<Container className="flex min-h-screen flex-col items-center justify-center py-20">
				<div className="text-center">
					<h1 className="mb-4 text-6xl font-bold text-slate-900 dark:text-white">
						{statusCode || 'Error'}
					</h1>
					<h2 className="mb-6 text-2xl font-semibold text-slate-700 dark:text-slate-300">
						{statusCode
							? `An error ${statusCode} occurred on server`
							: 'An error occurred on client'}
					</h2>
					<p className="mb-8 text-slate-600 dark:text-slate-400">
						Something went wrong. Please try again later.
					</p>
					<Link
						href="/"
						className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
					>
						Go Home
					</Link>
				</div>
			</Container>
			<Footer />
		</Layout>
	);
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
