"use client";

import { Users, Quote, Sparkles, Handshake } from "lucide-react";
import { useState, useEffect } from "react";

const CooperativeVision = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="w-full">
      {/* Gradient border wrapper */}
      <div className="gradient-border shadow-lg">
        <div className="relative bg-white rounded-xl p-5 overflow-hidden">
          {/* Background mesh / watermark */}
          <div className="absolute inset-0 pointer-events-none select-none">
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 50%, #00adef 0%, transparent 50%),
                  radial-gradient(circle at 80% 30%, #f97316 0%, transparent 40%)
                `,
              }}
            />
            <Handshake
              className="absolute right-4 bottom-2 w-28 h-28 text-blue-200 opacity-[0.18]"
              strokeWidth={0.5}
            />
          </div>

          {/* Quote icon — animated */}
          <Quote
            className="absolute top-3 left-3 text-coopBlue opacity-20 w-8 h-8 eco-sparkle"
          />
          <Sparkles
            className="absolute bottom-3 right-3 text-orange-200 w-10 h-10 eco-sparkle"
            style={{ animationDelay: "2s" }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div
              className={`flex items-center gap-2 mb-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            >
              <div className="p-1.5 rounded-lg bg-coopBlue/10">
                <Users className="text-coopBlue w-4 h-4" />
              </div>
              <h2 className="text-base font-bold text-gray-800 leading-tight">
                Working Together for a Better Tomorrow
              </h2>
            </div>

            {/* Quote body */}
            <p
              className={`text-sm text-gray-600 leading-relaxed mb-3 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            >
              <em className="text-gray-700">
                &quot;The key to overcoming poverty lies in the power of cooperation
                and cooperatives&quot;
              </em>
              , as envisioned by{" "}
              <span className="font-semibold text-coopOrange">
                Obbo Haile Gebre Lube
              </span>
              , the founding father of CoopBank. He recognized the struggles
              and neglect faced by rural and underprivileged communities.
            </p>

            <p
              className={`text-sm text-gray-600 leading-relaxed mb-4 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            >
              Inspired by his vision, we believe that{" "}
              <em>a better tomorrow for our community</em> rests in the hands
              of young innovators from these very communities. That&apos;s why
              we are committed to <strong>cooperating</strong> with them to{" "}
              <em>transform lives and create bright future.</em>
            </p>

            {/* Footer badge */}
            <div
              className={`flex justify-end transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            >
              <div
                className="text-orange-800 text-xs font-semibold py-1.5 px-3 rounded-full inline-block shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, #fed7aa 0%, #fef3c7 100%)",
                  border: "1px solid rgba(249,115,22,0.2)",
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

