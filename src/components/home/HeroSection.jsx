import { homepageCopy } from "@/utils/helper";

export default function HeroSection() {
  return (
    <section className="px-6 py-20 text-center">
      <h1 className="text-5xl font-semibold">
        {homepageCopy.simpleHero.heading}
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-gray-600">
        {homepageCopy.simpleHero.description}
      </p>
    </section>
  );
}
