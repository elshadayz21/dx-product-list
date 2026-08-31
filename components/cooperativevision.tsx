"use client";

import { Users, Sparkles, Handshake, Quote } from "lucide-react";

interface CooperativeVisionProps {
  className?: string;
}

const CooperativeVision = ({ className = "" }: CooperativeVisionProps) => {
  return (
    <section className={`w-full flex flex-col ${className}`}>
      {/* Modern Card Container with top accent gradient */}
      <div className="rounded-2xl border border-slate-200/90 shadow-xl flex flex-col overflow-hidden bg-white/95 backdrop-blur-md relative group transition-all duration-300 hover:shadow-2xl hover:border-coopBlue/30">
        {/* Top Accent Gradient Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-coopBlue via-sky-400 to-amber-500" />

        <div className="relative p-5 md:p-6 flex flex-col justify-between">
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
              className="absolute -right-2 -bottom-2 w-32 h-32 text-coopBlue opacity-[0.08] transition-transform duration-500 group-hover:scale-110"
              strokeWidth={0.6}
            />
          </div>

          <Sparkles
            className="absolute top-4 right-4 text-sky-400 w-5 h-5 opacity-60"
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="p-2 rounded-xl bg-coopBlue/10 border border-coopBlue/20 text-coopBlue shadow-sm">
                <Users className="w-4 h-4" />
              </div>
              <h2 className="text-base font-extrabold text-slate-800 tracking-tight leading-tight">
                Working Together for a Better Tomorrow
              </h2>
            </div>

            {/* Quote body */}
            <div className="relative pl-3.5 border-l-2 border-coopBlue/40 mb-3.5 space-y-2">
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                <span className="font-serif text-coopBlue text-base font-bold mr-1">&ldquo;</span>
                <em className="text-slate-800 font-medium">
                  The key to overcoming poverty lies in the power of cooperation and cooperatives
                </em>
                <span className="font-serif text-coopBlue text-base font-bold ml-1">&rdquo;</span>
                <span className="block text-xs text-slate-500 mt-1">
                  &mdash; Envisioned by{" "}
                  <span className="font-semibold text-coopBlue">
                    Obbo Haile Gebre Lube
                  </span>
                  , founding father of CoopBank.
                </span>
              </p>
            </div>

            <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
              Inspired by his vision, we believe that{" "}
              <em className="text-slate-700 font-medium">a better tomorrow for our community</em> rests in the hands of young innovators. That&apos;s why we are committed to{" "}
              <strong className="text-coopBlue font-semibold">cooperating</strong> with them to transform lives and shape a bright future.
            </p>

            {/* Footer badge */}
            <div className="flex justify-end">
              <div
                className="text-coopBlue-dark text-[11px] font-bold py-1.5 px-3.5 rounded-full inline-flex items-center gap-1.5 shadow-sm transition-all duration-300 group-hover:shadow-md"
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

