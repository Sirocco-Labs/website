// The site's public address, used for share previews, the sitemap and robots.txt.
// Set NEXT_PUBLIC_SITE_URL in Vercel once the custom domain is live.
export const SITE_URL = (
	process.env.NEXT_PUBLIC_SITE_URL || "https://website-red-alpha-61.vercel.app"
).replace(/\/$/, "");

export const CONTACT_EMAIL = "hello@siroccolabs.com";
