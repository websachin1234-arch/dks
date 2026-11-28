"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { faqItems, homepageAssets, homepageCopy } from "@/utils/helper";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const MOTION_OK = "(prefers-reduced-motion: no-preference)";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const prevIndexRef = useRef(undefined);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  useGSAP(
    () => {
      const panels = gsap.utils.toArray("[data-faq-panel]");
      const arrows = gsap.utils.toArray("[data-faq-arrow]");
      const prev = prevIndexRef.current;
      const first = prev === undefined;
      const instant = first || !window.matchMedia(MOTION_OK).matches;

      panels.forEach((panel, i) => {
        const open = i === openIndex;
        if (!first && open === (i === prev)) return;

        gsap.to(panel, {
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
          duration: instant ? 0 : 0.5,
          ease: "power3.inOut",
          overwrite: "auto",
          onComplete: () => ScrollTrigger.refresh(),
        });

        gsap.to(arrows[i], {
          rotation: open ? 0 : 180,
          duration: instant ? 0 : 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });
      });

      prevIndexRef.current = openIndex;
    },
    { scope: sectionRef, dependencies: [openIndex] },
  );

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: `(min-width: 992px) and ${MOTION_OK}`,
          isMobile: `(max-width: 991px) and ${MOTION_OK}`,
        },
        (ctx) => {
          const { isDesktop } = ctx.conditions;

          gsap.from("[data-faq-title]", {
            ...(isDesktop ? { x: -50 } : { y: 30 }),
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: isDesktop ? "top 70%" : "top 85%",
              once: true,
            },
          });

          gsap.set("[data-faq-item]", { y: isDesktop ? 36 : 24, opacity: 0 });

          ScrollTrigger.batch("[data-faq-item]", {
            start: isDesktop ? "top 90%" : "top 94%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.09,
                overwrite: true,
                clearProps: "transform,opacity",
              }),
          });

          gsap.from("[data-faq-cta]", {
            y: 24,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: "[data-faq-cta]",
              start: "top 95%",
              once: true,
            },
          });
        },
      );

      document.fonts?.ready.then(() => ScrollTrigger.refresh());

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-fit w-full px-4 xl:min-h-248.25 lg:py-35 md:py-20 py-15"
    >
      <div className="container max-w-285 w-full mx-auto">
        <div className="row w-full flex flex-col min-[992px]:flex-row gap-[clamp(24px,3.5vw,40px)] justify-center min-[992]:items-start items-center">
          <div className="right max-w-108.75 w-full">
            <h1
              data-faq-title
              className="text-black font-semibold text-[clamp(28px,4vw,48px)] leading-121 min-[992px]:text-left text-center"
            >
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
                  data-faq-item
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
                      data-faq-arrow
                      src={homepageAssets.faqArrow}
                      alt=""
                      width={28}
                      height={20}
                      aria-hidden="true"
                      style={
                        i === 0 ? undefined : { transform: "rotate(180deg)" }
                      }
                      className="shrink-0 w-[clamp(18px,2vw,28px)] h-auto"
                    />
                  </button>

                  <div
                    data-faq-panel
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    style={i === 0 ? undefined : { height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-[clamp(12px,1.5vw,16px)] pb-[clamp(12px,1.5vw,16px)] max-w-142.75 w-full text-black text-[clamp(14px,1.3vw,16px)] leading-143">
                      {answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          data-faq-cta
          className="w-full items-center justify-center flex mt-[clamp(24px,4vw,50px)]"
        >
          <button className="relative overflow-hidden active:scale-80 group max-w-45.5 w-full bg-custom-green h-11.25 flex items-center justify-center rounded-full text-white font-semibold text-sm leading-150 cursor-pointer border border-transparent transition-all duration-500 hover:border-[#B7F5D5] hover:shadow-[0_0_0_3px_rgba(183,245,213,0.12),0_8px_30px_rgba(0,0,0,0.12)]">
            <span className="relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              {homepageCopy.faq.moreAnswersLabel}
            </span>

            <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(190,255,220,0.4),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

            <span className="absolute inset-y-0 left-[-80%] w-1/2 skew-x-[-25deg] bg-linear-to-r from-transparent via-white/30 to-transparent group-hover:left-[140%] transition-all duration-1000 ease-in-out"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Questions;
