"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ==================== FOOTER MAP DATA ====================

const FOOTER_NAV = [
    "Home",
    "Services",
    "Gallery",
    "About Us",
    "Blog",
    "FAQs",
    "Contact",
];

const FOOTER_GALLERY = [
    "/assets/images/png/footer_img.png",
    "/assets/images/png/footer_img_1.png",
    "/assets/images/png/footer_img_2.png",
    "/assets/images/png/footer_img_3.png",
    "/assets/images/png/footer_img_4.png",
    "/assets/images/png/footer_img_5.png",
];

const FOOTER_SERVICES_1 = [
    "Reupholstery",
    "Covers & Cushions",
    "Foam & Filling",
];

const FOOTER_SERVICES_2 = [
    "Beds & Headboards",
    "Built Ins",
    "Custom Furniture",
];

const FOOTER_SERVICES_3 = [
    "Repairs & On Site",
    "Outdoor & Commercial",
    "Cleaning",
    "Revarnishing",
];

// ==================== COMPONENT ====================

const Footer = () => {
    const footerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 1025px)", () => {
                const leftItems = gsap.utils.toArray(".footer-left-animate");

                const rightItems = gsap.utils.toArray(".footer-right-animate");

                const galleryItems = gsap.utils.toArray(".footer-gallery-item");

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 82%",
                        once: true,
                    },
                });

                tl.fromTo(
                    leftItems,
                    {
                        y: 35,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        stagger: 0.12,
                        ease: "power3.out",
                    },
                )
                    .fromTo(
                        rightItems,
                        {
                            y: 35,
                            opacity: 0,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.7,
                            stagger: 0.08,
                            ease: "power3.out",
                        },
                        "-=0.4",
                    )
                    .fromTo(
                        galleryItems,
                        {
                            y: 25,
                            opacity: 0,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.55,
                            stagger: 0.07,
                            ease: "power3.out",
                        },
                        "-=0.3",
                    );

                tl.eventCallback("onComplete", () => {
                    gsap.set(footerRef.current, {
                        clearProps: "transform",
                    });

                    gsap.set(
                        footerRef.current.querySelectorAll(
                            ".footer-left-animate, .footer-right-animate, .footer-gallery-item",
                        ),
                        {
                            clearProps: "opacity,transform,visibility",
                        },
                    );
                });

                galleryItems.forEach((item) => {
                    const img = item.querySelector("img");

                    if (!img) return;

                    item.addEventListener("mouseenter", () => {
                        gsap.to(img, {
                            scale: 1.06,
                            duration: 0.45,
                            ease: "power2.out",
                            overwrite: true,
                        });
                    });

                    item.addEventListener("mouseleave", () => {
                        gsap.to(img, {
                            scale: 1,
                            duration: 0.5,
                            ease: "power3.out",
                            overwrite: true,
                        });
                    });
                });
            });

            mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
                const items = gsap.utils.toArray(
                    ".footer-left-animate, .footer-right-animate, .footer-gallery-item",
                );

                gsap.fromTo(
                    items,
                    {
                        opacity: 0,
                        y: 25,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.65,
                        stagger: 0.08,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: footerRef.current,
                            start: "top 88%",
                            once: true,
                        },
                        clearProps: "opacity,transform,visibility",
                    },
                );
            });

            mm.add("(max-width: 768px)", () => {
                const items = gsap.utils.toArray(
                    ".footer-left-animate, .footer-right-animate, .footer-gallery-item",
                );

                gsap.fromTo(
                    items,
                    {
                        opacity: 0,
                        y: 20,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.55,
                        stagger: 0.06,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: footerRef.current,
                            start: "top 92%",
                            once: true,
                        },
                        clearProps: "opacity,transform,visibility",
                    },
                );
            });

            mm.add("(prefers-reduced-motion: reduce)", () => {
                gsap.set(footerRef.current.querySelectorAll("*"), {
                    clearProps: "opacity,transform,visibility,clipPath",
                });
            });

            return () => {
                mm.revert();
            };
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="bg-soft-ivory overflow-x-hidden">
            <div
                className="
                    footer-container
                    max-w-314.25
                    px-5
                    mx-auto
                    pt-22.5
                    pb-10

                    max-xl:pt-20
                    max-lg:pt-16
                    max-md:pt-14
                    max-sm:pt-12
                "
            >
                <div
                    className="
                        flex
                        justify-between
                        gap-5
                        xl:gap-10

                        max-lg:flex-col
                        max-lg:gap-10

                        max-md:gap-8
                        max-sm:gap-7
                    "
                >
                    <div
                        className="
                            max-w-133.75
                            w-full
                            footer-left-animate

                            max-lg:max-w-full
                        "
                    >
                        <div
                            className="
                                border-b
                                border-soft-black
                                mb-5

                                max-md:mb-4
                            "
                        >
                            <a href="#" className="inline-block">
                                <Image
                                    width={193}
                                    height={41}
                                    src="/assets/images/svg/logo.svg"
                                    alt="DKS International"
                                    className="
                                        w-48.25
                                        h-auto

                                        max-sm:w-40
                                    "
                                />
                            </a>

                            <p
                                className="
                                    mt-6
                                    mb-8
                                    font-normal
                                    text-base
                                    text-dark-gray
                                    leading-163

                                    max-md:mt-5
                                    max-md:mb-6

                                    max-sm:text-sm
                                "
                            >
                                At DKS, we specialize in expert upholstery, custom furniture,
                                and repairs combining craftsmanship with care to bring new life
                                to your furniture.
                            </p>
                        </div>

                        <div
                            className="
                                flex
                                max-w-133.75
                                w-full
                                justify-between
                                gap-5

                                max-md:flex-col
                                max-md:gap-6

                                max-sm:gap-5
                            "
                        >
                            {/* Address / Social */}

                            <div
                                className="
                                    max-w-58.25
                                    w-full

                                    max-md:max-w-full
                                "
                            >
                                <div
                                    className="
                                        flex
                                        gap-2
                                        mb-6.75

                                        max-md:mb-5
                                    "
                                >
                                    <div className="min-w-5 h-5">
                                        <Image
                                            src="/assets/images/svg/Location_icon.svg"
                                            alt="location"
                                            width="11"
                                            height="16"
                                        />
                                    </div>

                                    <p
                                        className="
                                            font-normal
                                            text-base
                                            text-dark-gray
                                            leading-163

                                            max-sm:text-sm
                                        "
                                    >
                                        Defu Industrial Estate Address: 37 Defu Lane 10, #01/41,
                                        Singapore 539214
                                    </p>
                                </div>

                                <div
                                    className="
                                        flex
                                        justify-between
                                        items-center
                                        gap-4

                                        max-[420px]:flex-col
                                        max-[420px]:items-start
                                    "
                                >
                                    <div className="flex gap-2 items-center">
                                        <div className="w-5 h-5 flex items-center">
                                            <Image
                                            width={16}
                                            height={14}
                                            src="/assets/images/svg/follow_icon.svg"
                                        />
                                        </div>

                                        <p className="text-rich-black font-medium text-base max-sm:text-sm leading-163">
                                            Follow Us
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <a href="https://www.instagram.com" target="_blank">
                                            <div className="w-5 h-5">
                                                <Image
                                            width={20}
                                            height={20}
                                            src="/assets/images/svg/instagram_icon.svg"
                                        />
                                            </div>
                                        </a>

                                        <a href="https://www.facebook.com/" target="_blank">
                                            <div className="w-5 h-5">
                                                <Image
                                            width={20}
                                            height={20}
                                            src="/assets/images/svg/facebook_icon.svg"
                                        />
                                            </div>
                                        </a>

                                        <a href="https://www.linkedin.com   " target="_blank">
                                            <div className="w-5 h-5">
                                                <Image
                                            width={20}
                                            height={20}
                                            src="/assets/images/svg/linkdin_icon.svg"
                                        />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Contact */}

                            <div
                                className="
                                    max-w-61
                                    w-full

                                    max-md:max-w-full
                                "
                            >
                                <div className="flex gap-2 mb-2.25 items-center">
                                    <div className="w-5 h-5 shrink-0 flex justify-center items-center">
                                        <Image
                                            width={16}
                                            height={16}
                                            src="/assets/images/svg/whatsapp_icon.svg"
                                        />
                                    </div>

                                    <div className="flex flex-wrap">
                                        <a
                                            href="tel:98385685"
                                            className="text-dark-gray text-base leading-163 max-sm:text-sm transition-all duration-300 hover:text-vivid-green"
                                        >
                                            98385685,
                                        </a>

                                        <a
                                            href="tel:93832006"
                                            className="text-dark-gray text-base leading-163 max-sm:text-sm transition-all duration-300 hover:text-vivid-green"
                                        >
                                            93832006
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-2 mb-2.25 items-center">
                                    <div className="w-5 h-5 shrink-0 flex items-center">
                                        <Image
                                            width={15}
                                            height={15}
                                            src="/assets/images/svg/coll_icon.svg"
                                        />
                                    </div>

                                    <a
                                        href="tel:62844186"
                                        className="text-dark-gray text-base leading-163 max-sm:text-sm transition-all duration-300 hover:text-vivid-green"
                                    >
                                        62844186
                                    </a>
                                </div>

                                <div className="flex gap-2 mb-2.25 items-start">
                                    <div className="w-5 h-5 shrink-0 items-center flex">
                                        <Image
                                            width={13}
                                            height={13}
                                            src="/assets/images/svg/dm_icon.svg"
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <a
                                            href="mailto:info@dksinternational.com"
                                            className="
                                                text-dark-gray
                                                text-base
                                                leading-163
                                                break-all
                                                max-sm:text-sm
                                                transition-all
                                                duration-300
                                                hover:text-vivid-green
                                            "
                                        >
                                            info@dksinternational.com
                                        </a>

                                        <br />

                                        <a
                                            href="mailto:dks.int@live.com"
                                            className="
                                                text-dark-gray
                                                text-base
                                                leading-163
                                                break-all
                                                max-sm:text-sm
                                                transition-all
                                                duration-300
                                                hover:text-vivid-green
                                            "
                                        >
                                            dks.int@live.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ==================== RIGHT CONTENT ==================== */}

                    <div
                        className="
                            pl-19.5
                            border-l
                            border-soft-black
                            footer-right-animate

                            max-lg:border-l-0
                            max-lg:border-t
                            max-lg:pl-0
                            max-lg:pt-8
                            max-lg:w-full

                            max-md:pt-7

                            max-sm:pt-6
                        "
                    >
                        {/* ==================== NAV ==================== */}

                        <div
                            className="
                                flex
                                pb-8
                                gap-3.25
                                flex-wrap
                                items-center

                                max-md:pb-6
                                max-md:gap-2.5

                                max-sm:gap-2
                            "
                        >
                            {FOOTER_NAV.map((item, index) => (
                                <React.Fragment key={item}>
                                    <a
                                        href="#"
                                        className="
                                            text-rich-black
                                            font-normal
                                            text-base
                                            leading-163
                                            transition-all
                                            duration-300
                                            hover:text-vivid-green
                                            max-sm:text-sm
                                        "
                                    >
                                        {item}
                                    </a>

                                    {index !== FOOTER_NAV.length - 1 && (
                                        <Image
                                            width={1}
                                            height={20}
                                            src="/assets/images/svg/footer_line.svg"
                                            alt=""
                                            className="max-sm:h-4"
                                        />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* ==================== GALLERY ==================== */}

                        <div
                            className="
                                gap-3.75
                                flex
                                pt-8
                                pb-8.75
                                border-y
                                border-soft-black
                                flex-wrap

                                max-md:gap-3
                                max-md:pt-6
                                max-md:pb-6

                                max-sm:gap-3
                                max-sm:pt-5
                                max-sm:pb-5
                            "
                        >
                            {FOOTER_GALLERY.map((img, index) => (
                                <div
                                    key={img}
                                    className="
                                        footer-gallery-item
                                        overflow-hidden
                                        shrink-0

                                        max-sm:w-[calc(50%-6px)]
                                    "
                                >
                                    <Image
                                        width={81}
                                        height={70}
                                        src={img}
                                        alt={`Gallery ${index + 1}`}
                                        className="
                                            w-20.25
                                            h-17.5
                                            object-cover
                                            block
                                            transition-transform
                                            duration-500

                                            max-md:w-[75px]
                                            max-md:h-[65px]

                                            max-sm:w-full
                                            max-sm:h-auto
                                            max-sm:aspect-[81/70]
                                        "
                                    />
                                </div>
                            ))}
                        </div>

                        {/* ==================== SERVICES ROW 1 ==================== */}

                        <div
                            className="
                                gap-2.5
                                flex
                                pt-5
                                pb-3
                                flex-wrap
                                items-center

                                max-md:pt-5
                                max-md:gap-2

                                max-sm:pt-4
                                max-sm:pb-2

                                transition-all
                                duration-300
                                hover:text-vivid-green
                            "
                        >
                            {FOOTER_SERVICES_1.map((item, index) => (
                                <React.Fragment key={item}>
                                    <a
                                        href="#"
                                        className="
                                            font-normal
                                            text-base
                                            text-dark-gray
                                            leading-163
                                            transition-all
                                            duration-300
                                            hover:text-vivid-green
                                            max-sm:text-sm
                                        "
                                    >
                                        {item}
                                    </a>

                                    {index !== FOOTER_SERVICES_1.length - 1 && (
                                        <Image
                                            width={1}
                                            height={20}
                                            src="/assets/images/svg/footer_line.svg"
                                            alt=""
                                            className="max-sm:h-4"
                                        />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* ==================== SERVICES ROW 2 ==================== */}

                        <div
                            className="
                                gap-2.5
                                flex
                                pb-3
                                flex-wrap
                                items-center
                                max-sm:gap-2

                                transition-all
                                duration-300
                                hover:text-vivid-green
                            "
                        >
                            {FOOTER_SERVICES_2.map((item, index) => (
                                <React.Fragment key={item}>
                                    <a
                                        href="#"
                                        className="
                                            font-normal
                                            text-base
                                            text-dark-gray
                                            leading-163
                                            transition-all
                                            duration-300
                                            hover:text-vivid-green
                                            max-sm:text-sm
                                        "
                                    >
                                        {item}
                                    </a>

                                    {index !== FOOTER_SERVICES_2.length - 1 && (
                                        <Image
                                            width={1}
                                            height={20}
                                            src="/assets/images/svg/footer_line.svg"
                                            alt=""
                                            className="max-sm:h-4"
                                        />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* ==================== SERVICES ROW 3 ==================== */}

                        <div
                            className="
                                gap-2.5
                                flex
                                pb-3
                                flex-wrap
                                items-center

                                max-sm:gap-2
                            "
                        >
                            {FOOTER_SERVICES_3.map((item, index) => (
                                <React.Fragment key={item}>
                                    <a
                                        href="#"
                                        className="
                                            font-normal
                                            text-base
                                            text-dark-gray
                                            leading-163
                                            transition-all
                                            duration-300
                                            hover:text-vivid-green
                                            max-sm:text-sm
                                        "
                                    >
                                        {item}
                                    </a>

                                    {index !== FOOTER_SERVICES_3.length - 1 && (
                                        <Image
                                            width={1}
                                            height={20}
                                            src="/assets/images/svg/footer_line.svg"
                                            alt=""
                                            className="max-sm:h-4"
                                        />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Terms */}

                        <a
                            href="#"
                            className="
                                font-normal
                                text-base
                                text-dark-gray
                                leading-163
                                transition-all
                                duration-300
                                hover:text-vivid-green

                                max-sm:text-sm
                            "
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>

            {/* ==================== COPYRIGHT ==================== */}

            <div
                className="
                    py-4.25
                    border-t
                    border-soft-black
                    max-w-337
                    px-5
                    mx-auto

                    max-md:py-4
                    max-sm:py-3.5
                "
            >
                <p
                    className="
                        text-center
                        text-base
                        font-normal
                        text-rich-black
                        leading-163

                        max-md:text-sm
                        max-sm:text-xs
                    "
                >
                    Copyright © 2026 DKS Upholstery Pte Ltd | DKS International Supplier &
                    Services. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
