"use client";

import { Shield, Activity, Layers } from "lucide-react";
import { useState } from "react";

export default function Integration() {
    const tiers = [
        {
            id: "starter",
            label: "Starter",
            alertRate: "0.8%",
            response: "140ms",
            coverage: "Standard",
            signalStrength: 62,
            tag: "Low friction"
        },
        {
            id: "growth",
            label: "Growth",
            alertRate: "1.4%",
            response: "110ms",
            coverage: "Expanded",
            signalStrength: 78,
            tag: "Balanced"
        },
        {
            id: "enterprise",
            label: "Enterprise",
            alertRate: "2.1%",
            response: "85ms",
            coverage: "Maximum",
            signalStrength: 92,
            tag: "Max defense"
        }
    ];

    const [activeTierId, setActiveTierId] = useState(tiers[1].id);
    const activeTier = tiers.find((tier) => tier.id === activeTierId) ?? tiers[1];

    return (
        <section className="section-padding border-t border-white/5">
            <div className="section-container flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12">
                <div className="md:w-1/2 space-y-6">
                    <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold">
                        INTEGRATION WITHOUT<br /> THE INTEGRATION.
                    </h2>
                    <p className="font-mono text-gray-400 text-sm sm:text-base max-w-md">
                        Deploy a unified trust layer across wallets, exchanges, and dApps without rebuilding your stack.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded bg-gradient-to-br from-neon to-neon/70 flex items-center justify-center text-black flex-shrink-0">
                                <Shield className="w-5 h-5" strokeWidth={2} />
                            </div>
                            <div>
                                <h5 className="font-sans font-bold text-sm sm:text-base">Policy-Ready Signals</h5>
                                <p className="font-mono text-xs text-gray-500">
                                    Risk labels and trust scores designed for enforcement workflows.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded bg-surface border border-neon/50 flex items-center justify-center text-neon flex-shrink-0">
                                <Layers className="w-5 h-5" strokeWidth={2} />
                            </div>
                            <div>
                                <h5 className="font-sans font-bold text-sm sm:text-base">Composable Coverage</h5>
                                <p className="font-mono text-xs text-gray-500">
                                    Wallets, contracts, tokens, and NFT collections in one control plane.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white flex-shrink-0">
                                <Activity className="w-5 h-5" strokeWidth={2} />
                            </div>
                            <div>
                                <h5 className="font-sans font-bold text-sm sm:text-base">Always-On Monitoring</h5>
                                <p className="font-mono text-xs text-gray-500">
                                    Continuous risk updates to protect users before confirmation.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <a
                            href="https://app.cencera.xyz"
                            target="_blank"
                            className="btn-primary"
                        >
                            LIVE PRODUCT CHECK
                        </a>
                        <a
                            href="https://ap.cencera.xyz"
                            target="_blank"
                            className="btn-secondary"
                        >
                            SEE PROTOTYPE
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2 grid gap-4">
                    <div className="card-surface p-6 font-mono text-xs sm:text-sm shadow-2xl">
                        <div className="flex items-center justify-between mb-4 text-white">
                            <div className="flex items-center gap-3">
                                <Shield className="w-5 h-5 text-neon" strokeWidth={2} />
                                <span className="font-sans font-bold text-sm sm:text-base">Sample Interactive Panel</span>
                            </div>
                            <span className="text-[10px] sm:text-xs text-gray-500">Preview only</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {tiers.map((tier) => {
                                const isActive = tier.id === activeTierId;
                                return (
                                    <button
                                        key={tier.id}
                                        type="button"
                                        onClick={() => setActiveTierId(tier.id)}
                                        className={`px-3 py-1 rounded-full border text-[10px] sm:text-xs transition-colors ${
                                            isActive
                                                ? "border-neon bg-neon/10 text-neon"
                                                : "border-white/10 text-gray-400 hover:border-neon/50 hover:text-white"
                                        }`}
                                    >
                                        {tier.label}
                                    </button>
                                );
                            })}
                        </div>
                        <div className="rounded border border-white/10 bg-black/40 p-4 space-y-3">
                            <div className="flex items-center justify-between text-gray-400">
                                <span>Signal Strength</span>
                                <span className="text-white font-bold">{activeTier.signalStrength}%</span>
                            </div>
                            <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                                <div
                                    className="h-1 rounded-full bg-neon"
                                    style={{ width: `${activeTier.signalStrength}%` }}
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-[10px] sm:text-xs text-gray-400">
                                <div className="space-y-1">
                                    <div>Alert Rate</div>
                                    <div className="text-white">{activeTier.alertRate}</div>
                                </div>
                                <div className="space-y-1">
                                    <div>Response</div>
                                    <div className="text-white">{activeTier.response}</div>
                                </div>
                                <div className="space-y-1">
                                    <div>Coverage</div>
                                    <div className="text-white">{activeTier.coverage}</div>
                                </div>
                            </div>
                            <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.2em]">
                                {activeTier.tag}
                            </div>
                        </div>
                    </div>
                    <div className="card-surface p-6 font-mono text-xs sm:text-sm shadow-2xl">
                        <div className="flex items-center gap-3 mb-4 text-white">
                            <Layers className="w-5 h-5 text-neon" strokeWidth={2} />
                            <span className="font-sans font-bold text-sm sm:text-base">Primary Use Cases</span>
                        </div>
                        <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs">
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">Wallet Safety</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">Exchange Risk</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">dApp Access</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">Compliance Ops</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-4 text-[10px] sm:text-xs">
                            <div className="rounded border border-white/10 bg-black/40 p-3">
                                <div className="text-gray-500">Risk Signals</div>
                                <div className="text-white font-bold">Real-time</div>
                            </div>
                            <div className="rounded border border-white/10 bg-black/40 p-3">
                                <div className="text-gray-500">Coverage</div>
                                <div className="text-white font-bold">Multi-chain</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
