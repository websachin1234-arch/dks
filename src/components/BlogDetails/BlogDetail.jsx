"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Heading = ({ text, highlight }) => {
  if (!highlight || !text.includes(highlight)) return text;
  const [before, after] = text.split(highlight);
  return (
    <>
      {before}
      <span className="text-custom-green">{highlight}</span>
      {after}
    </>
  );
};

const BlogDetail = ({ post }) => {
  const [activeId, setActiveId] = useState("overview");
  const heroRef = useRef(null);
  const lockedRef = useRef(false);
  const unlockTimer = useRef(null);

  const tocItems = [
    {
      id: "overview",
      title: post.title,
      highlight: post.highlight,
      description: post.description,
      image: post.image,
    },
    ...post.sections.map((s) => ({
      id: s.id,
      title: s.title,
      highlight: s.highlight,
      description: s.description,
      image: s.image || post.image,
    })),
  ];

  const active = tocItems.find((i) => i.id === activeId) || tocItems[0];

  useEffect(() => {
    const ids = post.sections.map((s) => s.id);
    let ticking = false;

    const update = () => {
      ticking = false;
      const line = window.innerHeight * 0.35;
      let current = "overview";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (lockedRef.current) {
        clearTimeout(unlockTimer.current);
        unlockTimer.current = setTimeout(() => {
          lockedRef.current = false;
        }, 150);
        return;
      }
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(unlockTimer.current);
    };
  }, [post.sections]);

  const handleSelect = (id) => {
    setActiveId(id);

    lockedRef.current = true;
    clearTimeout(unlockTimer.current);
    unlockTimer.current = setTimeout(() => {
      lockedRef.current = false;
    }, 150);

    heroRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="bg-custom-white pb-15 md:pb-20 text-rich-black">
      <section ref={heroRef} className="scroll-mt-20 pt-8 sm:pt-12.5">
        <div className="mx-auto w-full max-w-295 px-5">
          <div
            key={active.id}
            className="flex max-w-207.5 animate-fade-in flex-col gap-4 pb-7 sm:pb-12.5"
          >
            <h1 className="text-[30px] font-semibold leading-120 sm:text-[40px] lg:text-[48px]">
              <Heading text={active.title} highlight={active.highlight} />
            </h1>
            <p className="text-base leading-160 text-dark-gray">
              {active.description}
            </p>
          </div>
        </div>

        <div className="relative h-55 w-full overflow-hidden bg-neutral-200 sm:h-90 lg:h-140 xl:h-181">
          {active.image && (
            <Image
              key={active.image}
              src={active.image}
              alt={active.title}
              fill
              priority
              sizes="100vw"
              className="animate-fade-in object-cover"
            />
          )}
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-295 grid-cols-1 items-start gap-10 px-5 pt-8 sm:pt-12.5 lg:grid-cols-[minmax(0,700px)_387px] lg:justify-between lg:gap-12">
        <article className="flex flex-col gap-9 sm:gap-12.5">
          {post.sections.map((s) => (
            <section key={s.id} id={s.id} className="flex flex-col gap-5">
              <h2
                className={`text-[24px] font-semibold leading-120 sm:text-[28px] lg:text-[32px] ${
                  s.image ? "mb-3" : ""
                }`}
              >
                {s.title}
              </h2>

              {s.image && (
                <div className="relative aspect-700/464 w-full overflow-hidden rounded-xl bg-neutral-200 sm:rounded-2xl">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover"
                  />
                </div>
              )}

              <p className="text-base leading-160 text-dark-gray">
                {s.description}
              </p>

              {s.points?.length > 0 && (
                <div className="flex flex-col gap-3">
                  {s.points.map((p) => (
                    <p
                      key={p.label}
                      className="text-base leading-160 text-dark-gray"
                    >
                      <strong className="font-semibold text-rich-black">
                        {p.label}:
                      </strong>{" "}
                      {p.text}
                    </p>
                  ))}
                </div>
              )}
            </section>
          ))}

          {post.conclusion && (
            <section className="flex flex-col gap-4">
              <h2 className="text-[24px] font-semibold leading-120 sm:text-[28px] lg:text-[32px]">
                {post.conclusion.title}
              </h2>
              <p className="text-base leading-160 text-dark-gray">
                {post.conclusion.text}
              </p>
            </section>
          )}
        </article>

        <aside className="order-first flex flex-col gap-5.5 rounded-2xl bg-custom-white p-5 shadow-blogcard sm:p-6 lg:sticky lg:top-25 lg:order-0 lg:rounded-[20px] lg:p-8">
          <h3 className="text-base font-semibold leading-160">
            Table of content
          </h3>
          <hr className="w-full border-0 border-t border-soft-black" />
          <nav className="flex flex-col gap-1.25" aria-label="Table of content">
            {tocItems.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`w-full cursor-pointer rounded-lg px-3 py-1.5 text-left text-base leading-160 transition-colors duration-200 ${
                    isActive
                      ? "bg-custom-green text-custom-white"
                      : "text-dark-gray hover:bg-light-green"
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </nav>
        </aside>
      </div>
    </main>
  );
};

export default BlogDetail;
