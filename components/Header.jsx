// components/Header.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaTint,
} from "react-icons/fa";
import { business } from "@/data/business";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands" },
  { href: "/service-areas/coimbatore", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-lg shadow-slate-200/50 backdrop-blur-xl"
          : "bg-white/70 backdrop-blur-md"
      } border-b border-slate-100`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-cyan-500 text-white shadow-md shadow-blue-300/50 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
            <FaTint size={20} />
          </span>
          <div className="flex flex-col leading-tight">
            <span
              className="text-xl font-extrabold tracking-tight text-slate-800"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {business.name}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-widest text-blue-500">
              Pure Water Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2 text-[15px] font-semibold text-slate-600 transition-colors duration-200 hover:text-blue-600"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-cyan-500 transition-all duration-300 group-hover:w-3/5" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${business.phone}`}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-300/50 transition-all duration-200 hover:shadow-lg hover:shadow-blue-400/50 hover:-translate-y-0.5"
          >
            <FaPhoneAlt size={14} /> Call Now
          </a>
          <a
            href={`https://wa.me/${business.whatsapp}?text=Hi%2C%20I%20need%20RO%20service`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-green-300/50 transition-all duration-200 hover:shadow-lg hover:shadow-green-400/50 hover:-translate-y-0.5"
          >
            <FaWhatsapp size={16} /> WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="flex items-center justify-center rounded-xl bg-slate-100 p-2.5 text-slate-700 transition-colors hover:bg-slate-200 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-3 text-[15px] font-semibold text-slate-600 transition-colors hover:bg-sky-50 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex gap-3">
              <a
              href={`tel:${business.phone}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-3 text-sm font-bold text-white shadow-md shadow-blue-300/50"
            >
              <FaPhoneAlt size={14} /> Call
            </a>
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-3 text-sm font-bold text-white shadow-md shadow-green-300/50"
            >
              <FaWhatsapp size={16} /> WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}