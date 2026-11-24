import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import { work } from "../../data/work";
import styles from "../../styles/Home.module.css";

export function getStaticPaths() {
  return {
    paths: work.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const index = work.findIndex((p) => p.slug === params.slug);
  const next = work[(index + 1) % work.length];
  return {
    props: {
      project: work[index],
      next: { slug: next.slug, title: next.title },
    },
  };
}

export default function WorkPage({ project, next }) {
  return (
    <Layout
      title={`${project.title} — Sirocco Labs`}
      description={project.summary}
    >
      <main className={styles.section}>
        <Link href="/work" className={styles.backLink}>
          ← All work
        </Link>

        <header className={styles.caseHeader}>
          <p className={styles.eyebrow}>{project.client}</p>
          <h1 className={styles.sectionTitle}>{project.title}</h1>
          <ul className={styles.tags}>
            {project.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </header>

        {project.sections.map((section, i) => (
          <section key={i} className={styles.caseSection}>
            {(section.heading || section.paragraphs || section.list) && (
              <div className={styles.caseBody}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs?.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {section.list && (
                  <ul className={styles.caseList}>
                    {section.list.map((item) => (
                      <li key={item.lead}>
                        <strong>{item.lead}</strong> {item.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            {section.figure && (
              <div className={styles[section.figure.layout]}>
                {section.figure.images.map((img) =>
                  img.video ? (
                    <video
                      key={img.video}
                      className={styles.phoneVideo}
                      src={img.video}
                      poster={img.src}
                      width={img.width}
                      height={img.height}
                      aria-label={img.alt}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <Image
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      sizes="(max-width: 800px) 90vw, 70vw"
                    />
                  ),
                )}
              </div>
            )}
          </section>
        ))}

        {project.note && <p className={styles.caseNote}>{project.note}</p>}

        <Link href={`/work/${next.slug}`} className={styles.nextProject}>
          <span className={styles.eyebrow}>Next project</span>
          <span>{next.title} →</span>
        </Link>
      </main>
    </Layout>
  );
}
