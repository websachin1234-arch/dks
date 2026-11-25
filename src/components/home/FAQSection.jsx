"use client";

import { useState } from "react";
import Link from "next/link";

const FAQS = [
  {
    question: "How much does reupholstery cost in Singapore?",
    answer:
      "A dining chair with a seat cushion typically starts from $75 per chair, while a fixed-cushion three-seater sofa starts from $1,380. The final price depends on size, design, foam, and fabric.",
  },
  {
    question: "How long does the upholstery process take?",
    answer:
      "Most projects take around two to four weeks after materials are confirmed. Timing may vary based on the item, fabric availability, and the size of the project.",
  },
  {
    question: "Do you provide pickup and delivery?",
    answer:
      "Yes. Pickup and delivery can be arranged within Singapore. Contact us with your location and furniture details so we can confirm availability and pricing.",
  },
  {
    question: "What types of materials do you offer?",
    answer:
      "We work with a range of upholstery fabrics and leathers, along with replacement foam and other support materials. We can recommend an option based on use, comfort, and maintenance.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "Yes. Warranty terms depend on the service and materials used. Your quotation and service details will explain the applicable coverage.",
  },
  {
    question: "Why is the warranty only 12 months?",
    answer:
      "A 12-month workmanship warranty reflects normal wear and the working life of upholstery components. Fabric, leather, misuse, and accidental damage are handled according to the specific terms provided.",
  },
  {
    question:
      "Why does reupholstery cost almost the same as buying a new sofa?",
    answer:
      "Quality reupholstery includes removal of old materials, frame repairs, new foam, handwork, fabric, and finishing. It preserves a well-made or sentimental frame that may be more durable than a low-cost replacement.",
  },
  {
    question: "Can I supply my own fabric?",
    answer:
      "We can discuss customer-supplied fabric on a project basis. The fabric must suit the furniture and be sufficient for the work, and some materials may not be suitable for reupholstery.",
  },
  {
    question: "How should I care for my newly upholstered furniture?",
    answer:
      "Vacuum regularly with a soft brush, clean spills promptly with a fabric-appropriate method, and avoid prolonged direct sunlight. Follow the care instructions supplied with your chosen material.",
  },
  {
    question: "Do you provide a quotation before work begins?",
    answer:
      "Yes. Send clear photos and measurements of your furniture through our contact channels for an initial estimate. A final quotation is confirmed after reviewing the item and requirements.",
  },
];

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
              Frequently Asked{" "}
              <span className="block text-[#19AE1A]">Questions</span>
            </h2>
          </div>

          <div className="flex w-full flex-col gap-3 lg:max-w-166.25 lg:gap-4">
            {FAQS.map(({ question, answer }, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={question}
                  className={`w-full rounded-xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-[#010101] bg-[#19AE1A]/6"
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
                      className={`h-5 w-5 shrink-0 text-[#19AE1A] transition-transform duration-300 ${
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
            className="flex h-11 w-full max-w-45.5 items-center justify-center rounded-full bg-[#19AE1A] text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#148d15]"
          >
            Find More Answers
          </Link>
        </div>
      </div>
    </section>
  );
}
