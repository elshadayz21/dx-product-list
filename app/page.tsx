/** @format */

"use client";
import CooperativeVision from "@/components/cooperativevision";
import EcoBranchPanel from "@/components/EcoBranchPanel";
import GameHubPanel from "@/components/GameHubPanel";
import ProductPage from "@/components/products";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { preloadEcoBranchAssets } from "@/lib/eco-branch";
import { Leaf, Lock, Eye, EyeOff, Sparkles, Shield, X, Maximize2, Gamepad2 } from "lucide-react";
import { DASHBOARD_STATS, products, AWARD_CARDS, GAMEHUB_URL } from "@/constants";
import { Product } from "@/types";

const getProductFontColor = (product: Product) => {
  const pType = (product.produtType || "").trim().toLowerCase();
  const type = (product.type || "").trim().toLowerCase();

  if (pType === "internal") {
    return "#00adef"; // Cyan blue
  }
  if (type === "corebankingapp" || pType.includes("core")) {
    return "#0f172a"; // Black / Dark slate
  }
  if (pType === "external") {
    return "#e38524"; // #e38524 orange
  }
  return "#e38524";
};


const Page = () => {
  const [pin, setPin] = useState("");
  const [isPinVerified, setIsPinVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showEcoBranch, setShowEcoBranch] = useState(false);
  const [showGameHub, setShowGameHub] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tilt, setTilt] = useState<{ [key: string]: { x: number; y: number } }>({});
  const [showSplash, setShowSplash] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [activeImageModal, setActiveImageModal] = useState<{ src: string; title: string } | null>(null);
  const [counter, setCounter] = useState<{ [key: string]: number }>(() =>
    DASHBOARD_STATS.reduce((acc, s) => ({ ...acc, [s.key]: 0 }), {})
  );
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPinVerified) {
      preloadEcoBranchAssets();
      // Dashboard entrance splash
      setShowSplash(true);
      setTimeout(() => setShowSplash(false), 1800);
      // Start stats counter after splash
      setTimeout(() => setStatsVisible(true), 500);
    }
  }, [isPinVerified]);

  // Animated counter
  useEffect(() => {
    if (!statsVisible) return;
    const duration = 1400;
    const steps = 50;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      const updated: { [key: string]: number } = {};
      DASHBOARD_STATS.forEach((stat) => {
        updated[stat.key] = Math.round(stat.target * ease);
      });
      setCounter(updated);
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [statsVisible]);

  const handlePinSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 350));
    if (pin === "DxOngoing123") {
      setIsPinVerified(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Incorrect password. Please try again.");
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 600);
    }
    setIsSubmitting(false);
  };

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 14;
    setTilt((prev) => ({ ...prev, [id]: { x, y } }));
  };

  const resetTilt = (id: string) => {
    setTilt((prev) => ({ ...prev, [id]: { x: 0, y: 0 } }));
  };

  // Ripple on click
  const createRipple = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const rect = btn.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - diameter / 2}px`;
    circle.style.top = `${e.clientY - rect.top - diameter / 2}px`;
    circle.className = "ripple-circle";
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 700);
  }, []);


  return (
    <div className="min-h-screen w-full">
      {!isPinVerified ? (
        <div className="login-bg min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* ── PREMIUM LOGIN SCREEN ────────────────────────────── */}
          {/* Top-left corner logo */}
          <div className="absolute top-6 left-6 z-20 flex items-center gap-3 animate-fade-in">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg border border-white/30 flex items-center justify-center">
              <Image
                src="/products/dxvalleylogo.png"
                alt="DxValley"
                width={130}
                height={50}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Floating ambient particles */}
          <div className="particle particle-1" />
          <div className="particle particle-2" />
          <div className="particle particle-3" />
          <div className="particle particle-4" />
          <div className="particle particle-5" />
          <div className="particle particle-6" />

          {/* Animated ring behind card */}
          <div
            className="absolute w-[520px] h-[520px] rounded-full opacity-10 animate-spin-slow"
            style={{
              background:
                "conic-gradient(from 0deg, #00adef, #0090c8, #38bdf8, #00adef)",
              filter: "blur(1px)",
            }}
          />

          {/* Login card */}
          <div
            ref={formRef}
            className={`glass-dark rounded-2xl shadow-login-card w-full max-w-sm mx-4 p-8 flex flex-col items-center relative z-10 ${isShaking ? "animate-shake" : "animate-scale-in"}`}
          >
            {/* Top badge */}
            <div className="flex items-center gap-1.5 bg-coopBlue/10 border border-coopBlue/20 rounded-full px-3 py-1 mb-6">
              <Shield size={12} className="text-coopBlue" />
              <span className="text-[11px] text-coopBlue font-semibold tracking-widest uppercase">
                Secure Access
              </span>
            </div>

            {/* Logo */}
            <div className="mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <Image
                src="/products/dxvalleylogo.png"
                alt="Dx Valley"
                width={220}
                height={90}
                className="mx-auto drop-shadow-lg"
                priority
              />
            </div>

            <h1
              className="text-white text-xl font-bold mb-1 tracking-tight animate-slide-up"
              style={{ animationDelay: "0.18s" }}
            >
              Welcome Back
            </h1>
            <p
              className="text-slate-400 text-sm mb-7 animate-slide-up"
              style={{ animationDelay: "0.24s" }}
            >
              Enter your password to continue
            </p>

            {/* Input */}
            <div
              className="w-full relative mb-1 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Lock
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 z-10"
              />
              <Input
                type={showPassword ? "text" : "password"}
                value={pin}
                placeholder="Enter password"
                onChange={(e) => setPin(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handlePinSubmit();
                }}
                className="pl-9 pr-10 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-coopBlue focus:ring-2 focus:ring-coopBlue/20 rounded-xl h-11 transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>

            {/* Error message */}
            {errorMessage && (
              <p className="text-red-400 text-xs mb-3 animate-fade-in flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />
                {errorMessage}
              </p>
            )}

            {/* Submit */}
            <button
              onClick={handlePinSubmit}
              disabled={isSubmitting || !pin}
              className="btn-shimmer w-full mt-4 h-11 rounded-xl font-semibold text-sm text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 animate-slide-up"
              style={{
                animationDelay: "0.36s",
                background: "linear-gradient(135deg, #00adef 0%, #0090c8 100%)",
                boxShadow: isSubmitting
                  ? "none"
                  : "0 4px 20px rgba(0, 173, 239, 0.4)",
              }}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                    />
                  </svg>
                  Verifying...
                </>
              ) : (
                <>
                  <Sparkles size={15} />
                  Access Dashboard
                </>
              )}
            </button>

            <p className="text-slate-600 text-[11px] mt-6">
              DxValley ©  CoopBank Innovation Hub
            </p>
          </div>
        </div>
      ) : (
        <div className="min-h-screen dashboard-bg flex flex-col relative overflow-hidden">
          {/* ── MAIN DASHBOARD (fully animated) ─────────────────── */}

          {/* ── ENTRANCE SPLASH OVERLAY ── */}
          {showSplash && (
            <div
              className="fixed inset-0 z-[200] flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0c1824 100%)",
                animation: "fade-in 0.1s ease forwards",
              }}
            >
              {/* SVG animated circle draw */}
              <div className="relative flex items-center justify-center">
                <svg width="140" height="140" className="absolute" viewBox="0 0 140 140">
                  <circle
                    cx="70" cy="70" r="60"
                    fill="none"
                    stroke="#00adef"
                    strokeWidth="2"
                    className="dash-circle"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
                <Image
                  src="/products/dxvalleylogo.png"
                  alt="DxValley"
                  width={160}
                  height={65}
                  className="animate-bounce-in drop-shadow-lg brightness-110"
                />
              </div>
              <div
                className="absolute bottom-8 left-0 right-0 flex justify-center"
                style={{ animation: "slide-up 0.5s 0.5s ease both" }}
              >
                <div className="flex gap-1.5">
                  {[0, 1, 2, 3].map(i => (
                    <div
                      key={i}
                      className="h-1 w-1 rounded-full bg-coopBlue"
                      style={{ animation: `eco-float 1s ${i * 0.15}s ease-in-out infinite` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}



          {/* â”€â”€ HEADER â”€â”€ */}
          <header
            className="w-full shrink-0 px-6 py-3 flex items-center justify-between relative z-10 overflow-hidden"
            style={{
              background: "linear-gradient(90deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Scan-line sweep on header */}
            <div className="scan-line" />

            <div className="flex items-center">
              <Image
                src="/products/dxvalleylogo.png"
                alt="DxValley"
                width={85}
                height={28}
                className="h-5 w-auto object-contain brightness-110 drop-shadow-sm"
                priority
              />
            </div>

            {/* Stats ticker */}
            <div className="flex items-center gap-5">
              {DASHBOARD_STATS.map(({ key, icon, label, suffix = "" }) => (
                <div key={key || label} className="flex items-center gap-1.5 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  <span className="text-coopBlue/70">{icon}</span>
                  <span className="animate-stat-glow text-white font-bold text-sm tabular-nums">
                    {(counter[key] ?? 0).toLocaleString()}{suffix}
                  </span>
                  <span className="text-white/30 text-[10px]">{label}</span>
                </div>
              ))}

              <div className="h-4 w-px bg-white/10" />

              {/* CoopBank Logo */}
              <div className="flex items-center">
                <Image
                  src="/coop-bank-logo.png"
                  alt="CoopBank"
                  width={90}
                  height={32}
                  className="h-6 w-auto object-contain brightness-110 drop-shadow-sm"
                  priority
                />
              </div>
            </div>
          </header>

          {/* â”€â”€ MARQUEE TICKER (product names) â”€â”€ */}
          <div
            className="w-full overflow-hidden py-1.5 relative z-10"
            style={{
              background: "linear-gradient(90deg, rgba(0,173,239,0.08), rgba(0,144,200,0.05), rgba(0,173,239,0.08))",
              borderBottom: "1px solid rgba(0,173,239,0.1)",
            }}
          >
            <div className="marquee-track">
              {[...Array(2)].map((_, repeat) => (
                <div key={repeat} className="flex items-center gap-6 px-3">
                  {products.map((product, idx) => {
                    const color = getProductFontColor(product);
                    return (
                      <span
                        key={`${repeat}-${product.id ?? idx}`}
                        className="flex items-center gap-1.5 text-[11px] font-semibold whitespace-nowrap"
                        style={{ color }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full inline-block shrink-0 opacity-80"
                          style={{ backgroundColor: color }}
                        />
                        {product.name}
                      </span>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* â”€â”€ CONTENT â”€â”€ */}
          <div className="flex-1 container py-4 grid grid-cols-2 gap-5 relative z-10">

            {/* Left panel */}
            <div className="h-[calc(100vh-155px)] flex flex-col justify-between gap-4 animate-slide-up">
              <CooperativeVision className="shrink-0" />

              {/* Prominent award cards with continuous floating movement and immediate full visibility */}
              <div className="flex-1 min-h-[220px] flex gap-5 items-center justify-center w-full py-1">
                {AWARD_CARDS.map(({ id, src, alt, width = 1080, height = 1350, floatClass = "float-card-1" }) => (
                  <div
                    key={id}
                    onClick={() => setActiveImageModal({ src, title: alt })}
                    className={`relative aspect-[4/5] h-full max-h-full flex-1 max-w-[280px] sm:max-w-[340px] md:max-w-[390px] rounded-2xl overflow-hidden cursor-pointer group ${floatClass} border border-slate-300/80 dark:border-slate-800 shadow-xl bg-slate-900 flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:border-coopBlue/60 hover:scale-[1.02]`}
                    style={{
                      transform: tilt[id]
                        ? `perspective(600px) rotateX(${tilt[id].x}deg) rotateY(${tilt[id].y}deg)`
                        : undefined,
                      boxShadow: "0 12px 36px rgba(0,0,0,0.14), 0 4px 16px rgba(0,173,239,0.12)",
                    }}
                    onMouseMove={(e) => handleTilt(e, id)}
                    onMouseLeave={() => resetTilt(id)}
                  >
                    {/* Main Image - Full Proportional Display */}
                    <Image
                      src={src}
                      alt={alt}
                      width={width}
                      height={height}
                      className="w-full h-full object-contain transition-transform duration-700 ease-out z-10"
                      priority
                    />

                    {/* Expand Icon Button on Hover */}
                    <div className="absolute top-2.5 right-2.5 z-20 bg-slate-900/80 backdrop-blur-md rounded-full p-2 text-white shadow-md border border-white/10 opacity-0 group-hover:opacity-100 hover:bg-coopBlue transition-all duration-200">
                      <Maximize2 size={14} />
                    </div>

                    {/* Shine sweep effect on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl z-20"
                      style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.25) 50%, transparent 65%)" }}
                    />

                    {/* Glow border outline */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
                      style={{ boxShadow: "inset 0 0 0 1.5px rgba(0,173,239,0.4), 0 0 20px rgba(0,173,239,0.15)" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right panel — product list */}
            <div
              className="h-[calc(100vh-155px)] rounded-2xl overflow-hidden flex flex-col border border-slate-200/80 animate-slide-in-right"
              style={{
                boxShadow: "0 4px 32px rgba(0,0,0,0.06)",
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(12px)",
              }}
            >
              <ProductPage onOpenEcoBranch={() => setShowEcoBranch(true)} />
            </div>
          </div>

          {/* ── FLOATING ECO TAB (with ripple) ── */}
          {!showEcoBranch && !showGameHub && (
            <button
              onClick={(e) => { createRipple(e); setShowEcoBranch(true); }}
              title="View ECO Branches"
              className="ripple-btn animate-glow-green"
              style={{
                position: "fixed",
                left: 0,
                top: "calc(50% - 34px)",
                transform: "translateY(-50%)",
                zIndex: 9999,
                background: "linear-gradient(180deg, #006633 0%, #00a550 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "0 16px 16px 0",
                padding: "14px 20px 14px 14px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 16px rgba(0,165,80,0.3)",
                transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), padding 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-50%) translateX(5px)";
                (e.currentTarget as HTMLButtonElement).style.paddingLeft = "18px";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-50%)";
                (e.currentTarget as HTMLButtonElement).style.paddingLeft = "14px";
              }}
            >
              <span
                className="absolute w-full h-full rounded-r-2xl eco-pulse-ring opacity-40"
                style={{ background: "rgba(0,165,80,0.35)", inset: 0, borderRadius: "0 16px 16px 0", zIndex: -1 }}
              />
              <Leaf size={18} strokeWidth={2.5} style={{ flexShrink: 0 }} />
              <span style={{ fontWeight: 900, fontSize: "12px", letterSpacing: "0.2em" }}>ECO</span>
            </button>
          )}

          {/* ── FLOATING GAMEHUB TAB (with ripple) ── */}
          {!showEcoBranch && (
            <button
              onClick={(e) => {
                createRipple(e);
                window.open(GAMEHUB_URL, "_blank", "noopener,noreferrer");
              }}
              title="Open GameHub"
              className="ripple-btn"
              style={{
                position: "fixed",
                left: 0,
                top: "calc(50% + 34px)",
                transform: "translateY(-50%)",
                zIndex: 9999,
                background: "linear-gradient(180deg, #0284c7 0%, #00adef 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "0 16px 16px 0",
                padding: "14px 20px 14px 14px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 16px rgba(0,173,239,0.35)",
                transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), padding 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-50%) translateX(5px)";
                (e.currentTarget as HTMLButtonElement).style.paddingLeft = "18px";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-50%)";
                (e.currentTarget as HTMLButtonElement).style.paddingLeft = "14px";
              }}
            >
              <span
                className="absolute w-full h-full rounded-r-2xl eco-pulse-ring opacity-40"
                style={{ background: "rgba(0,173,239,0.35)", inset: 0, borderRadius: "0 16px 16px 0", zIndex: -1 }}
              />
              <Gamepad2 size={18} strokeWidth={2.5} style={{ flexShrink: 0 }} />
              {/* <span style={{ fontWeight: 900, fontSize: "12px", letterSpacing: "0.15em" }}>GAMEHUB</span> */}
            </button>
          )}

          <EcoBranchPanel
            open={showEcoBranch}
            onClose={() => setShowEcoBranch(false)}
          />

          <GameHubPanel
            open={showGameHub}
            onClose={() => setShowGameHub(false)}
          />

          {/* ── IMAGE LIGHTBOX MODAL ── */}
          {activeImageModal && (
            <div
              className="fixed inset-0 z-[300] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 animate-fade-in"
              onClick={() => setActiveImageModal(null)}
            >
              <div
                className="relative bg-slate-900 border border-slate-700/80 rounded-3xl max-w-3xl w-full p-5 md:p-6 shadow-2xl flex flex-col items-center animate-scale-in"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-full flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="text-base md:text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles className="text-coopBlue w-5 h-5" />
                    {activeImageModal.title}
                  </h3>
                  <button
                    onClick={() => setActiveImageModal(null)}
                    className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden bg-slate-950/60 flex items-center justify-center border border-slate-800">
                  <Image
                    src={activeImageModal.src}
                    alt={activeImageModal.title}
                    width={1200}
                    height={800}
                    className="w-full h-full object-contain rounded-2xl p-2"
                    priority
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
