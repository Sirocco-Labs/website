import Layout from "../../components/Layout";
import WorkCard from "../../components/WorkCard";
import { work } from "../../data/work";
import styles from "../../styles/Home.module.css";

export default function Work() {
	return (
		<Layout
			title="Work — Sirocco Labs"
			description="Website redesigns, apps and installations Sirocco Labs has built for nonprofits, museums and organizations."
		>
			<main>
				<section className={styles.section}>
					<h1 className={styles.sectionTitle}>Our work</h1>
					<ul className={styles.workGrid}>
						{work.map((project) => (
							<li key={project.slug}>
								<WorkCard project={project} />
							</li>
						))}
					</ul>
				</section>
			</main>
		</Layout>
	);
}
