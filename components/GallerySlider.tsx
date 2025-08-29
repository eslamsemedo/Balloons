"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Img = { id: string; src: string; alt?: string };

const IMAGES: Img[] = [
  { id: "1", src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop", alt: "Cappadocia 1" },
  { id: "2", src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop", alt: "Cappadocia 2" },
  { id: "3", src: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1600&auto=format&fit=crop", alt: "Cappadocia 3" },
  { id: "4", src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop", alt: "Cappadocia 4" },
  { id: "5", src: "https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1600&auto=format&fit=crop", alt: "Cappadocia 5" },
];

interface Props {
  images?: Img[];
  heightClass?: string; // e.g. "h-[380px]"
}

export default function GallerySlider({
  images = IMAGES,
  heightClass = "h-[420px]",
}: Props) {
  const [api, setApi] = React.useState<CarouselApi | undefined>();
  const [selected, setSelected] = React.useState(0);
  const [scales, setScales] = React.useState<number[]>(
    () => new Array(images.length).fill(1)
  );

  // compute scale/opacity by distance from the selected snap (loop-safe)
  const recalc = React.useCallback(() => {
    if (!api) return;
    const snap = api.selectedScrollSnap();
    const len = images.length;

    const nextScales = images.map((_, i) => {
      // loop-safe distance
      const raw = Math.abs(i - snap);
      const dist = Math.min(raw, len - raw);

      // 0 => center, 1 => neighbors, >=2 => far
      // base scale 0.9, add up to +0.18 to the center, slight drop for far slides
      const s =
        0.9 + Math.max(0, 0.18 - Math.min(dist, 2) * 0.09); // 0:1.08, 1:0.99, 2:0.90
      return s;
    });

    setScales(nextScales);
    setSelected(snap);
  }, [api, images.length]);

  React.useEffect(() => {
    if (!api) return;
    recalc();
    api.on("select", recalc);
    api.on("scroll", recalc);
    return () => {
      api.off("select", recalc);
      api.off("scroll", recalc);
    };
  }, [api, recalc]);

  return (
    <section id="gallery" className="px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-end gap-2 pb-4">
          <button
            aria-label="Previous"
            onClick={() => api?.scrollPrev()}
            className="rounded-md border px-2 py-2 hover:bg-gray-50"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Next"
            onClick={() => api?.scrollNext()}
            className="rounded-md border px-2 py-2 hover:bg-gray-50"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
            dragFree: false,
          }}
        >
          <CarouselContent className="ml-0">
            {images.map((img, i) => (
              <CarouselItem
                key={img.id}
                // show ~5 slides on xl, fewer on smaller screens
                className="
                  basis-[78%] sm:basis-[55%] md:basis-[45%]
                  lg:basis-[32%] xl:basis-[26%]
                  pl-3 sm:pl-4 lg:pl-6
                "
              >
                <div
                  className={[
                    "rounded-2xl overflow-hidden shadow",
                    "transition-transform duration-300 will-change-transform",
                    "origin-center",
                    selected === i ? "shadow-lg " : "shadow",
                  ].join(" ")}
                  style={{
                    transform: `scale(${scales[i] ?? 1})`,
                    opacity: selected === i ? 1 : 0.9,
                  }}
                >
                  <div className={`relative w-full ${heightClass}`}>
                    <img
                      src={img.src}
                      alt={img.alt ?? "Gallery image"}
                      className="absolute inset-0 h-full w-full object-cover "
                      draggable={false}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}