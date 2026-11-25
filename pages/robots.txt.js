import { SITE_URL } from "../lib/site";

export function getServerSideProps({ res }) {
	res.setHeader("Content-Type", "text/plain");
	res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
	res.write(`User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
	res.end();
	return { props: {} };
}

export default function Robots() {
	return null;
}
