"use client";

import { useState } from "react";
import Image from "next/image";
import { faqItems, homepageAssets, homepageCopy } from "@/utils/helper";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="min-h-fit w-full px-4 xl:min-h-248.25 lg:py-35 md:py-20 py-15">
      <div className="container max-w-285 w-full mx-auto">
        <div className="row w-full flex flex-col min-[992px]:flex-row gap-[clamp(24px,3.5vw,40px)] justify-center min-[992]:items-start items-center">
          <div className="right max-w-108.75 w-full">
            <h1 className="text-black font-semibold text-[clamp(28px,4vw,48px)] leading-121 min-[992px]:text-left text-center">
              {homepageCopy.faq.heading}{" "}
              <span className="text-custom-green">
                {homepageCopy.faq.headingAccent}
              </span>
            </h1>
          </div>

          <div className="left max-w-166.25 w-full flex flex-col gap-[clamp(12px,1.5vw,20px)]">
            {faqItems.map(({ question, answer }, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={i}
                  className={`w-full rounded-xl border transition-colors duration-300 ${
                    isOpen ? "bg-light-green border-black" : "border-black/12"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-btn-${i}`}
                    className={`w-full flex items-center justify-between gap-4 text-left cursor-pointer px-[clamp(12px,1.5vw,16px)] pt-[clamp(12px,1.5vw,16px)] transition-[padding] duration-300 ease-in-out ${
                      isOpen ? "pb-2" : "pb-[clamp(12px,1.5vw,16px)]"
                    }`}
                  >
                    <span className="font-semibold text-black text-[clamp(14px,1.3vw,16px)] leading-163">
                      {question}
                    </span>
                    <Image
                      src={homepageAssets.faqArrow}
                      alt=""
                      width={28}
                      height={20}
                      aria-hidden="true"
                      className={`shrink-0 w-[clamp(18px,2vw,28px)] h-auto transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-0" : "rotate-180"
                      }`}
                    />
                  </button>

                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-[clamp(12px,1.5vw,16px)] pb-[clamp(12px,1.5vw,16px)] max-w-142.75 w-full text-black text-[clamp(14px,1.3vw,16px)] leading-143">
                        {answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full items-center justify-center flex mt-[clamp(24px,4vw,50px)]">
          <button className="max-w-45.5 w-full bg-custom-green h-11.25 flex items-center justify-center rounded-full text-white font-semibold text-sm leading-150 cursor-pointer transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5">
            {homepageCopy.faq.moreAnswersLabel}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Questions;
