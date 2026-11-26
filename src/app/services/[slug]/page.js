import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/utils/helper";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="w-full px-4 py-15 md:py-20">
      <section className="mx-auto max-w-285 text-center">
        <p className="text-base font-semibold text-custom-green">
          DKS Upholstery Services
        </p>
        <h1 className="mt-3 text-[clamp(28px,4vw,48px)] font-semibold leading-121">
          {service.name}
        </h1>
        <p className="mx-auto mt-4 max-w-160 text-base leading-163 text-dark-gray">
          Explore our {service.name.toLowerCase()} service, part of DKS
          Upholstery&apos;s complete solutions for homes and businesses in
          Singapore. Contact us to discuss your furniture and request a quote.
        </p>
        <Link
          href="/#quote-form"
          className="mt-8 inline-flex rounded-full bg-custom-green px-7 py-3 text-base font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
        >
          Get a Free Quote
        </Link>
      </section>
    </main>
  );
}
