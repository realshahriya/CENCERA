"use client";

import { motion } from "framer-motion";
import { Activity, Database, Network, Brain } from "lucide-react";

export default function TrustPipeline() {
  return (
    <section className="section-padding border-t border-white/5 bg-void relative overflow-hidden">
      <div className="relative px-4 sm:px-6">
        <div className="relative">
          <div className="relative rounded-[36px] bg-black/60 border border-white/10 px-6 sm:px-12 py-10 sm:py-12 overflow-hidden">

            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1200 420"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M120 90 H420 C520 90 560 140 620 200 S740 300 840 260 H1080"
                stroke="rgba(56,189,248,0.35)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6 12"
                animate={{ strokeDashoffset: [0, -120] }}
                transition={{ duration: 6, ease: "linear", repeat: Infinity }}
              />
              <motion.path
                d="M120 200 H460 C540 200 580 200 620 200 C700 200 760 200 840 200 H1080"
                stroke="rgba(129,140,248,0.35)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6 12"
                animate={{ strokeDashoffset: [0, -120] }}
                transition={{ duration: 5.5, ease: "linear", repeat: Infinity }}
              />
              <motion.path
                d="M120 310 H420 C520 310 560 260 620 220 S740 120 840 150 H1080"
                stroke="rgba(56,189,248,0.35)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6 12"
                animate={{ strokeDashoffset: [0, -120] }}
                transition={{ duration: 6.5, ease: "linear", repeat: Infinity }}
              />
            </svg>
            <div className="absolute inset-x-[12%] top-1/2 -translate-y-1/2 h-16 pointer-events-none">
              <div className="absolute inset-y-1/2 -translate-y-1/2 left-0 right-0 rounded-full bg-black/80" />
              <motion.div
                className="absolute inset-y-1/2 -translate-y-1/2 left-0 right-0 h-[3px] rounded-full"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(125,211,252,0.8), rgba(255,255,255,0.06))",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["0% 50%", "-200% 50%"] }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
              />
            </div>

            <motion.div
              className="absolute -left-6 top-8 sm:top-10 w-16 h-16 rounded-2xl border border-white/10 bg-black/70"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -left-10 bottom-10 w-20 h-20 rounded-[20px] border border-white/10 bg-black/70 rotate-6"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-6 top-12 w-16 h-16 rounded-2xl border border-white/10 bg-black/70"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-8 bottom-8 w-24 h-24 rounded-[26px] border border-white/10 bg-black/70 -rotate-6"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative grid gap-8 sm:gap-10 grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_minmax(0,1fr)] items-center">
              <div className="space-y-5">
                <PipelineSource
                  icon={Activity}
                  label="On-chain"
                />
                <PipelineSource
                  icon={Database}
                  label="Entity graph"
                />
                <PipelineSource
                  icon={Network}
                  label="Market"
                />
              </div>

              <div className="relative flex flex-col items-center">
                <div className="relative rounded-[28px] bg-gradient-to-br from-white/8 via-black/70 to-white/5 border border-white/20 px-10 py-8">
                  <div className="absolute inset-x-6 top-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="absolute inset-x-6 bottom-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="relative flex flex-col items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-[18px] bg-black/70 border border-white/30 shadow-[inset_0_0_12px_rgba(255,255,255,0.06)]">
                      <Brain className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="text-center">
                      <div className="font-mono text-[11px] tracking-[0.22em] text-slate-100/80 uppercase">
                        Cencera Engine
                      </div>
                      <div className="mt-2 flex items-center justify-center gap-2 text-[10px] font-mono text-gray-400">
                        <span className="h-1 w-1 rounded-full bg-white/50" />
                        <span>Realtime Scoring Core</span>
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6">
                <div className="relative flex items-center justify-center">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-white/20 bg-black/70 flex items-center justify-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-white/10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="font-mono text-[10px] text-gray-400 uppercase tracking-[0.2em]">
                          Trust Score
                        </div>
                        <div className="text-3xl sm:text-4xl font-bold text-white tracking-[0.06em]">
                          0–100
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className="absolute -z-10 w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-dotted border-white/12"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type PipelineSourceProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
};

function PipelineSource({ icon: Icon, label }: PipelineSourceProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="inline-flex items-center gap-4 rounded-[18px] border border-white/20 bg-black/70 px-4 py-3 shadow-[inset_0_0_12px_rgba(255,255,255,0.04)]">
        <div className="w-9 h-9 rounded-[12px] bg-white/5 flex items-center justify-center border border-white/10">
          <Icon className="w-4 h-4 text-white" strokeWidth={1.5} />
        </div>
        <div className="font-sans text-sm sm:text-base font-semibold text-white tracking-[0.02em]">
          {label}
        </div>
      </div>
    </div>
  );
}
