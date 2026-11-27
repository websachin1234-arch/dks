"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const MOTION_OK = "(prefers-reduced-motion: no-preference)";

const Hero = () => {
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

          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

          tl.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.8, clearProps: "opacity" },
          )
            .fromTo(
              "[data-hero-title]",
              { y: isDesktop ? 40 : 24, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                clearProps: "transform,opacity",
              },
              0.15,
            )
            .fromTo(
              "[data-hero-copy]",
              { y: isDesktop ? 28 : 18, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.7,
                clearProps: "transform,opacity",
              },
              "-=0.5",
            );

          if (isDesktop) {
            gsap.to("[data-hero-content]", {
              y: -40,
              opacity: 0.2,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "bottom 70%",
                end: "bottom top",
                scrub: true,
              },
            });
          }
        },
      );

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="xl:min-h-80 w-full min-h-fit px-4 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${"/assets/images/webp/bloghero.webp"})`,
      }}
    >
      <div className="container max-w-102 mx-auto w-full">
        <div data-hero-content className="row w-full md:pt-20 md:pb-22 py-15">
          <h1
            data-hero-title
            className="text-[clamp(28px,4vw,48px)] leading-121 text-black font-semibold text-center"
          >
            Blog
          </h1>
          <p
            data-hero-copy
            className="text-dark-gray text-center text-base mt-4 leading-163"
          >
            Get expert upholstery tips, care guides, and style inspiration to
            keep your furniture fresh, stylish, and long lasting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
