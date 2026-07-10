// app/brands/page.jsx
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata = {
  title: "RO Brands We Service",
  description:
    "We sell and service Kent, Aquaguard, Livpure, Pureit, AO Smith, V Guard, Blue Star, HUL, Aqua Fresh, Aqua Grand, Crystal and all local RO brands.",
  alternates: { canonical: "/brands" },
};

const brands = [
  "Kent",
  "Aquaguard",
  "Livpure",
  "Pureit",
  "AO Smith",
  "V Guard",
  "Blue Star",
  "HUL",
  "Aqua Fresh",
  "Aqua Grand",
  "Crystal",
];

export default function BrandsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Brands", href: "/brands" },
        ]}
      />

      <section className="bg-brand-sky-light/50 py-14">
        <div className="container-page">
          <h1 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
            Brands We Sell &amp; Service
          </h1>
          <p className="mt-4 max-w-2xl text-brand-gray-light">
            Our technicians are trained across all major RO brands, plus
            local and regional brands common in Coimbatore, Tiruppur, Erode
            and Pollachi.
          </p>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {brands.map((b) => (
            <div
              key={b}
              className="flex items-center justify-center rounded-card border border-slate-100 bg-white p-8 text-center font-heading text-lg font-bold text-brand-blue shadow-sm"
            >
              {b}
            </div>
          ))}
          <div className="flex items-center justify-center rounded-card bg-brand-blue p-8 text-center font-heading text-lg font-bold text-white shadow-sm">
            + All Local Brands
          </div>
        </div>
      </section>
    </>
  );
}
