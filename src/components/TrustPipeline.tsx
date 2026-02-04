"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { BadgeCheck, Cpu, Keyboard, Network } from "lucide-react";

type StepShapeType = "circle" | "pill" | "square";

type StepId = "input" | "gather" | "engine" | "score";

type Step = {
  id: StepId;
  label: string;
  topLabel: string;
  shape: StepShapeType;
};

const steps: Step[] = [
  {
    id: "input",
    label: "User input",
    topLabel: "Input",
    shape: "circle"
  },
  {
    id: "gather",
    label: "Signals gathered",
    topLabel: "Signals",
    shape: "pill"
  },
  {
    id: "engine",
    label: "AI engine",
    topLabel: "Processing",
    shape: "square"
  },
  {
    id: "score",
    label: "Trust score & summary",
    topLabel: "Output",
    shape: "circle"
  }
];

export default function TrustPipeline() {
  const reduceMotion = useReducedMotion() ?? false;
  const pipelineRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(pipelineRef, { amount: 0.35, once: true });
  const pulseDuration = 8.8;
  const pulseRepeatDelay = 4.2;
  const pulseActive = inView && !reduceMotion;

  return (
    <section
      className="section-padding border-t border-white/5 bg-void relative overflow-hidden"
    >
      <div className="section-container">
        <div className="mb-10 sm:mb-12">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Trust Score Pipeline
          </h2>
        </div>

        <div ref={pipelineRef} className="relative mt-16 sm:mt-20 lg:mt-24">
          <div className="hidden sm:block absolute left-[16%] right-[16%] top-[32%] lg:top-[30%] h-6 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path
                d="M 0 50 L 1000 50"
                stroke="rgba(146, 220, 229, 0.08)"
                strokeWidth="1.5"
                fill="none"
              />
              {pulseActive ? (
                <motion.path
                  d="M 0 50 L 1000 50"
                  stroke="rgba(146, 220, 229, 0.95)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="120 880"
                  initial={{ strokeDashoffset: 0, opacity: 0 }}
                  animate={{ strokeDashoffset: [0, -1000], opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: pulseDuration,
                    ease: "linear",
                    times: [0, 0.05, 0.9, 1],
                    repeat: Infinity,
                    repeatDelay: pulseRepeatDelay
                  }}
                  style={{ filter: "drop-shadow(0 0 12px rgba(146, 220, 229, 0.9))" }}
                />
              ) : null}
            </svg>
          </div>

          <div className="sm:hidden absolute left-1/2 top-[10%] bottom-[10%] w-10 -translate-x-1/2 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 1000" preserveAspectRatio="none">
              <path
                d="M 50 0 L 50 1000"
                stroke="rgba(146, 220, 229, 0.08)"
                strokeWidth="1.5"
                fill="none"
              />
              {pulseActive ? (
                <motion.path
                  d="M 50 0 L 50 1000"
                  stroke="rgba(146, 220, 229, 0.95)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="120 880"
                  initial={{ strokeDashoffset: 0, opacity: 0 }}
                  animate={{ strokeDashoffset: [0, -1000], opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: pulseDuration,
                    ease: "linear",
                    times: [0, 0.05, 0.9, 1],
                    repeat: Infinity,
                    repeatDelay: pulseRepeatDelay
                  }}
                  style={{ filter: "drop-shadow(0 0 12px rgba(146, 220, 229, 0.9))" }}
                />
              ) : null}
            </svg>
          </div>

          <div className="relative flex flex-col sm:flex-row items-stretch justify-between gap-8 sm:gap-6 lg:gap-10 sm:mt-6 lg:mt-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative flex flex-col items-center text-center gap-3 sm:gap-4 flex-1"
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
              >
                <div className="relative mb-1 flex items-center justify-center h-20 sm:h-24">
                  <StepShape
                    key={`${step.id}-${pulseActive ? "pulse" : "static"}`}
                    stepId={step.id}
                    type={step.shape}
                    reduceMotion={reduceMotion}
                    inView={inView}
                    pulseActive={pulseActive}
                    pulseDuration={pulseDuration}
                    pulseRepeatDelay={pulseRepeatDelay}
                    pulseIndex={index}
                    pulseCount={steps.length}
                  />
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-gray-500 uppercase tracking-[0.18em]">
                    {step.topLabel}
                  </span>
                </div>

                <div className="max-w-[220px]">
                  <div
                    className="font-sans text-sm sm:text-base font-semibold tracking-[0.04em] uppercase text-white"
                  >
                    {step.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepShape({
  stepId,
  type,
  reduceMotion,
  inView,
  pulseActive,
  pulseDuration,
  pulseRepeatDelay,
  pulseIndex,
  pulseCount
}: {
  stepId: StepId;
  type: "circle" | "pill" | "square";
  reduceMotion: boolean;
  inView: boolean;
  pulseActive: boolean;
  pulseDuration: number;
  pulseRepeatDelay: number;
  pulseIndex: number;
  pulseCount: number;
}) {
  const baseBorder = "rgba(255, 255, 255, 0.12)";
  const glowBorder = "rgba(146, 220, 229, 0.85)";
  const shadow = "0 20px 50px rgba(0,0,0,0.5)";
  const glowShadow = `0 0 0 1px rgba(146, 220, 229, 0.85), 0 0 40px rgba(146, 220, 229, 0.45), 0 0 70px rgba(146, 220, 229, 0.25), ${shadow}`;
  const startMin = 0.06;
  const startMax = 0.78;
  const pulsePosition = pulseCount > 1 ? pulseIndex / (pulseCount - 1) : 0;
  const glowStart = startMin + pulsePosition * (startMax - startMin);
  const glowEndAll = 0.9;
  const glowSnap = Math.min(0.99, glowStart + 0.002);
  const iconBase = "rgba(255, 255, 255, 0.58)";
  const iconGlow = "rgba(146, 220, 229, 0.95)";
  const Icon = stepId === "input" ? Keyboard : stepId === "gather" ? Network : stepId === "engine" ? Cpu : BadgeCheck;

  return (
    <motion.div
      className="relative flex items-center justify-center border bg-surface w-20 h-16 sm:w-24 sm:h-20 rounded-2xl"
      style={{ boxShadow: shadow, borderColor: baseBorder, transformStyle: "preserve-3d" }}
      animate={
        reduceMotion || !pulseActive
          ? undefined
          : {
              boxShadow: [shadow, shadow, glowShadow, glowShadow, shadow],
              borderColor: [baseBorder, baseBorder, glowBorder, glowBorder, baseBorder]
            }
      }
      transition={
        reduceMotion || !pulseActive
          ? undefined
          : {
              duration: pulseDuration,
              ease: "linear",
              times: [0, glowStart, glowSnap, glowEndAll, 1],
              repeat: Infinity,
              repeatDelay: pulseRepeatDelay
            }
      }
      whileHover={
        reduceMotion
          ? undefined
          : { scale: 1.05, rotateX: 7, rotateY: -5, transition: { duration: 0.3, ease: "easeOut" } }
      }
    >
      {inView && stepId === "gather" ? (
        <svg
          className="absolute -top-10 -bottom-10 -left-12 -right-12 w-auto h-auto opacity-45 pointer-events-none"
          viewBox="0 0 140 110"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
          style={{ filter: "drop-shadow(0 0 18px rgba(146, 220, 229, 0.45))" }}
        >
          <g
            stroke="rgba(146, 220, 229, 0.34)"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="18" x2="40" y2="30" />
            <line x1="128" y1="18" x2="100" y2="30" />
            <line x1="12" y1="92" x2="40" y2="80" />
            <line x1="128" y1="92" x2="100" y2="80" />
            <line x1="70" y1="10" x2="70" y2="26" />
            <line x1="70" y1="100" x2="70" y2="84" />
            <line x1="18" y1="55" x2="36" y2="55" />
            <line x1="122" y1="55" x2="104" y2="55" />
          </g>

          <g
            stroke="rgba(146, 220, 229, 0.3)"
            strokeWidth="1.1"
            fill="none"
            strokeLinecap="round"
          >
            <line x1="40" y1="30" x2="70" y2="55" />
            <line x1="100" y1="30" x2="70" y2="55" />
            <line x1="40" y1="80" x2="70" y2="55" />
            <line x1="100" y1="80" x2="70" y2="55" />
            <line x1="36" y1="55" x2="70" y2="55" />
            <line x1="104" y1="55" x2="70" y2="55" />
          </g>

          <g>
            <circle cx="12" cy="18" r="2.8" fill="rgba(146, 220, 229, 0.65)" />
            <circle cx="12" cy="18" r="6.5" stroke="rgba(146, 220, 229, 0.25)" strokeWidth="1.2" fill="none" />

            <circle cx="128" cy="18" r="2.8" fill="rgba(146, 220, 229, 0.65)" />
            <circle cx="128" cy="18" r="6.5" stroke="rgba(146, 220, 229, 0.25)" strokeWidth="1.2" fill="none" />

            <circle cx="12" cy="92" r="2.8" fill="rgba(146, 220, 229, 0.65)" />
            <circle cx="12" cy="92" r="6.5" stroke="rgba(146, 220, 229, 0.25)" strokeWidth="1.2" fill="none" />

            <circle cx="128" cy="92" r="2.8" fill="rgba(146, 220, 229, 0.65)" />
            <circle cx="128" cy="92" r="6.5" stroke="rgba(146, 220, 229, 0.25)" strokeWidth="1.2" fill="none" />

            <circle cx="70" cy="10" r="2.4" fill="rgba(146, 220, 229, 0.6)" />
            <circle cx="70" cy="10" r="5.8" stroke="rgba(146, 220, 229, 0.22)" strokeWidth="1.2" fill="none" />

            <circle cx="70" cy="100" r="2.4" fill="rgba(146, 220, 229, 0.6)" />
            <circle cx="70" cy="100" r="5.8" stroke="rgba(146, 220, 229, 0.22)" strokeWidth="1.2" fill="none" />

            <circle cx="18" cy="55" r="2.6" fill="rgba(146, 220, 229, 0.62)" />
            <circle cx="18" cy="55" r="6.2" stroke="rgba(146, 220, 229, 0.23)" strokeWidth="1.2" fill="none" />

            <circle cx="122" cy="55" r="2.6" fill="rgba(146, 220, 229, 0.62)" />
            <circle cx="122" cy="55" r="6.2" stroke="rgba(146, 220, 229, 0.23)" strokeWidth="1.2" fill="none" />
          </g>
        </svg>
      ) : null}

      <motion.div
        className="relative z-10"
        style={{ color: iconBase }}
        animate={
          reduceMotion || !pulseActive
            ? undefined
            : {
                color: [iconBase, iconBase, iconGlow, iconGlow, iconBase],
                filter: [
                  "drop-shadow(0 0 0 rgba(146, 220, 229, 0))",
                  "drop-shadow(0 0 0 rgba(146, 220, 229, 0))",
                  "drop-shadow(0 0 16px rgba(146, 220, 229, 0.65))",
                  "drop-shadow(0 0 16px rgba(146, 220, 229, 0.65))",
                  "drop-shadow(0 0 0 rgba(146, 220, 229, 0))"
                ],
                scale: type === "circle" ? 1 : 0.98
              }
        }
        transition={
          reduceMotion || !pulseActive
            ? undefined
            : {
                duration: pulseDuration,
                ease: "linear",
                times: [0, glowStart, glowSnap, glowEndAll, 1],
                repeat: Infinity,
                repeatDelay: pulseRepeatDelay
              }
        }
      >
        <Icon className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.6} />
      </motion.div>
    </motion.div>
  );
}
