"use client";

import { ArrowRight, Shield, Zap, Lock, Activity, Brain } from "lucide-react";
import Link from "next/link";

export default function DocumentationPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* Header Section */}
            <div className="space-y-6 border-b border-white/10 pb-12">
                <div className="inline-flex items-center gap-2 border border-neon/20 px-3 py-1 rounded-full bg-neon/5">
                    <span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse"></span>
                    <span className="font-mono text-[10px] text-neon uppercase tracking-widest">Docs v1.0 · March 2026</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter text-white">
                    Cencera <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-white">Documentation</span>
                </h1>

                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    CENCERA is a dual-layer protocol delivering persistent sovereign AI identity and computable cross-chain trust.
                    Integrate the Trust Protocol API or interact with CenceraAI — the world&apos;s first On-Chain Immortal AI Agent.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    <Link href="/docs/quick-start" className="btn-primary flex items-center gap-2">
                        START BUILDING <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/docs/api" className="btn-secondary">
                        API REFERENCE
                    </Link>
                </div>
            </div>

            {/* Two Layers Overview */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-neon/5 border border-neon/20">
                    <div className="mb-3 font-mono text-[10px] text-neon uppercase tracking-widest">Layer 1</div>
                    <h2 className="text-xl font-bold text-white mb-2">CenceraAI — On-Chain Immortal AI Agent</h2>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        A sovereign AI entity on BNB Chain with cryptographically anchored identity, decentralized memory via Unibase Membase,
                        and an autonomous evolution loop firing every ~60 seconds. Accessible via Web Dashboard and Telegram.
                    </p>
                </div>
                <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="mb-3 font-mono text-[10px] text-gray-500 uppercase tracking-widest">Layer 2</div>
                    <h2 className="text-xl font-bold text-white mb-2">Cencera Trust Protocol</h2>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        A multi-signal, longitudinal, cross-chain trust scoring engine. Assigns continuously updated trust scores
                        to any blockchain entity — wallets, smart contracts, tokens, NFTs, and DeFi protocols.
                    </p>
                </div>
            </div>

            {/* Quick Links Grid */}
            <div className="grid md:grid-cols-2 gap-6">
                <Card
                    icon={<Zap className="w-6 h-6 text-neon" />}
                    title="Quick Start"
                    description="Integrate the Cencera Trust Protocol API into your dApp, wallet, or exchange in minutes."
                    href="/docs/quick-start"
                />
                <Card
                    icon={<Shield className="w-6 h-6 text-mint" />}
                    title="Trust Score"
                    description="Understand the Trust Manifold — composite score, signal domains, lifecycle states, and trajectories."
                    href="/docs/trust-score"
                />
                <Card
                    icon={<Brain className="w-6 h-6 text-neon" />}
                    title="Risk Detection"
                    description="Four signal domains: on-chain behavior, market signals, off-chain identity, and AI-derived pattern analysis."
                    href="/docs/risk-detection"
                />
                <Card
                    icon={<Activity className="w-6 h-6 text-secondary" />}
                    title="Monitoring & Webhooks"
                    description="Subscribe to address changes and receive real-time webhook pushes on score or lifecycle state changes."
                    href="/docs/monitoring"
                />
            </div>

            {/* Example Code Block */}
            <div className="space-y-4 pt-8">
                <h2 className="text-2xl font-bold tracking-tight">Quick API Call</h2>
                <p className="text-gray-400 text-sm">Query the trust score for any blockchain entity with a single HTTP request.</p>
                <div className="bg-surface border border-white/10 rounded-lg p-6 font-mono text-sm overflow-x-auto relative group">
                    <div className="absolute top-4 right-4 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-danger/20"></div>
                        <div className="w-3 h-3 rounded-full bg-soft/20"></div>
                        <div className="w-3 h-3 rounded-full bg-secondary/20"></div>
                    </div>
                    <code className="text-gray-300">
                        <span className="text-gray-500"># Entity Trust Query — p99 latency &lt; 200ms</span><br />
                        <span className="text-neon">GET</span> https://api.cencera.xyz/v1/trust?address=0xADDRESS&amp;chain=56<br />
                        Authorization: Bearer <span className="text-soft">YOUR_API_KEY</span>
                    </code>
                </div>
            </div>

        </div>
    );
}

function Card({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) {
    return (
        <Link href={href} className="group p-6 rounded-xl bg-surface border border-white/5 hover:border-neon/30 transition-all duration-300 hover:bg-white/[0.02]">
            <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon transition-colors">{title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{description}</p>
        </Link>
    );
}
