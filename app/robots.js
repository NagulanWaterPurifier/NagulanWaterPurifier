// app/robots.js
import { business } from "@/data/business";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${business.website}/sitemap.xml`,
  };
}
