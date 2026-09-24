"use client";

import { Users, Sparkles, Handshake, Quote } from "lucide-react";

interface CooperativeVisionProps {
  className?: string;
}

const CooperativeVision = ({ className = "" }: CooperativeVisionProps) => {
  return (
    <section className={`w-full flex flex-col ${className}`}>
      {/* Modern Card Container with top accent gradient */}
      <div className="rounded-2xl border border-slate-200/90 shadow-xl flex flex-col overflow-hidden bg-white relative group transition-shadow duration-300 hover:shadow-2xl hover:border-coopBlue/30">
        {/* Top Accent Gradient Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-coopBlue via-sky-400 to-amber-500" />

        <div className="relative p-3.5 sm:p-4 md:p-5 flex flex-col justify-between">
          {/* Background mesh / watermark */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 15% 50%, #00adef 0%, transparent 60%),
                  radial-gradient(circle at 85% 30%, #38bdf8 0%, transparent 50%)
                `,
              }}
            />
            <Handshake
              className="absolute -right-2 -bottom-2 w-28 h-28 sm:w-32 sm:h-32 text-coopBlue opacity-[0.08] transition-transform duration-500 group-hover:scale-110"
              strokeWidth={0.6}
            />
          </div>

          <Sparkles
            className="absolute top-3.5 right-3.5 text-sky-400 w-4 h-4 sm:w-5 sm:h-5 opacity-60"
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <div className="p-1.5 sm:p-2 rounded-xl bg-coopBlue/10 border border-coopBlue/20 text-coopBlue shadow-sm">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <h2 className="text-sm sm:text-base font-extrabold text-slate-800 tracking-tight leading-tight">
                Working Together for a Better Tomorrow
              </h2>
            </div>

            {/* Quote body */}
            <div className="relative pl-3 border-l-2 border-coopBlue/40 mb-2 sm:mb-3 space-y-1 sm:space-y-1.5">
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                <span className="font-serif text-coopBlue text-sm sm:text-base font-bold mr-1">&ldquo;</span>
                <em className="text-slate-800 font-medium">
                  The key to overcoming poverty lies in the power of cooperation and cooperatives
                </em>
                <span className="font-serif text-coopBlue text-sm sm:text-base font-bold ml-1">&rdquo;</span>
                <span className="block text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  &mdash; Envisioned by{" "}
                  <span className="font-semibold text-coopBlue">
                    Obbo Haile Gebre Lube
                  </span>
                  , founding father of CoopBank.
                </span>
              </p>
            </div>

            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-2.5 sm:mb-3.5">
              Inspired by his vision, we believe that{" "}
              <em className="text-slate-700 font-medium">a better tomorrow for our community</em> rests in the hands of young innovators. That&apos;s why we are committed to{" "}
              <strong className="text-coopBlue font-semibold">cooperating</strong> with them to transform lives and shape a bright future.
            </p>

            {/* Footer badge */}
            <div className="flex justify-end">
              <div
                className="text-coopBlue-dark text-[10px] sm:text-[11px] font-bold py-1 px-3 sm:py-1.5 sm:px-3.5 rounded-full inline-flex items-center gap-1.5 shadow-sm transition-all duration-300 group-hover:shadow-md"
                style={{
                  background: "linear-gradient(135deg, #e0f5ff 0%, #f0f9ff 100%)",
                  border: "1px solid rgba(0,173,239,0.3)",
                }}
              >
                <Sparkles size={11} className="text-coopBlue" />
                <span>Empowering Communities, Transforming Lives</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CooperativeVision;

