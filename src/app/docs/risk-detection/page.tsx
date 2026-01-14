"use client";

import { Shield, AlertTriangle, Eye } from "lucide-react";

export default function RiskDetectionPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tighter text-white">
                    Risk <span className="text-neon">Detection</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    Our multi-vector analysis engine identifies threats before they happen.
                </p>
            </div>

            <div className="space-y-8">
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Threat Vectors</h2>
                    <p className="text-gray-400 leading-relaxed">
                        Cencera monitors for a wide range of on-chain and off-chain threat vectors. Our models are retrained daily on new exploit data.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-surface border border-white/5 p-4 rounded-lg flex items-start gap-4">
                            <AlertTriangle className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-bold text-white">Phishing Scams</h4>
                                <p className="text-xs text-gray-500 mt-1">Detection of wallet drainers, fake mint sites, and approval farming contracts.</p>
                            </div>
                        </div>
                        <div className="bg-surface border border-white/5 p-4 rounded-lg flex items-start gap-4">
                            <Shield className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-bold text-white">Sybil Attacks</h4>
                                <p className="text-xs text-gray-500 mt-1">Identification of bot clusters and automated farming behaviors.</p>
                            </div>
                        </div>
                        <div className="bg-surface border border-white/5 p-4 rounded-lg flex items-start gap-4">
                            <Eye className="w-5 h-5 text-yellow-500 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-bold text-white">Money Laundering</h4>
                                <p className="text-xs text-gray-500 mt-1">Tracing funds through mixers like Tornado Cash and known darknet markets.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Heuristic Analysis</h2>
                    <p className="text-gray-400 leading-relaxed">
                        Beyond known blacklists, we use heuristic analysis to flag suspicious behavior patterns, such as rapid fund movements, interaction with fresh contracts, and high-frequency transactions.
                    </p>
                </section>
            </div>

        </div>
    );
}
