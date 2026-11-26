import Link from "next/link";

export default function CTA() {
  return (
    <section className="px-6 py-16 text-center">
      <Link href="/contact" className="rounded-lg bg-green-600 px-6 py-3 text-white">Contact us</Link>
    </section>
  );
}
