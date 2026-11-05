// Everything the page says lives here. Change a line, rebuild, done.

export default {
  siteUrl: "https://akhavandev.com",

  person: {
    name: "Parsa Akhavan",
    brand: "Akhavan Developers",
    role: "Web developer",
    area: "Dallas–Fort Worth, Texas",
    email: "parsa@akhavandev.com",
    phoneDisplay: "(945) 545-3785",
    phoneDial: "+19455453785",
  },

  meta: {
    title: "Akhavan Developers · Websites for local businesses in Dallas–Fort Worth",
    description:
      "Akhavan Developers: Parsa Akhavan designs and builds fast, hand-coded websites for salons, contractors and service businesses in Dallas–Fort Worth. You own everything at the end.",
  },

  // One entry per page in the menu. `hero` is the top of that page; `teaser` is its block on the home page.
  pages: {
    work: {
      path: "/work",
      label: "Work",
      title: "Work · Akhavan Developers",
      description: "Websites Akhavan Developers has built for local businesses in Dallas–Fort Worth.",
      hero: { eyebrow: "Work", title: "Sites built for real businesses.", lead: "Every site is hand-coded around the business it’s for: what it sells, how its customers book, and what they need to see first." },
      teaser: { eyebrow: "Recent work", title: "Selected builds", lead: "Client sites appear here once each client is happy to be shown.", cta: "See all work" },
    },
    products: {
      path: "/products",
      label: "Products",
      title: "Products · Akhavan Developers",
      description: "Study Buddy, the AI Receptionist, a $750 website package, and Scenewise. Pay securely with Stripe.",
      hero: { eyebrow: "Products", title: "Things you can buy today.", lead: "Apps, tools and website packages, built by me. Pick one to see what it does, what it costs, and buy it securely with Stripe." },
      teaser: { eyebrow: "Products", title: "Things you can buy today", lead: "Apps, tools and websites. Checkout takes a minute.", cta: "See all products" },
    },
    services: {
      path: "/services",
      label: "Services",
      title: "Services · Akhavan Developers",
      description: "New websites, redesigns, booking and contact, and showing up on Google, for local businesses.",
      hero: { eyebrow: "Services", title: "What I can build for you.", lead: "Websites that load fast on phones, say clearly what you do, and turn a visit into a booking." },
      teaser: { eyebrow: "Services", title: "What I can build for you", lead: "From a first site to a full redesign with booking built in.", cta: "See all services" },
    },
    process: {
      path: "/process",
      label: "Process",
      title: "Process · Akhavan Developers",
      description: "How a website with Akhavan Developers works: a short call, a free sample, the build, then launch and handoff.",
      hero: { eyebrow: "Process", title: "How it works.", lead: "Four steps from a first call to a live site, and you see a real sample before you pay for anything." },
      teaser: { eyebrow: "Process", title: "How it works", lead: "Four steps, and a free sample before you pay.", cta: "See the process" },
    },
    contact: {
      path: "/contact",
      label: "Contact",
      title: "Contact · Akhavan Developers",
      description: "Start a website project with Akhavan Developers. Call or text (945) 545-3785, or email parsa@akhavandev.com.",
      hero: { eyebrow: "Contact", title: "Let’s build your site.", lead: "Call, text or email. Tell me what you do and where you are, and I’ll get back to you within a day." },
    },
  },

  // What a message should include, shown on the contact page.
  contactTips: ["Your business name and what you do", "Where you are, and who your customers are", "Your current website, if you have one", "Anything you already know you want"],

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
  // Shown where client projects go, while none are public yet.
  nextProject: {
    image: "work-next",
    alt: "A laptop and a phone on a dark desk at dusk, both showing a clean small-business website",
    kicker: "Open spot · Dallas–Fort Worth · 2026",
    title: "Your business could be next.",
    body: "I’m taking on new client sites now. You get a free sample homepage before you pay anything, and the finished site, code and domain are yours.",
    cta: "Start a project",
  },

  work: [
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
      slug: "study-buddy",
      tile: "big",
      fit: "contain", // a screenshot: shown whole above the words, never cropped
      image: "studybuddy-desktop",
      imageMobile: "",
      from: "$1.99",
      name: "Study Buddy",
      kind: "Mac & Windows app",
      tagline: "A study sidebar that reads the question on your screen.",
      body: "Press ⌥⌘A on a Mac or Ctrl+Alt+A on Windows, in any app or website, and Study Buddy looks at the question on your screen and explains the answer in a floating sidebar. Paste a question or a picture instead, or ask it to explain again. You link the AI you want, with your own key, and Gemini works with a free one.",
      features: ["For Mac and Windows, over every app and site", "Link any AI: Gemini (free), Claude, ChatGPT and more", "Answer, explain, or paste a question"],
      note: "For macOS 14 or later, or Windows 10 and 11. One key works on one computer at a time. You link your own AI, so there are no AI fees from us.",
      // Lemon Squeezy sends the license key and the download, so these are Lemon Squeezy checkout links.
      // While a link is empty, its button opens an email to you instead.
      checkout: "Lemon Squeezy",
      pricingTitle: "Pick a plan",
      prices: [
        { label: "Daily", amount: "$1.99", per: "/ day", cta: "Get a day", stripe: "" },
        { label: "Weekly", amount: "$3.99", per: "/ week", cta: "Get a week", stripe: "" },
        { label: "Monthly", amount: "$7.99", per: "/ month", cta: "Get a month", stripe: "", featured: true },
        { label: "Yearly", amount: "$39.99", per: "/ year", cta: "Get a year", stripe: "" },
        { label: "Lifetime", amount: "$59.99", per: "once", cta: "Get it for life", stripe: "" },
      ],
      // Shown under the prices on its page.
      steps: [
        { title: "Pick a plan", body: "Your license key and download link arrive by email right after checkout." },
        { title: "Install it", body: "Mac: open StudyBuddy.dmg, drag Study Buddy into Applications, and the first time click Open Anyway in System Settings → Privacy & Security. Windows: run StudyBuddySetup.exe, and if a blue SmartScreen box appears, click More info → Run anyway." },
        { title: "Enter your key", body: "Study Buddy asks for your license key once. Daily to yearly plans renew until you cancel; Lifetime never expires." },
        { title: "Link your AI", body: "Click the gear and pick an AI. Gemini is free with a key from Google AI Studio; Claude, ChatGPT, Grok and others work too." },
      ],
    },
    {
      id: "ai-receptionist",
      slug: "ai-receptionist",
      tile: "wide",
      image: "receptionist-desktop",
      imageMobile: "receptionist-mobile",
      from: "$99/mo",
      name: "AI Receptionist",
      kind: "For businesses",
      tagline: "An AI that answers your business phone.",
      body: "It talks with callers, books, moves and cancels appointments, answers questions from your business’s own facts, takes messages, texts confirmations, and hands the call to a person when needed.",
      features: ["Books into your calendar", "Never makes up prices or policies", "Set up for salons, restaurants, dental, home services and more"],
      note: "Setup builds your business profile and phone line. The monthly plan keeps it running.",
      prices: [
        { label: "Setup", amount: "$299", per: "one-time", cta: "Pay setup", stripe: "https://buy.stripe.com/00waEY2A84hRbsS8T6aAw01" },
        { label: "Monthly", amount: "$99", per: "/ month", cta: "Start monthly", stripe: "https://buy.stripe.com/00w9AU0s0bKj8gGedqaAw02" },
      ],
    },
  ],

  // What the thank-you page (/thanks?p=<id>) tells a buyer right after Stripe checkout.
  afterPurchase: {
    default: {
      title: "What happens next",
      steps: ["Your receipt is in your inbox from Stripe.", "I’ll email you within one business day to get started.", "Reply to that email with any questions, any time."],
    },
    "study-buddy": {
      title: "Your copy of Study Buddy",
      steps: [
        "Your license key and download link are in your email from Lemon Squeezy, and on your order page.",
        "Mac: open StudyBuddy.dmg, drag Study Buddy into Applications, then open it. The first time, click Open Anyway in System Settings → Privacy & Security.",
        "Windows: run StudyBuddySetup.exe. If a blue SmartScreen box appears, click More info → Run anyway. Study Buddy opens on the right of your screen.",
        "Enter your license key, click the gear and link your AI. Gemini works with a free key from Google AI Studio.",
        "Press ⌥⌘A (Mac) or Ctrl+Alt+A (Windows) in any app to answer the question on screen.",
      ],
    },
    "ai-receptionist": {
      title: "Setting up your AI Receptionist",
      steps: [
        "I’ll email you within one business day to book a 20-minute setup call.",
        "Have your hours, services, prices and common questions handy; that’s what it answers from.",
        "Your receptionist is usually live on its own phone number within a week.",
      ],
    },
    care: {
      title: "Your care plan is on",
      steps: [
        "Your receipt is in your inbox from Stripe, and it renews monthly until you cancel.",
        "Email me any edits you need; small changes are done within two business days.",
        "I’ll check your site, hosting and booking links every month.",
      ],
    },
    website: {
      title: "Starting your website",
      steps: [
        "I’ll email you within one business day to schedule a short kickoff call.",
        "Gather your logo, photos, services and prices; I’ll send a checklist.",
        "You’ll see the first version of your homepage within a week.",
      ],
    },
  },

  // Website packages, sold as products.
  websites: {
    slug: "websites",
    kind: "For businesses",
    name: "Website packages",
    tagline: "A hand-coded site for your business, for $750.",
    image: "website-packages",
    imageMobile: "",
    photo: true, // a photograph, shown as it is rather than inside a browser window
    from: "$750",
    title: "Website packages",
    // Shown with the pricing. Raise the prices once the first 5 clients have signed.
    founding: "Founding-client prices for my first 5 clients.",
    // The current offer, shown above the packages and on each tier's second button.
    deal: {
      badge: "Second site 30% off",
      title: "Two sites? The second is 30% off.",
      body: "Need two websites? The second one is 30% off. Great for a second location, a sister business, or a friend’s shop.",
    },
    body: "Hand-coded, fast on phones, and yours to keep: the code, hosting and domain are in your name.",
    tiers: [
      {
        name: "Starter",
        amount: "$750",
        featured: true,
        summary: "A one-page site that says what you do and gets people to call or book.",
        features: ["One page, built for phones first", "Tap-to-call and contact links", "Google-ready business details", "Launch on your domain"],
        cta: "Buy Starter",
        stripe: "https://buy.stripe.com/6oU7sMb6EdSreF43yMaAw09",
        // Two sites of this package, the second 30% off. Stripe Payment Link for the bundle.
        pair: { amount: "$1,275", was: "$1,500", stripe: "https://buy.stripe.com/fZu8wQb6EeWv7cC1qEaAw0c" },
      },
    ],
    // Optional monthly care, for any package. A Stripe subscription.
    care: {
      eyebrow: "Optional add-on",
      name: "Care plan",
      amount: "$49",
      per: "/mo",
      summary: "Keep your site fast and up to date without thinking about it. Cancel any time.",
      features: ["Hosting and uptime checks", "Small text and photo edits", "Booking and contact links kept working"],
      cta: "Add the care plan",
      stripe: "https://buy.stripe.com/3cIdRa5Mk6pZ1Si4CQaAw0f",
    },
  },

  // Scenewise, advertised on its own band. Prices from scenewise.net/#pricing (read 3 November 2026).
  scenewise: {
    slug: "scenewise",
    kind: "AI video app",
    name: "Scenewise",
    tagline: "AI videos, kids’ episodes and books, from an idea.",
    image: "scenewise-desktop",
    imageMobile: "scenewise-mobile",
    from: "$15/mo",
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
      image: "service-new-website",
      body: "Designed around your business, not a template. Written so customers know what you do, what it costs and how to book in the first few seconds.",
    },
    {
      title: "A redesign",
      image: "service-redesign",
      body: "Your current site, rebuilt to load fast on phones, read clearly and keep the Google ranking you already have.",
    },
    {
      title: "Booking and contact",
      image: "service-booking",
      body: "Your booking system, tap-to-call, text and contact forms connected and tested, so a visit turns into an appointment.",
    },
    {
      title: "Showing up on Google",
      image: "service-google",
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
    { title: "A short call", image: "process-call", body: "We talk about your business, your customers and what the site has to do." },
    { title: "A free sample", image: "process-sample", body: "I build a sample homepage with your real details. You decide if you want the rest." },
    { title: "The build", image: "process-build", body: "The full site, with your photos, services and booking. You review it before anything goes live." },
    { title: "Launch and handoff", image: "process-launch", body: "The site goes live on your domain, and everything moves into your accounts, with a plain-English guide." },
  ],

  contact: {
    title: "Have a business that needs a better website?",
    body: "Tell me what you do and where you are. I’ll reply within a day.",
    cta: "Start a project",
    subject: "New website",
  },

  // Brand colours from the Akhavan Developers logo: navy #0F1B2D, amber #F5A524.
  // Christmas sale. Set on: false after it ends and the site goes back to normal.
  // While it is on: every website package shows 30% off, the colours turn Christmas, and snow falls.
  // Checkout: each Buy button uses the tier's saleStripe link if set; otherwise buyers enter the code
  // at Stripe checkout. Create the coupon in Stripe (30% off, code XMAS30) and tick
  // "Allow promotion codes" on each package's Payment Link, or the button charges full price.
  holiday: {
    on: true,
    name: "Christmas sale",
    percent: 30,
    ends: "December 26",
    code: "XMAS30",
    snow: true,
    // Colour changes for the sale only; empty keeps the site's own palette.
    theme: {},
  },

  // Clean & bright: cool white paper, near-black ink, one cobalt.
  // Contrast: ink on bg 18:1, muted on bg 5.6:1, cobalt on white 6.6:1, white on cobalt 6.6:1.
  theme: {
    bg: "#F7F8FB",
    surface: "#FFFFFF",
    raised: "#EEF1F6",
    ink: "#0E1116",
    muted: "#545D6B",
    accent: "#1F4BFF",
    accentInk: "#FFFFFF",
    font: '"Archivo Variable", "Archivo Fallback", system-ui, sans-serif',
  },
};
