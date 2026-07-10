// app/contact/page.jsx
import { Phone, MessageCircle, Mail, MapPin, Clock3 } from "lucide-react";
import { business } from "@/data/business";
import LeadForm from "@/components/LeadForm";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata = {
  title: "Contact Us",
  description:
    "Call, WhatsApp, or visit Nagulan Water Purifier at Telungupalayam, Selvapuram North, Coimbatore. Book RO installation, service, repair or AMC today.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      <section className="bg-brand-sky-light/50 py-14">
        <div className="container-page">
          <h1 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-brand-gray-light">
            Reach us by phone, WhatsApp, or visit our office. We typically
            respond within minutes during business hours.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-10 py-14 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <a
            href={`tel:${business.phone}`}
            className="flex items-center gap-4 rounded-card border border-slate-100 bg-white p-5 shadow-sm hover:border-brand-blue"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-sky-light text-brand-blue">
              <Phone size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">Call Us</p>
              <p className="text-sm text-brand-gray-light">{business.phoneDisplay}</p>
            </div>
          </a>

          <a
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-card border border-slate-100 bg-white p-5 shadow-sm hover:border-brand-green"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-brand-green">
              <MessageCircle size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">WhatsApp</p>
              <p className="text-sm text-brand-gray-light">{business.phoneDisplay}</p>
            </div>
          </a>

          <a
            href={`mailto:${business.email}`}
            className="flex items-center gap-4 rounded-card border border-slate-100 bg-white p-5 shadow-sm hover:border-brand-blue"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-sky-light text-brand-blue">
              <Mail size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">Email</p>
              <p className="text-sm text-brand-gray-light">{business.email}</p>
            </div>
          </a>

          <div className="flex items-start gap-4 rounded-card border border-slate-100 bg-white p-5 shadow-sm">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-sky-light text-brand-blue">
              <MapPin size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">Address</p>
              <p className="text-sm text-brand-gray-light">
                {business.address.streetAddress}, {business.address.addressLocality},{" "}
                {business.address.addressRegion} {business.address.postalCode}
              </p>
              <a
                href={business.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-brand-blue hover:underline"
              >
                Get Directions →
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-card border border-slate-100 bg-white p-5 shadow-sm">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-sky-light text-brand-blue">
              <Clock3 size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">Business Hours</p>
              <p className="text-sm text-brand-gray-light">{business.hoursDisplay}</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-card border border-slate-100 shadow-sm">
            <iframe
              title="Nagulan Water Purifier location map"
              src={business.googleMapsEmbedSrc}
              width="100%"
              height="260"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <LeadForm />
      </section>
    </>
  );
}
