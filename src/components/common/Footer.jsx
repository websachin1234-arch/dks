"use client";

import React from "react";
import Image from "next/image";

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

const FOOTER_ADDRESS = {
  icon: "/assets/images/svg/Location_icon.svg",
  alt: "location",
  text: "Defu Industrial Estate Address: 37 Defu Lane 10, #01/41, Singapore 539214",
};

const FOOTER_SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: "/assets/images/svg/instagram_icon.svg",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: "/assets/images/svg/facebook_icon.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: "/assets/images/svg/linkdin_icon.svg",
  },
];

const FOOTER_CONTACT = [
  {
    type: "phone",
    icon: "/assets/images/svg/whatsapp_icon.svg",
    iconWidth: 16,
    iconHeight: 16,
    links: [
      {
        text: "98385685,",
        href: "tel:98385685",
      },
      {
        text: "93832006",
        href: "tel:93832006",
      },
    ],
  },
  {
    type: "phone",
    icon: "/assets/images/svg/coll_icon.svg",
    iconWidth: 15,
    iconHeight: 15,
    links: [
      {
        text: "62844186",
        href: "tel:62844186",
      },
    ],
  },
  {
    type: "email",
    icon: "/assets/images/svg/dm_icon.svg",
    iconWidth: 13,
    iconHeight: 13,
    links: [
      {
        text: "info@dksinternational.com",
        href: "mailto:info@dksinternational.com",
      },
      {
        text: "dks.int@live.com",
        href: "mailto:dks.int@live.com",
      },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-soft-ivory overflow-x-hidden">
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
                      src={FOOTER_ADDRESS.icon}
                      alt={FOOTER_ADDRESS.alt}
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
                    {FOOTER_ADDRESS.text}
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
                        alt="follow"
                      />
                    </div>

                    <p className="text-rich-black font-medium text-base max-sm:text-sm leading-163">
                      Follow Us
                    </p>
                  </div>

                  <div className="flex gap-3">
                    {FOOTER_SOCIALS.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="group inline-block"
                      >
                        <div
                          className="
            w-5 h-5
            transition-all duration-300 ease-out
            group-hover:-translate-y-1
            group-hover:rotate-6
        "
                        >
                          <Image
                            width={20}
                            height={20}
                            src={social.icon}
                            alt={social.name}
                            className="
                w-full h-full
                transition-all duration-300 ease-out
                group-hover:scale-110
            "
                          />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="
                                    max-w-61
                                    w-full

                                    max-md:max-w-full
                                "
              >
                {FOOTER_CONTACT.map((contact) => (
                  <div
                    key={contact.icon}
                    className={`
                                            flex
                                            gap-2
                                            mb-2.25
                                            ${
                                              contact.type === "email"
                                                ? "items-start"
                                                : "items-center"
                                            }
                                        `}
                  >
                    <div
                      className={`
                                                w-5
                                                h-5
                                                shrink-0
                                                flex
                                                justify-center
                                                ${
                                                  contact.type === "email"
                                                    ? "items-center"
                                                    : "justify-center items-center"
                                                }
                                            `}
                    >
                      <Image
                        width={contact.iconWidth}
                        height={contact.iconHeight}
                        src={contact.icon}
                        alt={contact.type}
                      />
                    </div>

                    <div
                      className={
                        contact.type === "email" ? "min-w-0" : "flex flex-wrap"
                      }
                    >
                      {contact.links.map((link, index) => (
                        <React.Fragment key={link.href}>
                          <a
                            href={link.href}
                            className="
                                                            text-dark-gray
                                                            text-base
                                                            leading-163
                                                            max-sm:text-sm
                                                            transition-all
                                                            duration-300
                                                            hover:text-vivid-green
                                                            break-all
                                                        "
                          >
                            {link.text}
                          </a>

                          {contact.type === "email" &&
                            index !== contact.links.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="
                            pl-19.5
                            border-l
                            border-soft-black
                            max-lg:border-l-0
                            max-lg:border-t
                            max-lg:pl-0
                            max-lg:pt-8
                            max-lg:w-full
                            max-md:pt-7
                            max-sm:pt-6
                        "
          >
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
                      alt="line"
                      className="max-sm:h-4"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

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

                                            max-md:w-18.75
                                            max-md:h-16.25

                                            max-sm:w-full
                                            max-sm:h-auto
                                            max-sm:aspect-81/70
                                        "
                  />
                </div>
              ))}
            </div>

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
                      alt="line"
                      className="max-sm:h-4"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

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
                      alt="line"
                      className="max-sm:h-4"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="gap-2.5 flex pb-3 flex-wrap items-center max-sm:gap-2">
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
          Copyright © {currentYear} DKS Upholstery Pte Ltd | DKS International
          Supplier & Services. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
