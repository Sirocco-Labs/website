export const work = [
	{
		slug: "ampers-mobile-app",
		title: "AMPERS Mobile App",
		summary: "A mobile app connecting Minnesotans to 17 community radio stations and AMPERS’ original programming.",
		client: "AMPERS · In progress",
		tags: ["iOS & Android app", "Admin portal", "Multilingual"],
		sections: [
			{
				heading: "The client",
				paragraphs: [
					"AMPERS, the Association of Minnesota Public Educational Radio Stations, is a collective of 17 independent community radio stations, each run by and for the local communities it serves. Four are in the Twin Cities and 13 are in Greater Minnesota, and four are licensed to or affiliated with Indigenous nations. Together they reach more than 300,000 listeners, with programming in 11 languages, from Tigrinya, Spanish and Somali to Amharic and Oromo.",
					"AMPERS also produces its own news, arts and culture programming, such as Minnesota Native News, North Star Stories and MN:90, that aims to correct narratives about historically underrepresented communities.",
				],
				figure: {
					layout: "phones",
					images: [
						{ video: "/work/ampers-home-scroll.mp4", src: "/work/ampers-home-scroll.jpg", alt: "Screen recording of the AMPERS app home screen: a featured story, then a carousel of member stations including WTIP and KFAI", width: 384, height: 804 },
					],
				},
			},
			{
				heading: "The challenge",
				paragraphs: [
					"AMPERS wanted one app that connects Minnesotans to its original programming, its 17 member stations, and arts, history and culture content for educational use. That means bringing together independent stations that each have their own identity, live stream and website, a deep archive of current and past programs, and listeners who speak many languages.",
				],
			},
			{
				heading: "Our approach",
				list: [
					{ lead: "A living home page.", text: "Rotating, AMPERS-curated content puts new programs and stories up front." },
					{ lead: "Member station profiles.", text: "Each of the 17 stations gets a profile with its live broadcast, a link to its own app or website, and featured original content." },
					{ lead: "A searchable program library.", text: "Every AMPERS-produced program, current and past, organized by category with up-to-date photos and details." },
					{ lead: "A hub for educators.", text: "Programs are organized to line up with AMPERS’ teacher curriculum, so content is ready to use in the classroom." },
					{ lead: "Tools for station staff.", text: "An admin portal lets AMPERS and member station staff manage the content on their own profiles." },
					{ lead: "Built for many languages.", text: "The app is translation-ready for AMPERS’ multilingual listeners, and the design follows AMPERS’ brand guidelines." },
				],
			},
			{
				heading: "Our process",
				paragraphs: [
					"The work is shaped by a listening session with AMPERS staff, member stations and community stakeholders, regular check-ins with AMPERS staff during the build, and a beta testing period with key stakeholders before launch.",
				],
			},
			{
				heading: "Technology",
				paragraphs: [
					"We're building the app with React Native and Expo, so one codebase serves both iOS and Android, and with i18next for translation. We plan to pull program data from the Public Radio Exchange (PRX) API, with a Supabase database as a fallback.",
				],
			},
			{
				heading: "Deliverables",
				paragraphs: [
					"An iOS and Android app, an admin portal for AMPERS and member station staff, a beta testing period, and ongoing maintenance after launch.",
				],
			},
			{
				heading: "Status",
				paragraphs: [
					"This project is in progress, with launch planned for 2027. The screens shown are early design direction and may change before launch.",
				],
			},
		],
		images: [{ src: "/work/ampers-home.png", alt: "AMPERS app home screen with a featured North Star Stories piece, a carousel of member stations, a language picker, and tabs for Home, Stations, Programs and Favorites", width: 706, height: 1384 }],
	},
	{
		slug: "safe-at-home",
		title: "Safe at Home",
		summary: "A website redesign for a domestic violence shelter.",
		client: "Client work (confidential) · In progress",
		tags: ["UX strategy", "Web design", "WordPress"],
		sections: [
			{
				heading: "The client",
				paragraphs: [
					"We're currently redesigning the website of a nonprofit that runs emergency shelter, a 24/7 crisis line, and legal and housing advocacy for people experiencing domestic abuse. Our agreement with the client keeps their identity private. Out of respect for them and the people they serve, we've replaced the organization's name, logo, contact details and photography in these screens with stand-ins.",
				],
				figure: {
					layout: "single",
					images: [
						{ src: "/work/safe-home.png", alt: "Homepage design with a pinned safety bar and Quick Exit button, “If you need help” and “If you want to help” panels, and four service cards", width: 1706, height: 1506 },
					],
				},
			},
			{
				heading: "The challenge",
				paragraphs: [
					"A shelter website has two very different audiences. One is someone in crisis, maybe reading on a shared phone, in a hurry, and afraid of being seen. The other is a donor, volunteer or community partner who wants to help. The client's current site puts both groups through the same crowded menu. Its safety tools are small links, and key information is spread across many pages.",
				],
			},
			{
				heading: "Our process",
				paragraphs: [
					"The engagement started with discovery and a community listening session, so the people closest to the work could shape the design from the start. One question guided every decision after that: what does someone in crisis need from this page in the next ten seconds?",
				],
			},
			{
				heading: "Design direction",
				list: [
					{ lead: "Safety comes first.", text: "A pinned safety bar keeps a high-contrast Quick Exit button, an Esc-key shortcut, the crisis line and a language picker on screen everywhere. On mobile, Call, Text and Exit sit in a bar at the bottom of the screen, where a thumb can reach them." },
					{ lead: "Two clear paths.", text: "The homepage opens by splitting into “If you need help” and “If you want to help,” so neither visitor has to hunt." },
					{ lead: "Choices, not menus.", text: "The new Find Help page asks “What do you need right now?” and gives four plain options, from “I'm not safe right now” to “I'm worried about someone.” Each one leads to a single next step." },
					{ lead: "Saying what happens next.", text: "A three-step “what happens when you reach out” section explains the first call before anyone makes it, so it feels less daunting." },
					{ lead: "Discreet by design.", text: "Guidance on browsing safely, chats that clear when closed, and reminders about shared devices are built into the experience rather than buried on a policy page." },
					{ lead: "A simpler structure.", text: "Navigation drops from seven items to five, organized around what visitors are trying to do." },
				],
			},
			{
				heading: "Visual language",
				paragraphs: [
					"We wanted the site to feel warm, calm and steady. It pairs deep plum and night tones with a soft linen background and sage panels. A single lamplight yellow is used only for safety actions, so the exit button is always the easiest thing to spot. Headlines are set in Fraunces, a warm serif. Body text is Atkinson Hyperlegible, a typeface the Braille Institute designed for readers with low vision.",
				],
			},
			{
				heading: "Built for everyone",
				paragraphs: [
					"The design meets WCAG AA contrast, every touch target is at least 44px, and the WordPress build uses semantic markup. It's built to work well with screen readers and keyboards. The plain-language copy is written to translate well into the community languages the organization serves.",
				],
			},
			{
				heading: "Status",
				paragraphs: [
					"This project is in progress, with launch planned for spring 2027. The screens shown are design direction and may change before launch.",
				],
			},
		],
		note: "Shown with identifying details removed to protect client confidentiality.",
		images: [
			{ src: "/work/safe-home.png", alt: "Safe at Home homepage design", width: 1706, height: 1506 },
		],
	},
	{
		slug: "bikemn-ride-tracker",
		title: "BikeMN Ride Tracker",
		summary: "A gamified mobile app for tracking miles ridden, with an admin portal for challenges and grant reporting.",
		client: "Bike MN",
		tags: ["iOS & Android app", "Gamified challenges", "Admin portal"],
		sections: [
			{
				heading: "Overview",
				paragraphs: [
					"Bike MN commissioned Sirocco Labs to develop a dynamic mobile application where users could track in real time how many miles they rode on their bikes.",
				],
				figure: {
					layout: "phones",
					images: [
						{ src: "/work/bikemn-events.png", alt: "BikeMN app screen listing rides and events", width: 516, height: 1119 },
						{ src: "/work/bikemn-stats.png", alt: "BikeMN app home screen showing ride stats and active challenge progress", width: 380, height: 776 },
						{ src: "/work/bikemn-menu.png", alt: "BikeMN app navigation menu", width: 380, height: 776 },
					],
				},
			},
			{
				heading: "Our approach",
				paragraphs: [
					"The app was gamified with BikeMN curated challenges wherein riders who completed challenges were entered into prize pools. BikeMN used this app as an interface to collect data for engagement and grant reporting purposes.",
					"In addition to the mobile app, Sirocco Labs built an admin web portal for BikeMN to create new challenges, as well as monitor and manage user data from the app.",
				],
			},
			{
				heading: "Deliverables",
				paragraphs: [
					"An iOS and Android app and an admin web portal for managing challenges and user data.",
				],
			},
		],
		images: [
			{ src: "/work/bikemn-events.png", alt: "BikeMN app screen listing rides and events", width: 516, height: 1119 },
		],
	},
	{
		slug: "quilt-of-beauty",
		title: "Quilt of Beauty",
		summary: "A collaborative digital quilt for a museum exhibition, built as an in-gallery progressive web app.",
		client: "Minnesota Marine Art Museum",
		tags: ["Progressive web app", "Admin portal", "Gallery installation"],
		sections: [
			{
				heading: "Overview",
				paragraphs: [
					"Quilt of Beauty was commissioned by the Minnesota Marine Art Museum as an exhibition activation in support of Kao Kalia Yang’s book The Most Beautiful Thing. Visitors were invited to draw a quilt square, take a picture, and it would automatically be added to the collective digital quilt displayed in the gallery.",
				],
				figure: {
					layout: "photos",
					images: [
						{ src: "/work/quilt-gallery.jpg", alt: "Anniessa and Zackaria standing beside the projected digital quilt in the museum gallery", width: 1200, height: 900 },
						{ src: "/work/quilt-station.jpg", alt: "The in-gallery station with instructions and an iPad for photographing quilt squares", width: 900, height: 1200 },
					],
				},
			},
			{
				heading: "Our approach",
				paragraphs: [
					"This app was built as a progressive web application (PWA) that would only be accessible within the museum to ensure security and quality control. We also built an administrative portal for museum staff to delete inappropriate photos.",
				],
			},
			{
				heading: "Deliverables",
				paragraphs: [
					"An in-gallery progressive web app and an admin portal for museum staff.",
				],
			},
		],
		images: [
			{ src: "/work/quilt-gallery.jpg", alt: "Anniessa and Zackaria standing beside the projected digital quilt in the museum gallery", width: 1200, height: 900 },
		],
	},
];
