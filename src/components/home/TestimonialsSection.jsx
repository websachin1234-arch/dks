"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Icon from "@/components/common/Icons";
import { homepageAssets, homepageCopy, testimonials } from "@/utils/helper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const MOTION_OK = "(prefers-reduced-motion: no-preference)";

export default function TestimonialsSection() {
  const copy = homepageCopy.testimonials;
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: `(min-width: 1024px) and ${MOTION_OK}`,
          isMobile: `(max-width: 1023px) and ${MOTION_OK}`,
        },
        (ctx) => {
          const { isDesktop } = ctx.conditions;
          const clear = "transform,opacity";

          gsap
            .timeline({
              defaults: { ease: "power3.out" },
              scrollTrigger: {
                trigger: sectionRef.current,
                start: isDesktop ? "top 75%" : "top 88%",
                once: true,
              },
            })
            .from("[data-rev-title]", {
              ...(isDesktop ? { x: -60 } : { y: 30 }),
              opacity: 0,
              duration: 0.9,
              clearProps: clear,
            })
            .from(
              "[data-rev-copy]",
              {
                ...(isDesktop ? { x: 60 } : { y: 24 }),
                opacity: 0,
                duration: 0.9,
                clearProps: clear,
              },
              "<0.1",
            )
            .from(
              "[data-rev-slider]",
              {
                y: isDesktop ? 60 : 36,
                opacity: 0,
                duration: 1,
                clearProps: clear,
              },
              "-=0.5",
            );
        },
      );

      document.fonts?.ready.then(() => ScrollTrigger.refresh());

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      className="reviews-section relative w-full overflow-hidden bg-white lg:p-0 py-4"
      aria-labelledby="loved-heading"
    >
      <div className="relative z-10 w-full">
        <div className="max-w-293 mx-auto px-4 sm:px-6 lg:px-4">
          <header className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-40 mb-6 sm:mb-8 lg:mb-12.5">
            <h2
              data-rev-title
              id="loved-heading"
              className="text-[32px] sm:text-[40px] lg:text-[48px] text-rich-black leading-[1.2] tracking-tight max-w-138.25 font-semibold"
            >
              {copy.heading}{" "}
              <span className="text-custom-green block">
                {copy.headingAccent}
              </span>
            </h2>
            <p className="text-dark-gray text-[15px] sm:text-[16px] leading-[1.6] max-w-106.75 font-normal">
              {copy.description}
            </p>
          </header>
        </div>

        <div data-rev-slider className="relative w-full">
          <div className="w-full overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              loop
              centeredSlides
              initialSlide={1}
              slidesPerView="auto"
              spaceBetween={20}
              breakpoints={{
                640: {
                  spaceBetween: 24,
                },
                1024: {
                  spaceBetween: 32,
                },
              }}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={850}
              style={{
                "--swiper-wrapper-transition-timing-function":
                  "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              navigation={{
                nextEl: ".review-nav-next",
                prevEl: ".review-nav-prev",
              }}
              pagination={{
                el: ".reviews-pagination",
                clickable: true,
              }}
              className="reviews-swiper"
              aria-label={copy.sliderLabel}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="testimonial-slide">
                  <article className="testimonial-card">
                    <div className="flex flex-col gap-5 sm:gap-6">
                      <div className="w-[25.2px] h-[17.1px] relative shrink-0">
                        <Icon name="quote" className="h-full w-full" />
                      </div>

                      <p className="testimonial-quote text-[15px] sm:text-[16px] leading-[1.6] text-dark-gray transition-colors">
                        &ldquo;{testimonial.quote}&rdquo;{" "}
                        {testimonial.clientType && (
                          <span className="text-dark-gray/90">
                            {testimonial.clientType}
                          </span>
                        )}
                      </p>

                      <div className="flex items-center justify-between w-full pt-2">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-[20px] sm:text-[24px] font-semibold text-rich-black leading-[1.3]">
                            {testimonial.name}
                          </h3>
                          <p className="text-[14px] sm:text-[16px] text-rich-black/70 leading-[1.6]">
                            {testimonial.role}
                          </p>
                        </div>
                        <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full overflow-hidden shrink-0 border border-black/5 bg-custom-white">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={60}
                            height={60}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0 pt-6">
                      <div className="w-6 h-6 shrink-0 relative flex items-center justify-center">
                        <Image
                          src={homepageAssets.testimonials.googleReview}
                          alt={copy.googleReviewAlt}
                          width={24}
                          height={24}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div
                        className="flex items-center gap-1"
                        aria-label={copy.ratingLabel}
                      >
                        {[...Array(copy.starCount)].map((_, i) => (
                          <div key={i} className="w-5 h-5 shrink-0">
                            <Image
                              src={homepageAssets.testimonials.star}
                              alt=""
                              width={20}
                              height={20}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="pointer-events-none absolute inset-y-0 inset-x-0 mx-auto max-w-360 px-4 sm:px-6 lg:px-8 flex items-center justify-between z-20">
            <button
              className="review-nav-prev group pointer-events-auto flex h-11 w-11 cursor-pointer select-none items-center justify-center rounded-full border-[0.76px] border-custom-green bg-custom-white text-custom-green shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out hover:scale-[1.06] hover:border-custom-green hover:bg-custom-green hover:text-white hover:shadow-[0_6px_16px_rgba(25,174,26,0.45)] active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100 sm:h-15 sm:w-15"
              type="button"
              aria-label={copy.previousLabel}
            >
              <div className="w-4.5 h-4.5 flex items-center justify-center">
                <Icon name="lessThan" className="h-7.75 w-3.75" />
              </div>
            </button>

            <button
              className="review-nav-next group pointer-events-auto flex h-11 w-11 cursor-pointer select-none items-center justify-center rounded-full border-[0.76px] border-custom-green bg-custom-white text-custom-green shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out hover:scale-[1.06] hover:border-custom-green hover:bg-custom-green hover:text-white hover:shadow-[0_6px_16px_rgba(25,174,26,0.45)] active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100 sm:h-15 sm:w-15"
              type="button"
              aria-label={copy.nextLabel}
            >
              <div className="flex h-4.5 w-4.5 items-center justify-center">
                <Icon
                  name="lessThan"
                  className="h-7.75 w-3.75 rotate-180 transition-colors duration-500"
                />
              </div>
            </button>
          </div>

          <div
            className="reviews-pagination"
            aria-label={copy.paginationLabel}
          />
        </div>
      </div>
    </section>
  );
}