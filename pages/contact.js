import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const CONTACT_EMAIL = "hello@siroccolabs.com";

export default function Contact() {
	return (
		<Layout
			title="Contact — Sirocco Labs"
			description="Tell Sirocco Labs about your organization and what you want to make."
		>
			<main className={styles.fill}>
				<section className={`${styles.section} ${styles.contact} ${styles.fill}`}>
					<div className={styles.orb} aria-hidden="true" />
					<h1 className={styles.contactTitle}>
						Let’s build something together.
					</h1>
					<p className={styles.heroLede}>
						Tell us about your organization and what you want to make.
					</p>
					<a
						href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
							"I'd love to work with y'all!"
						)}`}
						className={styles.buttonPrimary}
					>
						{CONTACT_EMAIL}
					</a>
				</section>
			</main>
		</Layout>
	);
}
