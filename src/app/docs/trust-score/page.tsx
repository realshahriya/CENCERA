"use client";

import { Gauge, TrendingUp, AlertCircle, Archive, Activity } from "lucide-react";

export default function TrustScorePage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white">
                    Trust <span className="text-neon">Score</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    Computable trust for every entity on every chain. The Trust Manifold is a structured score object
                    returned by the Cencera Trust Protocol API, containing a composite probabilistic score and full metadata.
                </p>
            </div>

            {/* Composite Score */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Composite Score (0 – 100)</h2>
                <p className="text-gray-400 leading-relaxed">
                    A probabilistic trust score. <span className="text-white font-semibold">85 = strong evidence of safe behavior</span> — not a guarantee.
                    Scores are deterministic: given the same signals, model version, and timestamp the score is always the same.
                    Every trust-based decision is therefore fully auditable.
                </p>

                <div className="space-y-4">
                    {[
                        { range: "80 – 100", label: "High Trust", color: "text-secondary", border: "border-secondary/20", bg: "bg-secondary/10", desc: "Strong evidence of safe behavior. Established history, consistent on-chain activity, no adverse signals." },
                        { range: "50 – 79", label: "Medium Trust", color: "text-mint", border: "border-mint/20", bg: "bg-mint/10", desc: "Moderate confidence. New entity, limited history, or minor adjacency to flagged activity." },
                        { range: "< 50", label: "High Risk", color: "text-danger", border: "border-danger/20", bg: "bg-danger/10", desc: "Adverse signals detected. Known exploits, suspicious behavioral patterns, or flagged entity adjacency." },
                    ].map((tier) => (
                        <div key={tier.range} className="flex items-center gap-4">
                            <div className={`w-24 h-20 shrink-0 rounded-full ${tier.bg} border ${tier.border} flex items-center justify-center font-bold ${tier.color} text-sm whitespace-nowrap`}>
                                {tier.range}
                            </div>
                            <div>
                                <h3 className="text-white font-bold">{tier.label}</h3>
                                <p className="text-sm text-gray-500 mt-1">{tier.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Entity Taxonomy */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Entity Taxonomy</h2>
                <p className="text-gray-400 text-sm">The Trust Protocol scores five entity types, each with a dedicated scoring focus.</p>
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
                                    <td className="py-3 pr-6 text-neon font-bold">{row.type}</td>
                                    <td className="py-3 pr-6 text-gray-400">{row.desc}</td>
                                    <td className="py-3 text-gray-500 text-xs">{row.focus}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Signal Weight Matrix */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
                    <Gauge className="w-6 h-6 text-neon" /> Signal Weight Matrix
                </h2>
                <p className="text-gray-400 text-sm">Weights vary by entity type. Four signal domains contribute to every score.</p>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm font-mono border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 text-gray-400">
                                <th className="text-left py-3 pr-6">Entity Type</th>
                                <th className="text-center py-3 px-3 text-neon">On-Chain</th>
                                <th className="text-center py-3 px-3 text-mint">Market</th>
                                <th className="text-center py-3 px-3 text-soft">Off-Chain</th>
                                <th className="text-center py-3 px-3 text-secondary">AI-Derived</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            {[
                                { type: "EOA (User Wallet)", onChain: "60%", market: "5%", offChain: "20%", ai: "15%" },
                                { type: "Smart Contract", onChain: "40%", market: "15%", offChain: "15%", ai: "30%" },
                                { type: "Token (ERC-20/721)", onChain: "30%", market: "40%", offChain: "20%", ai: "10%" },
                                { type: "Protocol / DApp", onChain: "35%", market: "30%", offChain: "20%", ai: "15%" },
                                { type: "NFT Collection", onChain: "40%", market: "30%", offChain: "20%", ai: "10%" },
                            ].map((row) => (
                                <tr key={row.type} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                    <td className="py-3 pr-6 text-white">{row.type}</td>
                                    <td className="text-center py-3 px-3">{row.onChain}</td>
                                    <td className="text-center py-3 px-3">{row.market}</td>
                                    <td className="text-center py-3 px-3">{row.offChain}</td>
                                    <td className="text-center py-3 px-3">{row.ai}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Trust Manifold */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">The Trust Manifold</h2>
                <p className="text-gray-400 leading-relaxed">Every API response is a structured Trust Manifold object:</p>
                <div className="bg-surface border border-white/10 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                    <code className="text-gray-300">
                        {"{"}<br />
                        &nbsp;&nbsp;<span className="text-mint">&quot;composite_score&quot;</span>: <span className="text-neon">82</span>,<br />
                        &nbsp;&nbsp;<span className="text-mint">&quot;confidence_level&quot;</span>: <span className="text-soft">&quot;High&quot;</span>,<br />
                        &nbsp;&nbsp;<span className="text-mint">&quot;lifecycle_state&quot;</span>: <span className="text-soft">&quot;Active&quot;</span>,<br />
                        &nbsp;&nbsp;<span className="text-mint">&quot;score_trajectory&quot;</span>: [<span className="text-neon">79, 80, 81, 81, 82</span>],<br />
                        &nbsp;&nbsp;<span className="text-mint">&quot;contribution_breakdown&quot;</span>: {"{"}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-mint">&quot;on_chain&quot;</span>: <span className="text-neon">40</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-mint">&quot;market&quot;</span>: <span className="text-neon">15</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-mint">&quot;off_chain&quot;</span>: <span className="text-neon">15</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-mint">&quot;ai_derived&quot;</span>: <span className="text-neon">12</span><br />
                        &nbsp;&nbsp;{"}"},<br />
                        &nbsp;&nbsp;<span className="text-mint">&quot;triggered_indicators&quot;</span>: [<span className="text-soft">&quot;no_adverse_signals&quot;</span>],<br />
                        &nbsp;&nbsp;<span className="text-mint">&quot;model_version&quot;</span>: <span className="text-soft">&quot;v2.1.0&quot;</span>,<br />
                        &nbsp;&nbsp;<span className="text-mint">&quot;computed_at&quot;</span>: <span className="text-soft">&quot;2026-03-14T17:38:00Z&quot;</span><br />
                        {"}"}
                    </code>
                </div>
            </div>

            {/* Lifecycle States */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Entity Lifecycle States</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { icon: <Activity className="w-5 h-5 text-neon" />, state: "Nascent", desc: "< 72 hrs old or < 50 interactions. Limited score, clearly labeled low-confidence. Cold Start Pathway applies." },
                        { icon: <TrendingUp className="w-5 h-5 text-secondary" />, state: "Active", desc: "Full scoring engine engaged across all applicable signal groups. All four domains contribute." },
                        { icon: <AlertCircle className="w-5 h-5 text-danger" />, state: "Flagged", desc: "Anomaly detected. Provisional score reduction applied. Entity queued for human review within 24 hours." },
                        { icon: <Archive className="w-5 h-5 text-gray-500" />, state: "Archived", desc: "Dormant > 180 days. Score labeled stale. Automatically reactivates on new on-chain activity." },
                    ].map((item) => (
                        <div key={item.state} className="bg-surface border border-white/5 p-4 rounded-lg flex items-start gap-3">
                            <div className="mt-0.5 shrink-0">{item.icon}</div>
                            <div>
                                <h4 className="font-bold text-white">{item.state}</h4>
                                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Confidence & Trajectory */}
            <div className="bg-surface border border-white/10 rounded-xl p-6 space-y-4">
                <h3 className="font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-neon" /> Confidence & Score Trajectory
                </h3>
                <ul className="space-y-3 text-sm text-gray-400">
                    <li className="flex justify-between border-b border-white/5 pb-2">
                        <span>Confidence Level</span>
                        <span className="text-white">Low / Medium / High — reflects data completeness</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-2">
                        <span>Score Trajectory</span>
                        <span className="text-white">Last 5 computation points — stable, improving, or deteriorating</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-2">
                        <span>Retroactive Rescore</span>
                        <span className="text-white">New exploit confirmed → all similar entities rescored within 4 hours</span>
                    </li>
                    <li className="flex justify-between pt-2">
                        <span>Model Retraining</span>
                        <span className="text-neon font-bold">Minor: 2 weeks · Major: quarterly</span>
                    </li>
                </ul>
            </div>

        </div>
    );
}
