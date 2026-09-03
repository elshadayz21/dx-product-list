import React, { useState, useMemo, useRef } from "react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Download,
  ExternalLink,
  House,
  NotepadText,
  Sparkles,
  ArrowLeft,
  Play,
  LayoutDashboard,
} from "lucide-react";
import { Product } from "@/types";
import { products } from "@/constants";
import YouTubePlayer from "./YouTubePlayer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MixedContentSlider from "./MixedContentSlider";
import IframePortal from "./IframePortal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ContentItem = {
  type: "video" | "image" | "iframe";
  src: string;
  alt?: string;
};

interface ProductPageProps {
  onOpenEcoBranch?: () => void;
}

const MemoizedMixedContentSlider = React.memo(MixedContentSlider);
const MemoizedYouTubePlayer = React.memo(YouTubePlayer);

/** Shimmer-hover action button */
function ActionButton({
  onClick,
  children,
  variant = "primary",
}: {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ease-out active:scale-[0.98] w-full hover:-translate-y-0.5 ${variant === "primary"
        ? "text-white hover:shadow-blue-glow"
        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
        }`}
      style={
        variant === "primary"
          ? {
            background: "linear-gradient(135deg, #00adef 0%, #0090c8 100%)",
            boxShadow: "0 2px 8px rgba(0,173,239,0.25)",
          }
          : {}
      }
    >
      {children}
    </button>
  );
}

export default function ProductPage({ onOpenEcoBranch }: ProductPageProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [activeTab, setActiveTab] = useState("dxvalleyProducts");
  const dashboardHostRef = useRef<HTMLDivElement>(null);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setShowVideo(false);
    setShowDashboard(false);
  };

  const handleOpenLink = (url: string | undefined) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleDownload = (file: string | undefined) => {
    const filePath = `/slides/${file}`;
    const link = document.createElement("a");
    link.href = filePath;
    link.download = `${file}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBackToList = () => {
    if (selectedProduct) {
      setActiveTab(
        selectedProduct.type === "corebankingapp"
          ? "coreBankingProducts"
          : "dxvalleyProducts"
      );
    }
    setSelectedProduct(null);
    setShowVideo(false);
    setShowDashboard(false);
  };

  const mediaContent = useMemo(() => {
    if (!selectedProduct) return [];
    const items: ContentItem[] = [];
    if (selectedProduct.videos)
      selectedProduct.videos.forEach((v) => items.push({ type: "video", src: v }));
    if (selectedProduct.vslaPhotos)
      selectedProduct.vslaPhotos.forEach((p) =>
        items.push({ type: "image", src: p.src, alt: p.alt })
      );
    if (selectedProduct.iframeUrls)
      selectedProduct.iframeUrls.forEach((url) =>
        items.push({ type: "iframe", src: url })
      );
    return items;
  }, [selectedProduct]);

  /* ── PRODUCT DETAIL VIEW ────────────────────────────────── */
  if (selectedProduct) {
    return (
      <div className="flex flex-col h-full overflow-hidden">
        {/* Detail header */}
        <div
          className="shrink-0 px-4 py-2.5 flex items-center gap-3"
          style={{ background: "linear-gradient(90deg, #0f172a 0%, #1e293b 100%)" }}
        >
          <button
            onClick={handleBackToList}
            className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-xs md:text-sm font-medium"
          >
            <ArrowLeft size={14} />
            Back
          </button>
          <div className="h-3.5 w-px bg-white/10" />
          <h2 className="text-white font-semibold text-xs md:text-sm truncate flex-1">
            {selectedProduct.name}
          </h2>
          <span className="text-[10px] md:text-[11px] text-sky-300 font-semibold bg-sky-400/10 px-2 py-0.5 rounded-full border border-sky-400/20 flex-shrink-0">
            {selectedProduct.moto ?? "Bank Smarter, Live Better"}
          </span>
        </div>

        {/* Detail body */}
        <main className="flex-1 min-h-0 overflow-hidden p-3 md:p-3.5">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 h-full min-h-0">
            {/* Left — image + actions */}
            <div className="w-full md:w-[210px] lg:w-[230px] shrink-0 flex flex-col gap-2 h-full min-h-0">
              <div
                className="relative rounded-xl overflow-hidden bg-white flex items-center justify-center shrink-0"
                style={{
                  boxShadow: "0 4px 16px rgba(0,173,239,0.1)",
                  height: 120,
                  border: "1px solid rgba(0,173,239,0.1)",
                }}
              >
                <Image
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  width={240}
                  height={120}
                  className="object-contain w-full h-full p-2.5 max-h-24"
                />
                <Sparkles className="absolute bottom-1.5 right-1.5 text-sky-300 w-4 h-4 opacity-60" />
              </div>

              <div className="flex flex-col gap-1.5 shrink-0">
                {selectedProduct.file && (
                  <ActionButton onClick={() => handleDownload(selectedProduct.file)}>
                    <Download size={13} />
                    Download PPT
                  </ActionButton>
                )}
                {selectedProduct.video && (
                  <ActionButton onClick={() => {
                    setShowVideo((v) => !v);
                    setShowDashboard(false);
                  }}>
                    {showVideo ? <NotepadText size={13} /> : <Play size={13} />}
                    {showVideo ? "Show Description" : "Watch Video"}
                  </ActionButton>
                )}
                {selectedProduct.dashboard && (
                  <ActionButton onClick={() => {
                    setShowDashboard((d) => !d);
                    setShowVideo(false);
                  }}>
                    {showDashboard ? <NotepadText size={13} /> : <LayoutDashboard size={13} />}
                    {showDashboard ? "Show Description" : "Dashboard"}
                  </ActionButton>
                )}
                {selectedProduct.link && (
                  <ActionButton
                    onClick={() => handleOpenLink(selectedProduct.link)}
                    variant="secondary"
                  >
                    <ExternalLink size={13} />
                    Visit Site
                  </ActionButton>
                )}
              </div>
            </div>

            {/* Right — description / video / dashboard / media */}
            <div className="flex-1 min-w-0 flex flex-col gap-2 h-full min-h-0">
              {showDashboard && selectedProduct.dashboard ? (
                <div className="flex-1 h-full min-h-0 w-full rounded-xl overflow-hidden border border-slate-200/80 shadow-sm relative bg-slate-900">
                  <div
                    ref={dashboardHostRef}
                    className="iframe-host w-full h-full"
                    aria-hidden
                  />
                  <IframePortal
                    src={selectedProduct.dashboard}
                    title={`${selectedProduct.name} Dashboard`}
                    anchorRef={dashboardHostRef}
                    visible={showDashboard}
                  />
                </div>
              ) : showVideo && selectedProduct.video ? (
                <div className="flex-1 h-full min-h-0 rounded-xl overflow-hidden">
                  <MemoizedYouTubePlayer url={selectedProduct.video} autoplay={true} />
                </div>
              ) : (
                <div className="flex flex-col gap-2 h-full min-h-0">
                  <div className="text-xs md:text-sm text-slate-600 leading-relaxed shrink-0 max-h-24 overflow-y-auto pr-1">
                    {selectedProduct.description}
                  </div>
                  {mediaContent.length > 0 && (
                    <div className="flex-1 min-h-0 h-full w-full relative overflow-hidden rounded-xl border border-slate-200/80">
                      <MemoizedMixedContentSlider
                        key={selectedProduct.id}
                        items={mediaContent}
                        className="h-full w-full"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Thumbnail strip */}
        <nav className="shrink-0 border-t bg-white relative z-50">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex w-max items-center px-2 py-1.5 gap-1">
              <button
                onClick={handleBackToList}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors flex-shrink-0"
              >
                <House className="h-4 w-4 text-[#00adef]" />
              </button>

              {products
                .filter((p) => {
                  if (activeTab === "coreBankingProducts") return p?.type === "corebankingapp";
                  if (activeTab === "developmentProducts") return p?.type === "underDevelopment";
                  return (
                    !p?.type ||
                    (p.type !== "corebankingapp" &&
                      p.type !== "underDevelopment" &&
                      p.type !== "dropdownMenu")
                  );
                })
                .map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductSelect(product)}
                    className={`relative p-1 rounded-lg transition-all duration-200 flex-shrink-0 ${selectedProduct?.id === product.id
                      ? "bg-[#00adef]/10 ring-2 ring-[#00adef]/40 scale-105"
                      : "hover:bg-slate-100"
                      }`}
                  >
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={40}
                      height={40}
                      className="rounded-md object-contain w-10 h-10"
                    />
                    {selectedProduct?.id === product.id && (
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#00adef] rounded-full" />
                    )}
                  </button>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </nav>
      </div>
    );
  }

  /* ── PRODUCT GRID (clean hover card component) ── */
  const ProductCard = ({ product }: { product: Product }) => {
    return (
      <div
        className="product-card cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200/80 group transition-shadow duration-300 ease-out hover:border-[#00adef]/60 h-[190px] flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(0,173,239,0.18)]"
        onClick={() => handleProductSelect(product)}
      >
        <div className="p-2 flex-1 min-h-[150px] w-full flex items-center justify-center bg-gradient-to-b from-slate-50/40 to-white overflow-hidden relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={350}
            height={220}
            className="w-full h-full object-contain group-hover:scale-[1.03] transition-[transform] duration-500 ease-out"
          />
        </div>
        <div className="px-3.5 py-2.5 flex items-center justify-between border-t border-slate-100 bg-white group-hover:bg-slate-50/80 transition-colors duration-300 shrink-0">
          <span className="text-[12px] font-bold text-slate-700 truncate pr-2 group-hover:text-[#00adef] transition-colors duration-300">
            {product.name}
          </span>
          <ExternalLink size={12} className="text-[#00adef] flex-shrink-0 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="h-full flex flex-col"
      >
        {/* Grid content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 smooth-scroll-area flex flex-col justify-start product-grid-stable">
          <TabsContent value="dxvalleyProducts" className="mt-0 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 auto-rows-[190px]">
              {products
                .filter(
                  (p) =>
                    p?.type !== "corebankingapp" &&
                    p?.type !== "underDevelopment" &&
                    p?.type !== "dropdownMenu"
                )
                .map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </TabsContent>

          <TabsContent value="coreBankingProducts" className="mt-0 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 auto-rows-[190px]">
              {products
                .filter((p) => p?.type === "corebankingapp")
                .map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </TabsContent>

          <TabsContent value="developmentProducts" className="mt-0 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 auto-rows-[190px]">
              {products
                .filter((p) => p?.type === "underDevelopment")
                .map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </TabsContent>

          <TabsContent value="imageTab" className="mt-0 flex-1 flex flex-col justify-center items-center p-2">
            <div className="flex justify-center items-center py-2 flex-1 h-full w-full max-w-sm">
              <div
                className="rounded-xl overflow-hidden w-full flex flex-col items-center bg-white border border-slate-200/80 shadow-md"
              >
                <div className="p-3 bg-slate-50 flex items-center justify-center w-full max-h-[340px] overflow-hidden">
                  <Image
                    src="/image.jpeg"
                    alt="Mobile-Money-ecosystem-in-Ethiopia-2023/24"
                    width={450}
                    height={300}
                    className="max-h-[300px] w-auto h-auto max-w-full object-contain rounded-lg"
                  />
                </div>
                <div className="bg-white px-3 py-1.5 text-[11px] text-slate-500 border-t w-full text-center shrink-0">
                  Source:{" "}
                  <a
                    href="https://www.linkedin.com/posts/shegahq_digitalfinance-dfs-digitaltransaction-activity-7290377799494692864-DXgZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00adef] underline font-medium"
                  >
                    Shega Media
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
        </div>

        {/* Dark tab bar */}
        <div
          className="shrink-0"
          style={{ background: "linear-gradient(90deg, #0f172a 0%, #1e293b 100%)" }}
        >
          <TabsList className="w-full h-auto bg-transparent rounded-none px-1 py-1.5 grid grid-cols-5 gap-0.5">
            {[
              { value: "dxvalleyProducts", label: "CoopBank" },
              { value: "developmentProducts", label: "Experiments" },
              { value: "coreBankingProducts", label: "Core" },
              { value: "imageTab", label: "Coopay Stat" },
            ].map(({ value, label }) => (
              <TabsTrigger
                key={value}
                value={value}
                className={`relative text-[11px] font-medium py-2 px-1 rounded-lg transition-all duration-200 ${activeTab === value
                  ? "text-white bg-white/10"
                  : "text-white/40 hover:text-white/70 hover:bg-white/5"
                  }`}
              >
                {label}
                {activeTab === value && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#00adef] rounded-full" />
                )}
              </TabsTrigger>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-[11px] font-medium py-2 px-1 rounded-lg text-white/40 hover:text-white/70 hover:bg-white/5 transition-all duration-200">
                  More ▾
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="bg-white border border-slate-200 shadow-xl rounded-xl min-w-[140px]"
                align="end"
              >
                {products.map((product) => {
                  if (product.type !== "dropdownMenu") return null;
                  if (product.name === "EcoBranch" && onOpenEcoBranch) {
                    return (
                      <DropdownMenuItem
                        key={product.id}
                        onClick={onOpenEcoBranch}
                        className="cursor-pointer text-sm text-slate-700"
                      >
                        🌿 {product.name}
                      </DropdownMenuItem>
                    );
                  }
                  if (product.name === "GameHub") {
                    return (
                      <DropdownMenuItem asChild key={product.id}>
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer text-sm text-slate-700 flex items-center gap-1.5"
                        >
                          🎮 {product.name}
                        </a>
                      </DropdownMenuItem>
                    );
                  }
                  return (
                    <DropdownMenuItem asChild key={product.id}>
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-700"
                      >
                        {product.name}
                      </a>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </TabsList>
        </div>
      </Tabs>
    </div>
  );
}
