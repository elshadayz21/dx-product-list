/** @format */

"use client";

import type React from "react";
import { useState, useCallback, useEffect, useRef } from "react";
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
  onImageClick?: (index: number) => void;
}

export default function MixedContentSlider({
  items = [],
  className = "",
  onImageClick,
}: MixedContentSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const mouseStartX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const didSwipe = useRef(false);

  // Ensure we start from the first slide whenever the content set changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [items]);

  const goToNextSlide = useCallback(() => {
    if (items.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const goToPrevSlide = useCallback(() => {
    if (items.length === 0) return;
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  }, [items.length]);

  const handleSwipe = useCallback(
    (diff: number) => {
      const threshold = 50;
      if (diff > threshold) {
        didSwipe.current = true;
        goToNextSlide();
      } else if (diff < -threshold) {
        didSwipe.current = true;
        goToPrevSlide();
      }
    },
    [goToNextSlide, goToPrevSlide]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    didSwipe.current = false;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    handleSwipe(touchStartX.current - touchEndX.current);
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    didSwipe.current = false;
    isDragging.current = true;
    mouseStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || mouseStartX.current === null) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current || mouseStartX.current === null) return;
    handleSwipe(mouseStartX.current - (touchEndX.current ?? mouseStartX.current));
    isDragging.current = false;
    mouseStartX.current = null;
    touchEndX.current = null;
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      handleMouseUp();
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative w-full h-48 md:h-48 mx-auto overflow-hidden rounded-lg select-none",
        className
      )}
      aria-roledescription="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => {
          const itemKey = `${item.type}-${item.src}`;
          return (
          <div
            key={itemKey}
            className="flex-shrink-0 w-full h-full"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${items.length}`}
          >
            {item.type === "video" && (
              <YouTubePlayer
                key={itemKey}
                url={item.src}
                autoplay={index === currentIndex}
                muted={true} // keep autoplay stable across slides
              />
            )}
            {item.type === "image" && (
              <button
                type="button"
                className={cn(
                  "w-full h-full block",
                  onImageClick ? "cursor-zoom-in" : ""
                )}
                onClick={() => {
                  if (!didSwipe.current) {
                    onImageClick?.(index);
                  }
                }}
                aria-label={item.alt || `View slide ${index + 1}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt || `Slide ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-full object-contain pointer-events-none select-none bg-white"
                />
              </button>
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
          );
        })}
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
