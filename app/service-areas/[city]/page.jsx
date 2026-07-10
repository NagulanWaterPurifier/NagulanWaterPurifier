// app/service-areas/[city]/page.jsx
// One landing page per primary city (FRD section 9: "Service Areas ->
// Separate landing pages"), listing every service offered in that city and
// linking into the service x city combo pages for deeper SEO coverage.

import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";
import { cities, getCityBySlug } from "@/data/cities";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { business } from "@/data/business";
import ServiceCard from "@/components/ServiceCard";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";
import { FAQSchema, BreadcrumbSchema } from "@/components/SchemaOrg";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  const title = `RO Water Purifier Service in ${city.name} | Nagulan Water Purifier`;
  const description = `RO installation, repair, service and AMC in ${city.name}. Covering ${city.localities.slice(0, 5).join(", ")} and more. Same-day doorstep service.`;

  return {
    title,
    description,
    alternates: { canonical: `/service-areas/${city.slug}` },
    openGraph: { title, description, url: `${business.website}/service-areas/${city.slug}` },
  };
}

export default async function CityPage({ params }) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const cityFaqs = faqs.filter((f) =>
    f.q.toLowerCase().includes(city.name.toLowerCase())
  );
  const displayFaqs = cityFaqs.length ? cityFaqs : faqs.slice(0, 6);

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: `RO Service in ${city.name}`, href: `/service-areas/${city.slug}` },
  ];

  return (
    <>
      <FAQSchema faqs={displayFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <section className="bg-gradient-to-b from-brand-sky-light to-white py-14">
        <div className="container-page grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-brand-blue shadow-sm ring-1 ring-brand-sky/40">
              <MapPin size={14} /> {city.name}
            </span>
            <h1 className="mt-5 font-heading text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              RO Water Purifier Sales &amp; Service in {city.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-light">
              {city.description}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${business.phone}`}
                className="flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue-dark"
              >
                <Phone size={16} /> Call Now
              </a>
              <a
                href={`https://wa.me/${business.whatsapp}?text=Hi%2C%20I%20need%20RO%20service%20in%20${encodeURIComponent(
                  city.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green-dark"
              >
                <MessageCircle size={16} /> WhatsApp Now
              </a>
            </div>

            <div className="mt-8">
              <h2 className="font-heading text-lg font-bold text-slate-900">
                Localities we cover in {city.name}
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {city.localities.map((loc) => (
                  <span
                    key={loc}
                    className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-brand-gray ring-1 ring-slate-200"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <LeadForm defaultCity={city.slug} />
        </div>
      </section>

      <section className="container-page py-14">
        <h2 className="font-heading text-2xl font-bold text-slate-900">
          Services available in {city.name}
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} citySlug={city.slug} />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-14">
        <div className="container-page">
          <h2 className="font-heading text-2xl font-bold text-slate-900">
            Other service areas
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {cities
              .filter((c) => c.slug !== city.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/service-areas/${c.slug}`}
                  className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-blue ring-1 ring-brand-blue/20 hover:bg-brand-blue hover:text-white"
                >
                  <CheckCircle2 size={14} /> RO Service in {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={displayFaqs} title={`FAQs about RO Service in ${city.name}`} />
    </>
  );
}
