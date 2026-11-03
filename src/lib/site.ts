import config from "../../site.config.mjs";

export const site = config;

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
