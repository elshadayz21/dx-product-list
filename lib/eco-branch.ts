/** @format */

export const ECO_BRANCH_IFRAME_URL = "https://eco-branches.vercel.app/";

export type EcoBranchImage = {
  src: string;
  alt: string;
};

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

const PRECONNECT_ORIGINS = [
  "https://eco-branches.vercel.app",
  "https://coopbankoromia.com.et",
];

let preloadStarted = false;

export function preloadEcoBranchAssets() {
  if (typeof window === "undefined" || preloadStarted) return;
  preloadStarted = true;

  PRECONNECT_ORIGINS.forEach((origin) => {
    if (document.querySelector(`link[rel="preconnect"][href="${origin}"]`)) {
      return;
    }
    const preconnect = document.createElement("link");
    preconnect.rel = "preconnect";
    preconnect.href = origin;
    preconnect.crossOrigin = "anonymous";
    document.head.appendChild(preconnect);
  });

  if (!document.querySelector(`link[rel="prefetch"][href="${ECO_BRANCH_IFRAME_URL}"]`)) {
    const prefetch = document.createElement("link");
    prefetch.rel = "prefetch";
    prefetch.href = ECO_BRANCH_IFRAME_URL;
    document.head.appendChild(prefetch);
  }

  ECO_BRANCH_IMAGES.forEach(({ src }) => {
    const img = new window.Image();
    img.decoding = "async";
    img.src = src;
  });
}
