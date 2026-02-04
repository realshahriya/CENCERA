"use client";

import { Search, Database, Globe } from "lucide-react";

export default function EntityAnalysisPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tighter text-white">
                    Entity <span className="text-neon">Analysis</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    Deep analysis of wallets, smart contracts, tokens, and NFTs with ENS resolution and metadata detection.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-surface border border-white/5 p-6 rounded-xl">
                    <Search className="w-8 h-8 text-neon mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Deep Identification</h3>
                    <p className="text-sm text-gray-400">We resolve identities across multiple vectors: ENS, Lens, Farcaster, and Unstoppable Domains, linking them to real-world entities where known.</p>
                </div>

                <div className="bg-surface border border-white/5 p-6 rounded-xl">
                    <Database className="w-8 h-8 text-mint mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Token & NFT Metadata</h3>
                    <p className="text-sm text-gray-400">Instantly fetch contract metadata, ownership distribution, and liquidity lock status for any token or NFT collection.</p>
                </div>

                <div className="bg-surface border border-white/5 p-6 rounded-xl">
                    <Globe className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Multi-Chain Support</h3>
                    <p className="text-sm text-gray-400">Unified profile view across EVM chains (Ethereum, Arbitrum, Optimism, Base) and Solana.</p>
                </div>
            </div>

            <div className="mt-8 bg-surface border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4">Historical Score Tracking</h3>
                <p className="text-gray-400 text-sm mb-4">View how an entity&apos;s reputation has evolved over time.</p>
                <div className="h-40 w-full bg-white/5 rounded flex items-center justify-center border border-dashed border-white/10">
                    <span className="text-xs text-gray-500 italic">[Historical Reputation Chart Placeholder]</span>
                </div>
            </div>

        </div>
    );
}
