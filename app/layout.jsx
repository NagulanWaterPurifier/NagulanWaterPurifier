// app/layout.jsx
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { LocalBusinessSchema } from "@/components/SchemaOrg";
import { business } from "@/data/business";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL(business.website),
  title: {
    default:
      "Nagulan Water Purifier | RO Sales & Service in Coimbatore, Tiruppur, Erode, Pollachi",
    template: "%s | Nagulan Water Purifier",
  },
  description: business.description,
  keywords: [
    "RO service Coimbatore",
    "water purifier service Coimbatore",
    "RO repair Coimbatore",
    "RO service Tiruppur",
    "RO service Pollachi",
    "RO service Erode",
    "RO AMC Coimbatore",
    "water purifier repair near me",
    "Kent RO service Coimbatore",
    "Aquaguard service Coimbatore",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: business.website,
    siteName: business.name,
    title: "Nagulan Water Purifier | RO Sales & Service",
    description: business.description,
    images: [`${business.website}/og-image.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nagulan Water Purifier | RO Sales & Service",
    description: business.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  verification: {
    // TODO: add real Google Search Console verification code
    google: "google-site-verification-code",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B5FFF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <LocalBusinessSchema />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
