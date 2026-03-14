"use client";

export default function ApiPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white">
                    API <span className="text-neon">Reference</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    The Cencera Trust Protocol API delivers computable trust for any blockchain entity.
                    All responses are structured Trust Manifold objects — composite score, signals, trajectory, and computation metadata.
                </p>
            </div>

            <div className="space-y-10">
                {/* Base URL */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white mb-2">Base URL</h2>
                    <div className="bg-surface border border-white/10 rounded-lg p-4 font-mono text-sm text-neon">
                        https://api.cencera.xyz/v1
                    </div>
                    <p className="text-sm text-gray-400">
                        All endpoints below are relative to this base URL. In development you can call{" "}
                        <span className="font-mono text-gray-300">http://localhost:3000/v1</span>, which is internally
                        rewritten to the Next.js route handlers under <span className="font-mono text-gray-300">/api</span>.
                    </p>
                </section>

                {/* Authentication */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white mb-2">Authentication & Access Tiers</h2>
                    <p className="text-gray-400">
                        All API requests require an API key passed in the Authorization header. Three access tiers are available.
                    </p>
                    <div className="bg-surface border border-white/10 rounded-lg p-4 font-mono text-sm text-gray-300">
                        Authorization: Bearer <span className="text-neon">YOUR_API_KEY</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm font-mono border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 text-gray-400">
                                    <th className="text-left py-3 pr-6">Tier</th>
                                    <th className="text-left py-3 pr-6">Auth</th>
                                    <th className="text-left py-3 pr-6">Data Available</th>
                                    <th className="text-left py-3">Rate Limit</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                {[
                                    { tier: "Public", auth: "None", data: "Composite score + lifecycle state only", limit: "100 req/hr per IP" },
                                    { tier: "Standard", auth: "API key", data: "Full Trust Manifold, trajectory, category-level triggers", limit: "Per-contract SLA" },
                                    { tier: "Enterprise", auth: "API key + contract", data: "Signal-level detail, batch screening, webhooks, custom SLAs", limit: "Custom" },
                                ].map((row) => (
                                    <tr key={row.tier} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className="py-3 pr-6 text-neon font-bold">{row.tier}</td>
                                        <td className="py-3 pr-6">{row.auth}</td>
                                        <td className="py-3 pr-6 text-gray-400">{row.data}</td>
                                        <td className="py-3 text-gray-400">{row.limit}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Core Endpoints */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white">Core Endpoints</h2>

                    {/* Entity Trust Query */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-bold font-mono">GET</span>
                            <code className="text-white font-mono text-sm">/trust</code>
                            <span className="text-xs text-gray-500 font-mono">p99 latency &lt; 200ms</span>
                        </div>
                        <p className="text-sm text-gray-400 pl-16">
                            Entity Trust Query — returns a full Trust Manifold for any blockchain address + chain combination.
                        </p>
                        <div className="bg-surface border border-white/10 rounded-lg p-4 font-mono text-xs text-gray-300 overflow-x-auto">
                            <code>
                                GET /v1/trust?address=0xADDRESS&amp;chain=56<br />
                                <br />
                                address: EVM address or ENS name<br />
                                chain: chain ID (56 = BNB Chain, 1 = Ethereum, 137 = Polygon, etc.)<br />
                                fresh: optional boolean — force fresh scoring run (slower, higher cost)
                            </code>
                        </div>
                        <div className="bg-surface border border-white/10 rounded-lg p-4 font-mono text-xs text-gray-300 overflow-x-auto">
                            <code>
                                {"{"}<br />
                                &nbsp;&nbsp;<span className="text-mint">&quot;composite_score&quot;</span>: <span className="text-neon">82</span>,<br />
                                &nbsp;&nbsp;<span className="text-mint">&quot;confidence_level&quot;</span>: <span className="text-soft">&quot;High&quot;</span>,<br />
                                &nbsp;&nbsp;<span className="text-mint">&quot;lifecycle_state&quot;</span>: <span className="text-soft">&quot;Active&quot;</span>,<br />
                                &nbsp;&nbsp;<span className="text-mint">&quot;score_trajectory&quot;</span>: [<span className="text-neon">79, 80, 81, 81, 82</span>],<br />
                                &nbsp;&nbsp;<span className="text-mint">&quot;score_manifest&quot;</span>: {"{"} <span className="text-gray-500">/* signal groups, weights, lookback period */</span> {"}"},<br />
                                &nbsp;&nbsp;<span className="text-mint">&quot;contribution_breakdown&quot;</span>: {"{"} <span className="text-gray-500">/* per-signal-group % contribution */</span> {"}"},<br />
                                &nbsp;&nbsp;<span className="text-mint">&quot;triggered_indicators&quot;</span>: [<span className="text-soft">&quot;no_adverse_signals&quot;</span>],<br />
                                &nbsp;&nbsp;<span className="text-mint">&quot;model_version&quot;</span>: <span className="text-soft">&quot;v2.1.0&quot;</span>,<br />
                                &nbsp;&nbsp;<span className="text-mint">&quot;computed_at&quot;</span>: <span className="text-soft">&quot;2026-03-14T17:38:00Z&quot;</span><br />
                                {"}"}
                            </code>
                        </div>
                    </div>

                    {/* Transaction Risk Context */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-bold font-mono">GET</span>
                            <code className="text-white font-mono text-sm">/transaction-risk</code>
                            <span className="text-xs text-gray-500 font-mono">p99 latency &lt; 100ms</span>
                        </div>
                        <p className="text-sm text-gray-400 pl-16">
                            Pre-transaction risk context for all parties involved. Returns Trust Manifolds for sender, receiver, and contract.
                        </p>
                        <div className="bg-surface border border-white/10 rounded-lg p-4 font-mono text-xs text-gray-300 overflow-x-auto">
                            <code>
                                GET /v1/transaction-risk?from=0xFROM&amp;to=0xTO&amp;chain=56
                            </code>
                        </div>
                    </div>

                    {/* Batch Screening */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="bg-neon/10 text-neon px-2 py-1 rounded text-xs font-bold font-mono">POST</span>
                            <code className="text-white font-mono text-sm">/batch</code>
                            <span className="text-xs text-gray-500 font-mono">p99 latency &lt; 2s · up to 500 entities</span>
                        </div>
                        <p className="text-sm text-gray-400 pl-16">
                            Batch Screening — screen up to 500 entities per request. Standard and Enterprise tiers only.
                        </p>
                        <div className="bg-surface border border-white/10 rounded-lg p-4 font-mono text-xs text-gray-300 overflow-x-auto">
                            <code>
                                POST /v1/batch<br />
                                Content-Type: application/json<br />
                                <br />
                                {"{"}<br />
                                &nbsp;&nbsp;<span className="text-mint">&quot;chain&quot;</span>: <span className="text-soft">&quot;56&quot;</span>,<br />
                                &nbsp;&nbsp;<span className="text-mint">&quot;addresses&quot;</span>: [<span className="text-soft">&quot;0xADDR1&quot;</span>, <span className="text-soft">&quot;0xADDR2&quot;</span>, <span className="text-gray-500">/* ... up to 500 */</span>]<br />
                                {"}"}
                            </code>
                        </div>
                    </div>

                    {/* Historical Reputation */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-bold font-mono">GET</span>
                            <code className="text-white font-mono text-sm">/history</code>
                        </div>
                        <p className="text-sm text-gray-400 pl-16">
                            Historical Reputation Query — score trajectory over a user-specified time range.
                        </p>
                        <div className="bg-surface border border-white/10 rounded-lg p-4 font-mono text-xs text-gray-300 overflow-x-auto">
                            <code>
                                GET /v1/history?address=0xADDRESS&amp;chain=56&amp;from=2026-01-01&amp;to=2026-03-14
                            </code>
                        </div>
                    </div>

                    {/* Webhook Registration */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="bg-neon/10 text-neon px-2 py-1 rounded text-xs font-bold font-mono">POST</span>
                            <code className="text-white font-mono text-sm">/webhooks</code>
                            <span className="text-xs bg-white/10 text-white px-2 py-0.5 rounded font-mono">Enterprise</span>
                        </div>
                        <p className="text-sm text-gray-400 pl-16">
                            Score Webhook Registration — proactive push on score or lifecycle state changes. Enterprise tier only.
                        </p>
                        <div className="bg-surface border border-white/10 rounded-lg p-4 font-mono text-xs text-gray-300 overflow-x-auto">
                            <code>
                                POST /v1/webhooks<br />
                                Content-Type: application/json<br />
                                <br />
                                {"{"}<br />
                                &nbsp;&nbsp;<span className="text-mint">&quot;address&quot;</span>: <span className="text-soft">&quot;0xADDRESS&quot;</span>,<br />
                                &nbsp;&nbsp;<span className="text-mint">&quot;chain&quot;</span>: <span className="text-soft">&quot;56&quot;</span>,<br />
                                &nbsp;&nbsp;<span className="text-mint">&quot;callback_url&quot;</span>: <span className="text-soft">&quot;https://your-server.com/webhook&quot;</span>,<br />
                                &nbsp;&nbsp;<span className="text-mint">&quot;trigger_on&quot;</span>: [<span className="text-soft">&quot;score_change&quot;</span>, <span className="text-soft">&quot;lifecycle_change&quot;</span>]<br />
                                {"}"}
                            </code>
                        </div>
                    </div>

                    {/* Loss Report */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="bg-neon/10 text-neon px-2 py-1 rounded text-xs font-bold font-mono">POST</span>
                            <code className="text-white font-mono text-sm">/loss-report</code>
                        </div>
                        <p className="text-sm text-gray-400 pl-16">
                            Loss Report Submission — user-reported losses. Transaction hash verification required.
                            Elevates the associated entity&apos;s review priority.
                        </p>
                        <div className="bg-surface border border-white/10 rounded-lg p-4 font-mono text-xs text-gray-300 overflow-x-auto">
                            <code>
                                POST /v1/loss-report<br />
                                Content-Type: application/json<br />
                                <br />
                                {"{"}<br />
                                &nbsp;&nbsp;<span className="text-mint">&quot;tx_hash&quot;</span>: <span className="text-soft">&quot;0xTRANSACTION_HASH&quot;</span>,<br />
                                &nbsp;&nbsp;<span className="text-mint">&quot;chain&quot;</span>: <span className="text-soft">&quot;56&quot;</span>,<br />
                                &nbsp;&nbsp;<span className="text-mint">&quot;loss_amount_usd&quot;</span>: <span className="text-neon">5000</span><br />
                                {"}"}
                            </code>
                        </div>
                    </div>
                </section>

                {/* Cross-Chain Architecture */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Cross-Chain Architecture</h2>
                    <ul className="space-y-3 text-sm text-gray-400">
                        {[
                            "Scores are chain-scoped by default — Ethereum score is independent from BNB Chain score.",
                            "Cross-chain linkages established via cryptographic evidence of address ownership.",
                            "Negative signals propagate more strongly across chain links than positive signals — attackers cannot reset reputation by switching chains.",
                            "Bridge provenance tracking: funds bridged from low-trust sources carry risk context onto the destination chain.",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-neon mt-1 shrink-0">•</span>{item}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}
