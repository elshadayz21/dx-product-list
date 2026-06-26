/** @format */

export const ECO_BRANCH_IFRAME_URL = "https://eco-branches.vercel.app/";

export type EcoBranchImage = {
  src: string;
  alt: string;
};

const ecoBranchPicture = (fileName: string) =>
  `/eco-branch-pictures/${encodeURIComponent(fileName)}`;

export const ECO_BRANCH_IMAGES: EcoBranchImage[] = [
  {
    src: ecoBranchPicture("eco-branch-pictures (1).jpeg"),
    alt: "Eco-Branch image 1",
  },
  {
    src: ecoBranchPicture("eco-branch-pictures (2).jpeg"),
    alt: "Eco-Branch image 2",
  },
  {
    src: ecoBranchPicture("eco-branch-pictures (3).jpeg"),
    alt: "Eco-Branch image 3",
  },
  {
    src: ecoBranchPicture("eco-branch-pictures (4).jpeg"),
    alt: "Eco-Branch image 4",
  },
  {
    src: ecoBranchPicture("eco-branch-pictures (5).jpeg"),
    alt: "Eco-Branch image 5",
  },
  {
    src: ecoBranchPicture("eco-branch-pictures (6).jpeg"),
    alt: "Eco-Branch image 6",
  },
  {
    src: ecoBranchPicture("eco-branch-pictures (7).jpeg"),
    alt: "Eco-Branch image 7",
  },
];

const PRECONNECT_ORIGINS = ["https://eco-branches.vercel.app"];

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