"use client";

import { ArrowRight, Shield, Zap, Lock, Activity } from "lucide-react";
import Link from "next/link";

export default function DocumentationPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* Header Section */}
            <div className="space-y-6 border-b border-white/10 pb-12">
                <div className="inline-flex items-center gap-2 border border-neon/20 px-3 py-1 rounded-full bg-neon/5">
                    <span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse"></span>
                    <span className="font-mono text-[10px] text-neon uppercase tracking-widest">Docs v1.0</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter text-white">
                    Cencera <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-white">Documentation</span>
                </h1>

                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    Welcome to the developer hub. Integrate Cencera's real-time trust & safety infrastructure into your dApps, wallets, and exchanges.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    <Link href="/docs/quick-start" className="bg-neon text-black px-6 py-3 font-mono text-sm font-bold hover:bg-white transition-colors flex items-center gap-2">
                        START BUILDING <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/docs/api" className="border border-white/20 text-white px-6 py-3 font-mono text-sm font-bold hover:bg-white/10 transition-colors">
                        API REFERENCE
                    </Link>
                </div>
            </div>

            {/* Quick Links Grid */}
            <div className="grid md:grid-cols-2 gap-6">
                <Card
                    icon={<Zap className="w-6 h-6 text-neon" />}
                    title="Quick Start"
                    description="Get up and running with Cencera SDK in less than 5 minutes."
                    href="/docs/quick-start"
                />
                <Card
                    icon={<Shield className="w-6 h-6 text-blue-400" />}
                    title="Risk Detection"
                    description="Learn how our AI models classify and detect on-chain threats."
                    href="/docs/risk-detection"
                />
                <Card
                    icon={<Lock className="w-6 h-6 text-purple-400" />}
                    title="Authentication"
                    description="Secure your API requests with API keys and signatures."
                    href="/docs/authentication"
                />
                <Card
                    icon={<Activity className="w-6 h-6 text-emerald-400" />}
                    title="Monitoring"
                    description="Track wallet activities and setup webhooks for real-time alerts."
                    href="/docs/monitoring"
                />
            </div>

            {/* Example Code Block */}
            <div className="space-y-4 pt-8">
                <h2 className="text-2xl font-bold tracking-tight">Installation</h2>
                <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-6 font-mono text-sm overflow-x-auto relative group">
                    <div className="absolute top-4 right-4 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                    </div>
                    <code className="text-gray-300">
                        <span className="text-neon">$</span> npm install @cencera/sdk
                        <br />
                        <span className="text-neon">$</span> yarn add @cencera/sdk
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
