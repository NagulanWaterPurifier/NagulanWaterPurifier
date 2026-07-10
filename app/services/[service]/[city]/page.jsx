// app/services/[service]/[city]/page.jsx
// Programmatic SEO page for every Service x City combination, e.g.
// /services/ro-repair/coimbatore -> "RO Repair in Coimbatore".
// This is the FRD's "Final Recommendation": one dedicated, unique page per
// service x city pair with LocalBusiness + Service + FAQ + Breadcrumb schema.

import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Clock3,
  IndianRupee,
  MapPin,
} from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { cities, getCityBySlug, primaryCities } from "@/data/cities";
import { business } from "@/data/business";
import { faqs as allFaqs } from "@/data/faqs";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import CityCard from "@/components/CityCard";
import {
  ServiceSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/SchemaOrg";

export function generateStaticParams() {
  const params = [];
  for (const service of services) {
    for (const city of cities) {
      params.push({ service: service.slug, city: city.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const city = getCityBySlug(citySlug);
  if (!service || !city) return {};

  const title = `${service.name} in ${city.name} | Same-Day Doorstep Service`;
  const description = `${service.name} in ${city.name} by Nagulan Water Purifier. ${service.longDescription} Call or WhatsApp for same-day booking.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${service.slug}/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${business.website}/services/${service.slug}/${city.slug}`,
    },
  };
}

// Build a small, page-specific FAQ set: a couple of general FAQs plus two
// generated ones that mention the exact service + city for AEO targeting.
function buildPageFaqs(service, city) {
  const generated = [
    {
      q: `How much does ${service.name.toLowerCase()} cost in ${city.name}?`,
      a: `${service.name} in ${city.name} ${service.priceHint.toLowerCase()}. Final pricing is confirmed by our technician after inspection.`,
    },
    {
      q: `How fast can I get ${service.name.toLowerCase()} in ${city.name}?`,
      a: `${service.turnaround} We cover all localities in ${city.name}, including ${city.localities.slice(0, 3).join(", ")}.`,
    },
  ];
  return [...generated, ...allFaqs.slice(0, 6)];
}

export default async function ServiceCityPage({ params }) {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const city = getCityBySlug(citySlug);

  if (!service || !city) notFound();

  const pageFaqs = buildPageFaqs(service, city);
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const otherCities = primaryCities.filter((c) => c.slug !== city.slug).slice(0, 3);

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    {
      name: `${service.name} in ${city.name}`,
      href: `/services/${service.slug}/${city.slug}`,
    },
  ];

  return (
    <>
      <ServiceSchema service={service} city={city} />
      <FAQSchema faqs={pageFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-page py-3 text-xs text-brand-gray-light">
          <Link href="/" className="hover:text-brand-blue">
            Home
          </Link>{" "}
          /{" "}
          <Link href={`/service-areas/${city.slug}`} className="hover:text-brand-blue">
            {city.name}
          </Link>{" "}
          / <span className="text-brand-gray">{service.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-sky-light to-white py-14">
        <div className="container-page grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-brand-blue shadow-sm ring-1 ring-brand-sky/40">
              <MapPin size={14} /> Serving all of {city.name}
            </span>

            <h1 className="mt-5 font-heading text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              {service.name} in {city.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-light">
              {service.longDescription}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${business.phone}`}
                className="flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue-dark"
              >
                <Phone size={16} /> Call Now
              </a>
              <a
                href={`https://wa.me/${business.whatsapp}?text=Hi%2C%20I%20need%20${encodeURIComponent(
                  service.name
                )}%20in%20${encodeURIComponent(city.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green-dark"
              >
                <MessageCircle size={16} /> WhatsApp Now
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-card bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <IndianRupee size={18} className="mt-0.5 shrink-0 text-brand-blue" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Pricing</p>
                  <p className="text-sm text-brand-gray-light">{service.priceHint}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-card bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <Clock3 size={18} className="mt-0.5 shrink-0 text-brand-blue" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Turnaround</p>
                  <p className="text-sm text-brand-gray-light">{service.turnaround}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-heading text-lg font-bold text-slate-900">
                Areas covered in {city.name}
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

          <LeadForm defaultCity={city.slug} defaultService={service.slug} />
        </div>
      </section>

      {/* Trust points */}
      <section className="container-page py-14">
        <h2 className="font-heading text-2xl font-bold text-slate-900">
          What's included
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "Free on-site diagnosis and TDS testing",
            "Genuine, manufacturer-compatible spare parts",
            "Upfront pricing before any work begins",
            "Warranty on parts and workmanship",
          ].map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-green" />
              <p className="text-sm text-brand-gray">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related services */}
      <section className="border-t border-slate-100 bg-slate-50 py-14">
        <div className="container-page">
          <h2 className="font-heading text-2xl font-bold text-slate-900">
            Other services in {city.name}
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/${city.slug}`}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-blue ring-1 ring-brand-blue/20 hover:bg-brand-blue hover:text-white"
              >
                {s.name} in {city.name}
              </Link>
            ))}
          </div>

          <h2 className="mt-10 font-heading text-2xl font-bold text-slate-900">
            {service.name} in other cities
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/services/${service.slug}/${c.slug}`}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-blue ring-1 ring-brand-blue/20 hover:bg-brand-blue hover:text-white"
              >
                {service.name} in {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        faqs={pageFaqs}
        title={`FAQs about ${service.name} in ${city.name}`}
      />
    </>
  );
}
