import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
	const { pathname, asPath } = useRouter();
	const [menuOpen, setMenuOpen] = useState(false);
	const menuButton = useRef(null);

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
				<link rel="icon" href="/favicon.ico" />
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
				<span>© {new Date().getFullYear()} Sirocco Labs</span>
				<span>Minneapolis, MN</span>
			</footer>
		</div>
	);
}
