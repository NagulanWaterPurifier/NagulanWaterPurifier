// app/page.jsx
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceCard from "@/components/ServiceCard";
import CityCard from "@/components/CityCard";
import Reviews from "@/components/Reviews";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";
import { FAQSchema } from "@/components/SchemaOrg";
import { services } from "@/data/services";
import { primaryCities } from "@/data/cities";
import { faqs } from "@/data/faqs";
import { business } from "@/data/business";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export const metadata = {
  title:
    "RO Water Purifier Sales & Service in Coimbatore, Tiruppur, Erode, Pollachi",
  description:
    "Same-day RO installation, repair, AMC & filter replacement in Coimbatore, Tiruppur, Erode and Pollachi. Genuine parts, certified technicians. Call or WhatsApp now.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Brands />

      {/* Services */}
      <section className="container-page py-16" id="services">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-slate-900">
            Our Services
          </h2>
          <p className="mt-3 text-brand-gray-light">
            Complete RO purifier solutions for homes and businesses across
            Coimbatore, Tiruppur, Erode and Pollachi.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <WhyChooseUs />

      {/* Service Areas */}
      <section className="bg-brand-blue/[0.03] py-16" id="service-areas">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-slate-900">
              Cities We Serve
            </h2>
            <p className="mt-3 text-brand-gray-light">
              Doorstep RO service across these cities and every locality
              within them.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {primaryCities.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      {/* FAQ */}
      <FAQSection faqs={faqs.slice(0, 10)} />
      <FAQSchema faqs={faqs} />

      {/* Contact CTA */}
      <section className="border-t border-slate-100 bg-slate-50 py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold text-slate-900">
              Book a Technician Today
            </h2>
            <p className="mt-3 max-w-md text-brand-gray-light">
              Call, WhatsApp, or fill out the form and our team will get back
              to you within minutes.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${business.phone}`}
                className="flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue-dark"
              >
                <Phone size={16} /> Call Now
              </a>
              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green-dark"
              >
                <MessageCircle size={16} /> WhatsApp Now
              </a>
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-card bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <MapPin size={20} className="mt-0.5 shrink-0 text-brand-blue" />
              <div className="text-sm text-brand-gray">
                <p className="font-semibold text-slate-900">Visit Us</p>
                <p className="mt-1">
                  {business.address.streetAddress},{" "}
                  {business.address.addressLocality},{" "}
                  {business.address.addressRegion}{" "}
                  {business.address.postalCode}
                </p>
                <p className="mt-1 text-brand-gray-light">
                  {business.hoursDisplay}
                </p>
              </div>
            </div>
          </div>

          <LeadForm />
        </div>
      </section>
    </>
  );
}
