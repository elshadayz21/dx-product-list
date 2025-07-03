// import * as React from "react"
// import { Image } from "next/image"
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import { ImageSliderProps } from "@/types"

// export default function ImageSlider({ vslaPhotos }: ImageSliderProps) {
//   return (
//     <Carousel className="w-full max-w-xs">
//       <CarouselContent>
//         {vslaPhotos?.map((image, index) => (
//           <CarouselItem key={index}>
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//            <img src={image.src} alt={image.alt} className="object-cover w-full h-full" />
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }

"use client";

import type React from "react";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ImageSliderProps1 } from "@/types";
import Image from "next/image";

export default function ImageSlider({
  vslaPhotos = [],
  autoplayInterval = 5000,
  className,
}: ImageSliderProps1) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vslaPhotos.length);
  }, [vslaPhotos.length]);

  const goToPrevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + vslaPhotos.length) % vslaPhotos.length
    );
  }, [vslaPhotos.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum distance to be considered a swipe

    if (diff > threshold) {
      // Swipe left, go to next slide
      goToNextSlide();
    } else if (diff < -threshold) {
      // Swipe right, go to previous slide
      goToPrevSlide();
    }

    // Reset values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const toggleAutoplay = () => {
    setIsAutoPlaying((prev) => !prev);
  };

  // Handle autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      autoplayTimerRef.current = setInterval(goToNextSlide, autoplayInterval);
    } else if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isAutoPlaying, goToNextSlide, autoplayInterval]);

  // Pause autoplay when user interacts with slider
  const pauseAutoplayTemporarily = useCallback(() => {
    if (isAutoPlaying && autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = setInterval(goToNextSlide, autoplayInterval);
    }
  }, [isAutoPlaying, goToNextSlide, autoplayInterval]);

  return (
    <div
      className={cn(
        "relative w-full h-48 md:h-48 mx-auto overflow-hidden rounded-lg"
      )}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => pauseAutoplayTemporarily()}
      aria-roledescription="carousel"
    >
      {/* Main slider */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {vslaPhotos.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${vslaPhotos.length}`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-fit"
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        onClick={() => {
          goToPrevSlide();
          pauseAutoplayTemporarily();
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        onClick={() => {
          goToNextSlide();
          pauseAutoplayTemporarily();
        }}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {vslaPhotos.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              index === currentIndex
                ? "bg-white"
                : "bg-white/50 hover:bg-white/80"
            )}
            onClick={() => {
              goToSlide(index);
              pauseAutoplayTemporarily();
            }}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>

      {/* Autoplay control */}
      <button
        className="absolute bottom-4 right-4 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        onClick={toggleAutoplay}
        aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
      >
        {isAutoPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
