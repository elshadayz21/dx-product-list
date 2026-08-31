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
        "relative w-full h-full min-h-[360px] mx-auto rounded-lg select-none overflow-hidden",
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
      {/*
       * ANDROID FIX: Absolute-positioned stacking instead of translateX flex strip.
       * On Android Chrome/Brave, iframes get their own GPU compositing layer and
       * do NOT render when moved off-screen via CSS transform inside overflow:hidden.
       * By stacking all slides at position:absolute inset-0 and toggling opacity,
       * every iframe stays in the visible viewport (just transparent) so it loads
       * and paints correctly on every Android browser.
       */}
      {items.map((item, index) => {
        const itemKey = `${item.type}-${item.src}`;
        const isActive = index === currentIndex;
        return (
          <div
            key={itemKey}
            style={{
              position: "absolute",
              inset: 0,
              opacity: isActive ? 1 : 0,
              pointerEvents: isActive ? "auto" : "none",
              zIndex: isActive ? 1 : 0,
              // Instant switch — no CSS transition so global animation-kill CSS
              // rules have zero effect and the iframe paints on the first frame.
            }}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${items.length}`}
            aria-hidden={!isActive}
          >
            {item.type === "video" && (
              <YouTubePlayer
                key={itemKey}
                url={item.src}
                autoplay={isActive}
                muted={true}
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
                style={{ width: "100%", height: "100%", border: "none" }}
                title={item.alt || `Slide ${index + 1}`}
                allowFullScreen
              />
            )}
          </div>
        );
      })}

      {/* Slide counter badge */}
      {items.length > 1 && (
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 12,
            zIndex: 20,
            background: "rgba(0,0,0,0.45)",
            color: "#fff",
            fontSize: 11,
            fontWeight: 600,
            padding: "2px 8px",
            borderRadius: 99,
            pointerEvents: "none",
          }}
        >
          {currentIndex + 1} / {items.length}
        </div>
      )}

      {items.length > 1 && (
        <>
          <button
            style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", zIndex: 20, background: "rgba(0,0,0,0.35)", border: "none", borderRadius: "50%", padding: 8, color: "#fff", cursor: "pointer" }}
            onClick={goToPrevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", zIndex: 20, background: "rgba(0,0,0,0.35)", border: "none", borderRadius: "50%", padding: 8, color: "#fff", cursor: "pointer" }}
            onClick={goToNextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dot indicators */}
          <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", zIndex: 20, display: "flex", gap: 6 }}>
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === currentIndex ? 20 : 8,
                  height: 8,
                  borderRadius: 99,
                  background: i === currentIndex ? "#fff" : "rgba(255,255,255,0.45)",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
