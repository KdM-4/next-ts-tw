import Head from 'next/head';

export default function Home() {
	return (
		<div className='container'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='p-8'>
				<h1 className='text-xl'>
					<span>🚀</span> Next.js + TypeScript + Tailwind.css
				</h1>
			</main>
		</div>
	);
}
