/** @format */

"use client";

import type React from "react";
import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import YouTubePlayer from "./YouTubePlayer";
import Image from "next/image";

type ContentItem = {
  type: "video" | "image" | "iframe";
  src: string;
  alt?: string;
};

export interface MixedContentSliderProps {
  items: ContentItem[];
  className?: string;
}

export default function MixedContentSlider({
  items = [],
  className = "",
}: MixedContentSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const goToPrevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  }, [items.length]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative w-full h-48 md:h-48 mx-auto overflow-hidden rounded-lg",
        className
      )}
      aria-roledescription="carousel"
    >
      <div
        className="flex transition-transform duration-500 ease-in-out  h-48 md:h-48"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${items.length}`}
          >
            {item.type === "video" && (
              <YouTubePlayer url={item.src} repeat={true} />
            )}
            {item.type === "image" && (
              <Image
                src={item.src}
                alt={item.alt || `Slide ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-full object-contain"
              />
            )}
            {item.type === "iframe" && (
              <iframe
                src={item.src}
                className="w-full h-full border-0"
                title={item.alt || `Slide ${index + 1}`}
                allowFullScreen
              ></iframe>
            )}
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
            onClick={goToPrevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
            onClick={goToNextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
    </div>
  );
}