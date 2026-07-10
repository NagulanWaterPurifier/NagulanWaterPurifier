// components/Reviews.jsx
import { Star } from "lucide-react";
import { business } from "@/data/business";

const reviews = [
  {
    name: "Karthik R.",
    city: "Saravanampatti, Coimbatore",
    rating: 5,
    text: "Technician arrived within 3 hours of my call and fixed the leakage the same evening. Very transparent pricing.",
  },
  {
    name: "Priya S.",
    city: "Avinashi, Tiruppur",
    rating: 5,
    text: "Took an AMC plan for our office RO units. Scheduled visits are always on time and the team is professional.",
  },
  {
    name: "Manikandan V.",
    city: "Pollachi Town",
    rating: 5,
    text: "Installed a new Kent RO at home. Clean installation, clear demo, and fair price on the unit and fitting.",
  },
  {
    name: "Divya M.",
    city: "Surampatti, Erode",
    rating: 4,
    text: "Membrane replacement was quick and the water taste improved immediately. Would recommend for AMC.",
  },
];

export default function Reviews() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* Decorative blurred glows */}
      <div aria-hidden="true" className="absolute -right-10 top-10 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-16 left-1/3 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-extrabold text-slate-900 sm:text-4xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            What Our Customers{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p
            className="mt-3 text-slate-600"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Rated {business.rating.value}★ from {business.rating.count}+ Google
            reviews across Coimbatore, Tiruppur, Erode and Pollachi.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-3xl bg-white p-5 shadow-lg shadow-slate-200/50 ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex gap-0.5 text-amber-500">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-500" />
                ))}
              </div>
              <p
                className="mt-3 text-sm leading-relaxed text-slate-600"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {r.text}
              </p>
              <p
                className="mt-4 text-sm font-bold text-slate-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {r.name}
              </p>
              <p
                className="text-xs text-slate-500"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {r.city}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={business.social.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-300/40 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-400/50"
          >
            Leave us a Google Review
          </a>
        </div>
      </div>
    </section>
  );
}
