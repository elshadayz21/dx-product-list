"use client";

import { Users, Sparkles, Handshake } from "lucide-react";

interface CooperativeVisionProps {
  className?: string;
}

const CooperativeVision = ({ className = "" }: CooperativeVisionProps) => {
  return (
    <section className={`w-full flex flex-col ${className}`}>
      {/* Clean border wrapper */}
      <div className="rounded-xl border border-slate-200/80 shadow-md flex flex-col overflow-hidden">
        <div className="relative bg-white rounded-xl p-4 md:p-5 flex flex-col justify-between">
          {/* Background mesh / watermark */}
          <div className="absolute inset-0 pointer-events-none select-none">
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 50%, #00adef 0%, transparent 50%),
                  radial-gradient(circle at 80% 30%, #38bdf8 0%, transparent 40%)
                `,
              }}
            />
            <Handshake
              className="absolute right-4 bottom-2 w-28 h-28 text-blue-200 opacity-[0.18]"
              strokeWidth={0.5}
            />
          </div>

          <Sparkles
            className="absolute bottom-3 right-3 text-sky-200 w-10 h-10 eco-sparkle opacity-70"
            style={{ animationDelay: "2s" }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-lg bg-coopBlue/10">
                <Users className="text-coopBlue w-4 h-4" />
              </div>
              <h2 className="text-base font-bold text-gray-800 leading-tight">
                Working Together for a Better Tomorrow
              </h2>
            </div>

            {/* Quote body */}
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              <em className="text-gray-700">
                &quot;The key to overcoming poverty lies in the power of cooperation
                and cooperatives&quot;
              </em>
              , as envisioned by{" "}
              <span className="font-semibold text-coopBlue">
                Obbo Haile Gebre Lube
              </span>
              , the founding father of CoopBank. He recognized the struggles
              and neglect faced by rural and underprivileged communities.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Inspired by his vision, we believe that{" "}
              <em>a better tomorrow for our community</em> rests in the hands
              of young innovators from these very communities. That&apos;s why
              we are committed to <strong>cooperating</strong> with them to{" "}
              <em>transform lives and create bright future.</em>
            </p>

            {/* Footer badge */}
            <div className="flex justify-end">
              <div
                className="text-coopBlue-dark text-xs font-semibold py-1.5 px-3 rounded-full inline-block shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #e0f5ff 0%, #f0f9ff 100%)",
                  border: "1px solid rgba(0,173,239,0.25)",
                }}
              >
                ✦ Empowering Communities, Transforming Lives
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CooperativeVision;

