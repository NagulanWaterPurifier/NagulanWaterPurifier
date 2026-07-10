// components/LeadForm.jsx
"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { primaryCities } from "@/data/cities";
import { services } from "@/data/services";

const WHATSAPP_NUMBER = "917806984899"; // WhatsApp number with country code

export default function LeadForm({ defaultCity, defaultService }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const name = form.name.value;
    const phone = form.phone.value;
    const city = form.city.value;
    const service = form.service.value;
    const message = form.message.value;

    // Build WhatsApp message
    const waMessage = `*New Service Request*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*City:* ${city}%0A*Service:* ${service}${message ? `%0A*Message:* ${message}` : ""}`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

    // Open WhatsApp
    window.open(waUrl, "_blank");
    
    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-2xl shadow-slate-200/70 ring-1 ring-slate-100">
        <CheckCircle2 size={40} className="text-emerald-500" />
        <h3
          className="mt-4 text-lg font-bold text-slate-900"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Request Sent!
        </h3>
        <p
          className="mt-2 text-sm text-slate-500"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Your request has been sent via WhatsApp. We'll respond shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm font-bold text-blue-600 hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-6 shadow-2xl shadow-slate-200/70 ring-1 ring-slate-100 sm:p-8"
    >
      <h3
        className="text-lg font-bold text-slate-900"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Request Free Inspection
      </h3>
      <p
        className="mt-1 text-sm text-slate-500"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Fill in your details and our team will call you back within minutes.
      </p>

      <div className="mt-6 grid gap-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            placeholder="Your full name"
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            pattern="[0-9]{10}"
            placeholder="10-digit mobile number"
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="city" className="text-sm font-medium text-slate-700">
              City
            </label>
            <select
              id="city"
              name="city"
              defaultValue={defaultCity || ""}
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="" disabled>
                Select city
              </option>
              {primaryCities.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="service" className="text-sm font-medium text-slate-700">
              Service Required
            </label>
            <select
              id="service"
              name="service"
              defaultValue={defaultService || ""}
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="" disabled>
                Select service
              </option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-slate-700">
            Message (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Tell us about the issue or requirement"
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-300/40 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-400/50 disabled:opacity-60"
        >
          <Send size={16} /> {loading ? "Submitting..." : "Request Service"}
        </button>
      </div>
    </form>
  );
}
