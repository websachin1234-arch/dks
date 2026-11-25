import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-6 py-8 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} DKS Upholstery</p>
        <Link href="/contact" className="hover:text-green-600">Contact us</Link>
      </div>
    </footer>
  );
}
