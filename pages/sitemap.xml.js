import { work } from "../data/work";
import { SITE_URL } from "../lib/site";

const paths = ["/", "/work", "/team", "/contact", "/accessibility", ...work.map((p) => `/work/${p.slug}`)];

export function getServerSideProps({ res }) {
	const urls = paths.map((p) => `  <url><loc>${SITE_URL}${p === "/" ? "/" : p}</loc></url>`).join("\n");
	res.setHeader("Content-Type", "application/xml");
	res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
	res.write(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
	res.end();
	return { props: {} };
}

export default function Sitemap() {
	return null;
}
