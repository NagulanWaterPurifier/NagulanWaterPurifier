// components/CityCard.jsx
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export default function CityCard({ city }) {
  return (
    <Link
      href={`/service-areas/${city.slug}`}
      className="group flex flex-col justify-between rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/50 ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div>
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 text-blue-600 ring-1 ring-blue-100 transition-colors group-hover:from-blue-600 group-hover:to-sky-500 group-hover:text-white group-hover:ring-transparent">
          <MapPin size={18} />
        </span>
        <h3
          className="mt-4 text-lg font-bold text-slate-900"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          RO Service in {city.name}
        </h3>
        <p
          className="mt-2 text-sm text-slate-500"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {city.localities.slice(0, 4).join(", ")}
          {city.localities.length > 4 ? " & more" : ""}
        </p>
      </div>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-blue-600">
        View coverage <ArrowRight size={14} />
      </span>
    </Link>
  );
}
