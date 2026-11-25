import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import { work } from "../../data/work";
import styles from "../../styles/Home.module.css";

export default function Work() {
	return (
		<Layout
			title="Work — Sirocco Labs"
			description="Apps, websites and installations Sirocco Labs has built for nonprofits, museums and organizations."
		>
			<main>
				<section className={styles.section}>
					<h1 className={styles.sectionTitle}>Our work</h1>
					<ul className={styles.workGrid}>
						{work.map((project) => {
							const cover = project.images[0];
							return (
								<li key={project.slug}>
									<Link href={`/work/${project.slug}`} className={styles.workCard}>
										<div className={styles.workCover}>
											{cover ? (
												<Image
													src={cover.src}
													alt=""
													fill
													sizes="(max-width: 800px) 90vw, 30vw"
												/>
											) : (
												<span aria-hidden="true">{project.title}</span>
											)}
										</div>
										<p className={styles.eyebrow}>{project.client}</p>
										<h2>{project.title}</h2>
										<p>{project.summary}</p>
										<span className={styles.workMore}>View project →</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</section>
			</main>
		</Layout>
	);
}
