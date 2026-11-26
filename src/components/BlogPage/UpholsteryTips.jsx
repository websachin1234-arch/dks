import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/utils/helper";

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

const ImageTile = ({ src, alt }) => (
  <div className="group relative w-full aspect-364/312 overflow-hidden rounded-2xl">
    <Image
      src={src}
      alt={alt}
      fill
      sizes={SIZES}
      className="object-cover cursor-pointer transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
    />
  </div>
);

const PostCard = ({ post }) => (
  <article className="relative flex h-full w-full flex-col items-center rounded-2xl bg-white p-[clamp(20px,2.4vw,28px)] text-center transition-all duration-300 ease-in-out hover:shadow-blogcard sm:items-start sm:text-left">
    <h2 className="text-balance text-[clamp(18px,1.2vw+12px,22px)] font-semibold leading-[1.2] text-black">
      {post.title}
    </h2>
    <p className="mt-2 text-pretty text-[clamp(14px,1vw+10px,18px)] leading-[1.6] text-dark-gray">
      {post.description}
    </p>

    <Link
      href={`/blog/${post.slug}`}
      className="group/link mt-auto inline-flex items-center gap-1 pt-[clamp(24px,4vw,40px)] text-base font-medium text-custom-green after:absolute after:inset-0 after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-custom-green"
    >
      Learn More
      <Image
        src="/assets/images/svg/green-arrow.svg"
        alt=""
        aria-hidden="true"
        width={24}
        height={24}
        className="transition-transform duration-300 group-hover/link:translate-x-1 motion-reduce:transition-none"
      />
    </Link>
  </article>
);

const UpholsteryTips = () => {
  const [firstImage, ...restImages] = tileImages;

  return (
    <section className="w-full min-h-fit lg:pt-30 lg:pb-35 md:py-20 py-15">
      <Image
        src="/assets/images/svg/design-right.svg"
        className="absolute top-1/2 -z-10"
        alt="design"
        width="189"
        height="1204"
      />
      <div className="mx-auto w-full max-w-293 px-4">
        <div className="flex w-full flex-col items-center gap-[clamp(12px,2vw,30px)] text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <h1 className="w-full max-w-100.75 text-balance text-[clamp(26px,3.2vw+8px,38px)] font-semibold leading-[1.21] lg:max-w-105">
            Upholstery Tips,{" "}
            <span className="text-custom-green">Care &amp; Inspiration</span>
          </h1>

          <p className="w-full max-w-130 text-pretty text-[clamp(14px,1.2vw+9px,16px)] leading-[1.6] text-dark-gray lg:max-w-106.75">
            Refresh your sofa with the right fabrics, foam, and expert advice
            plus a breakdown of reupholstery costs in Singapore.
          </p>
        </div>

        <div className="mt-[clamp(28px,4vw,50px)] grid w-full grid-cols-1 gap-[clamp(16px,2vw,24px)] sm:grid-cols-2 lg:grid-cols-3">
          <ImageTile src={firstImage.src} alt={firstImage.alt} />

          {blogPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}

          {restImages.map((img) => (
            <ImageTile key={img.src} src={img.src} alt={img.alt} />
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link
            href={`/blog/${blogPosts[0].slug}`}
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
