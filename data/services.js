// data/services.js
// Each service, combined with each city in data/cities.js, generates one
// SEO landing page at /services/[service]/[city] (e.g. /services/ro-repair/coimbatore).

export const services = [
  {
    slug: "ro-installation",
    name: "RO Installation",
    shortDescription: "New RO water purifier installation for homes and offices.",
    icon: "Wrench",
    longDescription:
      "Professional installation of new RO water purifiers with wall mounting, inlet-outlet fitting, TDS calibration and a full demo of usage and maintenance.",
    priceHint: "Starts at ₹499 (fitting only, unit cost separate)",
    turnaround: "Same day, most bookings completed within 2-4 hours of confirmation.",
  },
  {
    slug: "ro-service",
    name: "RO Service",
    shortDescription: "Routine RO service and general maintenance visit.",
    icon: "Settings",
    longDescription:
      "Complete RO service including filter check, tank cleaning, leak inspection, TDS testing and performance tuning to keep your purifier running efficiently.",
    priceHint: "Starts at ₹399",
    turnaround: "Same day service across all primary cities.",
  },
  {
    slug: "ro-repair",
    name: "RO Repair",
    shortDescription: "Emergency and scheduled repair for all RO brands.",
    icon: "Hammer",
    longDescription:
      "Diagnosis and repair of RO purifiers with no water flow, water leakage, motor noise, low pressure or taste issues. All major brands supported.",
    priceHint: "Diagnosis ₹199, repair cost quoted after inspection",
    turnaround: "Emergency slots available, most repairs same day.",
  },
  {
    slug: "amc",
    name: "AMC (Annual Maintenance Contract)",
    shortDescription: "Yearly maintenance plans with scheduled visits.",
    icon: "ShieldCheck",
    longDescription:
      "Annual Maintenance Contracts covering scheduled service visits, filter changes, and priority breakdown support at a fixed yearly cost, so you never have to think about your RO again.",
    priceHint: "Plans from ₹1,999/year",
    turnaround: "Scheduled visits + priority breakdown response.",
  },
  {
    slug: "filter-replacement",
    name: "Filter Replacement",
    shortDescription: "Genuine sediment, carbon and post-carbon filter replacement.",
    icon: "Filter",
    longDescription:
      "Replacement of sediment, pre-carbon and post-carbon filters using genuine parts, restoring taste and flow rate. Recommended every 4-6 months depending on water quality.",
    priceHint: "Starts at ₹350 per filter",
    turnaround: "Same day, usually under 30 minutes on-site.",
  },
  {
    slug: "membrane-replacement",
    name: "Membrane Replacement",
    shortDescription: "RO membrane replacement to restore purification quality.",
    icon: "Layers",
    longDescription:
      "Genuine RO membrane replacement to restore TDS rejection and purification quality once flow rate drops or output TDS rises above safe levels.",
    priceHint: "Starts at ₹1,200 including fitting",
    turnaround: "Same day, 45-60 minutes on-site.",
  },
  {
    slug: "water-quality-testing",
    name: "Water Quality Testing",
    shortDescription: "On-site TDS and water quality testing.",
    icon: "FlaskConical",
    longDescription:
      "Free on-site TDS testing and a basic water quality assessment to recommend the right purification system or service action for your source water.",
    priceHint: "Free with any service visit",
    turnaround: "Instant, done during the visit.",
  },
  {
    slug: "commercial-ro-service",
    name: "Commercial RO Service",
    shortDescription: "RO service for offices, schools, hospitals and restaurants.",
    icon: "Building2",
    longDescription:
      "Service contracts for commercial RO systems used in offices, schools, colleges, hospitals, restaurants and hotels, with higher-capacity servicing and flexible scheduling.",
    priceHint: "Custom quote based on capacity",
    turnaround: "Scheduled visits, priority slots for businesses.",
  },
  {
    slug: "industrial-ro-service",
    name: "Industrial RO Service",
    shortDescription: "Service and AMC for industrial RO plants.",
    icon: "Factory",
    longDescription:
      "Maintenance and repair for industrial-capacity RO plants including membranes, pumps, pressure vessels and pre-treatment systems for factories and SIPCOT units.",
    priceHint: "Custom quote based on plant capacity",
    turnaround: "Scheduled, with emergency breakdown support.",
  },
  {
    slug: "water-softener-service",
    name: "Water Softener Service",
    shortDescription: "Installation and service of water softener systems.",
    icon: "Droplets",
    longDescription:
      "Installation and maintenance of water softener systems for hard water areas, including resin top-up, salt refill and valve servicing.",
    priceHint: "Starts at ₹599",
    turnaround: "Same day in most areas.",
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
