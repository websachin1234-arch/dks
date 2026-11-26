"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { services } from "@/utils/helper";

gsap.registerPlugin(ScrollToPlugin);

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pendingScroll = useRef(null);
  const scrollTween = useRef(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Gallery", href: "/#gallery" },
    { name: "FAQ", href: "/#faq" },
    { name: "Blog", href: "/blog" },
  ];

  const isActive = (link) =>
    link.name === "Home"
      ? pathname === "/"
      : link.href !== "/" &&
        !link.href.includes("#") &&
        pathname.startsWith(link.href);

  const animateScroll = (target) => {
    scrollTween.current?.kill();
    scrollTween.current = gsap.to(window, {
      scrollTo: { y: target, autoKill: true },
      duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? 0
        : 1,
      ease: "power2.inOut",
      overwrite: true,
    });
  };

  const handleSmoothNavigation = (event, href) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const destination = new URL(href, window.location.href);
    if (destination.origin !== window.location.origin) {
      return;
    }

    event.preventDefault();
    setOpen(false);
    setServicesOpen(false);

    const targetId = destination.hash
      ? decodeURIComponent(destination.hash.slice(1))
      : null;
    const route = `${destination.pathname}${destination.hash}`;

    if (destination.pathname === pathname) {
      pendingScroll.current = null;
      router.push(route, { scroll: false });
      animateScroll(
        targetId ? document.getElementById(targetId) || 0 : 0,
      );
      return;
    }

    pendingScroll.current = {
      pathname: destination.pathname,
      targetId,
    };
    router.push(route, { scroll: false });
  };

  useEffect(() => {
    const destination = pendingScroll.current;
    if (!destination || destination.pathname !== pathname) {
      return;
    }

    pendingScroll.current = null;
    animateScroll(
      destination.targetId
        ? document.getElementById(destination.targetId) || 0
        : 0,
    );
  }, [pathname]);

  useEffect(
    () => () => {
      scrollTween.current?.kill();
    },
    [],
  );

  return (
    <div className="relative">
      <div className="max-w-285 mx-auto px-4 py-3.75 flex items-center justify-between lg:justify-start lg:gap-27.75">
        <Link
          href="/"
          aria-label="DKS Upholstery home"
          onClick={(event) => handleSmoothNavigation(event, "/")}
        >
          <Image
            src="/assets/images/svg/logo.svg"
            alt="DKS Upholstery"
            width="193"
            height="41"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden lg:flex gap-8 items-center max-w-133 w-full border border-black/12 rounded-[46px] px-5 py-2 text-base font-normal leading-160"
        >
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  aria-haspopup="true"
                  className={`flex items-center text-nowrap gap-1 transition-colors duration-300 hover:text-custom-green-nav ${
                    isActive(link) ? "text-custom-green-nav font-semibold" : ""
                  }`}
                >
                  {link.name}
                  <Image
                    src="/assets/images/svg/arrow.svg"
                    alt=""
                    aria-hidden="true"
                    width="20"
                    height="20"
                  />
                </Link>
                <div className="absolute left-0 top-full z-50 hidden w-64 pt-3 group-hover:block group-focus-within:block">
                  <ul className="rounded-xl border border-black/12 bg-white p-2 shadow-lg">
                    <li>
                      <Link
                        href="/services"
                        className="block rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-light-green hover:text-custom-green-nav"
                      >
                        All Services
                      </Link>
                    </li>
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-light-green hover:text-custom-green-nav"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={(event) =>
                  handleSmoothNavigation(event, link.href)
                }
                className={`flex items-center text-nowrap gap-1 transition-colors duration-300 hover:text-custom-green-nav ${
                  isActive(link) ? "text-custom-green-nav font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            ),
          )}
        </nav>

        <Link
          href="/#quote-form"
          onClick={(event) =>
            handleSmoothNavigation(event, "/#quote-form")
          }
          className="hidden lg:block ml-4 bg-custom-green-nav text-white text-nowrap px-7 py-3 text-base font-semibold max-w-44.25 w-full rounded-full leading-160 text-center transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
        >
          Get Free Quote
        </Link>

        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => {
            setOpen((isOpen) => !isOpen);
            setServicesOpen(false);
          }}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md z-50 overflow-hidden transition-all duration-700 ease-in-out ${
          open
            ? "max-h-[80vh] overflow-y-auto opacity-100 border-t border-black/12"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-4 py-5">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.name}>
                <button
                  type="button"
                  onClick={() => setServicesOpen((isOpen) => !isOpen)}
                  aria-expanded={servicesOpen}
                  aria-controls="mobile-services-menu"
                  className={`flex w-full items-center gap-1 text-left text-base transition-colors duration-300 hover:text-custom-green-nav ${
                    isActive(link) ? "text-custom-green-nav font-semibold" : ""
                  }`}
                >
                  {link.name}
                  <Image
                    src="/assets/images/svg/arrow.svg"
                    alt=""
                    aria-hidden="true"
                    width="20"
                    height="20"
                    className={`transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <ul
                  id="mobile-services-menu"
                  className={`mt-2 flex flex-col gap-2 pl-4 ${
                    servicesOpen ? "" : "hidden"
                  }`}
                >
                  <li>
                    <Link
                      href="/services"
                      onClick={() => setOpen(false)}
                      className="block py-1 text-sm font-semibold transition-colors hover:text-custom-green-nav"
                    >
                      All Services
                    </Link>
                  </li>
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        onClick={() => {
                          setOpen(false);
                          setServicesOpen(false);
                        }}
                        className="block py-1 text-sm transition-colors hover:text-custom-green-nav"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={(event) =>
                  handleSmoothNavigation(event, link.href)
                }
                className={`flex items-center gap-1 text-base transition-colors duration-300 hover:text-custom-green-nav ${
                  isActive(link) ? "text-custom-green-nav font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            ),
          )}
          <Link
            href="/#quote-form"
            onClick={(event) =>
              handleSmoothNavigation(event, "/#quote-form")
            }
            className="bg-custom-green text-white px-7 py-3 text-base font-semibold w-full rounded-full leading-160 text-center"
          >
            Get Free Quote
          </Link>
        </div>
      </nav>
    </div>
  );
}
