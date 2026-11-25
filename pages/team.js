import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const team = [
	{
		name: "Anniessa Antar",
		role: "Co-founder",
		photo: "/team/anniessa.jpg",
		bio: [
			"Anniessa Antar is a creative technologist and frontend engineer who leads UX design and accessibility at Sirocco Labs. She builds websites and apps that bring people together and designs and tests them to meet WCAG 2.2 AA. She works with arts organizations, nonprofits, cultural institutions, and independent artists to make digital spaces that are accessible, fast, and welcoming, designed around the communities they serve.",
			"Her process is collaborative and hands-on: she prototypes quickly, refines carefully, and brings deep experience co-designing with diverse stakeholders. Alongside her client work, Anniessa teaches in the MFA program at the Minneapolis College of Art and Design, writes music, and directs films.",
		],
	},
	{
		name: "Zackaria Antar",
		role: "Co-founder",
		photo: "/team/zackaria.jpg",
		// Wide photo: keep him in frame, he stands right of center
		focus: "90% center",
		bio: [
			"Zackaria Antar is a Minneapolis-based full-stack engineer with a back-end focus who builds secure, reliable systems that serve communities. He builds the behind-the-scenes engines that power websites and apps: the databases, servers, and cloud infrastructure that keep everything running smoothly. With a background in cybersecurity, he makes sure the digital tools people rely on are accessible, protect their information, and grow with their needs.",
			"He is currently a Network Administrator at US Bank Stadium and enjoys playing music, playing tabletop games, and roller skating.",
		],
	},
	{
		name: "Olivia Webster",
		role: "Contributing engineer",
		photo: "/team/olivia.jpg",
		bio: [
			"Olivia Webster is a Minneapolis-based full-stack engineer with a front-end focus, a UX designer, and a firm believer that the web should be accessible. She brings accessibility into the process from the first Figma wireframe, creating sites that work well with a keyboard, a screen reader, an old phone, and on any browser.",
			"She has a passion for green-fielding front ends and building websites and applications with intuitive architecture, clean code, and comprehensive tests. A former theater kid, she loves the great outdoors, a good research rabbit hole, and indulging in the many culinary delights the Twin Cities has to offer.",
		],
	},
	{
		name: "Joel Schuman",
		role: "Contributing engineer",
		photo: "/team/joel.jpg",
		bio: [
			"Joel Schuman is a full-stack engineer with 10+ years of experience shipping reliable software in large, legacy, and greenfield codebases. He has maintained and extended live production systems, from a crypto exchange to the engine behind Magic: The Gathering Online.",
			"He has also tutored coding skills extensively, built interactive experiences with arts organizations, and led web development workshops. In his free time, he's usually playing piano or mandolin.",
		],
	},
];

export default function Team() {
	return (
		<Layout
			title="Team — Sirocco Labs"
			description="Sirocco Labs is run by co-founders Anniessa and Zackaria Antar, with contributing engineers Olivia Webster and Joel Schuman."
		>
			<main className={styles.fill}>
				<section className={`${styles.section} ${styles.dark}`}>
					<h1 className={styles.sectionTitle}>About the team</h1>
					<div className={styles.teamGrid}>
						{team.map((person) => (
							<article key={person.name} className={styles.person}>
								<div className={styles.portrait}>
									<Image
										src={person.photo}
										alt={`Portrait of ${person.name}`}
										fill
										sizes="(max-width: 800px) 90vw, 440px"
										style={person.focus ? { objectPosition: person.focus } : undefined}
									/>
								</div>
								<h2>{person.name}</h2>
								<p className={styles.role}>{person.role}</p>
								{person.bio.map((p, i) => (
									<p key={i}>{p}</p>
								))}
							</article>
						))}
					</div>
				</section>
			</main>
		</Layout>
	);
}
