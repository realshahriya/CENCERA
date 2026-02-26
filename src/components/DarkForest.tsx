"use client";

import { useMemo, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle as Warning, ArrowRight, CircleCheck as CheckCircle, ShieldAlert as ShieldWarning, Zap } from "lucide-react";

export default function DarkForest() {
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
                    { label: "Tax", value: "medium", tone: "warning" }
                ]
            }
        ],
        []
    );

    const [activeId, setActiveId] = useState(profiles[0]?.id ?? "wallet-safe");
    const active = profiles.find((p) => p.id === activeId) ?? profiles[0];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('.darkforest-left',
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: '#darkforest', start: 'top 80%' } }
        );

        gsap.fromTo('.darkforest-right',
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: '#darkforest', start: 'top 80%' } }
        );
    }, []);

    const verdictClasses =
        active.verdictTone === "safe"
            ? "border-safe/40 bg-safe/10 text-safe"
            : active.verdictTone === "danger"
                ? "border-danger/40 bg-danger/10 text-danger"
                : "border-mint/35 bg-mint/10 text-mint";

    const Icon = active.verdictTone === "safe" ? CheckCircle : active.verdictTone === "danger" ? ShieldWarning : Warning;

    return (
        <section id="darkforest" className="section bg-transparent relative z-10 overflow-hidden">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

                <div className="darkforest-left order-1 md:order-2">
                    <div className="h-full flex flex-col justify-center">
                        <div className="section-tag w-fit">Risk Report Preview</div>
                        <h2 className="mt-4">
                            <span className="heading-reveal">
                                <span className="heading-reveal__inner text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tighter">Decide in milliseconds</span>
                            </span>
                        </h2>
                        <p className="mt-6 font-mono text-gray-400 text-sm leading-relaxed max-w-xl">
                            Cencera turns addresses, contracts, tokens, and domains into an actionable trust score and policy decision your wallet, exchange, or dApp can enforce.
                        </p>

                        <div className="grid gap-4 mt-10">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="glass-card card-surface p-6 sm:p-7 relative overflow-hidden group cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="flex items-center justify-between gap-4 relative z-10">
                                    <div className="space-y-2">
                                        <div className="font-display font-bold text-white text-lg">Policy Output</div>
                                        <div className="font-mono text-xs text-gray-500">Score + reasons + recommended action</div>
                                    </div>
                                    <div className={`font-mono text-xs px-3 py-1.5 rounded-full border shadow-[0_0_15px_rgba(0,0,0,0.5)] ${verdictClasses}`}>
                                        {active.verdict}
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="glass-card card-surface p-6 sm:p-7 group cursor-pointer"
                            >
                                <div className="flex items-center justify-between gap-4 relative z-10">
                                    <div className="space-y-2">
                                        <div className="font-display font-bold text-white text-lg flex items-center gap-2">
                                            Built for Web3 UX <Zap className="w-4 h-4 text-neon group-hover:animate-pulse" />
                                        </div>
                                        <div className="font-mono text-xs text-gray-500">Explainable decisions users understand</div>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-neon transition-colors transform group-hover:translate-x-1" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="darkforest-right order-2 md:order-1 relative">
                    <div className="space-y-6">
                        <div className="flex flex-wrap gap-2 mb-2 relative z-10">
                            {profiles.map((p) => {
                                const isActive = p.id === activeId;
                                return (
                                    <button
                                        key={p.id}
                                        type="button"
                                        onClick={() => setActiveId(p.id)}
                                        className={`px-5 py-2.5 rounded-full font-mono text-[11px] sm:text-xs transition-all duration-300 font-medium tracking-wide ${isActive
                                            ? "bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/20"
                                            : "bg-transparent border border-transparent text-gray-500 hover:text-white hover:bg-white/5"
                                            }`}
                                    >
                                        {p.label}
                                    </button>
                                );
                            })}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="grid gap-4 relative z-10"
                            >
                                <div className="glass-card card-surface p-6 sm:p-8 border-t-2" style={{ borderTopColor: active.verdictTone === 'safe' ? '#7DCD85' : active.verdictTone === 'danger' ? '#ef4444' : '#eab308' }}>
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="min-w-0">
                                            <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-3">Entity</div>
                                            <div className="font-display font-bold text-white truncate text-2xl sm:text-3xl tracking-tight">{active.entity}</div>
                                            <div className="font-mono text-sm text-gray-400 mt-2">{active.address}</div>
                                        </div>
                                        <div className={`shrink-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-lg ${verdictClasses}`}>
                                            <Icon className="w-[18px] h-[18px]" />
                                            <span className="font-mono text-xs font-bold tracking-wider">{active.verdict}</span>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <div className="flex items-center justify-between text-gray-400 font-mono text-xs mb-3">
                                            <span>Trust Score</span>
                                            <span className="text-white font-bold text-lg">{active.score}/100</span>
                                        </div>
                                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden shadow-inner">
                                            <motion.div
                                                className="h-full rounded-full bg-gradient-to-r from-neon/40 to-neon relative"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${active.score}%` }}
                                                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                                            >
                                                <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white/40 to-transparent filter blur-[2px]" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {active.signals.map((s, idx) => {
                                        const tone =
                                            s.tone === "safe" ? "border-safe/30 bg-safe/10 text-safe shadow-[0_0_10px_rgba(125,205,133,0.15)]"
                                                : s.tone === "danger" ? "border-danger/30 bg-danger/10 text-danger shadow-[0_0_10px_rgba(239,68,68,0.15)]"
                                                    : "border-mint/25 bg-mint/10 text-mint shadow-[0_0_10px_rgba(234,179,8,0.15)]";
                                        return (
                                            <div key={idx} className="glass-card card-surface p-4 flex flex-col justify-between">
                                                <div className="font-mono text-[9px] text-gray-500 uppercase tracking-widest truncate">{s.label}</div>
                                                <div className="mt-3">
                                                    <span className={`inline-block px-2.5 py-1 rounded-sm border font-mono text-[10px] uppercase font-bold tracking-wider ${tone}`}>{s.value}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="glass-card card-surface p-6 sm:p-7">
                                    <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-5">Reasons</div>
                                    <div className="grid gap-4">
                                        {active.tags.map((t, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + (idx * 0.1) }}
                                                className="flex items-center justify-between gap-3 group"
                                            >
                                                <span className="font-mono text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors">{t}</span>
                                                <span className={`w-1.5 h-1.5 rounded-full ${active.verdictTone === 'safe' ? 'bg-[#7DCD85]' : active.verdictTone === 'danger' ? 'bg-[#ef4444]' : 'bg-[#eab308]'}`} style={{ boxShadow: `0 0 8px ${active.verdictTone === 'safe' ? '#7DCD85' : active.verdictTone === 'danger' ? '#ef4444' : '#eab308'}` }} />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
