/** @format */

"use client";

import type React from "react";
import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type EcoBranchImage = {
  src: string;
  alt: string;
};

interface EcoBranchImageCarouselProps {
  images: EcoBranchImage[];
  className?: string;
  autoplayInterval?: number;
  onImageClick?: (index: number) => void;
  orientation?: "horizontal" | "vertical";
}

function chunkPairs<T>(items: T[]): T[][] {
  const slides: T[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    slides.push(items.slice(i, i + 2));
  }
  return slides;
}

export default function EcoBranchImageCarousel({
  images,
  className = "",
  autoplayInterval = 4000,
  onImageClick,
  orientation = "horizontal",
}: EcoBranchImageCarouselProps) {
  const isVertical = orientation === "vertical";
  const slides = useMemo(() => chunkPairs(images), [images]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const mouseStart = useRef<number | null>(null);
  const isDragging = useRef(false);
  const didSwipe = useRef(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setCurrentSlide(0);
  }, [images, orientation]);

  const goToNextSlide = useCallback(() => {
    if (slides.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToPrevSlide = useCallback(() => {
    if (slides.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const resetAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
    if (slides.length > 1) {
      autoplayTimerRef.current = setInterval(goToNextSlide, autoplayInterval);
    }
  }, [goToNextSlide, autoplayInterval, slides.length]);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [resetAutoplay]);

  const handleSwipe = useCallback(
    (diff: number) => {
      const threshold = 50;
      if (diff > threshold) {
        didSwipe.current = true;
        goToNextSlide();
        resetAutoplay();
      } else if (diff < -threshold) {
        didSwipe.current = true;
        goToPrevSlide();
        resetAutoplay();
      }
    },
    [goToNextSlide, goToPrevSlide, resetAutoplay]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    didSwipe.current = false;
    touchStart.current = isVertical
      ? e.touches[0].clientY
      : e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = isVertical
      ? e.touches[0].clientY
      : e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStart.current === null || touchEnd.current === null) return;
    handleSwipe(touchStart.current - touchEnd.current);
    touchStart.current = null;
    touchEnd.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    didSwipe.current = false;
    isDragging.current = true;
    mouseStart.current = isVertical ? e.clientY : e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || mouseStart.current === null) return;
    touchEnd.current = isVertical ? e.clientY : e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current || mouseStart.current === null) return;
    handleSwipe(mouseStart.current - (touchEnd.current ?? mouseStart.current));
    isDragging.current = false;
    mouseStart.current = null;
    touchEnd.current = null;
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      handleMouseUp();
    }
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg select-none",
        isVertical ? "h-full w-full" : "w-full",
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
        className={cn(
          "transition-transform duration-500 ease-in-out h-full",
          isVertical ? "flex flex-col" : "flex"
        )}
        style={
          isVertical
            ? { transform: `translateY(-${currentSlide * 100}%)` }
            : { transform: `translateX(-${currentSlide * 100}%)` }
        }
      >
        {slides.map((slideImages, slideIndex) => (
          <div
            key={`slide-${slideIndex}`}
            className={cn(
              "flex-shrink-0 h-full w-full gap-2 p-1",
              isVertical
                ? "flex flex-col"
                : cn(
                    "flex",
                    slideImages.length === 1 ? "justify-center" : ""
                  )
            )}
            aria-roledescription="slide"
            aria-label={`${slideIndex + 1} of ${slides.length}`}
          >
            {slideImages.map((image) => {
              const imageIndex = images.findIndex(
                (item) => item.src === image.src
              );
              return (
                <Card
                  key={image.src}
                  className={cn(
                    "overflow-hidden shadow-md hover:shadow-lg transition-shadow",
                    isVertical
                      ? "flex-1 min-h-0 w-full"
                      : "h-full flex-1 basis-[calc(50%-0.25rem)] max-w-[calc(50%-0.25rem)]"
                  )}
                >
                  <CardContent className="p-0 h-full">
                    <button
                      type="button"
                      className={cn(
                        "w-full h-full block",
                        onImageClick ? "cursor-zoom-in" : ""
                      )}
                      onClick={() => {
                        if (!didSwipe.current && imageIndex >= 0) {
                          onImageClick?.(imageIndex);
                        }
                      }}
                      aria-label={image.alt}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={240}
                        className="w-full h-full object-cover pointer-events-none select-none"
                      />
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          {isVertical ? (
            <>
              <button
                type="button"
                className="absolute left-1/2 top-1 -translate-x-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 rounded-full transition-colors z-10"
                onClick={() => {
                  goToPrevSlide();
                  resetAutoplay();
                }}
                aria-label="Previous slide"
              >
                <ChevronUp className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="absolute left-1/2 bottom-1 -translate-x-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 rounded-full transition-colors z-10"
                onClick={() => {
                  goToNextSlide();
                  resetAutoplay();
                }}
                aria-label="Next slide"
              >
                <ChevronDown className="h-4 w-4" />
              </button>

              <div className="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-10">
                {slides.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => {
                      setCurrentSlide(index);
                      resetAutoplay();
                    }}
                    className={cn(
                      "w-1.5 rounded-full transition-all duration-300",
                      index === currentSlide
                        ? "h-4 bg-[#00adef]"
                        : "h-1.5 bg-gray-400/80 hover:bg-gray-500"
                    )}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <button
                type="button"
                className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 rounded-full transition-colors z-10"
                onClick={() => {
                  goToPrevSlide();
                  resetAutoplay();
                }}
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 rounded-full transition-colors z-10"
                onClick={() => {
                  goToNextSlide();
                  resetAutoplay();
                }}
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {slides.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => {
                      setCurrentSlide(index);
                      resetAutoplay();
                    }}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      index === currentSlide
                        ? "w-4 bg-[#00adef]"
                        : "w-1.5 bg-gray-400/80 hover:bg-gray-500"
                    )}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
