"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { homepageCopy, trustedClientLogos } from "@/utils/helper";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const MOTION_OK = "(prefers-reduced-motion: no-preference)";

const LogoGroup = ({ hidden = false }) => (
  <div
    aria-hidden={hidden || undefined}
    className="flex shrink-0 items-center gap-[clamp(20px,4vw,50px)]"
  >
    {trustedClientLogos.map(({ src, width, height }, i) => (
      <div
        key={i}
        className="relative cursor-pointer aspect-180/80 w-[clamp(110px,14vw,180px)] shrink-0 overflow-clip"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: `${(width / 180) * 100}%`,
            height: `${(height / 80) * 100}%`,
          }}
        >
          <Image
            src={src}
            alt={hidden ? "" : homepageCopy.trustedServices.logoAlt}
            fill
            sizes="152px"
            className="object-contain pointer-events-none"
          />
        </div>
      </div>
    ))}
  </div>
);

const TrustedService = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: `(min-width: 768px) and ${MOTION_OK}`,
          isMobile: `(max-width: 767px) and ${MOTION_OK}`,
        },
        (ctx) => {
          const { isDesktop } = ctx.conditions;
          const clear = "transform,opacity";

          gsap
            .timeline({
              defaults: { ease: "power3.out" },
              scrollTrigger: {
                trigger: sectionRef.current,
                start: isDesktop ? "top 80%" : "top 90%",
                once: true,
              },
            })
            .from("[data-trust-title]", {
              y: isDesktop ? 30 : 20,
              opacity: 0,
              scale: 0.96,
              duration: 0.8,
              clearProps: "transform,opacity",
            })
            .from(
              "[data-trust-marquee]",
              {
                opacity: 0,
                y: isDesktop ? 24 : 16,
                duration: 1,
                clearProps: clear,
              },
              "-=0.4",
            );
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
      className="min-h-fit lg:pb-35 lg:pt-20 md:py-20 py-15 w-full overflow-hidden"
    >
      <h1
        data-trust-title
        className="text-center font-semibold italic leading-160 text-[clamp(16px,2vw,20px)] text-custom-gray px-4"
      >
        {homepageCopy.trustedServices.heading}
      </h1>

      <div
        data-trust-marquee
        className="group mt-5 md:mt-8 w-full max-w-[2710px] mx-auto overflow-hidden opacity-90"
      >
        <div className="flex w-max gap-[clamp(20px,4vw,50px)] animate-marquee will-change-transform group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <LogoGroup />
          <LogoGroup hidden />
        </div>
      </div>
    </section>
  );
};

export default TrustedService;
