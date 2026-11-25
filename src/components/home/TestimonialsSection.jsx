"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Icon from "@/components/common/Icons";
import { testimonials } from "@/utils/helper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  return (
    <section
      className="reviews-section relative w-full overflow-hidden bg-white"
      aria-labelledby="loved-heading"
    >
      <div className="relative z-10 w-full">
        <div className="max-w-285 mx-auto px-4 sm:px-6 lg:px-8">
          <header className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-40 mb-6 sm:mb-8 lg:mb-8">
            <h2
              id="loved-heading"
              className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-[#010101] leading-[1.2] tracking-tight max-w-138.25"
            >
              Loved by Singapore{" "}
              <span className="text-[#19AE1A] block">
                Homes &amp; Businesses
              </span>
            </h2>
            <p className="text-[#4D4D4D] text-[15px] sm:text-[16px] leading-[1.6] max-w-106.75 lg:pt-1">
              Over 100 five star reviews from customers who transformed their
              sofas, chairs, and spaces with DKS Upholstery.
            </p>
          </header>
        </div>

        {/* Swiper Slider with side navigation buttons */}
        <div className="relative w-full">
          {/* Swiper Cards Container */}
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
              speed={650}
              navigation={{
                nextEl: ".review-nav-next",
                prevEl: ".review-nav-prev",
              }}
              pagination={{
                el: ".reviews-pagination",
                clickable: true,
              }}
              className="reviews-swiper"
              aria-label="Customer testimonials"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="testimonial-slide">
                  <article className="testimonial-card">
                    {/* Top Section: Quote Icon, Text, Author */}
                    <div className="flex flex-col gap-5 sm:gap-6">
                      {/* Quote SVG */}
                      <div className="w-[25.2px] h-[17.1px] relative shrink-0">
                        <Icon name="quote" className="h-full w-full" />
                      </div>

                      {/* Testimonial Quote */}
                      <p className="testimonial-quote text-[15px] sm:text-[16px] leading-[1.6] text-[#4D4D4D] transition-colors">
                        &ldquo;{testimonial.quote}&rdquo;{" "}
                        {testimonial.clientType && (
                          <span className="text-[#4D4D4D]/90">
                            {testimonial.clientType}
                          </span>
                        )}
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center justify-between w-full pt-2">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#010101] leading-[1.3]">
                            {testimonial.name}
                          </h3>
                          <p className="text-[14px] sm:text-[16px] text-[#010101]/70 leading-[1.6]">
                            {testimonial.role}
                          </p>
                        </div>
                        <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full overflow-hidden shrink-0 border border-black/5 bg-[#FAFAFA]">
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

                    {/* Bottom Section: Google Badge + 5 Gold Stars */}
                    <div className="flex items-center gap-2.5 shrink-0 pt-6">
                      <div className="w-6 h-6 shrink-0 relative flex items-center justify-center">
                        <Image
                          src="/assets/images/png/google-icon.png"
                          alt="Google Review"
                          width={24}
                          height={24}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div
                        className="flex items-center gap-1"
                        aria-label="5 out of 5 stars"
                      >
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-5 h-5 shrink-0">
                            <Image
                              src="/assets/images/svg/star.svg"
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

          {/* Floating Navigation Buttons (Figma Group 2085662873) */}
          <div className="pointer-events-none absolute inset-y-0 inset-x-0 mx-auto max-w-360 px-4 sm:px-6 lg:px-8 flex items-center justify-between z-20">
            <button
              className="review-nav-prev pointer-events-auto flex h-11 w-11 cursor-pointer select-none items-center justify-center rounded-full border-[0.76px] border-[#19ae1a] bg-[#fafafa] text-[#19ae1a] shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,background-color,border-color,color] duration-200 hover:scale-[1.06] hover:border-[#19ae1a] hover:bg-[#19ae1a] hover:text-white hover:shadow-[0_6px_16px_rgba(25,174,26,0.45)] active:scale-[0.96] sm:h-15 sm:w-15"
              type="button"
              aria-label="Previous testimonial"
            >
              <div className="w-4.5 h-4.5  flex items-center justify-center">
                <Icon name="lessThan" className="h-7.75 w-3.75" />
              </div>
            </button>

            <button
              className="review-nav-next pointer-events-auto flex h-11 w-11 cursor-pointer select-none items-center justify-center rounded-full border-[0.76px] border-[#19ae1a] bg-[#fafafa] text-[#19ae1a] shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,background-color,border-color,color] duration-200 hover:scale-[1.06] hover:border-[#19ae1a] hover:bg-[#19ae1a] hover:text-white hover:shadow-[0_6px_16px_rgba(25,174,26,0.45)] active:scale-[0.96] sm:h-15 sm:w-15"
              type="button"
              aria-label="Next testimonial"
            >
              <div className="w-4.5 h-4.5 flex items-center justify-center">
                <Icon name="lessThan" className="h-7.75 w-3.75 rotate-180" />
              </div>
            </button>
          </div>

          {/* Pagination Dots (Figma Frame 2147227155) */}
          <div
            className="reviews-pagination"
            aria-label="Testimonial pagination"
          />
        </div>
      </div>
    </section>
  );
}
