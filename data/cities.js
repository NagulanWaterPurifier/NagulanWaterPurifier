// data/cities.js
// Drives every /service-areas/[city] page and every /services/[service]/[city]
// combination page. Add a city here and it is automatically included in
// sitemap.js, generateStaticParams, and the homepage "Cities We Serve" grid.

export const cities = [
  {
    slug: "coimbatore",
    name: "Coimbatore",
    isPrimary: true,
    description:
      "Our home base. Fastest response times and largest technician team in Coimbatore, covering every zone from Gandhipuram to Kovaipudur.",
    localities: [
      "Gandhipuram",
      "RS Puram",
      "Saibaba Colony",
      "Peelamedu",
      "Singanallur",
      "Saravanampatti",
      "Sundarapuram",
      "Vadavalli",
      "Kovaipudur",
      "Ganapathy",
      "Ramanathapuram",
      "Kalapatti",
      "Selvapuram",
      "Telungupalayam",
    ],
    distanceFromBase: "0",
  },
  {
    slug: "tiruppur",
    name: "Tiruppur",
    isPrimary: true,
    description:
      "Dedicated RO service team for Tiruppur's residential and textile-industry customers, with same-day service across the district.",
    localities: [
      "Kangeyam Road",
      "Avinashi",
      "Palladam",
      "Dharapuram Road",
      "Veerapandi",
    ],
    distanceFromBase: "50",
  },
  {
    slug: "erode",
    name: "Erode",
    isPrimary: true,
    description:
      "Reliable RO installation, service and AMC coverage across Erode, including Bhavani and Gobichettipalayam.",
    localities: [
      "Surampatti",
      "Perundurai Road",
      "Chithode",
      "Bhavani",
      "Gobichettipalayam",
    ],
    distanceFromBase: "90",
  },
  {
    slug: "pollachi",
    name: "Pollachi",
    isPrimary: true,
    description:
      "Doorstep RO sales and service in Pollachi town and surrounding agricultural and residential belts.",
    localities: [
      "Pollachi Town",
      "Kinathukadavu",
      "Meenakshipuram",
      "Zamin Uthukuli",
      "Anaimalai Road",
    ],
    distanceFromBase: "40",
  },
  {
    slug: "perundurai",
    name: "Perundurai",
    isPrimary: false,
    description:
      "RO service and AMC support for homes, colleges and SIPCOT industrial units in Perundurai.",
    localities: ["SIPCOT", "Chennimalai Road", "College Areas"],
    distanceFromBase: "75",
  },
];

export const primaryCities = cities.filter((c) => c.isPrimary);

export function getCityBySlug(slug) {
  return cities.find((c) => c.slug === slug);
}
