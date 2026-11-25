"use client";

import { useState } from "react";
import Link from "next/link";
import { faqItems, homepageCopy } from "@/utils/helper";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section
      className="w-full px-4 pb-16 md:pb-20 lg:pb-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto w-full max-w-285">
        <div className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row lg:items-start lg:gap-10">
          <div className="w-full lg:max-w-108.75">
            <h2
              id="faq-heading"
              className="text-center text-[32px] font-semibold leading-[1.2] text-[#010101] sm:text-[40px] lg:text-left lg:text-[48px]"
            >
              {homepageCopy.faq.heading}{" "}
              <span className="block text-custom-green">
                {homepageCopy.faq.headingAccent}
              </span>
            </h2>
          </div>

          <div className="flex w-full flex-col gap-3 lg:max-w-166.25 lg:gap-4">
            {faqItems.map(({ question, answer }, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={question}
                  className={`w-full rounded-xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-[#010101] bg-custom-green/6n/6"
                      : "border-black/10"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-btn-${i}`}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left"
                  >
                    <span className="text-[15px] font-semibold leading-[1.63] text-[#010101] sm:text-[16px]">
                      {question}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-custom-green transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    hidden={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="w-full max-w-126.5 px-4 pb-4 text-[15px] leading-[1.6] text-[#4D4D4D] sm:text-[16px]">
                        {answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex w-full items-center justify-center sm:mt-10 lg:mt-12">
          <Link
            href="/blog"
            className="flex h-11 w-full max-w-45.5 items-center justify-center rounded-full bg-custom-green text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#148d15]"
          >
            {homepageCopy.faq.moreAnswersLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
