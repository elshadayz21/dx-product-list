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
    setRect(anchor.getBoundingClientRect());
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
      }}
    >
      <iframe src={src} title={title} allowFullScreen />
    </div>,
    document.body
  );
}
