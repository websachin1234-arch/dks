import Image from "next/image";

const articles = [
  {
    image: "/images/png/spectacles-man.png",
    alt: "Craftsperson working on an upholstered sofa",
  },
  {
    image: "/images/png/women.png",
    alt: "Craftsperson restoring an upholstered chair",
  },
];

export default function Tips() {
  return (
    <section className="w-full bg-white text-[#111111]">
      <div className="mx-auto flex min-h-[558px] max-w-[1180px]  flex-col py-20 px-5 lg:py-[140px]">
        <div className="w-full">
          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-start justify-between">
            <div>
              <h1 className="max-w-[451px] font-semibold font-poppins text-5xl text-[#010101] leading-[120%] ">Upholstery Tips, <span className="text-[#19AE1A]">Care & Inspiration</span></h1>
            </div>
            <p className="max-w-[427px] text-base leading-[160%] font-normal text-[#4D4D4D]">
              Refresh your sofa with the right fabrics, foam, and expert advice plus a breakdown of reupholstery costs in Singapore.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <Image src={articles[0].image} alt={articles[0].alt} width={800} height={686} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="aspect-[1.17] w-full rounded-2xl object-cover" />
            <article className="flex  aspect-[1.17] flex-col rounded-2xl bg-white p-6">
              <h2 className="text-xl w-[324px] font-semibold leading-[120%] text-[#010101]">
                Best Upholstery Fabrics 2025
              </h2>
              <p className="mt-1.5 w-[324px] text-lg leading-[160%] text-[#555555] font-normal">
                Explore the top trending and durable fabrics for sofas and chairs in 2025.
              </p>
              <a href="/blog" className="mt-auto inline-flex w-fit items-center gap-1 leading-[145%] text-base font-semibold text-[#19AE1A] transition-colors hover:text-green-700" > Learn More
                <Image src="/images/svg/green-arrow.svg" alt="" width={24} height={24} aria-hidden="true" />
              </a>
            </article>
            <Image src={articles[1].image} alt={articles[1].alt} width={800} height={686} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="aspect-[1.17] w-full rounded-2xl object-cover" />
          </div>
          <div className="mt-[30px] flex justify-center">
            <button type="button" className="rounded-full bg-[#19AE1A] px-7 py-3 text-base leading-[160%] font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" >
              Show More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}