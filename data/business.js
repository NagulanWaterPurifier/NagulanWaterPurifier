// data/business.js
// Single source of truth for business identity, NAP (Name-Address-Phone)
// consistency, and structured data. Update phone/whatsapp/hours here and
// it propagates to every page and schema block on the site.

export const business = {
  name: "Nagulan Water Purifier",
  legalName: "Nagulan Water Purifier",
  tagline: "RO Sales, Service & AMC Across Coimbatore, Tiruppur, Erode & Pollachi",
  description:
    "Nagulan Water Purifier provides RO installation, service, repair, AMC, filter and membrane replacement for homes and businesses in Coimbatore, Tiruppur, Erode and Pollachi. Same-day doorstep service, genuine spare parts, and certified technicians.",
  phone: "+917806984899",
  phoneDisplay: "+91 78069 84899",
  whatsapp: "917806984899", // digits only, with country code, for wa.me links
  email: "udhaikuttipaiyan@gmail.com",
  website: "https://www.nagulanwaterpurifier.in",
  logo: "/logo.png",
  address: {
    streetAddress: "Telungupalayam, Selvapuram North",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    postalCode: "641039",
    addressCountry: "IN",
  },
  geo: {
    latitude: 10.9942367,
    longitude: 76.9304275,
  },
  hours: [
    { day: "Monday", open: "09:00", close: "20:00" },
    { day: "Tuesday", open: "09:00", close: "20:00" },
    { day: "Wednesday", open: "09:00", close: "20:00" },
    { day: "Thursday", open: "09:00", close: "20:00" },
    { day: "Friday", open: "09:00", close: "20:00" },
    { day: "Saturday", open: "09:00", close: "20:00" },
    { day: "Sunday", open: "09:00", close: "18:00" },
  ],
  hoursDisplay: "Mon - Sat: 9:00 AM - 8:00 PM | Sun: 9:00 AM - 6:00 PM",
  social: {
    facebook: "https://www.facebook.com/nagulanwaterpurifier",
    instagram: "https://www.instagram.com/nagulanwaterpurifier",
    youtube: "https://www.youtube.com/@nagulanwaterpurifier",
    googleReview: "https://g.page/r/nagulanwaterpurifier/review",
  },
  googleMapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.5!2d76.9304275!3d10.9942367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85912682b3c4f%3A0x8ef0204c5ae17035!2sNagulan%20water%20purifier!5e0!3m2!1sen!2sin!4v1720000000000",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Nagulan+water+purifier+Coimbatore",
  googleMapsPlaceUrl:
    "https://www.google.com/maps/place/Nagulan+water+purifier/@10.9942367,76.9304275,17z/",
  yearsExperience: 12,
  rating: {
    value: "4.9",
    count: "312",
  },
};

export const primaryCTAText = "Call Now";
export const secondaryCTAText = "WhatsApp Now";
