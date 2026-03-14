"use client";

import { Shield, AlertTriangle, Eye, Activity, TrendingUp, Database, Cpu } from "lucide-react";

export default function RiskDetectionPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white">
                    Risk <span className="text-neon">Detection</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    The Cencera Trust Protocol combines four independent signal domains into a single probabilistic trust score.
                    Gaming all four simultaneously is exponentially harder than gaming any one in isolation.
                </p>
            </div>

            {/* Design Principles */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Design Principles</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { title: "Trust as a First-Class Primitive", desc: "Not a feature or binary flag, but a continuously computed probabilistic score with full structured metadata." },
                        { title: "Graceful Degradation", desc: "Even with limited data, a labeled partial score is more useful than null. Nascent entities receive clearly labeled limited scores." },
                        { title: "Tiered Explainability", desc: "Category-level signal triggers published publicly; signal-level detail for enterprise partners only — transparency without enabling adversarial gaming." },
                        { title: "Continuous Learning", desc: "Every confirmed exploit triggers retroactive rescoring of all similar entities within 4 hours." },
                        { title: "Platform Autonomy", desc: "CENCERA scores; consuming platforms enforce. Each partner configures its own thresholds, signal weights, and lookback periods." },
                        { title: "Cross-Chain Architecture", desc: "Scores are chain-scoped by default. Negative signals propagate more strongly across chain links — attackers cannot reset reputation by switching chains." },
                    ].map((item) => (
                        <div key={item.title} className="bg-surface border border-white/5 p-4 rounded-lg">
                            <h4 className="font-bold text-white text-sm">{item.title}</h4>
                            <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why current approaches fail */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Why Existing Approaches Fall Short</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm font-mono border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 text-gray-400">
                                <th className="text-left py-3 pr-6">Approach</th>
                                <th className="text-left py-3 pr-6">Mechanism</th>
                                <th className="text-left py-3">Core Limitation</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            {[
                                { approach: "Static Blacklists", mechanism: "Block known malicious addresses", limit: "Cannot detect novel attacks; attackers rotate addresses trivially" },
                                { approach: "Transaction Simulation", mechanism: "Simulate a transaction before execution", limit: "Blind to slow-burn exploits; no behavioral history; single-chain" },
                                { approach: "Binary Screening", mechanism: "Pass/fail flag on a transaction", limit: "No probabilistic nuance; no trajectory; no cross-chain awareness" },
                            ].map((row) => (
                                <tr key={row.approach} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                    <td className="py-3 pr-6 text-white font-bold">{row.approach}</td>
                                    <td className="py-3 pr-6 text-gray-400">{row.mechanism}</td>
                                    <td className="py-3 text-gray-500">{row.limit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Four Signal Domains */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">The Four Signal Domains</h2>

                {/* Domain 1 */}
                <div className="bg-surface border border-white/10 rounded-xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-neon/10 rounded-lg flex items-center justify-center">
                            <Activity className="w-5 h-5 text-neon" />
                        </div>
                        <div>
                            <div className="font-mono text-[10px] text-neon uppercase tracking-wider">Domain 1 · Highest Weight</div>
                            <h3 className="text-lg font-bold text-white">On-Chain Signals — Cryptographically Verified</h3>
                        </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-400">
                        {[
                            "Transaction frequency and value patterns over time",
                            "Contract interaction graphs using graph-based neighbor risk propagation",
                            "Unlimited approval grants and revocation behavior",
                            "Liquidity provisioning and withdrawal timing relative to price movements",
                            "Historical adjacency to known exploit contracts",
                            "Contract upgrade and proxy change events",
                            "Governance participation patterns",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-2">
                                <span className="text-neon mt-1 shrink-0">•</span>{item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Domain 2 */}
                <div className="bg-surface border border-white/10 rounded-xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-mint/10 rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-mint" />
                        </div>
                        <div>
                            <div className="font-mono text-[10px] text-mint uppercase tracking-wider">Domain 2 · Up to 40% for Token / Protocol</div>
                            <h3 className="text-lg font-bold text-white">Market Signals</h3>
                        </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-400">
                        {[
                            "Liquidity depth, volatility, and depth at various price impact levels",
                            "Token distribution concentration — Gini coefficient, top-holder percentage",
                            "Slippage anomalies and sandwich attack frequency",
                            "Sudden supply changes or fee/tax modifications",
                            "Price-to-liquidity ratio as a manipulation signal",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-2">
                                <span className="text-mint mt-1 shrink-0">•</span>{item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Domain 3 */}
                <div className="bg-surface border border-white/10 rounded-xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                            <Eye className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                            <div className="font-mono text-[10px] text-secondary uppercase tracking-wider">Domain 3 · 15% Base Weight</div>
                            <h3 className="text-lg font-bold text-white">Off-Chain Signals — Social & Identity Context</h3>
                        </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-400">
                        {[
                            "Website domain age, registration anonymity, and DNS consistency",
                            "Social account authenticity — follower quality, engagement, cross-platform consistency",
                            "Developer identity continuity across projects",
                            "GitHub repository history — commit authenticity and sudden deletions",
                            "Audit status from recognized security firms",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-2">
                                <span className="text-secondary mt-1 shrink-0">•</span>{item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Domain 4 */}
                <div className="bg-surface border border-white/10 rounded-xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-soft/10 rounded-lg flex items-center justify-center">
                            <Cpu className="w-5 h-5 text-soft" />
                        </div>
                        <div>
                            <div className="font-mono text-[10px] text-soft uppercase tracking-wider">Domain 4 · Analytical Layer</div>
                            <h3 className="text-lg font-bold text-white">AI-Derived Signals</h3>
                        </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-400">
                        {[
                            "Bytecode similarity clustering — detects obfuscated exploit variants that evade exact-match detection",
                            "Behavioral anomaly scoring — deviation from an entity's own historical baseline",
                            "Exploit pattern recognition — reentrancy setups, flash loan sequences, governance manipulation matched against live streams",
                            "Temporal risk trend analysis — monotonically increasing risk interpreted as attack staging",
                            "Novel Behavior Flag — unknown patterns routed to human review with provisional score",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-2">
                                <span className="text-soft mt-1 shrink-0">•</span>{item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Adversarial Resilience */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Shield className="w-6 h-6 text-neon" /> Adversarial Resilience
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { title: "Multi-Signal Correlation", desc: "Each domain is gameable in isolation; all four simultaneously is exponentially harder." },
                        { title: "API Probing Prevention", desc: "Tiered explainability + rate limiter escalation prevents systematic reverse-engineering." },
                        { title: "Data Source Poisoning Guard", desc: "Multi-provider cross-validation; write-protected exploit library requiring multi-party authorization." },
                        { title: "Sybil Detection", desc: "Star-topology interaction graphs (bot clusters) are flagged immediately on detection." },
                        { title: "Behavioral Mimicry Detection", desc: "Attack staging patterns detected before execution completes via temporal risk analysis." },
                        {
                            title: "Retroactive Rescoring",
                            desc: "Confirmed exploit triggers retroactive rescore of all similar entities within 4 hours + webhook notifications."
                        },
                    ].map((item) => (
                        <div key={item.title} className="bg-surface border border-white/5 p-4 rounded-lg flex items-start gap-3">
                            <AlertTriangle className="w-4 h-4 text-danger mt-1 shrink-0" />
                            <div>
                                <h4 className="font-bold text-white text-sm">{item.title}</h4>
                                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Prior Approaches & Limitations */}
            <div className="space-y-6">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-white">Prior Approaches & Limitations</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        A survey of existing blockchain security systems reveals a consistent pattern: each optimizes for one signal type
                        while remaining structurally blind to others. CENCERA is designed to address all of these failure modes simultaneously.
                    </p>
                </div>

                <div className="space-y-4">
                    {[
                        {
                            num: "5.1",
                            title: "Address Blacklisting",
                            limitation: "Retrospective by design",
                            desc: "Static address blacklists operate on exact-match: an address either appears in the registry or it does not. An address can only be blacklisted after harm is confirmed — every novel attack succeeds at least once. Address rotation is trivially inexpensive, allowing adversaries to deploy fresh addresses with no accumulated history.",
                        },
                        {
                            num: "5.2",
                            title: "Transaction Simulation",
                            limitation: "Single execution context",
                            desc: "Simulation intercepts pending transactions and runs them in a sandbox. It can detect exploits that produce observable state changes within a single transaction — but cannot evaluate behavioral history over time, detect slow-acting exploits across multiple blocks, or assess entities that haven't yet interacted with the user.",
                        },
                        {
                            num: "5.3",
                            title: "Rule-Based Anomaly Detection",
                            limitation: "Brittle against adversarial adaptation",
                            desc: "Rule-based systems encode expert knowledge as deterministic rules (flag unlimited approvals, flag concentrated liquidity, etc.). Because rules are public or reverse-engineerable, a motivated adversary can construct an attack satisfying each individual rule while still executing harmful behavior. Rules also evaluate signals in isolation with no cross-signal reasoning.",
                        },
                        {
                            num: "5.4",
                            title: "Single-Chain Identity Systems",
                            limitation: "Chain-specific with no cross-chain propagation",
                            desc: "Soulbound token or attestation-based identity systems create persistent non-transferable credentials — but reputation on Ethereum carries no formal weight on BNB Chain or Arbitrum. An adversary can build a clean reputation on one chain while staging an attack on another, with no mechanism for risk to propagate across the chain boundary.",
                        },
                        {
                            num: "5.5",
                            title: "Graph-Based Risk Propagation",
                            limitation: "Reactive — requires a confirmed seed node",
                            desc: "Graph methods propagate risk from known-bad nodes through transaction graphs to neighbors. They represent a meaningful advance over flat blacklisting but remain reactive: they require at least one confirmed bad node as a seed, and their effectiveness is bounded by transaction graph density. Entities that stage attacks through intermediary contracts evade graph detection.",
                        },
                    ].map((item) => (
                        <div key={item.num} className="bg-surface border border-white/5 rounded-xl p-6 space-y-3">
                            <div className="flex items-start justify-between gap-4 flex-wrap">
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">{item.num}</span>
                                    <h3 className="text-white font-bold">{item.title}</h3>
                                </div>
                                <span className="text-xs font-mono bg-danger/10 text-danger px-2 py-1 rounded border border-danger/20 shrink-0">{item.limitation}</span>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Synthesis callout */}
                <div className="bg-neon/5 border border-neon/20 rounded-xl p-6 space-y-2">
                    <div className="font-mono text-[10px] text-neon uppercase tracking-widest">§5.6 — Synthesis</div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        The Cencera Trust Protocol is designed around the observation that no single signal domain is sufficient.
                        Trust must be treated as a <span className="text-white font-semibold">longitudinal, multi-signal, probabilistic quantity</span> rather
                        than a binary attribute or a point-in-time assessment. The four signal domains address each failure mode above:
                        on-chain behavioral history addresses temporal exploitation, market signals address liquidity manipulation,
                        off-chain signals address identity continuity, and AI-derived signals address adversarial adaptation through
                        bytecode similarity analysis and behavioral baseline modeling.
                    </p>
                </div>
            </div>

        </div>
    );
}
