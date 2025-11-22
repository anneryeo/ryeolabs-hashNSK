import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
	return (
		<div className="min-h-screen bg-[#FFFDF3]">
			<Head>
				<title>404 - Page Not Found | RYEO LABS</title>
			</Head>
			<div className="flex min-h-screen flex-col items-center justify-center py-20 px-5">
				<div className="text-center">
					<h1 className="mb-4 text-6xl font-bold text-slate-900">404</h1>
					<h2 className="mb-6 text-2xl font-semibold text-slate-700">
						Page Not Found
					</h2>
					<p className="mb-8 text-slate-600">
						The page you&apos;re looking for doesn&apos;t exist or has been moved.
					</p>
					<Link
						href="/"
						className="inline-block rounded-full bg-[#C20005] px-6 py-3 font-semibold text-white hover:bg-[#8B0004] transition-colors"
					>
						Go Home
					</Link>
				</div>
			</div>
		</div>
	);
}
