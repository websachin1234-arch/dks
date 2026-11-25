import Image from "next/image";

const logos = [
  { src: "/assets/images/svg/nightclub.svg", w: 111, h: 37 },
  { src: "/assets/images/svg/smu.svg", w: 111, h: 37 },
  { src: "/assets/images/svg/tsuiwah.svg", w: 85, h: 69 },
  { src: "/assets/images/svg/education.svg", w: 85, h: 69 },
  { src: "/assets/images/svg/pancakes.svg", w: 64, h: 62 },
  { src: "/assets/images/svg/ronzet.svg", w: 124, h: 36 },
  { src: "/assets/images/svg/parliament.svg", w: 142, h: 77 },
  { src: "/assets/images/svg/apsn-logo.svg", w: 152, h: 40 },
  { src: "/assets/images/svg/dnata.svg", w: 123, h: 55 },
  { src: "/assets/images/svg/grand mercure.svg", w: 114, h: 66 },
  { src: "/assets/images/svg/chloe.svg", w: 121, h: 40 },
  { src: "/assets/images/svg/embassy.svg", w: 85, h: 78 },
];

const LogoGroup = ({ hidden = false }) => (
  <div
    aria-hidden={hidden || undefined}
    className="flex shrink-0 items-center gap-[clamp(20px,4vw,50px)]"
  >
    {logos.map(({ src, w, h }, i) => (
      <div
        key={i}
        className="relative cursor-pointer aspect-180/80 w-[clamp(110px,14vw,180px)] shrink-0 overflow-clip"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: `${(w / 180) * 100}%`, height: `${(h / 80) * 100}%` }}
        >
          <Image
            src={src}
            alt={hidden ? "" : "Client logo"}
            sizes="152px"
            width={w}
            height={h}
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
        Trusted Our Service
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
