import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Roboto } from "next/font/google";
import { SITE_URL } from "../lib/site";
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
	const { pathname, asPath } = useRouter();
	const [menuOpen, setMenuOpen] = useState(false);
	const menuButton = useRef(null);
	const canonical = `${SITE_URL}${asPath === "/" ? "" : asPath.split(/[?#]/)[0]}`;

	// Close the mobile menu after navigating
	useEffect(() => {
		setMenuOpen(false);
	}, [asPath]);

	// Escape closes the menu and returns focus to the button
	useEffect(() => {
		if (!menuOpen) return;
		const onKey = (e) => {
			if (e.key === "Escape") {
				setMenuOpen(false);
				menuButton.current?.focus();
			}
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [menuOpen]);

	return (
		<div className={`${styles.page} ${roboto.className}`}>
			<Head>
				<title>{title}</title>
				{description && <meta name="description" content={description} />}
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" sizes="32x32" />
				<link rel="icon" href="/icon.png" type="image/png" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="canonical" href={canonical} />
				<meta property="og:site_name" content="Sirocco Labs" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				{description && <meta property="og:description" content={description} />}
				<meta property="og:url" content={canonical} />
				<meta property="og:image" content={`${SITE_URL}/Sirocco.png`} />
				<meta property="og:image:width" content="500" />
				<meta property="og:image:height" content="500" />
				<meta property="og:image:alt" content="Sirocco Labs logo" />
				<meta name="twitter:card" content="summary" />
			</Head>

			<a href="#main" className={styles.skipLink}>
				Skip to main content
			</a>

			<header className={styles.nav}>
				<Link href="/" className={styles.brand}>
					<Image src="/Sirocco.png" width={64} height={64} alt="" priority />
					<span>Sirocco Labs</span>
				</Link>

				<button
					ref={menuButton}
					type="button"
					className={styles.menuButton}
					aria-expanded={menuOpen}
					aria-controls="site-menu"
					onClick={() => setMenuOpen((open) => !open)}
				>
					<span className={styles.menuIcon} aria-hidden="true" data-open={menuOpen} />
					{menuOpen ? "Close" : "Menu"}
				</button>

				<nav
					id="site-menu"
					aria-label="Main"
					className={styles.navLinks}
					data-open={menuOpen}
				>
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

			<div id="main" tabIndex={-1} className={styles.mainTarget}>
				{children}
			</div>

			<footer className={styles.footer}>
				<span>© {new Date().getFullYear()} Sirocco, LLC · Minneapolis, MN</span>
				<Link href="/accessibility">Accessibility</Link>
			</footer>
		</div>
	);
}
