"use client";

import { BarChart3, Database, Play, Code2 } from "lucide-react";
import { useState } from "react";

type SignalId = "onchain" | "market" | "social" | "ai";

type EntityId = "contracts" | "wallets" | "collections" | "tokens";

const signalBreakdown: { id: SignalId; label: string; weight: string; summary: string }[] = [
    {
        id: "onchain",
        label: "On-chain",
        weight: "45%",
        summary: "Transaction graphs, counterparties, protocol interactions, and historical risk labels."
    },
    {
        id: "market",
        label: "Market",
        weight: "30%",
        summary: "Volatility, liquidity depth, slippage profiles, and abnormal flow detection."
    },
    {
        id: "social",
        label: "Social",
        weight: "15%",
        summary: "Reputation signals from curated sources, incident reports, and governance history."
    },
    {
        id: "ai",
        label: "AI",
        weight: "10%",
        summary: "Model-based anomaly scoring on new patterns and emerging attack surfaces."
    }
];

const entityTypes: { id: EntityId; label: string; status: string; detail: string }[] = [
    {
        id: "contracts",
        label: "Smart Contracts",
        status: "SUPPORTED",
        detail: "Detect upgradeability risks, honeypot patterns, privileged roles, and pausable controls."
    },
    {
        id: "wallets",
        label: "EOA Wallets",
        status: "SUPPORTED",
        detail: "Profile counterparties, bridge usage, mixer exposure, and historical compromise patterns."
    },
    {
        id: "collections",
        label: "NFT Collections",
        status: "SUPPORTED",
        detail: "Monitor wash trading, creator reputation, and liquidity concentration across marketplaces."
    },
    {
        id: "tokens",
        label: "ERC-20 Tokens",
        status: "SUPPORTED",
        detail: "Track supply concentration, deployer behavior, and liquidity pool ownership."
    }
];

