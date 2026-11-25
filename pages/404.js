import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function NotFound() {
	return (
		<Layout title="Page not found — Sirocco Labs">
			<main className={styles.fill}>
				<section className={`${styles.section} ${styles.prose}`}>
					<p className={styles.eyebrow}>404</p>
					<h1 className={styles.sectionTitle}>We can’t find that page.</h1>
					<p>It may have moved, or the link may have a typo.</p>
					<div className={styles.heroActions}>
						<Link href="/" className={styles.buttonPrimary}>
							Go to the homepage
						</Link>
						<Link href="/work" className={styles.buttonGhost}>
							See our work
						</Link>
					</div>
				</section>
			</main>
		</Layout>
	);
}
