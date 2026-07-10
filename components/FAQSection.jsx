// components/FAQSection.jsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* Decorative blurred glows */}
      <div aria-hidden="true" className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-16 right-1/3 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl font-extrabold text-slate-900 sm:text-4xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {title}
          </h2>
          <p
            className="mt-3 text-slate-600"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Answers to the most common questions about RO purifier sales and
            service in Coimbatore, Tiruppur, Erode and Pollachi.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-100 rounded-3xl bg-white shadow-lg shadow-slate-200/50 ring-1 ring-slate-100">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.q}>
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-sm font-bold text-slate-900 sm:text-base"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-blue-600 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p
                    className="px-6 pb-5 text-sm leading-relaxed text-slate-600"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
