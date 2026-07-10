// components/ServiceCard.jsx
import Link from "next/link";
import {
  Wrench,
  Settings,
  Hammer,
  ShieldCheck,
  Filter,
  Layers,
  FlaskConical,
  Building2,
  Factory,
  Droplets,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  Wrench,
  Settings,
  Hammer,
  ShieldCheck,
  Filter,
  Layers,
  FlaskConical,
  Building2,
  Factory,
  Droplets,
};

export default function ServiceCard({ service, citySlug = "coimbatore" }) {
  const Icon = iconMap[service.icon] || Wrench;

  return (
    <Link
      href={`/services/${service.slug}/${citySlug}`}
      className="group flex flex-col rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/50 ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 text-blue-600 ring-1 ring-blue-100 transition-colors group-hover:from-blue-600 group-hover:to-sky-500 group-hover:text-white group-hover:ring-transparent">
        <Icon size={20} />
      </span>
      <h3
        className="mt-4 text-base font-bold text-slate-900"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {service.name}
      </h3>
      <p
        className="mt-2 text-sm text-slate-500"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {service.shortDescription}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-blue-600">
        Learn more <ArrowRight size={14} />
      </span>
    </Link>
  );
}
