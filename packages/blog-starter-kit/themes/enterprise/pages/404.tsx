import Head from 'next/head';
import Link from 'next/link';
import { Container } from '../components/container';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Layout } from '../components/layout';

export default function Custom404() {
	return (
		<Layout>
			<Head>
				<title>404 - Page Not Found | RYEO LABS</title>
			</Head>
			<Header />
			<Container className="flex min-h-screen flex-col items-center justify-center py-20">
				<div className="text-center">
					<h1 className="mb-4 text-6xl font-bold text-slate-900 dark:text-white">404</h1>
					<h2 className="mb-6 text-2xl font-semibold text-slate-700 dark:text-slate-300">
						Page Not Found
					</h2>
					<p className="mb-8 text-slate-600 dark:text-slate-400">
						The page you&apos;re looking for doesn&apos;t exist or has been moved.
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
