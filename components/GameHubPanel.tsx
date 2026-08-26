/** @format */

"use client";

import { X, House, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GAMEHUB_URL } from "@/constants";
import { useEffect } from "react";

interface GameHubPanelProps {
  open: boolean;
  onClose: () => void;
  iframeUrl?: string;
}

export default function GameHubPanel({
  open,
  onClose,
  iframeUrl = GAMEHUB_URL,
}: GameHubPanelProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center p-3 sm:p-4 transition-opacity duration-200",
        open
          ? "z-50 visible opacity-100 bg-black/65 animate-in fade-in"
          : "z-[-1] invisible opacity-0 pointer-events-none bg-transparent"
      )}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      aria-label="CoopBank GameHub"
    >
      <div
        className={cn(
          "flex flex-col w-full h-full max-h-full bg-slate-950 rounded-xl shadow-2xl overflow-hidden border border-sky-500/30",
          open ? "animate-in zoom-in-95 duration-200" : ""
        )}
      >
        {/* Top Header */}
        {/* <div
          className="flex items-center justify-between px-4 py-3 border-b shrink-0 text-white"
          style={{
            background: "linear-gradient(90deg, #0284c7 0%, #00adef 50%, #0369a1 100%)",
            boxShadow: "0 2px 12px rgba(0,173,239,0.35)",
          }}
        >
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-white/15 backdrop-blur-sm">
              <Gamepad2 className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-sm sm:text-base font-bold tracking-tight">
              CoopBank GameHub
            </h2>
            <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-semibold tracking-wider uppercase">
              Interactive Portal
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            tabIndex={open ? 0 : -1}
            className="text-white hover:bg-white/20 h-8 w-8 rounded-lg"
            aria-label="Close GameHub modal"
          >
            <X className="h-5 w-5" />
          </Button>
        </div> */}

        {/* Main Full-Size Iframe */}
        <main className="flex-1 min-w-0 min-h-0 bg-slate-900 w-full h-full relative">
          <iframe
            src={iframeUrl}
            className="w-full h-full border-0"
            title="CoopBank GameHub"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </main>

        {/* Bottom Bar */}
        <div
          className="shrink-0 border-t px-4 py-2.5 flex items-center justify-between gap-2"
          style={{ background: "rgba(15, 23, 42, 0.95)", backdropFilter: "blur(8px)", borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div
            className="text-sky-300 text-xs font-semibold py-1.5 px-3 rounded-full shadow-sm flex items-center gap-1.5"
            style={{
              background: "linear-gradient(135deg, rgba(0,173,239,0.15) 0%, rgba(56,189,248,0.1) 100%)",
              border: "1px solid rgba(0,173,239,0.3)",
            }}
          >
            <span>🎮</span>
            <span>Play, Engage &amp; Experience</span>
          </div>
          <Button
            onClick={onClose}
            size="sm"
            tabIndex={open ? 0 : -1}
            className="btn-shimmer shrink-0 h-8 text-xs text-white rounded-xl font-medium"
            style={{
              background: "linear-gradient(135deg, #00adef 0%, #0090c8 100%)",
              boxShadow: "0 2px 8px rgba(0,173,239,0.35)",
            }}
          >
            <House className="mr-1.5 h-3.5 w-3.5" />
            Go back
          </Button>
        </div>
      </div>
    </div>
  );
}
