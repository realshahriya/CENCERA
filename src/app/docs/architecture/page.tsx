"use client";

import { Box, Layers, Database } from "lucide-react";

export default function ArchitecturePage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tighter text-white">
                    System <span className="text-neon">Architecture</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    Understanding how Cencera analyzes, processes, and serves threat intelligence.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4 p-6 rounded-xl bg-surface border border-white/5">
                    <div className="w-12 h-12 bg-blue-500/10 flex items-center justify-center rounded-lg">
                        <Layers className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold">1. Data Ingestion</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        We continuously scrape and index blockchain data from over 15+ networks, mempools, and off-chain sources to build a comprehensive view of the crypto ecosystem.
                    </p>
                </div>

                <div className="space-y-4 p-6 rounded-xl bg-surface border border-white/5">
                    <div className="w-12 h-12 bg-neon/10 flex items-center justify-center rounded-lg">
                        <Box className="w-6 h-6 text-neon" />
                    </div>
                    <h3 className="text-xl font-bold">2. AI Analysis Node</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Our proprietary ML models analyze transaction patterns, graph relationships, and behavioral markers to identify malicious actors in real-time.
                    </p>
                </div>

                <div className="space-y-4 p-6 rounded-xl bg-surface border border-white/5">
                    <div className="w-12 h-12 bg-purple-500/10 flex items-center justify-center rounded-lg">
                        <Database className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold">3. Global Edge Network</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Risk scores and signals are cached on our global edge network, ensuring sub-50ms latency for your API requests from anywhere in the world.
                    </p>
                </div>
            </div>

            <div className="space-y-6 mt-12 bg-surface p-8 border border-white/10 rounded-xl">
                <h2 className="text-2xl font-bold tracking-tight">Data Flow Diagram</h2>
                <div className="text-center py-12 text-gray-500 italic border-2 border-dashed border-white/5 rounded-lg">
                    [Architecture Diagram Visualization]
                    <br />
                    <span className="text-xs">Blocks -{">"} Analysis -{">"} API -{">"} Client</span>
                </div>
            </div>

        </div>
    );
}
