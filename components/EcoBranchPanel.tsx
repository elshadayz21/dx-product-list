/** @format */

"use client";

import Image from "next/image";
import { X, Leaf, House, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import EcoBranchImageCarousel, {
  type EcoBranchImage,
} from "./EcoBranchImageCarousel";

export const ECO_BRANCH_IMAGES: EcoBranchImage[] = [
  {
    src: "https://coopbankoromia.com.et/wp-content/uploads/2025/04/ec-1024x576top.webp",
    alt: "CoopBank Eco-Branch",
  },
  {
    src: "https://coopbankoromia.com.et/wp-content/uploads/2025/04/19-1024x576eco-uai-384x288.webp",
    alt: "Eco-Branch in rural Ethiopia",
  },
  {
    src: "https://coopbankoromia.com.et/wp-content/uploads/2025/04/echo-branch-uai-384x288.webp",
    alt: "Echo Branch",
  },
  {
    src: "https://coopbankoromia.com.et/wp-content/uploads/2025/04/eco-green-724x1024echo-uai-362x362.webp",
    alt: "Eco-Branch green design",
  },
  {
    src: "https://coopbankoromia.com.et/wp-content/uploads/2025/04/1-1024x543-long-uai-483x272.webp",
    alt: "CoopBank Eco-Branches journey",
  },
];

interface EcoBranchPanelProps {
  onClose: () => void;
  iframeUrl?: string;
}

export default function EcoBranchPanel({
  onClose,
  iframeUrl = "https://eco-branches.vercel.app/",
}: EcoBranchPanelProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose, lightboxIndex]);

  const goToPrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + ECO_BRANCH_IMAGES.length) % ECO_BRANCH_IMAGES.length
    );
  };

  const goToNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % ECO_BRANCH_IMAGES.length);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-3 sm:p-4 animate-in fade-in duration-200"
        role="dialog"
        aria-modal="true"
        aria-label="CoopBank Eco-Branches"
      >
        <div className="flex flex-col w-full h-full max-h-full bg-white rounded-xl shadow-2xl overflow-hidden border animate-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between px-4 py-2 border-b bg-[#00adef] text-white shrink-0">
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4 eco-float" />
              <h2 className="text-sm sm:text-base font-semibold font-['Open Sans']">
                CoopBank Eco-Branches
              </h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20 h-8 w-8"
              aria-label="Close Eco-Branches modal"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-1 min-h-0">
            <aside className="w-36 sm:w-44 shrink-0 border-r bg-white p-2 flex flex-col">
              <EcoBranchImageCarousel
                images={ECO_BRANCH_IMAGES}
                className="flex-1 min-h-0"
                orientation="vertical"
                autoplayInterval={4000}
                onImageClick={setLightboxIndex}
              />
            </aside>

            <main className="flex-1 min-w-0 min-h-0 bg-slate-50">
              <iframe
                src={iframeUrl}
                className="w-full h-full border-0"
                title="CoopBank Eco-Branches Map"
                allowFullScreen
              />
            </main>
          </div>

          <div className="shrink-0 border-t bg-white px-4 py-2 flex items-center justify-between gap-2">
            <div className="bg-orange-100 text-orange-800 text-xs font-semibold py-1 px-2.5 rounded-full font-['Open Sans'] shadow-sm">
              Bank Smarter, Live Better
            </div>
            <Button
              onClick={onClose}
              size="sm"
              className="bg-[#00adef] shrink-0 h-8 text-xs"
            >
              <House className="mr-1.5 h-3.5 w-3.5" />
              Go back to home
            </Button>
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded eco-branch image"
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close expanded image"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/40 p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevLightbox();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={ECO_BRANCH_IMAGES[lightboxIndex].src}
              alt={ECO_BRANCH_IMAGES[lightboxIndex].alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
            />
            <p className="text-center text-white/90 text-sm mt-3 font-['Open Sans']">
              {ECO_BRANCH_IMAGES[lightboxIndex].alt}
            </p>
            <Button
              onClick={() => setLightboxIndex(null)}
              className="mt-4 bg-[#00adef] hover:bg-[#0099d4]"
              size="sm"
            >
              <X className="mr-1.5 h-4 w-4" />
              Close
            </Button>
          </div>

          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/40 p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              goToNextLightbox();
            }}
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      )}
    </>
  );
}
