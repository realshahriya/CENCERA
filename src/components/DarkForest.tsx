 "use client";

import { motion, useReducedMotion } from "framer-motion";
import { AlertTriangle, ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";
import { useMemo, useState } from "react";

export default function DarkForest() {
    const reduceMotion = useReducedMotion();
    const profiles = useMemo(
        () => [
            {
                id: "wallet-safe",
                label: "Wallet (Safe)",
                address: "0x71...c4a",
                entity: "Protocol Treasury",
                score: 92,
                verdict: "ALLOW",
                verdictTone: "safe",
                tags: ["Verified entity", "Low approval risk", "Normal transfer patterns"],
                signals: [
                    { label: "Phishing", value: "low", tone: "safe" },
                    { label: "Drainer", value: "low", tone: "safe" },
                    { label: "Mixer exposure", value: "low", tone: "safe" }
                ]
            },
            {
                id: "wallet-high-risk",
                label: "Wallet (High risk)",
                address: "0x2f...9b1",
                entity: "Unknown wallet",
                score: 19,
                verdict: "BLOCK",
                verdictTone: "danger",
                tags: ["Fresh address", "High approval risk", "Suspicious domain hop"],
                signals: [
                    { label: "Phishing", value: "high", tone: "danger" },
                    { label: "Drainer", value: "medium", tone: "warning" },
                    { label: "Mixer exposure", value: "medium", tone: "warning" }
                ]
            },
            {
                id: "contract-review",
                label: "Contract (Review)",
                address: "0x8a...1d0",
                entity: "Token contract",
                score: 58,
                verdict: "REVIEW",
                verdictTone: "warning",
                tags: ["Proxy pattern", "New deploy", "Admin privileges detected"],
                signals: [
                    { label: "Honeypot", value: "medium", tone: "warning" },
                    { label: "Tax", value: "medium", tone: "warning" },
                    { label: "Upgradeability", value: "high", tone: "danger" }
                ]
            }
        ],
        []
    );

    const [activeId, setActiveId] = useState(profiles[0]?.id ?? "wallet-safe");
    const active = profiles.find((p) => p.id === activeId) ?? profiles[0];
    const verdictClasses =
        active.verdictTone === "safe"
            ? "border-safe/40 bg-safe/10 text-safe"
            : active.verdictTone === "danger"
                ? "border-danger/40 bg-danger/10 text-danger"
                : "border-mint/35 bg-mint/10 text-mint";
    const scoreAccent =
        active.verdictTone === "safe"
            ? "from-safe/40"
            : active.verdictTone === "danger"
                ? "from-danger/40"
                : "from-mint/40";
    const Icon = active.verdictTone === "safe" ? CheckCircle2 : active.verdictTone === "danger" ? ShieldAlert : AlertTriangle;

    return (
        <section className="section-padding border-t border-white/5 bg-void relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(146,220,229,0.12),transparent_55%),radial-gradient(circle_at_78%_70%,rgba(136,213,181,0.10),transparent_55%)]" />

            <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                <motion.div
                    className="order-1 md:order-2"
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 border border-neon/20 px-3 py-1 rounded-full bg-neon/5 mb-5">
                        <span className="w-1.5 h-1.5 bg-neon rounded-full" />
                        <span className="font-mono text-[10px] text-neon uppercase tracking-widest">Risk report preview</span>
                    </div>

                    <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                        Decide in milliseconds, not after the loss.
                    </h2>
                    <p className="font-mono text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed max-w-xl">
                        Cencera turns addresses, contracts, tokens, and domains into an actionable trust score and policy decision your wallet, exchange, or dApp can enforce.
                    </p>

                    <div className="grid gap-3 sm:gap-4">
                        <div className="card-surface p-5 sm:p-6">
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <div className="font-sans font-bold text-white">Policy Output</div>
                                    <div className="font-mono text-xs text-gray-500">Score + reasons + recommended action</div>
                                </div>
                                <div className={`font-mono text-xs px-3 py-1 rounded-full border ${verdictClasses}`}>
                                    {active.verdict}
                                </div>
                            </div>
                        </div>
                        <div className="card-surface p-5 sm:p-6">
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <div className="font-sans font-bold text-white">Built for Web3 UX</div>
                                    <div className="font-mono text-xs text-gray-500">Explainable decisions users understand</div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-neon" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="order-2 md:order-1 relative"
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: 0.05, duration: 0.5, ease: "easeOut" }}
                >
                    <div className="absolute -inset-6 bg-neon/10 blur-2xl rounded-full" />
                    <div className="relative z-10 card-surface p-5 sm:p-6 md:p-7">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {profiles.map((p) => {
                                const isActive = p.id === activeId;
                                return (
                                    <button
                                        key={p.id}
                                        type="button"
                                        onClick={() => setActiveId(p.id)}
                                        className={`px-3 py-1 rounded-full border font-mono text-[10px] sm:text-xs transition-colors ${
                                            isActive
                                                ? "border-neon bg-neon/10 text-neon"
                                                : "border-white/10 text-gray-400 hover:border-neon/50 hover:text-white"
                                        }`}
                                    >
                                        {p.label}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="grid gap-4">
                            <div className="rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="min-w-0">
                                        <div className="font-mono text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.18em] mb-2">
                                            Entity
                                        </div>
                                        <div className="font-sans font-bold text-white truncate">{active.entity}</div>
                                        <div className="font-mono text-xs text-gray-400 mt-1">{active.address}</div>
                                    </div>
                                    <div className={`shrink-0 inline-flex items-center gap-2 px-3 py-1 rounded-full border ${verdictClasses}`}>
                                        <Icon className="w-4 h-4" strokeWidth={2} />
                                        <span className="font-mono text-xs">{active.verdict}</span>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <div className="flex items-center justify-between text-gray-400 font-mono text-xs">
                                        <span>Trust Score</span>
                                        <span className="text-white font-bold">{active.score}/100</span>
                                    </div>
                                    <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
                                        <motion.div
                                            className={`h-1 rounded-full bg-gradient-to-r ${scoreAccent} to-neon/10`}
                                            initial={false}
                                            animate={{ width: `${active.score}%` }}
                                            transition={reduceMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                                {active.signals.map((s) => {
                                    const tone =
                                        s.tone === "safe"
                                            ? "border-safe/30 bg-safe/10 text-safe"
                                            : s.tone === "danger"
                                                ? "border-danger/30 bg-danger/10 text-danger"
                                                : "border-mint/25 bg-mint/10 text-mint";
                                    return (
                                        <div key={s.label} className="rounded-xl border border-white/10 bg-black/30 p-3">
                                            <div className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.18em]">
                                                {s.label}
                                            </div>
                                            <div className={`mt-2 inline-flex items-center px-2 py-0.5 rounded-full border font-mono text-[10px] ${tone}`}>
                                                {s.value}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                                <div className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.18em] mb-3">
                                    Reasons
                                </div>
                                <div className="grid gap-2">
                                    {active.tags.map((t) => (
                                        <div key={t} className="flex items-center justify-between gap-3">
                                            <span className="font-mono text-xs text-gray-300">{t}</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 flex items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <div className="font-sans font-bold text-white">Next action</div>
                                    <div className="font-mono text-xs text-gray-500">Enforce policy in your transaction flow</div>
                                </div>
                                <a href="/docs/quick-start" className="btn-secondary flex items-center gap-2">
                                    QUICK START <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
