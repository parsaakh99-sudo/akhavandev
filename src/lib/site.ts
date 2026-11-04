import config from "../../site.config.mjs";

// The holiday sale, or null when it is off.
export const sale = config.holiday?.on ? config.holiday : null;

const money = (s: string) => Number(s.replace(/[^0-9.]/g, ""));
const format = (n: number) => `$${n.toLocaleString("en-US")}`;

// A package price with the sale taken off, rounded to the dollar: "$1,250" -> "$875".
export const salePrice = (amount: string) =>
  sale ? format(Math.round(money(amount) * (1 - sale.percent / 100))) : amount;

// While the sale is on, the Christmas colours replace the usual ones, and every
// "from $750" on the site reads the sale price instead.
const withSale = (c: typeof config) => {
  if (!sale) return c;
  const from = c.websites.from;
  const now = salePrice(from);
  const swap = (text: string) => text.split(from).join(now);
  const products = c.pages.products;
  return {
    ...c,
    theme: { ...c.theme, ...sale.theme },
    pages: { ...c.pages, products: { ...products, description: swap(products.description) } },
    websites: { ...c.websites, from: now, tagline: swap(c.websites.tagline) },
  };
};

export const site = withSale(config);

export const mailto = (subject = site.contact.subject) =>
  `mailto:${site.person.email}?subject=${encodeURIComponent(subject)}`;

export const absoluteUrl = (path = "/") => new URL(path, site.siteUrl).toString();

export const personJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.person.brand,
  url: site.siteUrl,
  founder: { "@type": "Person", name: site.person.name, jobTitle: site.person.role },
  areaServed: site.person.area,
  email: site.person.email,
  description: site.meta.description,
});

// A Buy button goes to its Stripe Payment Link, or, while none is set, opens an email to order.
export const buyUrl = (stripe: string, name: string) => stripe || mailto(`Buy: ${name}`);

export const tel = () => `tel:${site.person.phoneDial}`;
export const sms = () => `sms:${site.person.phoneDial}`;

// Every product, in one shape, for the collage and the product pages.
// Order is the collage's: the big tile and the tall one share the top rows, the two wide ones sit under them.
export const allProducts = () => {
  const [buddy, receptionist] = site.products.map((p) => ({ ...p, href: `/products/${p.slug}` }));
  return [
    buddy,
    { ...site.websites, id: "websites", tile: "tall", href: `/products/${site.websites.slug}` },
    receptionist,
    { ...site.scenewise, id: "scenewise", tile: "wide", href: `/products/${site.scenewise.slug}` },
  ];
};
