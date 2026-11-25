import Layout from "../components/Layout";
import { CONTACT_EMAIL } from "../lib/site";
import styles from "../styles/Home.module.css";

export default function Accessibility() {
	return (
		<Layout
			title="Accessibility — Sirocco Labs"
			description="Sirocco Labs’ commitment to accessibility on this website and in the work we build for clients."
		>
			<main>
				<section className={`${styles.section} ${styles.prose}`}>
					<h1 className={styles.sectionTitle}>Accessibility statement</h1>
					<p>
						We want everyone to be able to use this website, and we hold
						it to the same standard we build to for clients: the Web
						Content Accessibility Guidelines (WCAG) 2.2, level AA.
					</p>

					<h2>What we’ve done</h2>
					<ul>
						<li>Every page can be used with a keyboard alone, and a “Skip to main content” link comes first.</li>
						<li>Pages use headings, landmarks and labels that screen readers can follow.</li>
						<li>Text and controls meet WCAG AA color contrast.</li>
						<li>Images have text alternatives, and decorative images are hidden from screen readers.</li>
						<li>Animation and smooth scrolling turn off if you’ve asked your device to reduce motion, and screen recordings can be paused.</li>
						<li>Layouts work on small screens and at 200% zoom without scrolling sideways.</li>
					</ul>

					<h2>How we test</h2>
					<p>
						We check every page with automated testing (axe-core) on
						desktop and mobile screen sizes, and test by hand with a
						keyboard. Automated tools don’t catch everything, so we
						keep reviewing as the site changes.
					</p>

					<h2>Tell us about a problem</h2>
					<p>
						If something on this site doesn’t work for you, email us at{" "}
						<a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Accessibility feedback")}`}>
							{CONTACT_EMAIL}
						</a>
						. Tell us the page and what happened, and we’ll get back to
						you and fix it.
					</p>

					<p className={styles.caseNote}>Last reviewed November 2026.</p>
				</section>
			</main>
		</Layout>
	);
}
