// components/FloatingButtons.jsx
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { business } from "@/data/business";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${business.whatsapp}?text=Hi%2C%20I%20need%20RO%20water%20purifier%20service`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-300/40 transition-all hover:scale-110 hover:shadow-xl hover:shadow-green-400/50"
      >
        {/* Pulse ring animation */}
        <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-20" />
        <span className="absolute inset-[-4px] animate-spin-slow rounded-full border-2 border-dashed border-green-300/50" />
        <FaWhatsapp size={26} className="relative z-10 transition-transform group-hover:scale-110" />
      </a>
      
      {/* Call Button */}
      <a
        href={`tel:${business.phone}`}
        aria-label="Call Now"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-300/40 transition-all hover:scale-110 hover:shadow-xl hover:shadow-blue-400/50"
      >
        {/* Pulse ring animation */}
        <span className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-20" />
        <span className="absolute inset-[-4px] animate-spin-slow rounded-full border-2 border-dashed border-blue-300/50" />
        <FaPhoneAlt size={22} className="relative z-10 transition-transform group-hover:scale-110 group-hover:rotate-12" />
      </a>
    </div>
  );
}
