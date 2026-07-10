// components/WhyChooseUs.jsx
import { Users, Clock3, IndianRupee, ShieldCheck, Home, Award } from "lucide-react";

const points = [
  {
    icon: Users,
    title: "Experienced Technicians",
    text: "Trained, background-verified technicians with years of RO service experience.",
  },
  {
    icon: Clock3,
    title: "Same Day Service",
    text: "Most bookings are completed the same day across all service areas.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    text: "Transparent, upfront pricing with no hidden charges.",
  },
  {
    icon: ShieldCheck,
    title: "Original Spare Parts",
    text: "Genuine filters, membranes, pumps and UV lamps, always.",
  },
  {
    icon: Home,
    title: "Doorstep Service",
    text: "Installation, repair and AMC visits done right at your home or office.",
  },
  {
    icon: Award,
    title: "Warranty Backed",
    text: "Every repair and part replacement is covered by a service warranty.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* Decorative blurred glows */}
      <div aria-hidden="true" className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-16 left-1/3 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-extrabold text-slate-900 sm:text-4xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Nagulan Water Purifier
            </span>
          </h2>
          <p
            className="mt-3 text-slate-600"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Trusted by homes and businesses across Coimbatore, Tiruppur, Erode
            and Pollachi.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="flex gap-4 rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/50 ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 text-blue-600 ring-1 ring-blue-100">
                <p.icon size={20} />
              </span>
              <div>
                <h3
                  className="text-base font-bold text-slate-900"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {p.title}
                </h3>
                <p
                  className="mt-1 text-sm text-slate-500"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
