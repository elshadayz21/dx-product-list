/** @format */

"use client";

import { useCallback, useEffect, useState, type RefObject } from "react";
import { createPortal } from "react-dom";
import { ExternalLink } from "lucide-react";

interface IframePortalProps {
  src: string;
  title: string;
  anchorRef: RefObject<HTMLElement | null>;
  visible?: boolean;
  zIndex?: number;
}

export function isMixedContentIframe(src: string) {
  return (
    typeof window !== "undefined" &&
    window.location.protocol === "https:" &&
    src.startsWith("http://")
  );
}

export function BlockedIframeNotice({ src }: { src: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-900 px-6 text-center text-white">
      <p className="text-sm font-semibold">This dashboard uses an HTTP address.</p>
      <p className="max-w-md text-xs text-slate-300">
        Brave blocks HTTP dashboards inside this HTTPS page. Open it directly in a new tab on the TV.
      </p>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-sky-400"
      >
        <ExternalLink size={14} />
        Open dashboard
      </a>
    </div>
  );
}

/**
 * Renders an iframe in a document.body portal, positioned over a host element.
 * Avoids Android TV / WebView blank iframes caused by ancestor transforms,
 * backdrop-filter, or opacity compositing layers.
 */
export default function IframePortal({
  src,
  title,
  anchorRef,
  visible = true,
  zIndex = 45,
}: IframePortalProps) {
  const [mounted, setMounted] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateRect = useCallback(() => {
    const anchor = anchorRef.current;
    if (!anchor) {
      setRect(null);
      return;
    }

    const anchorRect = anchor.getBoundingClientRect();
    const parentContainer = anchor.closest("main") || anchor.closest(".tv-iframe-shell");

    if (parentContainer) {
      const parentRect = parentContainer.getBoundingClientRect();
      const top = Math.max(anchorRect.top, parentRect.top);
      const bottom = Math.min(anchorRect.bottom, parentRect.bottom);
      const left = Math.max(anchorRect.left, parentRect.left);
      const right = Math.min(anchorRect.right, parentRect.right);
      const width = Math.max(0, right - left);
      const height = Math.max(0, bottom - top);
      setRect(new DOMRect(left, top, width, height));
    } else {
      setRect(anchorRect);
    }
  }, [anchorRef]);

  useEffect(() => {
    if (!visible) return;

    updateRect();
    const anchor = anchorRef.current;
    if (!anchor) return;

    const observer = new ResizeObserver(updateRect);
    observer.observe(anchor);

    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect, true);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect, true);
    };
  }, [anchorRef, updateRect, visible]);

  if (!mounted || !visible || !rect || rect.width <= 0 || rect.height <= 0) {
    return null;
  }

  const isBlockedMixedContent = isMixedContentIframe(src);

  return createPortal(
    <div
      className="iframe-host iframe-portal"
      style={{
        position: "fixed",
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        zIndex,
        margin: 0,
        padding: 0,
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      {isBlockedMixedContent ? (
        <BlockedIframeNotice src={src} />
      ) : (
        <iframe src={src} title={title} allowFullScreen />
      )}
    </div>,
    document.body
  );
}
