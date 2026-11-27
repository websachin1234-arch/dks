"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "/", hasArrow: false },
    { name: "About Us", href: "/about", hasArrow: false },
    { name: "Services", href: "/services", hasArrow: true },
    { name: "Gallery", href: "/gallery", hasArrow: false },
    { name: "FAQ", href: "/faq", hasArrow: false },
    { name: "Blog", href: "/blog", hasArrow: false },
  ];

  const servicesLinks = [
    { name: "Service One", href: "/services/service-one" },
    { name: "Service Two", href: "/services/service-two" },
    { name: "Service Three", href: "/services/service-three" },
    { name: "Service Four", href: "/services/service-four" },
  ];

  const closeSidebar = () => {
    setOpen(false);
    setMobileServicesOpen(false);
  };

  const itemAnim = (i) => ({
    className: `transition-all duration-500 ease-out ${
      open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
    }`,
    style: { transitionDelay: open ? `${180 + i * 70}ms` : "0ms" },
  });

  useEffect(() => {
    if (open) {
      const prevBody = document.body.style.overflow;
      const prevHtml = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevBody;
        document.documentElement.style.overflow = prevHtml;
      };
    }
  }, [open]);

  useEffect(() => {
    const handleClick = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };

    const handleKey = (e) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setOpen(false);
        setMobileServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    const handleChange = (e) => {
      if (e.matches) {
        setOpen(false);
        setMobileServicesOpen(false);
      }
    };

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <div className="relative">
      <div className="max-w-285 mx-auto px-4 py-3.75 flex items-center justify-between lg:justify-start lg:gap-27.75">
        <Link href="/">
          <Image
            src="/assets/images/svg/logo.svg"
            alt="logo"
            width="193"
            height="41"
          />
        </Link>

        <div className="hidden lg:flex gap-8 items-center max-w-133 w-full border border-black/12 rounded-[46px] px-5 py-2 text-base font-normal leading-160">
          {navLinks.map((link) =>
            link.hasArrow ? (
              <div key={link.name} ref={servicesRef} className="relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="flex items-center text-nowrap gap-1 cursor-pointer transition-colors duration-300 hover:text-custom-green"
                >
                  {link.name}
                  <Image
                    src="/assets/images/svg/arrow.svg"
                    alt="arrow"
                    width="20"
                    height="20"
                    className={`transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-60 z-50 transition-all duration-300 ${
                    servicesOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="bg-white border border-black/12 rounded-2xl shadow-lg py-2 overflow-hidden">
                    {servicesLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setServicesOpen(false)}
                        className={`block px-5 py-2.5 text-base transition-colors duration-300 hover:bg-black/5 hover:text-custom-green ${
                          pathname === item.href ? "text-custom-green" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center text-nowrap gap-1 transition-colors duration-300 hover:text-custom-green ${
                  pathname === link.href
                    ? "text-custom-green font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ),
          )}
        </div>

        <button className="hidden lg:block ml-4 relative overflow-hidden active:scale-80 group bg-custom-green text-white text-nowrap px-7 py-3 text-base font-semibold max-w-44.25 w-full rounded-full leading-160 cursor-pointer border border-transparent transition-all duration-500 hover:border-[#B7F5D5] hover:shadow-[0_0_0_3px_rgba(183,245,213,0.12),0_8px_30px_rgba(0,0,0,0.12)]">
          <span className="relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            Get Free Quote
          </span>

          <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(190,255,220,0.4),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

          <span className="absolute inset-y-0 left-[-80%] w-1/2 skew-x-[-25deg] bg-linear-to-r from-transparent via-white/30 to-transparent group-hover:left-[140%] transition-all duration-1000 ease-in-out"></span>
        </button>

        <button
          className="lg:hidden relative z-60 w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
          onClick={() => (open ? closeSidebar() : setOpen(true))}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`block h-0.5 w-7 bg-current rounded-full transition-all duration-300 ease-in-out ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-7 bg-current rounded-full transition-all duration-300 ease-in-out ${
              open ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-7 bg-current rounded-full transition-all duration-300 ease-in-out ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        onClick={closeSidebar}
        aria-hidden="true"
        className={`lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] transition-all duration-500 ease-in-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <aside
        aria-hidden={!open}
        className={`lg:hidden fixed top-0 right-0 h-dvh w-[70%] bg-white z-50 shadow-2xl overflow-y-auto transition-all duration-500 ease-in-out ${
          open ? "translate-x-0 visible" : "translate-x-full invisible"
        }`}
      >
        <div className="relative min-h-full flex flex-col overflow-hidden">
          <div className="pointer-events-none absolute -bottom-20 -right-20 size-56 rounded-full bg-custom-green/10" />
          <div className="pointer-events-none absolute -bottom-6 -left-10 size-28 rounded-full bg-custom-green/10" />

          <div className="h-17.75 px-6 flex items-center border-b border-black/12">
            <span className="text-sm text-black/50">Menu</span>
          </div>

          <nav className="relative flex flex-col px-6 pt-4">
            {navLinks.map((link, i) => {
              const anim = itemAnim(i);

              return (
                <div
                  key={link.name}
                  className={`${anim.className} border-b border-black/10`}
                  style={anim.style}
                >
                  {link.hasArrow ? (
                    <div className="flex flex-col items-center">
                      <button
                        type="button"
                        aria-expanded={mobileServicesOpen}
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                        className="flex items-center justify-center gap-1 py-4 text-lg cursor-pointer transition-colors duration-300 hover:text-custom-green"
                      >
                        {link.name}
                        <Image
                          src="/assets/images/svg/arrow.svg"
                          alt="arrow"
                          width="20"
                          height="20"
                          className={`transition-transform duration-300 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
                          mobileServicesOpen
                            ? "max-h-96 opacity-100 mb-4"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="flex flex-col items-center gap-3 rounded-2xl bg-black/4 py-4">
                          {servicesLinks.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={closeSidebar}
                              className={`text-base transition-colors duration-300 hover:text-custom-green ${
                                pathname === item.href
                                  ? "text-custom-green"
                                  : "text-black/70"
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={closeSidebar}
                      className={`block py-4 text-center text-lg transition-colors duration-300 hover:text-custom-green ${
                        pathname === link.href
                          ? "text-custom-green font-semibold"
                          : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          <div
            className={`relative mt-auto flex flex-col items-center gap-5 px-6 pt-8 pb-8 transition-all duration-500 ease-out ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: open ? `${180 + navLinks.length * 70}ms` : "0ms",
            }}
          >
            <button
              onClick={closeSidebar}
              className="relative overflow-hidden active:scale-80 group bg-custom-green text-white px-7 py-3 text-base font-semibold w-full rounded-full leading-160 cursor-pointer border border-transparent transition-all duration-500 hover:border-[#B7F5D5] hover:shadow-[0_0_0_3px_rgba(183,245,213,0.12),0_8px_30px_rgba(0,0,0,0.12)]"
            >
              <span className="relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                Get Free Quote
              </span>

              <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(190,255,220,0.4),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

              <span className="absolute inset-y-0 left-[-80%] w-1/2 skew-x-[-25deg] bg-linear-to-r from-transparent via-white/30 to-transparent group-hover:left-[140%] transition-all duration-1000 ease-in-out"></span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
