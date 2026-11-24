import Image from "next/image";

export default function GalleryImage({ src, alt, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
    </div>
  );
}
