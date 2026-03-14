"use client";

import { Search, Database, Globe, FileText, Shield } from "lucide-react";

export default function EntityAnalysisPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white">
                    Entity <span className="text-neon">Analysis</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    The Trust Protocol assigns continuously updated scores to five entity types.
                    Each type has its own scoring focus and signal weight configuration.
                </p>
            </div>

            {/* Entity Taxonomy */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Entity Taxonomy</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm font-mono border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 text-gray-400">
                                <th className="text-left py-3 pr-6">Entity Type</th>
                                <th className="text-left py-3 pr-6">Description</th>
                                <th className="text-left py-3">Scoring Focus</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            {[
                                { type: "EOA (User Wallet)", desc: "Externally owned account", focus: "Transaction patterns, approval behavior, exploit adjacency" },
                                { type: "Smart Contract", desc: "Highest-risk entity type", focus: "Bytecode, upgrade history, admin key patterns, behavior" },
                                { type: "Token (ERC-20/721/1155)", desc: "Fungible & non-fungible assets", focus: "Distribution, liquidity, tax behavior, supply changes" },
                                { type: "NFT Collection", desc: "Non-fungible collections", focus: "Wash trading detection, marketplace authenticity" },
                                { type: "Protocol / DApp", desc: "Composite protocol scores", focus: "Aggregated scores from all constituent contracts" },
                            ].map((row) => (
                                <tr key={row.type} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                    <td className="py-3 pr-6 text-white font-bold text-xs sm:text-sm">{row.type}</td>
                                    <td className="py-3 pr-6 text-gray-400 text-xs sm:text-sm">{row.desc}</td>
                                    <td className="py-3 text-gray-500 text-xs sm:text-sm">{row.focus}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Entity Cards */}
            <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-surface border border-white/5 p-6 rounded-xl">
                    <Search className="w-8 h-8 text-neon mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Smart Contract — Highest Risk</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Smart contracts are the highest-risk entity type and receive the highest AI-derived signal weight (30%).
                        CENCERA analyzes bytecode for exploit variants, proxy upgrade patterns, admin key concentration,
                        and behavioral deviation from the contract&apos;s own historical baseline.
                    </p>
                </div>

                <div className="bg-surface border border-white/5 p-6 rounded-xl">
                    <Database className="w-8 h-8 text-mint mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Token & NFT Scoring</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Tokens (ERC-20/721/1155) are heavily weighted toward market signals (40%) — liquidity depth,
                        Gini coefficient of holder distribution, slippage anomalies, sandwich attack frequency,
                        and sudden supply/tax modifications. NFT collections additionally flag wash trading.
                    </p>
                </div>

                <div className="bg-surface border border-white/5 p-6 rounded-xl">
                    <Globe className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Cross-Chain Entity Profiles</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Scores are chain-scoped by default. Cross-chain linkages are established via cryptographic evidence of
                        address ownership. Negative signals propagate more strongly across chains — attackers cannot reset
                        reputation by moving to a different network.
                    </p>
                </div>

                <div className="bg-surface border border-white/5 p-6 rounded-xl">
                    <Shield className="w-8 h-8 text-soft mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Cold Start Pathway</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Nascent entities (&lt;72 hrs old or &lt;50 interactions) enter the Cold Start Pathway:
                        a dedicated scoring pipeline using bytecode analysis, deployer trust inheritance,
                        and initialization transaction analysis. Score is clearly labeled Limited / low-confidence.
                    </p>
                </div>
            </div>

            {/* CPID */}
            <div className="bg-surface border border-white/10 rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-neon" />
                    <h3 className="text-lg font-bold text-white">CPID — Cencera Persistent Identifier</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Each entity is assigned a stable internal CPID that persists across chain reorgs and contract upgrades.
                    Historical score trajectories are tied to the CPID — not the raw address — ensuring continuity even
                    when a contract is upgraded to a new address via a proxy pattern.
                </p>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-xs text-gray-300">
                    <span className="text-mint">&quot;cpid&quot;</span>: <span className="text-soft">&quot;CENC-BNB-0x1234abcd&quot;</span>
                </div>
            </div>

            {/* Score Trajectory */}
            <div className="bg-surface border border-white/10 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-bold text-white">Score Trajectory Tracking</h3>
                <p className="text-gray-400 text-sm">
                    The five most recent computation points for any entity — indicates whether the score is stable, improving, or deteriorating.
                    A monotonically increasing risk trend is interpreted as attack staging and immediately elevates the entity to Flagged state.
                </p>
                <div className="flex items-center gap-2 font-mono text-sm">
                    <span className="text-gray-500">Trajectory:</span>
                    {[79, 74, 68, 55, 41].map((score, i) => (
                        <span key={i} className={`px-2 py-1 rounded text-xs font-bold ${score > 70 ? "bg-secondary/10 text-secondary" : score > 50 ? "bg-mint/10 text-mint" : "bg-danger/10 text-danger"}`}>
                            {score}
                        </span>
                    ))}
                    <span className="text-danger text-xs ml-2">↓ Deteriorating — Flagged</span>
                </div>
            </div>

        </div>
    );
}
