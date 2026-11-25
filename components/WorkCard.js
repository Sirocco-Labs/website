import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function WorkCard({ project, headingLevel = "h2" }) {
	const Heading = headingLevel;
	const cover = project.images[0];
	return (
		<Link href={`/work/${project.slug}`} className={styles.workCard}>
			<div className={styles.workCover}>
				{cover ? (
					<Image src={cover.src} alt="" fill sizes="(max-width: 800px) 90vw, 30vw" />
				) : (
					<span aria-hidden="true">{project.title}</span>
				)}
			</div>
			<p className={styles.eyebrow}>{project.client}</p>
			<Heading>{project.title}</Heading>
			<p>{project.summary}</p>
			<span className={styles.workMore}>View project →</span>
		</Link>
	);
}
