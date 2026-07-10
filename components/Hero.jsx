// components/Hero.jsx
"use client";

import { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaShieldAlt,
  FaClock,
  FaStar,
  FaTint,
} from "react-icons/fa";
import { business } from "@/data/business";

// RO/Water purifier related images for the background slider
const SLIDER_IMAGES = [
  "https://images.unsplash.com/photo-1656082352918-75e24cb6d06c?w=1920&q=80", // white RO purifier unit
  "https://images.unsplash.com/photo-1616996691973-0560486764f7?w=1920&q=80", // water purifier on kitchen sink
  "https://images.unsplash.com/photo-1653543362916-f7df09926982?w=1920&q=80", // row of water filtration units
  "https://images.unsplash.com/photo-1654220691341-be23a137bd0c?w=1920&q=80", // water storage tanks
];

const SLIDE_INTERVAL = 5000; // ms

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Background Image Slider */}
      <div className="absolute inset-0" aria-hidden="true">
        {SLIDER_IMAGES.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url('${src}')`,
              opacity: index === activeSlide ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Overlay gradient for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-blue-900/40"
        aria-hidden="true"
      />
      {/* Decorative blurred glows */}
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-16 left-1/3 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"
      />

      {/* Slider dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDER_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            aria-label={`Show slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeSlide
                ? "w-6 bg-white"
                : "w-2 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16 lg:-mt-4">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white shadow-sm ring-1 ring-white/20 backdrop-blur-sm">
            <FaStar size={13} className="text-amber-400" />
            {business.rating.value} rated · {business.rating.count}+ happy customers
          </span>

          <h1
            className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-[3.25rem]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            RO Water Purifier{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Sales &amp; Service
            </span>{" "}
            in Coimbatore, Tiruppur, Erode &amp; Pollachi
          </h1>

          <p
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Same-day RO installation, repair, AMC and genuine spare parts —
            delivered to your doorstep by experienced, background-verified
            technicians.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${business.phone}`}
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40"
            >
              <FaPhoneAlt size={16} /> Call Now: {business.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${business.whatsapp}?text=Hi%2C%20I%20need%20RO%20water%20purifier%20service`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/40"
            >
              <FaWhatsapp size={18} /> WhatsApp Now
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div>
              <p className="text-2xl font-extrabold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {business.yearsExperience}+
              </p>
              <p className="text-xs text-slate-400">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Same Day
              </p>
              <p className="text-xs text-slate-400">Service Guarantee</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                100%
              </p>
              <p className="text-xs text-slate-400">Genuine Parts</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-3xl bg-white/95 p-6 shadow-2xl ring-1 ring-white/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-md">
                <FaShieldAlt size={18} />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Why customers choose us
                </p>
                <p className="text-xs text-slate-500">
                  Doorstep service, every time
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-3 text-sm font-medium text-slate-700">
              <li className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                  <FaClock size={13} />
                </span>
                Same-day technician visits
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                  <FaShieldAlt size={13} />
                </span>
                Genuine spare parts with warranty
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                  <FaStar size={13} />
                </span>
                4.9★ rated across {business.rating.count}+ reviews
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 px-4 py-3 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">
              <FaTint size={14} /> 100% Pure. 100% Trusted.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}