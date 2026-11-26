import Link from "next/link";
import { services } from "@/utils/helper";

export default function ServicesPage() {
  return (
    <main className="w-full px-4 py-15 md:py-20">
      <section className="mx-auto max-w-285">
        <h1 className="text-center text-[clamp(28px,4vw,48px)] font-semibold leading-121">
          Upholstery Services
        </h1>
        <p className="mx-auto mt-4 max-w-160 text-center text-base leading-163 text-dark-gray">
          Complete upholstery solutions for homes and businesses across
          Singapore.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="block rounded-xl border border-black/12 p-5 font-semibold transition-colors hover:border-custom-green hover:text-custom-green"
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
