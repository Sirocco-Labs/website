import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const team = [
	{
		name: "Anniessa Antar",
		photo: "/team/anniessa.jpg",
		bio: "Anniessa Antar is a software engineer, educator, artist and culture worker. Currently, Anniessa teaches at MCAD, builds artist websites, writes music and directs films. She got her start in community radio at CKUT in Montréal and worked with Listen Up! Youth Radio.",
	},
	{
		name: "Zackaria Antar",
		photo: "/team/zackaria.jpg",
		bio: "Zackaria Antar is a software engineer and youth worker. Zackaria is currently an IT Specialist at US Bank Stadium, making music, and playing Magic the Gathering. He got his start in community radio at UMFM in Winnipeg, and helped develop KRSM youth radio afterschool programming and summer internships.",
	},
];

export default function Team() {
	return (
		<Layout
			title="Team — Sirocco Labs"
			description="Sirocco Labs is run by siblings Anniessa and Zackaria Antar."
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
								<p>{person.bio}</p>
							</article>
						))}
					</div>
				</section>
			</main>
		</Layout>
	);
}
