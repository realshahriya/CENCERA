"use client";

import { Play, AlertOctagon, CheckCircle, Clock, Shield } from "lucide-react";

export default function TransactionSimulatorPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white">
                    Transaction <span className="text-neon">Risk Context</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    Pre-transaction risk for all parties involved. Get Trust Manifolds for the sender, receiver,
                    and contract in a single call — p99 latency under 100ms.
                </p>
            </div>

            <div className="space-y-8">

                {/* How it works */}
                <div className="bg-surface border border-white/5 p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-16 h-16 rounded-full bg-neon/10 flex items-center justify-center shrink-0">
                        <Play className="w-8 h-8 text-neon ml-1" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-white">Pre-Transaction Trust Check</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Unlike transaction simulation (which is blind to slow-burn exploits), CENCERA&apos;s Transaction Risk Context
                            provides longitudinal behavioral trust scores for every party in the transaction — not just a one-time
                            dry-run. A contract that deploys cleanly but drains funds 60 days later is detectable here.
                        </p>
                    </div>
                </div>

                {/* Endpoint */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Endpoint</h2>
                    <div className="flex items-center gap-3">
                        <span className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-bold font-mono">GET</span>
                        <code className="text-white font-mono text-sm">/v1/transaction-risk</code>
                        <span className="text-xs font-mono text-gray-500">p99 &lt; 100ms</span>
                    </div>
                    <div className="bg-surface border border-white/10 rounded-lg p-4 font-mono text-xs text-gray-300 overflow-x-auto">
                        <code>
                            GET /v1/transaction-risk?from=0xFROM&amp;to=0xTO&amp;chain=56<br />
                            Authorization: Bearer YOUR_API_KEY<br />
                            <br />
                            from: sender address (EOA)<br />
                            to: recipient address (EOA or smart contract)<br />
                            chain: BNB Chain = 56, Ethereum = 1, Polygon = 137
                        </code>
                    </div>
                    <div className="bg-surface border border-white/10 rounded-lg p-4 font-mono text-xs text-gray-300 overflow-x-auto">
                        <code>
                            {"{"}<br />
                            &nbsp;&nbsp;<span className="text-mint">&quot;sender&quot;</span>: {"{"} <span className="text-mint">&quot;composite_score&quot;</span>: <span className="text-neon">85</span>, <span className="text-mint">&quot;lifecycle_state&quot;</span>: <span className="text-soft">&quot;Active&quot;</span> {"}"},<br />
                            &nbsp;&nbsp;<span className="text-mint">&quot;receiver&quot;</span>: {"{"} <span className="text-mint">&quot;composite_score&quot;</span>: <span className="text-danger">29</span>, <span className="text-mint">&quot;lifecycle_state&quot;</span>: <span className="text-soft">&quot;Flagged&quot;</span> {"}"},<br />
                            &nbsp;&nbsp;<span className="text-mint">&quot;overall_risk&quot;</span>: <span className="text-soft">&quot;high&quot;</span>,<br />
                            &nbsp;&nbsp;<span className="text-mint">&quot;recommendation&quot;</span>: <span className="text-soft">&quot;block_or_warn&quot;</span><br />
                            {"}"}
                        </code>
                    </div>
                </div>

                {/* What it detects */}
                <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-4">
                        {[
                            { icon: <AlertOctagon className="w-5 h-5 text-danger" />, title: "Slow-Burn Honeypots", desc: "Contracts that deploy cleanly but expose exploit vectors 30–90 days later — invisible to transaction simulation but detectable via temporal risk trend analysis." },
                            { icon: <CheckCircle className="w-5 h-5 text-secondary" />, title: "Exploit-Adjacent Receivers", desc: "Identifies receivers with historical adjacency to known exploit contracts, even if the receiver itself hasn't been flagged yet." },
                            { icon: <Clock className="w-5 h-5 text-mint" />, title: "Temporal Risk Trends", desc: "Monotonically increasing risk score interpreted as attack staging. Transaction risk is blocked proactively before execution completes." },
                            { icon: <Shield className="w-5 h-5 text-neon" />, title: "Cross-Chain Risk Context", desc: "Negative signals from other chains follow the entity. A wallet flagged on Ethereum carries that risk context when interacting on BNB Chain." },
                        ].map((item) => (
                            <li key={item.title} className="flex items-start gap-4 p-4 rounded-lg bg-white/5">
                                <div className="mt-0.5 shrink-0">{item.icon}</div>
                                <div>
                                    <h4 className="font-bold text-white">{item.title}</h4>
                                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="bg-surface border border-white/10 rounded-lg p-6 font-mono text-xs flex flex-col justify-between">
                        <div className="text-gray-500 mb-4 text-[10px] uppercase tracking-wider">vs. Transaction Simulation</div>
                        <div className="space-y-3 text-gray-300">
                            {[
                                { label: "Known exploits", cencera: "✓", sim: "✓" },
                                { label: "Slow-burn exploits (60+ days)", cencera: "✓", sim: "✗" },
                                { label: "Behavioral history", cencera: "✓", sim: "✗" },
                                { label: "Cross-chain risk context", cencera: "✓", sim: "✗" },
                                { label: "Attack staging patterns", cencera: "✓", sim: "✗" },
                            ].map((row) => (
                                <div key={row.label} className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-400">{row.label}</span>
                                    <span>
                                        <span className="text-neon mr-3">{row.cencera}</span>
                                        <span className="text-gray-500">{row.sim}</span>
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 flex justify-between text-[10px] text-gray-600 uppercase tracking-wider">
                            <span className="text-neon">Cencera</span>
                            <span>Simulation</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
