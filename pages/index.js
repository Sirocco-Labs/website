import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const services = [
	{
		title: "Mobile apps",
		text: "Cross-platform apps for iOS and Android, built with React Native and Expo.",
	},
	{
		title: "Web apps & PWAs",
		text: "Websites and progressive web apps, from artist portfolios to in-gallery installations.",
	},
	{
		title: "Admin portals",
		text: "Tools that let your staff manage content, moderate submissions and track engagement data.",
	},
	{
		title: "Multilingual design",
		text: "Translation-ready apps that respond to diverse, multilingual audiences.",
	},
];

export default function Home() {
	return (
		<Layout
			title="Sirocco Labs — Minneapolis web studio"
			description="Sirocco Labs is a Minneapolis-based web studio run by siblings Anniessa and Zackaria Antar, building apps and websites for mission-driven nonprofits, organizations and entrepreneurs."
		>
			<main>
				<section className={styles.hero}>
					<div className={styles.heroText}>
						<p className={styles.eyebrow}>Minneapolis web studio</p>
						<h1 className={styles.heroTitle}>
							Digital experiences as creative as they are intuitive.
						</h1>
						<p className={styles.heroLede}>
							We help mission-driven nonprofits, organizations and
							entrepreneurs connect with their audiences and share
							resources.
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
						src="/Sirocco.png"
						width={420}
						height={420}
						alt="Sirocco Labs logo"
						className={styles.heroLogo}
						priority
					/>
				</section>

				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Company overview</h2>
					<div className={styles.aboutGrid}>
						<p className={styles.aboutLead}>
							Sirocco Labs is a Minneapolis-based web studio run by
							siblings Anniessa and Zackaria Antar.
						</p>
						<div className={styles.aboutBody}>
							<p>
								Our goal is to support mission-driven nonprofits,
								organizations and entrepreneurs to connect with their
								audiences, share resources and create digital
								experiences that are as creative as they are
								intuitive.
							</p>
							<p>
								We believe in the power of community, and we build
								tools that help foster lasting connection to each
								other and to our world.
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