export default function ImmutableDefense() {
    const [activeSignal, setActiveSignal] = useState<SignalId>("onchain");
    const [activeEntity, setActiveEntity] = useState<EntityId>("contracts");

    const activeSignalMeta = signalBreakdown.find((signal) => signal.id === activeSignal);
    const activeEntityMeta = entityTypes.find((entity) => entity.id === activeEntity);

    return (
        <section id="core-mechanics" className="section-padding bg-surface relative overflow-hidden">
            <div className="hidden md:block absolute top-0 right-0 font-mono text-[10rem] font-bold text-white/[0.09] pointer-events-none select-none -translate-y-1/2 translate-x-1/4">
                SCORE
            </div>

            <div className="section-container relative z-10">
                <div className="mb-10 sm:mb-14 flex flex-col gap-4 sm:gap-6">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="font-sans text-3xl sm:text-4xl md:text-6xl font-bold">
                            Core Mechanics
                        </h2>
                        <p className="font-mono text-[11px] sm:text-xs text-gray-400 max-w-md">
                            How Cencera transforms on-chain telemetry into production-grade trust scores, from real-time
                            risk computation to downstream enforcement.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 h-full">
                    <div className="md:col-span-2 card-void card-hover p-6 sm:p-8 md:p-10 relative overflow-hidden group">
                        <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-neon/20 to-neon/5 flex items-center justify-center">
                                <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 text-neon" strokeWidth={1.5} />
                            </div>
                        </div>

                        <div className="space-y-4 sm:space-y-5">
                            <div>
                                <p className="font-mono text-[11px] sm:text-xs text-neon/80 mb-1">
                                    Trust Scoring Engine
                                </p>
                                <h3 className="font-sans text-xl sm:text-2xl font-bold">
                                    Multi-factor risk scoring in milliseconds
                                </h3>
                                <p className="font-mono text-gray-400 text-xs sm:text-sm mt-3 max-w-xl">
                                    Each address is evaluated using on-chain data, market structure, social reputation, and
                                    AI-driven anomaly detection to produce a normalized score between 0 and 100.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-gray-400">
                                    <span>Signal weighting</span>
                                    <span>Analysis latency: 150ms p50</span>
                                </div>
                                <div className="h-2 w-full bg-subtle rounded-full overflow-hidden">
                                    <div className="flex h-full w-full">
                                        <div className="bg-emerald-500 w-[45%]" />
                                        <div className="bg-sky-500 w-[30%]" />
                                        <div className="bg-purple-500 w-[15%]" />
                                        <div className="bg-amber-400 w-[10%]" />
                                    </div>
                                </div>
                                <div className="flex justify-between text-[10px] sm:text-[11px] font-mono text-gray-500">
                                    <span>ON-CHAIN 45%</span>
                                    <span>MARKET 30%</span>
                                    <span>SOCIAL 15%</span>
                                    <span>AI 10%</span>
                                </div>
                            </div>

                            <div className="mt-4 sm:mt-6 space-y-3">
                                <div className="font-mono text-[11px] sm:text-xs text-gray-400">
                                    Explore how each signal contributes to the final score.
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {signalBreakdown.map((signal) => {
                                        const isActive = signal.id === activeSignal;
                                        return (
                                            <button
                                                key={signal.id}
                                                type="button"
                                                onClick={() => setActiveSignal(signal.id)}
                                                className={`flex flex-col items-start gap-1 rounded border px-3 py-2 font-mono text-[10px] sm:text-xs transition-colors ${
                                                    isActive
                                                        ? "border-neon bg-neon/10 text-neon"
                                                        : "border-white/10 bg-black/20 text-gray-300 hover:border-neon/60"
                                                }`}
                                            >
                                                <span className="uppercase tracking-[0.15em]">{signal.label}</span>
                                                <span className="text-xs sm:text-sm font-bold">{signal.weight}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                                {activeSignalMeta && (
                                    <div className="rounded border border-white/10 bg-black/40 px-4 py-3 font-mono text-[11px] sm:text-xs text-gray-300">
                                        {activeSignalMeta.summary}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="md:row-span-2 card-void card-hover p-6 sm:p-8 relative overflow-hidden group">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center mb-6">
                            <Database className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" strokeWidth={1.5} />
                        </div>

                        <h3 className="font-sans text-xl sm:text-2xl font-bold mb-3">
                            Entity Analysis
                        </h3>
                        <p className="font-mono text-gray-400 text-xs sm:text-sm mb-6">
                            Unified profiling for every on-chain surface area, from EOAs and contracts to tokens and NFT collections.
                        </p>

                        <div className="space-y-2">
                            {entityTypes.map((entity) => {
                                const isActive = entity.id === activeEntity;
                                return (
                                    <button
                                        key={entity.id}
                                        type="button"
                                        onClick={() => setActiveEntity(entity.id)}
                                        className={`flex w-full items-center gap-3 rounded border px-3 py-2 text-[10px] sm:text-[11px] font-mono transition-colors ${
                                            isActive
                                                ? "border-neon bg-neon/5"
                                                : "border-white/5 hover:border-neon/40 bg-black/20"
                                        }`}
                                    >
                                        <div className={`w-2 h-2 rounded-full ${isActive ? "bg-neon" : "bg-white"}`} />
                                        <span className="text-gray-300">{entity.label}</span>
                                        <span className="ml-auto text-[10px] text-safe tracking-[0.15em]">
                                            {entity.status}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {activeEntityMeta && (
                            <div className="mt-6 rounded border border-white/10 bg-black/40 p-4 font-mono text-[11px] sm:text-xs text-gray-300">
                                <div className="mb-1 text-[11px] font-semibold text-white">
                                    Analysis focus
                                </div>
                                <p>{activeEntityMeta.detail}</p>
                            </div>
                        )}

                        <div className="mt-6 border-t border-white/10 pt-4 font-mono text-[10px] sm:text-[11px] text-gray-500">
                            Coverage metrics are generated from internal benchmarks across supported chains and may vary by network.
                        </div>
                    </div>

                    <div className="card-void card-hover p-6 sm:p-8 flex flex-col justify-between gap-6">
                        <div>
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon/20 to-neon/5 flex items-center justify-center mb-4">
                                <Play className="w-5 h-5 text-neon" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-sans text-lg sm:text-xl font-bold mb-2">
                                Transaction Simulator
                            </h3>
                            <p className="font-mono text-gray-400 text-xs sm:text-sm">
                                Run dry-runs before execution to detect honeypots, transfer taxes, and revert-prone paths.
                            </p>
                        </div>
                        <div className="space-y-2 font-mono text-[10px] sm:text-xs text-gray-300">
                            <div className="flex items-center justify-between">
                                <span>Simulation horizon</span>
                                <span className="text-white">1–3 hops</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Average runtime</span>
                                <span className="text-white">&lt; 300ms</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Supported chains</span>
                                <span className="text-white">EVM + SVM</span>
                            </div>
                        </div>
                    </div>

                    <div className="card-void card-hover p-6 sm:p-8 relative overflow-hidden group">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-4">
                            <Code2 className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-sans text-lg sm:text-xl font-bold mb-2">
                            API Platform
                        </h3>
                        <p className="font-mono text-gray-400 text-xs sm:text-sm mb-4">
                            Embed trust scores and risk labels directly into exchanges, wallets, and marketplaces.
                        </p>

                        <a
                            href="/docs"
                            className="btn-secondary inline-flex items-center justify-center gap-2 w-full"
                        >
                            VIEW DOCS
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

