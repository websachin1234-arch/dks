import React from "react";
import Image from "next/image";
import QuoteForm from "./QuoteForm";

const Upholstery = () => {
  return (
    <>
      <section
        className="xl:min-h-215.25 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${"/assets/images/png/Hero-section.png"})`,
        }}
      >
        <div className="flex max-w-285 gap-55.25 mx-auto">
          <div className="pt-50.25">
            <div className="max-w-107.75 ">
              <h1 className="text-base font-medium leading-120 flex flex-col gap-1.5">
                Highly Rated on Google
                <Image
                  src={"/assets/images/svg/google.svg"}
                  width="194"
                  height="32"
                  alt="google"
                />
              </h1>
              <h2 className="text-5xl font-semibold leading-121 mt-4">
                {" "}
                <span className="text-custom-green">Upholstery Services </span>
                Trusted Across Singapore
              </h2>
              <p className="text-base font-normal leading-163 mt-4 max-w-107.25">
                Complete upholstery solutions for homes and businesses sofas,
                cushions, built ins, headboards, and more.
              </p>
              <button className="flex gap-2.5 mt-7.5 bg-custom-green py-3 px-7 rounded-full text-white leading-160 transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
                <Image
                  src={"/assets/images/svg/whatsapp.svg"}
                  width="24"
                  height="24"
                  alt=""
                />{" "}
                WhatsApp Us Now
              </button>
            </div>
          </div>
          <div className="pt-5.75">
            <Image
              src="/assets/images/png/before-after.png"
              alt="before after"
              width="479"
              height="610"
            />
          </div>
        </div>
      </section>
      <div>
        <QuoteForm />
      </div>
    </>
  );
};

export default Upholstery;
