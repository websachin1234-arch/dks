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
          <Link href="/blog" className="text-gray-700 hover:text-green-600">Blog</Link>
        </div>
      </div>
    </nav>
  );
}
