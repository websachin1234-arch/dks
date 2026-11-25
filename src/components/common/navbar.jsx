import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-green-600">
          DKS
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link>
          <Link href="/services" className="text-gray-700 hover:text-green-600">Our Services</Link>
          <Link href="/gallery" className="text-gray-700 hover:text-green-600">Gallery</Link>
          <Link href="/about" className="text-gray-700 hover:text-green-600">About</Link>
        </div>
        <Link href="/contact" className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}