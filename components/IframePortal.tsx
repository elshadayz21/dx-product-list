/** @format */

"use client";

import { useCallback, useEffect, useState, type RefObject } from "react";
import { createPortal } from "react-dom";

interface IframePortalProps {
  src: string;
  title: string;
  anchorRef: RefObject<HTMLElement | null>;
  visible?: boolean;
  zIndex?: number;
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
      <iframe src={src} title={title} allowFullScreen />
    </div>,
    document.body
  );
}
