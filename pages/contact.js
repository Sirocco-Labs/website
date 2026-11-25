import Layout from "../components/Layout";
import { CONTACT_EMAIL } from "../lib/site";
import styles from "../styles/Home.module.css";

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
							"Project inquiry"
						)}`}
						className={styles.buttonPrimary}
					>
						{CONTACT_EMAIL}
					</a>
					<p className={styles.contactNote}>Sirocco, LLC · Minneapolis, Minnesota</p>
				</section>
			</main>
		</Layout>
	);
}
