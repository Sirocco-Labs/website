import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
		<div className={styles.container}>
			<Head>
				<title>Sirocco Labs</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Image
					src="/Sirocco.png"
					width={500}
					height={500}
					alt="Sirocco labs logo"
				/>

				<h1 className={styles.title}>Sirocco Labs</h1>

				<p className={styles.description}>
					Anniessa and Zackaria Antar are the owners and founders of
					Sirocco Labs.{" "}
				</p>

				<div className={styles.grid}>
					<a
						href="mailto:siroccolabs@gmail.com? &subject=I'd love to work with y'all!"
						className={styles.button}
					>
						<h3>Contact Us</h3>
					</a>
					{/* <a href="/about" className={styles.card}>
            <h3>About &rarr;</h3>
          </a>

          <a href="/contact" className={styles.card}>
            <h3>Contact &rarr;</h3>
          </a> */}
				</div>
			</main>

			<footer>© 2024</footer>

			<style jsx>{`
				main {
					padding: 5rem 0;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
				footer {
					width: 100%;
					height: 100px;
					border-top: 1px solid #eaeaea;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				footer img {
					margin-left: 0.5rem;
				}
				footer a {
					display: flex;
					justify-content: center;
					align-items: center;
					text-decoration: none;
					color: inherit;
				}
				code {
					background: #fafafa;
					border-radius: 5px;
					padding: 0.75rem;
					font-size: 1.1rem;
					font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
						DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New,
						monospace;
				}
			`}</style>

			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
						Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
						Helvetica Neue, sans-serif;
				}
				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
  );
}
