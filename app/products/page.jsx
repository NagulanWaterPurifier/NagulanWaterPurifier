// app/products/page.jsx
import { Phone, MessageCircle } from "lucide-react";
import { business } from "@/data/business";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata = {
  title: "RO Water Purifiers & Accessories",
  description:
    "Domestic, commercial and industrial RO water purifiers, plus filters, membranes, pumps, UV lamps and TDS controllers. Available across Coimbatore, Tiruppur, Erode and Pollachi.",
  alternates: { canonical: "/products" },
};

const productGroups = [
  {
    title: "RO Water Purifiers",
    items: [
      { name: "Domestic RO", desc: "For homes and apartments, 6-15 litre storage options." },
      { name: "Commercial RO", desc: "For offices, schools, hospitals and restaurants." },
      { name: "Industrial RO", desc: "High-capacity systems for factories and SIPCOT units." },
    ],
  },
  {
    title: "Accessories & Spare Parts",
    items: [
      { name: "Filters", desc: "Sediment, pre-carbon and post-carbon filters, all major brands." },
      { name: "Membranes", desc: "Genuine RO membranes for accurate TDS rejection." },
      { name: "Pumps", desc: "Booster pumps for low-pressure water supply." },
      { name: "UV Lamps", desc: "Replacement UV lamps for purifiers with UV stage." },
      { name: "TDS Controllers", desc: "Adjustable TDS controllers for mineral balance." },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
        ]}
      />

      <section className="bg-brand-sky-light/50 py-14">
        <div className="container-page">
          <h1 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
            RO Water Purifiers &amp; Accessories
          </h1>
          <p className="mt-4 max-w-2xl text-brand-gray-light">
            New RO purifiers and genuine spare parts for residential,
            commercial and industrial needs — with installation included.
          </p>
        </div>
      </section>

      <section className="container-page space-y-14 py-14">
        {productGroups.map((group) => (
          <div key={group.title}>
            <h2 className="font-heading text-2xl font-bold text-slate-900">
              {group.title}
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-card border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-heading text-base font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-brand-gray-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-14 text-center">
        <div className="container-page">
          <h2 className="font-heading text-2xl font-bold text-slate-900">
            Need help choosing the right purifier?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-brand-gray-light">
            Call or WhatsApp us with your water source and household size —
            we'll recommend the right system and quote a fair price.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
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
        </div>
      </section>
    </>
  );
}
