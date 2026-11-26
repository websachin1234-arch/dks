"use client";

import React from "react";
import Image from "next/image";
import {
  footerAddress,
  footerAssets,
  footerContacts,
  footerCopy,
  footerGallery,
  footerNavigation,
  footerServiceGroups,
  footerSocials,
} from "@/utils/helper";

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
                  src={footerAssets.logo}
                  alt={footerCopy.logoAlt}
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
                {footerCopy.introduction}
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
                      src={footerAddress.icon}
                      alt={footerAddress.alt}
                      width="11"
                      height="16"
                    />
                  </div>

                  <a
                    target="_blank"
                    href="https://maps.app.goo.gl/YqqPAhexhqE1hoku9"
                    className="
                                            font-normal
                                            text-base
                                            text-dark-gray
                                            leading-163

                                            max-sm:text-sm
                                        "
                  >
                    {footerAddress.text}
                  </a>
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
                        src={footerAssets.followIcon}
                        alt={footerCopy.followIconAlt}
                      />
                    </div>

                    <p className="text-rich-black font-medium text-base max-sm:text-sm leading-163">
                      {footerCopy.followUs}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    {footerSocials.map((social) => (
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
                {footerContacts.map((contact) => (
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
              {footerNavigation.map((item, index) => (
                <React.Fragment key={item.label}>
                  <a
                    href={item.href}
                    className="
                                            text-dark-gray
                                            font-normal
                                            text-base
                                            leading-163
                                            transition-all
                                            duration-300
                                            hover:text-vivid-green
                                            max-sm:text-sm
                                        "
                  >
                    {item.label}
                  </a>

                  {index !== footerNavigation.length - 1 && (
                    <Image
                      width={1}
                      height={20}
                      src={footerAssets.divider}
                      alt={footerCopy.dividerAlt}
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
              {footerGallery.map((img, index) => (
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
                    alt={`${footerCopy.galleryAltPrefix} ${index + 1}`}
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
              {footerServiceGroups[0].map((item, index) => (
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

                  {index !== footerServiceGroups[0].length - 1 && (
                    <Image
                      width={1}
                      height={20}
                      src={footerAssets.divider}
                      alt={footerCopy.dividerAlt}
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
              {footerServiceGroups[1].map((item, index) => (
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

                  {index !== footerServiceGroups[1].length - 1 && (
                    <Image
                      width={1}
                      height={20}
                      src={footerAssets.divider}
                      alt={footerCopy.dividerAlt}
                      className="max-sm:h-4"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="gap-2.5 flex pb-3 flex-wrap items-center max-sm:gap-2">
              {footerServiceGroups[2].map((item, index) => (
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

                  {index !== footerServiceGroups[2].length - 1 && (
                    <Image
                      width={1}
                      height={20}
                      src={footerAssets.divider}
                      alt={footerCopy.dividerAlt}
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
              {footerCopy.termsOfService}
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
          {footerCopy.copyrightPrefix} {currentYear} {footerCopy.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
