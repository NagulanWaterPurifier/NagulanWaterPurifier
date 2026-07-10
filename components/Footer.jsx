// components/Footer.jsx
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { business } from "@/data/business";
import { primaryCities } from "@/data/cities";
import { services } from "@/data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8 lg:grid-cols-4">
        <div>
          <h3
            className="text-lg font-bold text-slate-900"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {business.name}
          </h3>
          <p
            className="mt-3 text-sm leading-relaxed text-slate-500"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {business.description}
          </p>
          <div className="mt-4 flex gap-3">
            <a href={business.social.facebook} aria-label="Facebook" className="rounded-full bg-slate-100 p-2 text-blue-600 transition-colors hover:bg-blue-50">
              <Facebook size={16} />
            </a>
            <a href={business.social.instagram} aria-label="Instagram" className="rounded-full bg-slate-100 p-2 text-blue-600 transition-colors hover:bg-blue-50">
              <Instagram size={16} />
            </a>
            <a href={business.social.youtube} aria-label="YouTube" className="rounded-full bg-slate-100 p-2 text-blue-600 transition-colors hover:bg-blue-50">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4
            className="text-sm font-bold uppercase tracking-widest text-slate-700"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Services
          </h4>
          <ul className="mt-3 space-y-2">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}/coimbatore`}
                  className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4
            className="text-sm font-bold uppercase tracking-widest text-slate-700"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Service Areas
          </h4>
          <ul className="mt-3 space-y-2">
            {primaryCities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/service-areas/${c.slug}`}
                  className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  RO Service in {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4
            className="text-sm font-bold uppercase tracking-widest text-slate-700"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Contact
          </h4>
          <ul className="mt-3 space-y-3 text-sm text-slate-500">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-blue-600" />
              <span style={{ fontFamily: "'Inter', sans-serif" }}>
                {business.address.streetAddress}, {business.address.addressLocality},{" "}
                {business.address.addressRegion} {business.address.postalCode}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-blue-600" />
              <a href={`tel:${business.phone}`} className="transition-colors hover:text-blue-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-blue-600" />
              <a href={`mailto:${business.email}`} className="transition-colors hover:text-blue-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={16} className="mt-0.5 shrink-0 text-blue-600" />
              <span style={{ fontFamily: "'Inter', sans-serif" }}>{business.hoursDisplay}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p style={{ fontFamily: "'Inter', sans-serif" }}>© {year} {business.name}. All rights reserved.</p>
          <p style={{ fontFamily: "'Inter', sans-serif" }}>Serving Coimbatore, Tiruppur, Erode, Pollachi &amp; Perundurai</p>
        </div>
      </div>
    </footer>
  );
}
