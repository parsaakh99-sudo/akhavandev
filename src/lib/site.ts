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
