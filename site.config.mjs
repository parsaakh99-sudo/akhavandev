// Everything the page says lives here. Change a line, rebuild, done.

export default {
  siteUrl: "https://akhavandev.com",

  person: {
    name: "Parsa Akhavan",
    brand: "Akhavan Developers",
    role: "Web developer",
    area: "Dallas–Fort Worth, Texas",
    email: "parsa@akhavandev.com",
  },

  meta: {
    title: "Akhavan Developers · Websites for local businesses in Dallas–Fort Worth",
    description:
      "Akhavan Developers: Parsa Akhavan designs and builds fast, hand-coded websites for salons, contractors and service businesses in Dallas–Fort Worth. You own everything at the end.",
  },

  hero: {
    eyebrow: "Web developer · Dallas–Fort Worth",
    // The last word of the title is lit in the accent colour.
    title: "Websites that get you booked.",
    lead:
      "I design and build fast, hand-coded sites for salons, contractors and service businesses. Before you pay anything, I make you a sample homepage. When it launches, the site, the code and the domain are all in your name.",
    cta: "Start a project",
    secondary: "See the work",
  },

  // show: false keeps a project off the page until the client agrees to be shown.
  work: [
    {
      show: true,
      name: "Tracy’s Lash and Nails Spa",
      place: "Plano, TX",
      kind: "Nail and lash salon",
      year: "2026",
      summary:
        "A one-page site with all 64 services and prices matching the salon’s Vagaro menu, online booking, the salon’s own work from Instagram, and live open-now hours.",
      tags: ["Astro", "Booking integration", "Local SEO"],
      image: "tracys-desktop",
      imageMobile: "tracys-mobile",
      url: "", // add the address once the site is live
    },
    {
      show: false,
      name: "Tricon Roofing & Construction",
      place: "Plano, TX",
      kind: "Roofing contractor",
      year: "2026",
      summary: "An editorial site for a slate, tile and metal roofer, with service-area pages and an assessment request form.",
      tags: ["Next.js", "Forms", "Service-area pages"],
      image: "",
      imageMobile: "",
      url: "",
    },
    {
      show: false,
      name: "Lightning Mounting Services",
      place: "Dallas, TX",
      kind: "TV mounting",
      year: "2026",
      summary: "A call-first homepage built from the business’s Google reviews, with a tap-to-call and text dock on phones.",
      tags: ["Astro", "Mobile-first"],
      image: "",
      imageMobile: "",
      url: "",
    },
  ],

  // Products people can buy. Each `stripe` is a Stripe Payment Link (https://buy.stripe.com/...).
  // While a link is empty, its button opens an email to you instead, so nothing is ever broken.
  products: [
    {
      id: "study-buddy",
      name: "Study Buddy",
      kind: "Mac app",
      tagline: "A study sidebar that reads the question on your screen.",
      body: "Press ⌥⌘A in any app or website and Study Buddy looks at the question on your screen and explains the answer in a floating sidebar. Paste a question or a picture instead, or ask it to explain again.",
      features: ["Works over every app and site", "Answer, explain, or paste a question", "Fast or most-accurate mode"],
      note: "For macOS 14 or later. Uses your own Claude subscription.",
      prices: [{ label: "One-time", amount: "$19", per: "", cta: "Buy Study Buddy", stripe: "" }],
    },
    {
      id: "ai-receptionist",
      name: "AI Receptionist",
      kind: "For businesses",
      tagline: "An AI that answers your business phone.",
      body: "It talks with callers, books, moves and cancels appointments, answers questions from your business’s own facts, takes messages, texts confirmations, and hands the call to a person when needed.",
      features: ["Books into your calendar", "Never makes up prices or policies", "Set up for salons, restaurants, dental, home services and more"],
      note: "Setup builds your business profile and phone line. The monthly plan keeps it running.",
      prices: [
        { label: "Setup", amount: "$299", per: "one-time", cta: "Pay setup", stripe: "" },
        { label: "Monthly", amount: "$99", per: "/ month", cta: "Start monthly", stripe: "" },
      ],
    },
  ],

  // Website packages, sold as products.
  websites: {
    title: "Website packages",
    body: "Hand-coded, fast on phones, and yours to keep: the code, hosting and domain are in your name.",
    tiers: [
      {
        name: "Starter",
        amount: "$600",
        summary: "A one-page site that says what you do and gets people to call or book.",
        features: ["One page, built for phones first", "Tap-to-call and contact links", "Google-ready business details", "Launch on your domain"],
        cta: "Buy Starter",
        stripe: "",
      },
      {
        name: "Business",
        amount: "$800",
        featured: true,
        summary: "A full site for a business with several services to show.",
        features: ["Up to 5 pages", "Services and prices", "Photo gallery and reviews", "Everything in Starter"],
        cta: "Buy Business",
        stripe: "",
      },
      {
        name: "Pro",
        amount: "$1,000",
        summary: "The full site with online booking connected and tested.",
        features: ["Up to 8 pages", "Online booking connected", "Google Business Profile hookup", "Everything in Business"],
        cta: "Buy Pro",
        stripe: "",
      },
    ],
  },

  // Scenewise, advertised on its own band. Prices from scenewise.net/#pricing (read 3 November 2026).
  scenewise: {
    url: "https://scenewise.net",
    eyebrow: "Also by Akhavan Developers",
    title: "Make AI videos for Shorts, TikTok, Reels and ads.",
    body: "Scenewise turns a quick idea into a post in minutes. Every plan includes all 5 models, any video length, 1080p with no watermark, Book Studio, Kids Studio and the Creator Guide. Cancel any time.",
    tools: ["Video Generator", "Shorts Studio", "Marketing Studio", "Kids Studio", "Book Studio", "Avatars"],
    plans: [
      { name: "Starter", monthly: 19, annual: 15, credits: "1,200 credits a month", extras: ["1080p, no watermark"] },
      { name: "Pro", monthly: 39, annual: 32, credits: "2,800 credits a month", extras: ["3 videos at once"], featured: true },
      { name: "Creator", monthly: 99, annual: 82, credits: "7,500 credits a month", extras: ["4K output", "Priority queue", "5 videos at once"] },
      { name: "Studio", monthly: 199, annual: 165, credits: "16,000 credits a month", extras: ["4K output", "Priority queue", "8 videos at once"] },
    ],
    cta: "Try Scenewise",
  },

  services: [
    {
      title: "A new website",
      body: "Designed around your business, not a template. Written so customers know what you do, what it costs and how to book in the first few seconds.",
    },
    {
      title: "A redesign",
      body: "Your current site, rebuilt to load fast on phones, read clearly and keep the Google ranking you already have.",
    },
    {
      title: "Booking and contact",
      body: "Your booking system, tap-to-call, text and contact forms connected and tested, so a visit turns into an appointment.",
    },
    {
      title: "Showing up on Google",
      body: "Search-friendly pages, business details Google can read, and a site that links up with your Google Business Profile.",
    },
  ],

  // Words that scroll across the band under the hero.
  marquee: ["Hand-coded", "Fast on phones", "Booking built in", "Found on Google", "You own it all", "Free sample first"],

  promises: [
    "Hand-coded, so pages load fast",
    "Built for phones first",
    "Readable for everyone, including screen readers",
    "You own the code, hosting and domain",
  ],

  process: [
    { title: "A short call", body: "We talk about your business, your customers and what the site has to do." },
    { title: "A free sample", body: "I build a sample homepage with your real details. You decide if you want the rest." },
    { title: "The build", body: "The full site, with your photos, services and booking. You review it before anything goes live." },
    { title: "Launch and handoff", body: "The site goes live on your domain, and everything moves into your accounts, with a plain-English guide." },
  ],

  contact: {
    title: "Have a business that needs a better website?",
    body: "Tell me what you do and where you are. I’ll reply within a day.",
    cta: "Email me",
    subject: "New website",
  },

  // Brand colours from the Akhavan Developers logo: navy #0F1B2D, amber #F5A524.
  theme: {
    bg: "#0A1220",
    surface: "#111C2E",
    raised: "#16233A",
    ink: "#F5F7FA",
    muted: "#94A3B8",
    accent: "#F5A524",
    accentInk: "#0F1B2D",
    font: '"Archivo Variable", "Archivo Fallback", system-ui, sans-serif',
  },
};
