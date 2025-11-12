/** @format */

"use client";

import type React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import YouTubePlayer from "./YouTubePlayer";

export interface VideoSliderProps {
  videos: string[];
  autoplayInterval?: number;
  className?: string;
}

export default function VideoSlider({
  videos = [],
  autoplayInterval = 5000,
  className = "",
}: VideoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  }, [videos.length]);

  const goToPrevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  }, [videos.length]);

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
      goToNextSlide();
    } else if (diff < -threshold) {
      goToPrevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const toggleAutoplay = () => {
    setIsAutoPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isAutoPlaying && videos.length > 1) {
      autoplayTimerRef.current = setInterval(goToNextSlide, autoplayInterval);
    } else if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isAutoPlaying, goToNextSlide, autoplayInterval, videos.length]);

  const pauseAutoplayTemporarily = useCallback(() => {
    if (isAutoPlaying && autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = setInterval(goToNextSlide, autoplayInterval);
    }
  }, [isAutoPlaying, goToNextSlide, autoplayInterval]);

  return (
    <div
      className={cn(
        "relative w-full h-48 md:h-48  mx-auto overflow-hidden rounded-lg",
        className
      )}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => pauseAutoplayTemporarily()}
      aria-roledescription="carousel"
    >
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {videos.map((videoUrl, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${videos.length}`}
          >
            <YouTubePlayer url={videoUrl} repeat={true} height="100%" />
          </div>
        ))}
      </div>

      {videos.length > 1 && (
        <>
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
        </>
      )}
    </div>
  );
}