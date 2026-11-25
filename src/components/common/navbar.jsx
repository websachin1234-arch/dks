"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoImg from "../../../public/images/HomePage/png/logo.png";
import ArrowImg from "../../../public/images/HomePage/svg/arrow.svg";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", hasArrow: false },
    { name: "About Us", href: "/about", hasArrow: false },
    { name: "Services", href: "/services", hasArrow: true },
    { name: "Gallery", href: "/gallery", hasArrow: false },
    { name: "FAQ", href: "/faq", hasArrow: false },
    { name: "Blog", href: "/blog", hasArrow: false },
  ];

  return (
    <div className="relative">
      <div className="max-w-285 mx-auto px-4 py-3.75 flex items-center justify-between lg:justify-start lg:gap-27.75">
        {/* Logo */}
        <Link href="/">
          <Image src={LogoImg} alt="logo" width="193" height="41" />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex gap-8 items-center max-w-133 w-full border border-black/12 rounded-[46px] px-5 py-2 text-base font-normal leading-160">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-1 transition-colors duration-300 hover:text-custom-green ${
                pathname === link.href ? "text-custom-green font-semibold" : ""
              }`}
            >
              {link.name}
              {link.hasArrow && <Image src={ArrowImg} alt="" />}
            </Link>
          ))}
        </div>

        {/* Desktop button */}
        <button className="hidden lg:block ml-4 bg-custom-green text-white px-7 py-3 text-base font-semibold max-w-44.25 w-full rounded-full leading-160 transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
          Get Free Quote
        </button>

        {/* Hamburger (mobile) */}
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
<div
  className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md z-50 overflow-hidden transition-all duration-700 ease-in-out ${
    open
      ? "max-h-125 opacity-100 border-t border-black/12"
      : "max-h-0 opacity-0"
  }`}
>
  <div className="flex flex-col gap-4 px-4 py-5">
    {navLinks.map((link) => (
      <Link
        key={link.name}
        href={link.href}
        onClick={() => setOpen(false)}
        className={`flex items-center gap-1 text-base transition-colors duration-300 hover:text-custom-green ${
          pathname === link.href ? "text-custom-green font-semibold" : ""
        }`}
      >
        {link.name}
        {link.hasArrow && <Image src={ArrowImg} alt="" />}
      </Link>
    ))}
    <button className="bg-custom-green text-white px-7 py-3 text-base font-semibold w-full rounded-full leading-160 cursor-pointer">
      Get Free Quote
    </button>
  </div>
</div>
    </div>
  );
}