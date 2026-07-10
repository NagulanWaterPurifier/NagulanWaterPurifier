// app/sitemap.js
// Auto-generates sitemap.xml including every static page plus every
// service x city and city landing page. New entries in data/services.js or
// data/cities.js are picked up automatically on next build.

import { business } from "@/data/business";
import { services } from "@/data/services";
import { cities } from "@/data/cities";

export default function sitemap() {
  const base = business.website;
  const now = new Date();

  const staticRoutes = [
    { url: `${base}/`, priority: 1.0 },
    { url: `${base}/about`, priority: 0.7 },
    { url: `${base}/products`, priority: 0.7 },
    { url: `${base}/brands`, priority: 0.6 },
    { url: `${base}/contact`, priority: 0.8 },
  ].map((r) => ({ ...r, lastModified: now, changeFrequency: "weekly" }));

  const cityRoutes = cities.map((c) => ({
    url: `${base}/service-areas/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const serviceCityRoutes = services.flatMap((s) =>
    cities.map((c) => ({
      url: `${base}/services/${s.slug}/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    }))
  );

  return [...staticRoutes, ...cityRoutes, ...serviceCityRoutes];
}
