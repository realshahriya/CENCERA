"use client";

import { Sliders, Box, Monitor, Users, Database } from "lucide-react";

export default function SandboxPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white">
                    Community <span className="text-neon">Signal Contributions</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    A governed mechanism through which community participants contribute verified behavioral signals,
                    with staking-based incentives for accurate contributions and slashing penalties for false reports.
                    A planned roadmap feature for the Cencera Trust Protocol.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                    <p className="text-gray-400 leading-relaxed">
                        The Community Signal Contributions module enables decentralized, crowd-sourced enrichment of the
                        Trust Protocol&apos;s signal library. Verified contributors submit behavioral signals that, after
                        multi-party validation, feed into the scoring engine — expanding coverage particularly for
                        nascent entities on the Cold Start Pathway.
                    </p>
                    <ul className="space-y-4">
                        {[
                            { icon: <Sliders className="w-4 h-4 text-neon" />, label: "Platform-Configurable Signal Weights", desc: "Each consuming platform configures which signal groups to use, their weights, and lookback periods." },
                            { icon: <Users className="w-4 h-4 text-secondary" />, label: "Staking-Based Incentive Model", desc: "Contributors stake tokens for accurate signal submissions. False or malicious reports trigger slashing." },
                            { icon: <Database className="w-4 h-4 text-mint" />, label: "Loss Report Integration", desc: "User-reported losses submitted with tx hash verification elevate entity review priority in real time." },
                            { icon: <Monitor className="w-4 h-4 text-soft" />, label: "Write-Protected Exploit Library", desc: "The core exploit library requires multi-party authorization to update — preventing poisoning attacks." },
                        ].map((item) => (
                            <li key={item.label} className="flex items-start gap-3 text-sm">
                                <div className="mt-0.5 shrink-0">{item.icon}</div>
                                <div>
                                    <span className="text-white font-semibold">{item.label}</span>
                                    <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Roadmap extensions summary */}
                <div className="space-y-4">
                    <h3 className="font-bold text-white text-lg">Planned Protocol Extensions</h3>
                    <div className="space-y-3">
                        {[
                            { title: "Zero-Knowledge Trust Proofs", desc: "Cryptographic proofs that an entity meets a score threshold — without revealing the score or signals. Enables privacy-preserving trust gating." },
                            { title: "On-Chain Trust Attestations", desc: "Smart contract-readable attestations enabling composability without an API call at execution time." },
                            { title: "Institutional Reporting Module", desc: "Regulatory-grade, auditable trust reporting for institutional platforms operating under AML/KYC compliance frameworks." },
                            { title: "CenceraAI Mainnet Deployment", desc: "Migration of the AI Agent from BNB Testnet to BNB Mainnet following stability validation and security audit." },
                            { title: "Expanded Agent Network", desc: "CenceraAI integration with Agentverse agents to enable automated trust-scoring queries initiated directly by AI agents." },
                        ].map((item) => (
                            <div key={item.title} className="bg-surface border border-white/5 rounded-lg p-4">
                                <h4 className="font-bold text-white text-sm">{item.title}</h4>
                                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Test the public tier */}
            <div className="bg-neon/5 border border-neon/20 rounded-xl p-8 flex flex-col md:flex-row gap-6 items-center">
                <div className="relative shrink-0">
                    <div className="absolute inset-0 bg-neon blur-xl opacity-20 animate-pulse rounded-full"></div>
                    <Box className="w-16 h-16 text-white relative z-10" />
                </div>
                <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">Try the Public API (No Auth Required)</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        The Public tier returns composite score + lifecycle state for any address — no API key needed.
                        Rate limited to 100 requests/hour per IP. Perfect for testing and prototyping.
                    </p>
                    <div className="bg-black/30 rounded-lg p-3 font-mono text-xs text-neon">
                        GET https://api.cencera.xyz/v1/trust?address=0xADDRESS&amp;chain=56
                    </div>
                </div>
            </div>

        </div>
    );
}
