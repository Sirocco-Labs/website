import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Sirocco Labs</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1 className={styles.title}>Welcome to Sirocco Labs</h1>
				<h2 className={styles.h2}>
					Where innovation meets family ties
				</h2>
				<Image
					src="/Sirocco.png"
					width={500}
					height={500}
					alt="Sirocco labs logo"
				/>

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

				<div className={styles.blurb}>
					<p className={styles.description}>
						Founded by a dynamic duo of siblings with a shared
						passion for technology, Zackaria and Anniessa Antar
						bring a unique blend of creativity and technical
						expertise to the world of software and web
						development. Our journey began with a shared vision to
						center relationships in building digital experiences,
						and today, we invite you to explore the extraordinary
						solutions crafted by our close-knit team.
					</p>
					<p className={styles.description}>
						At Sirocco Labs, we believe in the power of
						collaboration, sibling synergy, and cutting-edge
						technology to bring your ideas to life. Whether you're
						envisioning an interactive website, a robust software
						application, or anything in between, join us on this
						exciting venture where family values meet digital
						excellence.
					</p>
				</div>
			</main>

			<footer>© 2024</footer>

			<style jsx>{`
				main {
          overflow:hidden;
          width:98%;
					padding: 0 0.25rem;
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
