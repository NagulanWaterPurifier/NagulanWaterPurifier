// components/Brands.jsx
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

export default function Brands() {
  return (
    <section className="relative bg-white py-12">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p
          className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          We Sell &amp; Service All Major Brands
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {brands.map((b) => (
            <span
              key={b}
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-md shadow-slate-200/50 ring-1 ring-slate-100 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              {b}
            </span>
          ))}
          <span className="rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-300/40">
            + All Local Brands
          </span>
        </div>
      </div>
    </section>
  );
}
