"use client";

import { ShieldAlert, Globe, Lock, AlertTriangle } from "lucide-react";

export default function ConnectionGuardPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white">
                    On-Chain <span className="text-neon">Trust Attestations</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    Smart contract-readable trust attestations enabling composability without an API call at execution time —
                    allowing DeFi protocol logic to reference trust scores natively in Solidity.
                </p>
            </div>

            {/* Planned Feature Banner */}
            <div className="col-span-full bg-soft/10 border border-soft/20 p-6 rounded-xl flex items-center gap-4">
                <AlertTriangle className="w-8 h-8 text-soft shrink-0" />
                <div>
                    <h3 className="text-lg font-bold text-white">Planned Roadmap Feature</h3>
                    <p className="text-sm text-gray-400 mt-1">
                        On-Chain Trust Attestations are on the CENCERA roadmap. This module will allow DeFi protocols
                        to read trust scores natively in Solidity at execution time — no API call required.
                    </p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-surface border border-white/5 p-6 rounded-xl">
                    <ShieldAlert className="w-6 h-6 text-danger mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Protocol Gating</h3>
                    <p className="text-sm text-gray-400">
                        DeFi protocols can gate interactions at the smart contract level based on an entity&apos;s on-chain trust attestation —
                        blocking Flagged or Nascent entities from interacting with high-value liquidity pools.
                    </p>
                </div>

                <div className="bg-surface border border-white/5 p-6 rounded-xl">
                    <Globe className="w-6 h-6 text-neon mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Zero-Knowledge Trust Proofs</h3>
                    <p className="text-sm text-gray-400">
                        Cryptographic proofs that an entity&apos;s score meets a specified threshold, without revealing
                        the underlying score or signals. Enables privacy-preserving trust gating for applications
                        handling sensitive user data.
                    </p>
                </div>

                <div className="bg-surface border border-white/5 p-6 rounded-xl">
                    <Lock className="w-6 h-6 text-mint mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Off-Chain Signal Access</h3>
                    <p className="text-sm text-gray-400">
                        Domain age, social account authenticity, GitHub commit history, and audit status from recognized
                        security firms form the Off-Chain signal domain — 15% base weight in the Trust Manifold.
                    </p>
                </div>
            </div>

            {/* Off-Chain signals detail */}
            <div className="bg-surface border border-white/10 rounded-xl p-6 space-y-4">
                <h2 className="text-xl font-bold text-white">Off-Chain Signal Domain</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                    The Cencera Trust Protocol&apos;s off-chain domain (Domain 3, 15% base weight) cross-references public off-chain
                    identity signals to build a holistic trust picture beyond pure on-chain data.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                    {[
                        "Website domain age, registration anonymity, and DNS consistency",
                        "Social account authenticity — follower quality, engagement patterns, cross-platform consistency",
                        "Developer identity continuity across projects",
                        "GitHub repository history — commit authenticity and sudden deletions",
                        "Audit status from recognized security firms",
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="text-neon mt-1 shrink-0">•</span>{item}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}
