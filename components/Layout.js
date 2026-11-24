import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Roboto } from "next/font/google";
import styles from "../styles/Home.module.css";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700", "900"],
});

const links = [
	{ href: "/work", label: "Work" },
	{ href: "/team", label: "Team" },
	{ href: "/contact", label: "Contact", cta: true },
];

export default function Layout({ title, description, children }) {
	const { pathname } = useRouter();

	return (
		<div className={`${styles.page} ${roboto.className}`}>
			<Head>
				<title>{title}</title>
				{description && <meta name="description" content={description} />}
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className={styles.nav}>
				<Link href="/" className={styles.brand}>
					<Image src="/Sirocco.png" width={64} height={64} alt="" priority />
					<span>Sirocco Labs</span>
				</Link>
				<nav className={styles.navLinks}>
					{links.map(({ href, label, cta }) => {
						const current =
							pathname === href || pathname.startsWith(`${href}/`);
						return (
							<Link
								key={href}
								href={href}
								aria-current={current ? "page" : undefined}
								className={cta ? styles.navCta : undefined}
							>
								{label}
							</Link>
						);
					})}
				</nav>
			</header>

			{children}

			<footer className={styles.footer}>
				<span>© {new Date().getFullYear()} Sirocco Labs</span>
				<span>Minneapolis, MN</span>
			</footer>
		</div>
	);
}
