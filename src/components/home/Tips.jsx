import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    image: "/assets/images/webp/men-working.webp",
    alt: "Craftsperson working on an upholstered sofa",
  },
  {
    image: "/assets/images/webp/women-working.webp",
    alt: "Craftsperson restoring an upholstered chair",
  },
];

export default function Tips() {
  return (
    <section className="w-full bg-white text-[#111111]">
      <div className="mx-auto flex min-h-139.5 max-w-295  flex-col pb-20 px-5 lg:pb-35">
        <div className="w-full">
          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-start justify-between">
            <div>
              <h1 className="max-w-112.75 font-semibold font-poppins text-[clamp(28px,4vw,48px)] text-rich-black leading-120 ">
                Upholstery Tips,{" "}
                <span className="text-custom-green">Care & Inspiration</span>
              </h1>
            </div>
            <p className="max-w-106.75 text-base leading-160 font-normal text-dark-gray">
              Refresh your sofa with the right fabrics, foam, and expert advice
              plus a breakdown of reupholstery costs in Singapore.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <Image
              src={articles[0].image}
              alt={articles[0].alt}
              width={800}
              height={686}
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="aspect-[1.17] w-full rounded-2xl object-cover"
            />
            <article className="flex  aspect-[1.17] flex-col rounded-2xl transition-all duration-300 ease-in-out cursor-pointer hover:shadow-blogcard bg-white p-6">
              <h2 className="text-xl max-w-81 font-semibold leading-120 text-rich-black">
                Best Upholstery Fabrics 2025
              </h2>
              <p className="mt-1.5 max-w-81 text-lg leading-160 text-[#555555] font-normal">
                Explore the top trending and durable fabrics for sofas and
                chairs in 2025.
              </p>
              <a
                href="/blog"
                className="mt-auto inline-flex w-fit items-center gap-1 leading-[145%] text-base font-semibold text-custom-green"
              >
                {" "}
                Learn More
                <Image
                  src="/assets/images/svg/green-arrow.svg"
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden="true"
                />
              </a>
            </article>
            <Image
              src={articles[1].image}
              alt={articles[1].alt}
              width={800}
              height={686}
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="aspect-[1.17] w-full rounded-2xl object-cover"
            />
          </div>
          <div className="mt-7.5 flex justify-center">
            <Link href="/blog">
              <button
                type="button"
                className="relative overflow-hidden active:scale-80 group rounded-full bg-[#19AE1A] px-7 py-3 text-base leading-160 font-semibold text-white border border-transparent cursor-pointer transition-all duration-500 hover:border-[#B7F5D5] hover:shadow-[0_0_0_3px_rgba(183,245,213,0.12),0_8px_30px_rgba(0,0,0,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <span className="relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  Show More
                </span>

                <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(190,255,220,0.4),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

                <span className="absolute inset-y-0 left-[-80%] w-1/2 skew-x-[-25deg] bg-linear-to-r from-transparent via-white/30 to-transparent group-hover:left-[140%] transition-all duration-1000 ease-in-out"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
