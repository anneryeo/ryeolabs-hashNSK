import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ChevronDownSVG } from '../components/icons';

export default function LandingPage() {
	const [scrollY, setScrollY] = useState(0);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
		
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToBlog = () => {
		const blogSection = document.getElementById('blog-preview');
		blogSection?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<Head>
				<title>RYEO LABS</title>
				<meta name="description" content="Welcome to RYEO LABS - Innovation, Research, and Insights" />
				<meta property="og:title" content="RYEO LABS" />
				<meta property="og:description" content="Welcome to RYEO LABS - Innovation, Research, and Insights" />
			</Head>

		{/* Hero Section - Full screen red background */}
		<section 
			className="relative flex min-h-screen items-center justify-center"
			style={{ 
				backgroundColor: '#C20005'
			}}
		>
			{/* Animated gradient overlay */}
			<div 
				className="absolute inset-0 opacity-10"
				style={{
					background: 'radial-gradient(circle at 50% 50%, rgba(255, 253, 243, 0.3) 0%, transparent 50%)'
				}}
			/>				<div 
					className={`relative z-10 px-6 text-center transition-all duration-1000 ${
						isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
					}`}
				>
					{/* Logo placeholder - replace with your custom logo */}
					<div className="mb-12 flex justify-center">
						<div className="text-[#FFFDF3]">
							{/* Add your logo here: <Image src="/logo.svg" alt="RYEO LABS" width={200} height={80} /> */}
							<h1 
								className="text-6xl font-bold tracking-wider md:text-8xl"
								style={{ 
									fontFamily: "'Swis721 Ex BT', sans-serif",
									lineHeight: '0.885'
								}}
							>
								RYEO LABS
							</h1>
						</div>
					</div>

					{/* Tagline */}
					<p 
						className="mb-16 text-xl text-[#FFFDF3] md:text-2xl"
						style={{ 
							fontFamily: "'Alexandria', sans-serif",
							lineHeight: '0.885'
						}}
					>
						Innovation • Research • Insights
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
						<button
							onClick={scrollToBlog}
							className="group relative overflow-hidden rounded-full border-2 border-[#FFFDF3] bg-transparent px-10 py-4 font-semibold text-[#FFFDF3] transition-all duration-300 hover:bg-[#FFFDF3] hover:text-[#C20005]"
							style={{ fontFamily: "'Alexandria', sans-serif" }}
						>
							<span className="relative z-10">Explore</span>
						</button>
					</div>
				</div>

			{/* Scroll indicator */}
			<div 
				className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
				onClick={scrollToBlog}
			>
				<ChevronDownSVG className="h-8 w-8 text-[#FFFDF3]" />
			</div>
		</section>			{/* About / What is RYEO LABS Section */}
			<section 
				className="min-h-screen py-20 flex items-center"
				style={{ backgroundColor: '#FFFDF3' }}
			>
				<div className="container mx-auto px-6">
					<div className="max-w-7xl mx-auto">
						{/* Two Column Layout: Text on Left, Image on Right */}
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							
							{/* Left Column - Text Content */}
							<div>
								<h2 
									className="mb-8 text-5xl font-bold md:text-6xl"
									style={{ 
										color: '#C20005',
										fontFamily: "'Swis721 Ex BT', sans-serif",
										lineHeight: '0.885'
									}}
								>
									What is RYEO LABS?
								</h2>
								
								<div className="space-y-6">
									<p 
										className="text-xl text-gray-700 leading-relaxed md:text-2xl"
										style={{ fontFamily: "'Alexandria', sans-serif" }}
									>
										RYEO LABS is a creative space where innovation meets curiosity. 
										We explore the intersection of technology, design, and human experience 
										to build meaningful solutions.
									</p>

									<p 
										className="text-lg text-gray-600 leading-relaxed md:text-xl"
										style={{ fontFamily: "'Alexandria', sans-serif" }}
									>
										From cutting-edge research to hands-on projects, we document our journey 
										of discovery and share insights that inspire others to push boundaries 
										and create impact.
									</p>
								</div>
							</div>

							{/* Right Column - Image */}
							<div className="relative">
								{/* Placeholder for your image */}
								<div 
									className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#C20005] to-[#8B0004] shadow-2xl"
								>
									{/* Replace this with your actual image */}
									<img 
										src="/about-image.jpg" 
										alt="RYEO LABS" 
										className="w-full h-full object-cover"
										onError={(e) => {
											// Fallback to gradient if image not found
											e.currentTarget.style.display = 'none';
										}}
									/>
								</div>
								
								{/* Decorative element */}
								<div 
									className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-20 -z-10"
									style={{ backgroundColor: '#C20005' }}
								/>
							</div>

						</div>
					</div>
				</div>
		</section>

		{/* Explore Section - Record Album Filing Style */}
		<section 
			id="blog-preview"
			className="min-h-screen py-20 flex items-center"
			style={{ backgroundColor: '#FFFDF3' }}
		>
			<div className="container mx-auto px-6">
				<div className="mb-20 text-center">
					<h2 
						className="mb-4 text-4xl font-bold md:text-5xl"
						style={{ 
							color: '#C20005',
							fontFamily: "'Swis721 Ex BT', sans-serif",
							lineHeight: '0.885'
						}}
					>
						Explore
					</h2>
					<p 
						className="text-lg text-gray-700 md:text-xl"
						style={{ 
							fontFamily: "'Alexandria', sans-serif",
							lineHeight: '0.885'
						}}
					>
						Flip through the collection
					</p>
				</div>

				{/* Record Album Filing Cards */}
				<div className="max-w-5xl mx-auto">
					<div className="flex flex-col gap-4">
						
						{/* Projects Album */}
						<Link href="/projects">
							<div 
								className="group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer hover:scale-[1.02]"
								style={{
									height: '180px',
									backgroundColor: 'white',
									boxShadow: '0 4px 6px rgba(194, 0, 5, 0.1)',
									transform: scrollY > 1000 ? 'translateX(0)' : 'translateX(-20px)',
									opacity: scrollY > 1000 ? 1 : 0.8
								}}
							>
								{/* Album spine/tab on left */}
								<div 
									className="absolute left-0 top-0 bottom-0 w-20 flex items-center justify-center transition-all duration-300 group-hover:w-24"
									style={{ backgroundColor: '#C20005' }}
								>
									<span 
										className="text-[#FFFDF3] font-bold text-xl transform -rotate-90 whitespace-nowrap"
										style={{ fontFamily: "'Swis721 Ex BT', sans-serif" }}
									>
										PROJECTS
									</span>
								</div>
								
								{/* Album content */}
								<div className="ml-20 p-8 flex items-center justify-between h-full">
									<div className="flex-1">
										<h3 
											className="text-3xl font-bold mb-3 transition-colors duration-300"
											style={{ 
												color: '#C20005',
												fontFamily: "'Alexandria', sans-serif" 
											}}
										>
											Projects
										</h3>
										<p 
											className="text-gray-600 text-lg"
											style={{ fontFamily: "'Alexandria', sans-serif" }}
										>
											Explore innovative works and experiments
										</p>
									</div>
									
									{/* Image placeholder */}
									<div className="w-32 h-32 rounded-xl bg-gradient-to-br from-[#C20005] to-[#8B0004] flex-shrink-0 ml-6">
										{/* Replace with your image */}
										<img 
											src="/projects-thumb.jpg" 
											alt="Projects"
											className="w-full h-full object-cover rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
											onError={(e) => { e.currentTarget.style.display = 'none'; }}
										/>
									</div>
									
									{/* Arrow indicator */}
									<div className="ml-6 text-[#C20005] transform transition-transform duration-300 group-hover:translate-x-2">
										<span className="text-4xl">→</span>
									</div>
								</div>
							</div>
						</Link>

						{/* Blogs Album */}
						<Link href="/blog">
							<div 
								className="group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer hover:scale-[1.02]"
								style={{
									height: '180px',
									backgroundColor: 'white',
									boxShadow: '0 4px 6px rgba(194, 0, 5, 0.1)',
									transform: scrollY > 1100 ? 'translateX(0)' : 'translateX(-20px)',
									opacity: scrollY > 1100 ? 1 : 0.8
								}}
							>
								<div 
									className="absolute left-0 top-0 bottom-0 w-20 flex items-center justify-center transition-all duration-300 group-hover:w-24"
									style={{ backgroundColor: '#8B0004' }}
								>
									<span 
										className="text-[#FFFDF3] font-bold text-xl transform -rotate-90 whitespace-nowrap"
										style={{ fontFamily: "'Swis721 Ex BT', sans-serif" }}
									>
										BLOGS
									</span>
								</div>
								
								<div className="ml-20 p-8 flex items-center justify-between h-full">
									<div className="flex-1">
										<h3 
											className="text-3xl font-bold mb-3 transition-colors duration-300"
											style={{ 
												color: '#C20005',
												fontFamily: "'Alexandria', sans-serif" 
											}}
										>
											Blogs
										</h3>
										<p 
											className="text-gray-600 text-lg"
											style={{ fontFamily: "'Alexandria', sans-serif" }}
										>
											Read insights and thought leadership
										</p>
									</div>
									
									<div className="w-32 h-32 rounded-xl bg-gradient-to-br from-[#8B0004] to-[#C20005] flex-shrink-0 ml-6">
										<img 
											src="/blogs-thumb.jpg" 
											alt="Blogs"
											className="w-full h-full object-cover rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
											onError={(e) => { e.currentTarget.style.display = 'none'; }}
										/>
									</div>
									
									<div className="ml-6 text-[#C20005] transform transition-transform duration-300 group-hover:translate-x-2">
										<span className="text-4xl">→</span>
									</div>
								</div>
							</div>
						</Link>

						{/* Timeline Album */}
						<Link href="/timeline">
							<div 
								className="group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer hover:scale-[1.02]"
								style={{
									height: '180px',
									backgroundColor: 'white',
									boxShadow: '0 4px 6px rgba(194, 0, 5, 0.1)',
									transform: scrollY > 1200 ? 'translateX(0)' : 'translateX(-20px)',
									opacity: scrollY > 1200 ? 1 : 0.8
								}}
							>
								<div 
									className="absolute left-0 top-0 bottom-0 w-20 flex items-center justify-center transition-all duration-300 group-hover:w-24"
									style={{ backgroundColor: '#C20005' }}
								>
									<span 
										className="text-[#FFFDF3] font-bold text-xl transform -rotate-90 whitespace-nowrap"
										style={{ fontFamily: "'Swis721 Ex BT', sans-serif" }}
									>
										TIMELINE
									</span>
								</div>
								
								<div className="ml-20 p-8 flex items-center justify-between h-full">
									<div className="flex-1">
										<h3 
											className="text-3xl font-bold mb-3 transition-colors duration-300"
											style={{ 
												color: '#C20005',
												fontFamily: "'Alexandria', sans-serif" 
											}}
										>
											Timeline
										</h3>
										<p 
											className="text-gray-600 text-lg"
											style={{ fontFamily: "'Alexandria', sans-serif" }}
										>
											Journey through milestones and moments
										</p>
									</div>
									
									<div className="w-32 h-32 rounded-xl bg-gradient-to-br from-[#C20005] to-[#8B0004] flex-shrink-0 ml-6">
										<img 
											src="/timeline-thumb.jpg" 
											alt="Timeline"
											className="w-full h-full object-cover rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
											onError={(e) => { e.currentTarget.style.display = 'none'; }}
										/>
									</div>
									
									<div className="ml-6 text-[#C20005] transform transition-transform duration-300 group-hover:translate-x-2">
										<span className="text-4xl">→</span>
									</div>
								</div>
							</div>
						</Link>

						{/* Collaborate Album */}
						<Link href="/collaborate">
							<div 
								className="group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer hover:scale-[1.02]"
								style={{
									height: '180px',
									backgroundColor: 'white',
									boxShadow: '0 4px 6px rgba(194, 0, 5, 0.1)',
									transform: scrollY > 1300 ? 'translateX(0)' : 'translateX(-20px)',
									opacity: scrollY > 1300 ? 1 : 0.8
								}}
							>
								<div 
									className="absolute left-0 top-0 bottom-0 w-20 flex items-center justify-center transition-all duration-300 group-hover:w-24"
									style={{ backgroundColor: '#8B0004' }}
								>
									<span 
										className="text-[#FFFDF3] font-bold text-xl transform -rotate-90 whitespace-nowrap"
										style={{ fontFamily: "'Swis721 Ex BT', sans-serif" }}
									>
										COLLABORATE
									</span>
								</div>
								
								<div className="ml-20 p-8 flex items-center justify-between h-full">
									<div className="flex-1">
										<h3 
											className="text-3xl font-bold mb-3 transition-colors duration-300"
											style={{ 
												color: '#C20005',
												fontFamily: "'Alexandria', sans-serif" 
											}}
										>
											Want to Invent with Me?
										</h3>
									<p 
										className="text-gray-600 text-lg"
										style={{ fontFamily: "'Alexandria', sans-serif" }}
									>
										Let&apos;s build something amazing together
									</p>
									</div>
									
									<div className="w-32 h-32 rounded-xl bg-gradient-to-br from-[#8B0004] to-[#C20005] flex-shrink-0 ml-6">
										<img 
											src="/collaborate-thumb.jpg" 
											alt="Collaborate"
											className="w-full h-full object-cover rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
											onError={(e) => { e.currentTarget.style.display = 'none'; }}
										/>
									</div>
									
									<div className="ml-6 text-[#C20005] transform transition-transform duration-300 group-hover:translate-x-2">
										<span className="text-4xl">→</span>
									</div>
								</div>
							</div>
						</Link>

					</div>
				</div>
			</div>
		</section>
		</>
	);
}
