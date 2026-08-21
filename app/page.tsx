/** @format */

"use client";
import CooperativeVision from "@/components/cooperativevision";
import EcoBranchPanel from "@/components/EcoBranchPanel";
import ProductPage from "@/components/products";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { preloadEcoBranchAssets } from "@/lib/eco-branch";
import { Leaf, Lock, Eye, EyeOff, Sparkles, Shield } from "lucide-react";

const Page = () => {
  const [pin, setPin] = useState("");
  const [isPinVerified, setIsPinVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showEcoBranch, setShowEcoBranch] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tilt, setTilt] = useState<{ [key: string]: { x: number; y: number } }>({});
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPinVerified) {
      preloadEcoBranchAssets();
    }
  }, [isPinVerified]);

  const handlePinSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 350)); // tiny delay for UX
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

  return (
    <div className="min-h-screen w-full">
      {!isPinVerified ? (
        /* ── PREMIUM LOGIN SCREEN ─────────────────────────────── */
        <div className="login-bg min-h-screen flex items-center justify-center relative overflow-hidden">
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
                "conic-gradient(from 0deg, #00adef, #0090c8, #f97316, #00adef)",
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
              DX Valley · CoopBank Innovation Hub
            </p>
          </div>
        </div>
      ) : (
        /* ── MAIN DASHBOARD ───────────────────────────────────── */
        <div className="min-h-screen bg-slate-100 flex flex-col">
          {/* Header bar */}
          <header
            className="w-full shrink-0 px-6 py-3 flex items-center justify-between"
            style={{
              background: "linear-gradient(90deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/products/dxvalleylogo.png"
                alt="DX Valley"
                width={140}
                height={55}
                className="drop-shadow brightness-110"
              />
              <div className="h-5 w-px bg-white/10" />
              <span className="text-white/50 text-xs font-medium tracking-widest uppercase">
                Product Showcase
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/40 text-xs">Live</span>
            </div>
          </header>

          {/* Content */}
          <div className="flex-1 container py-4 grid grid-cols-2 gap-5">
            {/* Left panel */}
            <div className="flex flex-col gap-4 animate-slide-up">
              <CooperativeVision />

              {/* Award images with 3D tilt */}
              <div className="flex gap-3">
                {[
                  {
                    id: "banks",
                    src: "/top-100-african-banks.jpeg",
                    alt: "Top 100 African Banks",
                    label: "Top 100 African Banks",
                  },
                  {
                    id: "msme",
                    src: "/global-msme-award.jpg",
                    alt: "Global MSME Award",
                    label: "Global MSME Award",
                  },
                ].map(({ id, src, alt, label }) => (
                  <div
                    key={id}
                    className="flex-1 relative rounded-xl overflow-hidden cursor-pointer group"
                    style={{
                      transform: tilt[id]
                        ? `perspective(600px) rotateX(${tilt[id].x}deg) rotateY(${tilt[id].y}deg)`
                        : "perspective(600px) rotateX(0deg) rotateY(0deg)",
                      transition: "transform 0.15s ease",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    }}
                    onMouseMove={(e) => handleTilt(e, id)}
                    onMouseLeave={() => resetTilt(id)}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-3">
                      <span className="text-white text-xs font-semibold">{label}</span>
                    </div>
                    {/* Shine sweep on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                      style={{
                        background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right panel — product list */}
            <div
              className="h-[calc(100vh-120px)] rounded-2xl overflow-hidden flex flex-col animate-slide-in-right"
              style={{
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                border: "1px solid rgba(255,255,255,0.6)",
                background: "rgba(255,255,255,0.5)",
                backdropFilter: "blur(8px)",
              }}
            >
              <ProductPage onOpenEcoBranch={() => setShowEcoBranch(true)} />
            </div>
          </div>

          {/* Floating ECO tab */}
          {!showEcoBranch && (
            <button
              onClick={() => setShowEcoBranch(true)}
              title="View ECO Branches"
              className="animate-glow-green"
              style={{
                position: "fixed",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 9999,
                background: "linear-gradient(180deg, #006633 0%, #00a550 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "0 16px 16px 0",
                padding: "16px 22px 16px 16px",
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing: "0.12em",
                cursor: "pointer",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "8px",
                transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), padding 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(-50%) translateX(5px)";
                (e.currentTarget as HTMLButtonElement).style.paddingLeft = "20px";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(-50%)";
                (e.currentTarget as HTMLButtonElement).style.paddingLeft = "16px";
              }}
            >
              {/* Pulse ring */}
              <span
                className="absolute w-full h-full rounded-r-2xl eco-pulse-ring opacity-40"
                style={{
                  background: "rgba(0,165,80,0.35)",
                  inset: 0,
                  borderRadius: "0 16px 16px 0",
                  zIndex: -1,
                }}
              />
              <Leaf size={18} strokeWidth={2.5} style={{ flexShrink: 0 }} />
              <span style={{ fontWeight: 900, fontSize: "12px", letterSpacing: "0.2em" }}>
                ECO
              </span>
            </button>
          )}

          <EcoBranchPanel
            open={showEcoBranch}
            onClose={() => setShowEcoBranch(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Page;

