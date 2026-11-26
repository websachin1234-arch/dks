"use client";
import React from "react";
import Image from "next/image";
import QuoteForm from "./QuoteForm";

const Upholstery = () => {
  return (
    <>
      <section
        className="xl:min-h-215.25 bg-cover bg-center bg-no-repeat pb-10 lg:pb-0"
        style={{
          backgroundImage: `url(${"/assets/images/png/Hero-section.png"})`,
        }}
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-285 mx-auto px-4 sm:px-6 xl:px-0 gap-10 lg:gap-12 xl:gap-55.25">
          <div className="pt-28 sm:pt-36 lg:pt-40 xl:pt-50.25 w-full lg:w-auto">
            <div className="max-w-107.75 mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="text-base font-medium leading-120 flex flex-col gap-1.5 items-center lg:items-start">
                Highly Rated on Google
                <Image
                  src={"/assets/images/svg/google.svg"}
                  width="194"
                  height="32"
                  alt="google"
                  className="w-36 sm:w-48.5 h-auto"
                />
              </h1>

              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold leading-121 mt-4">
                <span className="text-custom-green">Upholstery Services </span>
                Trusted Across Singapore
              </h2>

              <p className="text-sm sm:text-base font-normal leading-163 mt-4 max-w-107.25 mx-auto lg:mx-0">
                Complete upholstery solutions for homes and businesses sofas,
                cushions, built ins, headboards, and more.
              </p>

              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/918020903050?text=${encodeURIComponent(
                      "Hi, I'm interested in your upholstery services",
                    )}`,
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                className="relative flex gap-2.5 items-center justify-center w-full sm:w-auto mt-7.5 overflow-hidden active:scale-80 group bg-custom-green py-3 px-7 rounded-full text-white leading-160 border border-transparent transition-all duration-500 hover:border-[#B7F5D5] hover:shadow-[0_0_0_3px_rgba(183,245,213,0.12),0_8px_30px_rgba(0,0,0,0.12)] cursor-pointer mx-auto lg:mx-0"
              >
                <span className="relative z-10 flex items-center gap-2.5 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  <Image
                    src={"/assets/images/svg/whatsapp.svg"}
                    width="24"
                    height="24"
                    alt=""
                  />
                  WhatsApp Us Now
                </span>

                <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(190,255,220,0.4),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

                <span className="absolute inset-y-0 left-[-80%] w-1/2 skew-x-[-25deg] bg-linear-to-r from-transparent via-white/30 to-transparent group-hover:left-[140%] transition-all duration-1000 ease-in-out"></span>
              </button>
            </div>
          </div>

          <div className="lg:pt-5.75 w-full max-w-sm sm:max-w-md lg:max-w-119.75 shrink-0">
            <Image
              src="/assets/images/png/before-after.png"
              alt="before after"
              width="479"
              height="610"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <div className="px-4 lg:px-0">
        <QuoteForm />
      </div>
    </>
  );
};

export default Upholstery;
