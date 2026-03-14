"use client";

export default function QuickStartPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white">
                    Quick <span className="text-neon">Start</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    Integrate the Cencera Trust Protocol into your dApp, wallet, or exchange.
                    A single API call returns a full Trust Manifold — composite score, trajectory, signals, and lifecycle state.
                </p>
            </div>

            {/* Step 1 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neon text-black font-mono text-sm">1</span>
                    Request API Access
                </h2>
                <p className="text-gray-400">
                    Choose your access tier. Public tier requires no auth and returns composite score + lifecycle state only.
                    Standard and Enterprise tiers return the full Trust Manifold.
                </p>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm font-mono border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 text-gray-400">
                                <th className="text-left py-2 pr-6">Tier</th>
                                <th className="text-left py-2 pr-6">Rate Limit</th>
                                <th className="text-left py-2">Access</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            <tr className="border-b border-white/5">
                                <td className="py-2 pr-6 text-gray-400">Public</td>
                                <td className="py-2 pr-6">100 req/hr per IP</td>
                                <td className="py-2">No auth required</td>
                            </tr>
                            <tr className="border-b border-white/5">
                                <td className="py-2 pr-6 text-neon">Standard</td>
                                <td className="py-2 pr-6">Per-contract SLA</td>
                                <td className="py-2">API key</td>
                            </tr>
                            <tr>
                                <td className="py-2 pr-6 text-secondary">Enterprise</td>
                                <td className="py-2 pr-6">Custom</td>
                                <td className="py-2">API key + contract ($10K–$30K /month)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="bg-surface border border-white/10 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                    <code className="text-gray-300">
                        1. Email <span className="text-neon">api@cencera.xyz</span> or visit <span className="text-neon">cencera.xyz</span><br />
                        2. Specify your tier (Standard / Enterprise) and use case<br />
                        3. Receive your API key and per-contract SLA details<br />
                        4. Copy and store your key securely
                    </code>
                </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-mono text-sm">2</span>
                    Query an Entity Trust Score
                </h2>
                <p className="text-gray-400">
                    Call the Entity Trust Query endpoint with any blockchain address and chain ID.
                    p99 latency is under 200ms for cached entities.
                </p>

                <div className="bg-surface border border-white/10 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                    <code className="text-gray-300">
                        <span className="text-gray-500"># Query trust score for any address (BNB Chain = 56)</span><br />
                        <span className="text-neon">const</span> apiKey = <span className="text-soft">&apos;YOUR_API_KEY&apos;</span>;<br />
                        <span className="text-neon">const</span> address = <span className="text-soft">&apos;0xYOUR_ADDRESS&apos;</span>;<br />
                        <br />
                        <span className="text-neon">const</span> res = <span className="text-neon">await</span> fetch(<br />
                        &nbsp;&nbsp;<span className="text-soft">`https://api.cencera.xyz/v1/trust?address=${"{"}address{"}"}&chain=56`</span>,<br />
                        &nbsp;&nbsp;{"{"} headers: {"{"} <span className="text-soft">&apos;Authorization&apos;</span>: <span className="text-soft">`Bearer ${"{"}apiKey{"}"}`</span> {"}"} {"}"}<br />
                        );<br />
                        <span className="text-neon">const</span> data = <span className="text-neon">await</span> res.json();
                    </code>
                </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-mono text-sm">3</span>
                    Read the Trust Manifold
                </h2>
                <p className="text-gray-400">
                    The response is a structured Trust Manifold. Read the composite score, lifecycle state, and trajectory
                    to make trust-based decisions in your platform. CENCERA scores — you enforce.
                </p>

                <div className="bg-surface border border-white/10 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                    <code className="text-gray-300">
                        <span className="text-neon">const</span> score = data.composite_score;       <span className="text-gray-500">// 0–100</span><br />
                        <span className="text-neon">const</span> state = data.lifecycle_state;       <span className="text-gray-500">// Nascent / Active / Flagged / Archived</span><br />
                        <span className="text-neon">const</span> confidence = data.confidence_level;  <span className="text-gray-500">// Low / Medium / High</span><br />
                        <span className="text-neon">const</span> trajectory = data.score_trajectory; <span className="text-gray-500">// last 5 scores</span><br />
                        <br />
                        <span className="text-gray-500">// Example: block interaction below your threshold</span><br />
                        <span className="text-neon">if</span> (score {"<"} 50 || state === <span className="text-soft">&apos;Flagged&apos;</span>) {"{"}<br />
                        &nbsp;&nbsp;<span className="text-mint">console</span>.warn(<span className="text-soft">&apos;High-risk entity — blocking interaction&apos;</span>);<br />
                        {"}"}
                    </code>
                </div>
            </div>

            {/* Step 4 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-mono text-sm">4</span>
                    (Optional) Pre-Transaction Risk Check
                </h2>
                <p className="text-gray-400">
                    Before executing a transaction, call the Transaction Risk Context endpoint to get Trust Manifolds
                    for both the sender and receiver. p99 latency under 100ms.
                </p>

                <div className="bg-surface border border-white/10 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                    <code className="text-gray-300">
                        <span className="text-gray-500"># Pre-transaction risk — check sender + receiver</span><br />
                        GET /v1/transaction-risk?from=<span className="text-soft">0xFROM</span>&amp;to=<span className="text-soft">0xTO</span>&amp;chain=56
                    </code>
                </div>
            </div>

            {/* Platform Autonomy Note */}
            <div className="bg-surface border border-neon/20 rounded-xl p-6">
                <h3 className="font-bold text-neon mb-2 font-mono text-sm uppercase tracking-wider">Platform Autonomy</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    CENCERA scores entities — your platform enforces. Each consuming platform configures its own thresholds,
                    selects which signal groups to weight, and sets its own lookback periods.
                    This respects platform autonomy and supports diverse risk profiles across the ecosystem.
                    A score of 50 might be acceptable for a low-stakes use case and unacceptable for a DEX with large liquidity.
                </p>
            </div>

        </div>
    );
}
