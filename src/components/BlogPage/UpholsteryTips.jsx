"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { blogPosts } from "@/utils/helper";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const MOTION_OK = "(prefers-reduced-motion: no-preference)";

const SIZES = "(min-width: 1024px) 364px, (min-width: 640px) 50vw, 100vw";

const tileImages = [
  {
    src: "/assets/images/webp/men-working.webp",
    alt: "Men working on upholstery",
  },
  {
    src: "/assets/images/webp/women-working.webp",
    alt: "Women working on upholstery",
  },
  { src: "/assets/images/webp/sofa.webp", alt: "Reupholstered sofa" },
  { src: "/assets/images/webp/bored.webp", alt: "Sofa foam and padding" },
  { src: "/assets/images/webp/pillow.webp", alt: "Upholstered pillow" },
];

const TipCard = ({ src, alt, post }) => (
  <Link
    href={`/blog/${post.slug}`}
    aria-label={`Read ${post.title}`}
    data-tile
    className="group relative block w-full aspect-364/312 overflow-hidden rounded-2xl transition-shadow duration-300 ease-in-out hover:shadow-blogcard focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-custom-green"
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes={SIZES}
      className="object-cover transition-opacity duration-500 ease-out lg:group-hover:opacity-0 lg:group-focus-visible:opacity-0 motion-reduce:transition-none"
    />
    <div className="absolute inset-0 flex flex-col justify-end bg-white p-[clamp(20px,2.4vw,28px)] text-left opacity-100 transition-opacity duration-500 ease-out lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100 motion-reduce:transition-none max-lg:bg-gradient-to-t max-lg:from-black/85 max-lg:via-black/35 max-lg:to-transparent">
      <h2 className="text-balance text-[clamp(18px,1.2vw+12px,22px)] font-semibold leading-[1.2] text-black max-lg:text-white">
        {post.title}
      </h2>
      <p className="mt-2 text-pretty text-[clamp(14px,1vw+10px,18px)] leading-[1.6] text-dark-gray max-lg:text-white">
        {post.description}
      </p>
      <span className="mt-auto inline-flex items-center gap-1 pt-[clamp(24px,4vw,40px)] text-base font-medium text-custom-green max-lg:text-white">
        Learn More
        <Image
          src="/assets/images/svg/green-arrow.svg"
          alt=""
          aria-hidden="true"
          width={24}
          height={24}
          className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
        />
      </span>
    </div>
  </Link>
);

const ImageTile = ({ src, alt, post }) => (
  <TipCard src={src} alt={alt} post={post} />
);

const PostCard = ({ post }) => (
  <TipCard src={tileImages[0].src} alt={tileImages[0].alt} post={post} />
);

const UpholsteryTips = () => {
  const [firstImage, ...restImages] = tileImages;
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: `(min-width: 1024px) and ${MOTION_OK}`,
          isMobile: `(max-width: 1023px) and ${MOTION_OK}`,
        },
        (ctx) => {
          const { isDesktop } = ctx.conditions;
          const dist = isDesktop ? 50 : 28;

          gsap
            .timeline({
              defaults: { ease: "power3.out" },
              scrollTrigger: {
                trigger: sectionRef.current,
                start: isDesktop ? "top 75%" : "top 85%",
                once: true,
              },
            })
            .from("[data-tips-title]", {
              y: dist,
              opacity: 0,
              duration: 0.8,
              clearProps: "transform,opacity",
            })
            .from(
              "[data-tips-copy]",
              {
                y: dist * 0.7,
                opacity: 0,
                duration: 0.7,
                clearProps: "transform,opacity",
              },
              "-=0.5",
            );

          gsap.set("[data-tile]", { y: dist, opacity: 0 });

          ScrollTrigger.batch("[data-tile]", {
            start: isDesktop ? "top 88%" : "top 92%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.12,
                overwrite: true,
                clearProps: "transform,opacity",
              }),
          });

          gsap.from("[data-tips-cta]", {
            y: dist * 0.6,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: "[data-tips-cta]",
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
      className="w-full min-h-fit lg:pt-30 lg:pb-35 md:py-20 py-15"
    >
      <Image
        src="/assets/images/svg/design-right.svg"
        className="absolute top-1/2 -z-10"
        alt="design"
        width="189"
        height="1204"
      />
      <div className="mx-auto w-full max-w-293 px-4">
        <div className="flex w-full flex-col items-center gap-[clamp(12px,2vw,30px)] text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <h1
            data-tips-title
            className="w-full max-w-100.75 text-balance text-[clamp(26px,3.2vw+8px,38px)] font-semibold leading-[1.21] lg:max-w-105"
          >
            Upholstery Tips,{" "}
            <span className="text-custom-green">Care &amp; Inspiration</span>
          </h1>

          <p
            data-tips-copy
            className="w-full max-w-130 text-pretty text-[clamp(14px,1.2vw+9px,16px)] leading-[1.6] text-dark-gray lg:max-w-106.75"
          >
            Refresh your sofa with the right fabrics, foam, and expert advice
            plus a breakdown of reupholstery costs in Singapore.
          </p>
        </div>

        <div className="mt-[clamp(28px,4vw,50px)] grid w-full grid-cols-1 gap-[clamp(16px,2vw,24px)] sm:grid-cols-2 lg:grid-cols-3">
          <ImageTile src={firstImage.src} alt={firstImage.alt} post={blogPosts[0]} />

          {blogPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}

          {restImages.map((img) => (
            <ImageTile
              key={img.src}
              src={img.src}
              alt={img.alt}
              post={blogPosts[0]}
            />
          ))}
        </div>

        <div data-tips-cta className="flex items-center justify-center">
          <Link
            href="/blog"
            className="relative md:mt-7.5 mt-4 overflow-hidden active:scale-80 group rounded-full bg-custom-green px-7 py-3 text-base leading-160 font-semibold text-white border border-transparent cursor-pointer transition-all duration-500 hover:border-[#B7F5D5] hover:shadow-[0_0_0_3px_rgba(183,245,213,0.12),0_8px_30px_rgba(0,0,0,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span className="relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              Show More
            </span>

            <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(190,255,220,0.4),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

            <span className="absolute inset-y-0 left-[-80%] w-1/2 skew-x-[-25deg] bg-linear-to-r from-transparent via-white/30 to-transparent group-hover:left-[140%] transition-all duration-1000 ease-in-out"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpholsteryTips;
