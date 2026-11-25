import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import WorkCard from "../components/WorkCard";
import { work } from "../data/work";
import styles from "../styles/Home.module.css";

const services = [
	{
		title: "Website redesigns",
		text: "Discovery, plain-language content and a clearer structure, built in WordPress or a custom stack your staff can update.",
	},
	{
		title: "Accessibility",
		text: "We design and build to WCAG 2.2 AA: keyboard and screen reader support, readable contrast and large touch targets.",
	},
	{
		title: "Mobile & web apps",
		text: "iOS and Android apps built with React Native and Expo, plus progressive web apps.",
	},
	{
		title: "Admin portals",
		text: "Tools that let your staff manage content, moderate submissions and pull engagement data for grant reports.",
	},
];

const hero = work[0].images[0];
const selected = work.slice(0, 3);

export default function Home() {
	return (
		<Layout
			title="Sirocco Labs — Minneapolis web studio"
			description="Sirocco Labs is a Minneapolis web studio that designs and builds accessible websites and apps for nonprofits, public agencies and mission-driven organizations."
		>
			<main>
				<section className={styles.hero}>
					<div className={styles.heroText}>
						<p className={styles.eyebrow}>Minneapolis web studio</p>
						<h1 className={styles.heroTitle}>
							Accessible websites and apps for the people you serve.
						</h1>
						<p className={styles.heroLede}>
							We design websites and build apps for nonprofits, public
							agencies and mission-driven organizations, so the people
							who need you can find what they need.
						</p>
						<div className={styles.heroActions}>
							<Link href="/work" className={styles.buttonPrimary}>
								See our work
							</Link>
							<Link href="/contact" className={styles.buttonGhost}>
								Start a project
							</Link>
						</div>
					</div>
					<Image
						src={hero.src}
						width={hero.width}
						height={hero.height}
						alt="Homepage design from our shelter website redesign, with a pinned safety bar and Quick Exit button"
						className={styles.heroShot}
						sizes="(max-width: 800px) 90vw, 45vw"
						priority
					/>
				</section>

				<section className={styles.section}>
					<div className={styles.sectionHead}>
						<h2 className={styles.sectionTitle}>Selected work</h2>
						<Link href="/work" className={styles.textLink}>
							See all work →
						</Link>
					</div>
					<ul className={styles.workGrid}>
						{selected.map((project) => (
							<li key={project.slug}>
								<WorkCard project={project} headingLevel="h3" />
							</li>
						))}
					</ul>
				</section>

				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>What we do</h2>
					<div className={styles.aboutGrid}>
						<p className={styles.aboutLead}>
							Sirocco Labs is a small team of designers and engineers in
							Minneapolis, founded by siblings Anniessa and Zackaria
							Antar.
						</p>
						<div className={styles.aboutBody}>
							<p>
								Every project starts with discovery and a listening
								session with the people closest to the work: your staff,
								your partners and the community you serve. What we hear
								there shapes the design from the start.
							</p>
							<p>
								We write in plain language and build translation-ready,
								so your site or app works for multilingual audiences.
							</p>
						</div>
					</div>

					<ul className={styles.services}>
						{services.map((s) => (
							<li key={s.title} className={styles.serviceCard}>
								<h3>{s.title}</h3>
								<p>{s.text}</p>
							</li>
						))}
					</ul>
				</section>
			</main>
		</Layout>
	);
}
