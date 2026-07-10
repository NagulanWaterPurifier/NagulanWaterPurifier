// app/about/page.jsx
import { Users, Target, Eye, Award } from "lucide-react";
import { business } from "@/data/business";
import { primaryCities } from "@/data/cities";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Nagulan Water Purifier — our story, mission, and the team providing RO installation, service and AMC across Coimbatore, Tiruppur, Erode and Pollachi.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <section className="bg-brand-sky-light/50 py-14">
        <div className="container-page">
          <h1 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
            About {business.name}
          </h1>
          <p className="mt-4 max-w-2xl text-brand-gray-light">
            {business.description}
          </p>
        </div>
      </section>

      <section className="container-page grid gap-8 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: Users,
            title: "Our Story",
            text: `Founded to bring reliable, honest RO service to Coimbatore and neighboring towns, we've grown into a trusted team serving thousands of households and businesses.`,
          },
          {
            icon: Target,
            title: "Our Mission",
            text: "Deliver safe, great-tasting drinking water to every home and business through fast, transparent, genuine-parts service.",
          },
          {
            icon: Eye,
            title: "Our Vision",
            text: "To be the most trusted name in RO sales and service across Coimbatore, Tiruppur, Erode and Pollachi.",
          },
          {
            icon: Award,
            title: "Experience",
            text: `${business.yearsExperience}+ years of combined technician experience across residential, commercial and industrial RO systems.`,
          },
        ].map((item) => (
          <div key={item.title} className="rounded-card border border-slate-100 bg-white p-6 shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-sky-light text-brand-blue">
              <item.icon size={20} />
            </span>
            <h2 className="mt-4 font-heading text-lg font-bold text-slate-900">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-brand-gray-light">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-14">
        <div className="container-page">
          <h2 className="font-heading text-2xl font-bold text-slate-900">
            Service Coverage
          </h2>
          <p className="mt-2 max-w-2xl text-brand-gray-light">
            We proudly serve customers across the following cities and their
            surrounding localities.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {primaryCities.map((c) => (
              <div key={c.slug} className="rounded-card bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <h3 className="font-heading text-base font-bold text-brand-blue">
                  {c.name}
                </h3>
                <p className="mt-2 text-xs text-brand-gray-light">
                  {c.localities.slice(0, 5).join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
