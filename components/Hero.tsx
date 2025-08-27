"use client"
import React, { useEffect, useMemo, useState, useRef } from "react";
import { Facebook, Instagram, Search, User } from "lucide-react";
import Image from "next/image";

/**
 * HotAirHero Slideshow (TSX + Tailwind)
 *
 * Usage:
 * <HotAirHero
 *   slides={[
 *     { image: "/img1.jpg" },
 *     { image: "/img2.jpg" },
 *     { image: "/img3.jpg" },
 *   ]}
 *   autoPlay
 *   interval={6000}
 * />
 */
export type HeroSlide = {
  image: string;
};

export default function HotAirHero({
  slides,
  autoPlay = true,
  interval = 6000,
}: {
  slides?: HeroSlide[];
  autoPlay?: boolean;
  interval?: number;
}) {
  // Fallback slides so the component works out of the box
  const fallbackSlides: HeroSlide[] = useMemo(
    () => [
      {
        image:
          "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1920&auto=format&fit=crop",
      },
      {
        image:
          "https://images.unsplash.com/photo-1562347810-8f8d7f5e5f7d?q=80&w=1920&auto=format&fit=crop",
      },
      {
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop",
      },
      {
        image:
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1920&auto=format&fit=crop",
      },
    ],
    []
  );

  const slidesData = slides && slides.length > 0 ? slides : fallbackSlides;
  const [index, setIndex] = useState(0);
  const count = slidesData.length;
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const goTo = (i: number) => setIndex((i + count) % count);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Auto play
  useEffect(() => {
    if (!autoPlay) return;
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, interval);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [autoPlay, interval, count]);

  // Pause on hover/focus for accessibility
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !autoPlay) return;
    const stop = () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
    const start = () => {
      if (timerRef.current || !autoPlay) return;
      timerRef.current = window.setInterval(() => {
        setIndex((i) => (i + 1) % count);
      }, interval);
    };
    el.addEventListener("mouseenter", stop);
    el.addEventListener("mouseleave", start);
    el.addEventListener("focusin", stop);
    el.addEventListener("focusout", start);
    return () => {
      el.removeEventListener("mouseenter", stop);
      el.removeEventListener("mouseleave", start);
      el.removeEventListener("focusin", stop);
      el.removeEventListener("focusout", start);
    };
  }, [autoPlay, interval, count]);

  // Keyboard arrows
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  const nav = ["About", "Our tours", "Explore", "Guides", "Contacts"];

  return (
    <section
      ref={containerRef}
      className="relative isolate min-h-screen w-full text-white"
      aria-roledescription="carousel"
      aria-label="Hero Image Slideshow"
    >
      {/* Slides */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {slidesData.map((s, i) => (
          <Image
            key={i}
            src={s.image}
            alt="Cappadocia hot air balloons at sunrise"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${i === index ? "opacity-100" : "opacity-0"}`}
            fill
            sizes="100vw"
            priority={i === 0}
          />
        ))}
        {/* readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
      </div>

      {/* Top nav */}
      <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-6 px-6 py-6 md:px-10">
        {/* Left cluster: logo + primary nav */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 ring-1 ring-white/30 backdrop-blur-sm">
              <span className="text-lg font-black tracking-tight">hb</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold uppercase tracking-widest">HotAir</p>
              <p className="text-[10px] uppercase tracking-[0.25em] opacity-80">Balloons Luxor</p>
            </div>
          </div>

          {/* Nav items */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm">
              {nav.map((item, i) => (
                <li key={item} className="relative pb-3">
                  <a
                    href="#"
                    className={`transition-colors hover:opacity-100 ${i === 0 ? "opacity-100" : "opacity-80"
                      }`}
                  >
                    {item}
                  </a>
                  {i === 0 && (
                    <span className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-white" />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right cluster: social + actions */}
        <div className="hidden items-center gap-6 md:flex">
          <a href="#" aria-label="Facebook" className="opacity-90 hover:opacity-100">
            <Facebook size={18} />
          </a>
          <a href="#" aria-label="Instagram" className="opacity-90 hover:opacity-100">
            <Instagram size={18} />
          </a>
          <button aria-label="Search" className="opacity-90 hover:opacity-100">
            <Search size={18} />
          </button>
          <button aria-label="Account" className="opacity-90 hover:opacity-100">
            <User size={18} />
          </button>
        </div>
      </header>

      {/* Hero copy */}
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 px-6 pt-6 md:px-10">
        <div className="max-w-3xl pt-6 sm:pt-10 md:pt-14 lg:pt-20 xl:pt-28">
          <h1 className="text-5xl font-extrabold leading-[0.95] sm:text-6xl md:text-7xl xl:text-[90px]">
            Explore
            <br />
            Cappadocia
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed opacity-90 md:text-[17px]">
            Our world is incredibly beautiful, with a rich diversity of landscapes,
            cultures, and wildlife. Follow us to enjoy these moments.
          </p>
          <p className="mt-2 text-sm opacity-80">moments.</p>
        </div>
      </div>

      {/* Right rail: vertical dot slider */}
      <aside className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center md:flex lg:right-10">
        {/* top divider */}
        <span className="mb-3 block h-16 w-px bg-white/80" />

        <div role="tablist" aria-label="Slide selector" className="flex flex-col items-center gap-3">
          {slidesData.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-controls={`hero-slide-${i}`}
              onClick={() => goTo(i)}
              className={`h-2 w-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white/80 ${i === index ? "scale-125 bg-white" : "bg-white/70 hover:bg-white/90"
                }`}
            />
          ))}
        </div>

        {/* bottom divider */}
        <span className="mt-3 block h-16 w-px bg-white/80" />
      </aside>
    </section>
  );
}
