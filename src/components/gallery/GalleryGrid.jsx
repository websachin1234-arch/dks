import GalleryImage from "@/components/common/GalleryImage";

export default function GalleryGrid() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <GalleryImage src="/assets/images/png/reviews/figma-screenshot.png" alt="DKS upholstery gallery" className="aspect-[16/9]" />
      </div>
    </section>
  );
}
