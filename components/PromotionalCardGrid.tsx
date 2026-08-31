"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, Sparkles, Layers, Grid } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PromotionalCardItem {
  id: string | number;
  title?: string;
  subtitle?: string;
  badge?: string;
  imageUrl: string;
  altText?: string;
  aspectRatio?: "16:9" | "1:1" | "4:3" | "4:5" | "2:1" | "auto";
  fit?: "contain" | "cover";
  targetUrl?: string;
  ctaText?: string;
}

export interface PromotionalCardGridProps {
  items: PromotionalCardItem[];
  title?: string;
  subtitle?: string;
  layoutMode?: "grid" | "carousel" | "hybrid";
  className?: string;
  onItemClick?: (item: PromotionalCardItem, index: number) => void;
}

/**
 * Aspect Ratio helper mapping standard CSS aspect-ratio values
 */
const ASPECT_RATIO_CLASSES: Record<string, string> = {
  "16:9": "aspect-[16/9]",
  "1:1": "aspect-square",
  "4:3": "aspect-[4/3]",
  "4:5": "aspect-[4/5]",
  "2:1": "aspect-[2/1]",
  auto: "aspect-auto",
};

/**
 * Single Promotional Card Component
 */
export function PromotionalCard({
  item,
  index,
  onClick,
}: {
  item: PromotionalCardItem;
  index: number;
  onClick?: () => void;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const fitMode = item.fit || (item.aspectRatio === "4:5" ? "contain" : "cover");
  const aspectClass = ASPECT_RATIO_CLASSES[item.aspectRatio || "16:9"] || "aspect-[16/9]";

  return (
    <div
      className={cn(
        "group relative flex flex-col w-full h-auto overflow-hidden rounded-2xl",
        "bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800",
        "shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,173,239,0.15)]",
        "transition-all duration-300 ease-out hover:-translate-y-1 select-none"
      )}
    >
      {/* Top Header / Badge Bar (Optional) */}
      {(item.badge || item.title) && (
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center gap-2">
            {item.badge && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/50 text-[#00adef] dark:text-sky-400 border border-sky-200/60 dark:border-sky-800/50">
                <Sparkles className="w-3 h-3" />
                {item.badge}
              </span>
            )}
            {item.title && (
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 truncate max-w-[200px]">
                {item.title}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClick}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors"
            title="Expand image"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Image Container with Dynamic Aspect Ratio - Eliminates Blank Space */}
      <div
        className={cn(
          "relative w-full overflow-hidden bg-slate-950/5 dark:bg-slate-950/40 cursor-pointer",
          aspectClass
        )}
        onClick={onClick}
      >
        {/* Background Blurred Ambient Fill (Used when object-fit is contain to prevent awkward letterboxing) */}
        {fitMode === "contain" && (
          <div
            className="absolute inset-0 scale-110 blur-xl opacity-40 bg-cover bg-center pointer-events-none transition-opacity duration-500"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          />
        )}

        {/* Main Image */}
        <Image
          src={item.imageUrl}
          alt={item.altText || item.title || `Promotional banner ${index + 1}`}
          layout="fill"
          objectFit={fitMode}
          priority={index < 2}
          className={cn(
            "transition-all duration-500 ease-out group-hover:scale-[1.02] z-10",
            fitMode === "contain" ? "p-1" : "",
            !isLoaded ? "opacity-90" : "opacity-100"
          )}
        />

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-4">
          <div className="text-white">
            {item.title && <p className="text-sm font-bold leading-snug drop-shadow">{item.title}</p>}
            {item.subtitle && <p className="text-xs text-slate-200 drop-shadow line-clamp-1">{item.subtitle}</p>}
          </div>
        </div>
      </div>

      {/* Footer CTA (Optional) */}
      {item.ctaText && (
        <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={onClick}
            className="w-full py-2 px-3 text-xs font-semibold text-white rounded-xl bg-gradient-to-r from-[#00adef] to-[#0090c8] hover:from-[#0090c8] hover:to-[#0070a0] shadow-sm transition-all duration-200 active:scale-[0.98]"
          >
            {item.ctaText}
          </button>
        </div>
      )}
    </div>
  );
}

/**
 * Responsive Promotional Card Grid / Carousel Wrapper
 */
export default function PromotionalCardGrid({
  items,
  title,
  subtitle,
  layoutMode = "hybrid",
  className = "",
  onItemClick,
}: PromotionalCardGridProps) {
  const [activeMode, setActiveMode] = useState<"grid" | "carousel">(
    layoutMode === "hybrid" ? "grid" : layoutMode
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState<PromotionalCardItem | null>(null);

  if (!items || items.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className={cn("w-full my-6", className)}>
      {/* Section Header with View Toggle */}
      {(title || subtitle || layoutMode === "hybrid") && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 px-1">
          <div>
            {title && (
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00adef]" />
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {subtitle}
              </p>
            )}
          </div>

          {layoutMode === "hybrid" && items.length > 1 && (
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl self-start sm:self-auto border border-slate-200/60 dark:border-slate-700/60">
              <button
                type="button"
                onClick={() => setActiveMode("grid")}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",
                  activeMode === "grid"
                    ? "bg-white dark:bg-slate-900 text-[#00adef] shadow-sm"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                )}
              >
                <Grid className="w-3.5 h-3.5" />
                Grid View
              </button>
              <button
                type="button"
                onClick={() => setActiveMode("carousel")}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",
                  activeMode === "carousel"
                    ? "bg-white dark:bg-slate-900 text-[#00adef] shadow-sm"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                )}
              >
                <Layers className="w-3.5 h-3.5" />
                Carousel
              </button>
            </div>
          )}
        </div>
      )}

      {/* Grid Layout (Side-by-Side Responsive) */}
      {activeMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-start">
          {items.map((item, index) => (
            <PromotionalCard
              key={item.id || index}
              item={item}
              index={index}
              onClick={() => {
                setExpandedImage(item);
                onItemClick?.(item, index);
              }}
            />
          ))}
        </div>
      )}

      {/* Carousel Layout */}
      {activeMode === "carousel" && (
        <div className="relative w-full group">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((item, index) => (
                <div key={item.id || index} className="w-full flex-shrink-0 px-1">
                  <PromotionalCard
                    item={item}
                    index={index}
                    onClick={() => {
                      setExpandedImage(item);
                      onItemClick?.(item, index);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-md shadow-lg transition-all active:scale-95 z-30"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-md shadow-lg transition-all active:scale-95 z-30"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Indicator Dots */}
              <div className="flex justify-center items-center gap-1.5 mt-3">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      currentIndex === idx
                        ? "w-6 bg-[#00adef]"
                        : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Expanded Modal / Lightbox View */}
      {expandedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setExpandedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 rounded-2xl p-2 overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setExpandedImage(null)}
              className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white text-xs font-semibold transition-all"
            >
              Close ✕
            </button>
            <div className="relative w-full h-[70vh] flex items-center justify-center">
              <Image
                src={expandedImage.imageUrl}
                alt={expandedImage.altText || "Promotional banner fullscreen"}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
