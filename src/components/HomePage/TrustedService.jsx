import Image from "next/image";
import { homepageCopy, trustedClientLogos } from "@/utils/helper";

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
  return (
    <section className="min-h-fit lg:pb-35 lg:pt-20 md:py-20 py-15 w-full overflow-hidden">
      <h1 className="text-center font-semibold italic leading-160 text-[clamp(16px,2vw,20px)] text-custom-gray px-4">
        {homepageCopy.trustedServices.heading}
      </h1>

      <div className="group mt-5 md:mt-8 w-full max-w-[2710px] mx-auto overflow-hidden opacity-90">
        <div className="flex w-max gap-[clamp(20px,4vw,50px)] animate-marquee will-change-transform group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <LogoGroup />
          <LogoGroup hidden />
        </div>
      </div>
    </section>
  );
};

export default TrustedService;
