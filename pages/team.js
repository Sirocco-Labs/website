import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const team = [
	{
		name: "Anniessa Antar",
		role: "Co-founder",
		photo: "/team/anniessa.jpg",
		bio: [
			"Anniessa Antar is a creative technologist and frontend engineer who builds websites and apps that bring people together. She works with arts organizations, nonprofits, cultural institutions, and independent artists to make digital spaces that are accessible, fast, and welcoming, designed around the communities they serve.",
			"Her process is collaborative and hands-on: she prototypes quickly, refines carefully, and brings deep experience co-designing with diverse stakeholders. Alongside her client work, Anniessa teaches in the MFA program at the Minneapolis College of Art and Design, writes music, and directs films.",
		],
	},
	{
		name: "Zackaria Antar",
		role: "Co-founder",
		photo: "/team/zackaria.jpg",
		bio: ["Zackaria Antar is a software engineer and youth worker. Zackaria is currently an IT Specialist at US Bank Stadium, making music, and playing Magic the Gathering."],
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
];

export default function Team() {
	return (
		<Layout
			title="Team — Sirocco Labs"
			description="Sirocco Labs is run by co-founders Anniessa and Zackaria Antar, with contributing engineer Olivia."
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
										sizes="(max-width: 800px) 90vw, 40vw"
									/>
								</div>
								<h3>{person.name}</h3>
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
