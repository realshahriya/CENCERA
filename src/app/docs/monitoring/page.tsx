"use client";

import { Activity, Bell, Radio, RefreshCw } from "lucide-react";

export default function MonitoringPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white">
                    Monitoring <span className="text-neon">&amp; Webhooks</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    Subscribe to score changes and lifecycle state transitions for any blockchain entity.
                    Cencera pushes proactive webhook notifications the moment a trust score or lifecycle state changes.
                </p>
            </div>

            <div className="space-y-8">

                {/* Score Webhook */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Bell className="w-6 h-6 text-neon" /> Score Webhook Registration
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        Register a webhook URL to receive POST requests whenever a monitored entity&apos;s trust score changes
                        or its lifecycle state transitions (e.g., Active → Flagged). Available on Enterprise tier.
                    </p>

                    <div className="bg-surface border border-white/10 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                        <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                            <span className="text-xs text-gray-500">WEBHOOK PAYLOAD EXAMPLE</span>
                            <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-white">JSON</span>
                        </div>
                        <code className="text-gray-300">
                            {"{"}<br />
                            &nbsp;&nbsp;<span className="text-mint">&quot;event&quot;</span>: <span className="text-soft">&quot;score_change&quot;</span>,<br />
                            &nbsp;&nbsp;<span className="text-mint">&quot;address&quot;</span>: <span className="text-soft">&quot;0x123...abc&quot;</span>,<br />
                            &nbsp;&nbsp;<span className="text-mint">&quot;chain&quot;</span>: <span className="text-neon">56</span>,<br />
                            &nbsp;&nbsp;<span className="text-mint">&quot;previous_score&quot;</span>: <span className="text-neon">78</span>,<br />
                            &nbsp;&nbsp;<span className="text-mint">&quot;new_score&quot;</span>: <span className="text-danger">41</span>,<br />
                            &nbsp;&nbsp;<span className="text-mint">&quot;lifecycle_state&quot;</span>: <span className="text-soft">&quot;Flagged&quot;</span>,<br />
                            &nbsp;&nbsp;<span className="text-mint">&quot;triggered_indicators&quot;</span>: [<span className="text-soft">&quot;exploit_adjacency&quot;</span>],<br />
                            &nbsp;&nbsp;<span className="text-mint">&quot;model_version&quot;</span>: <span className="text-soft">&quot;v2.1.0&quot;</span>,<br />
                            &nbsp;&nbsp;<span className="text-mint">&quot;computed_at&quot;</span>: <span className="text-neon">1742000000</span><br />
                            {"}"}
                        </code>
                    </div>
                </section>

                {/* Retroactive Rescoring */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <RefreshCw className="w-6 h-6 text-secondary" /> Retroactive Rescoring
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        When a new exploit is confirmed, <span className="text-white font-semibold">all similar entities are retroactively rescored within 4 hours</span>.
                        Competing systems only update going forward — leaving historical assessments intact and inaccurate.
                        Webhook subscribers for affected entities receive push notifications automatically.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { label: "Rescore latency", value: "< 4 hours", color: "text-neon" },
                            { label: "Novel behavior review SLA", value: "< 24 hours", color: "text-secondary" },
                            { label: "Model minor update cycle", value: "Every 2 weeks", color: "text-mint" },
                        ].map((item) => (
                            <div key={item.label} className="bg-surface border border-white/5 rounded-lg p-4 text-center">
                                <div className={`text-2xl font-bold font-mono ${item.color}`}>{item.value}</div>
                                <div className="text-xs text-gray-500 mt-1">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Feedback Channels */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Activity className="w-6 h-6 text-secondary" /> Feedback & Learning Channels
                    </h2>
                    <div className="space-y-3">
                        {[
                            { title: "Confirmed Exploit Channel", desc: "Exploit confirmed → retroactive rescore of all similar entities within 4 hours + webhook notifications pushed to all subscribers." },
                            { title: "Novel Behavior Review", desc: "AI-flagged unknown patterns routed to human review within 24 hours. Provisional score assigned during the review period." },
                            { title: "Loss Report Channel", desc: "User-reported losses (submitted via POST /v1/loss-report with tx hash verification) elevate the associated entity's review priority." },
                            { title: "Model Retraining", desc: "Minor updates every 2 weeks; major retraining quarterly. All model versions are immutably versioned. Every score is tagged with the model version used to compute it." },
                        ].map((item) => (
                            <div key={item.title} className="bg-surface border border-white/5 p-4 rounded-lg">
                                <h4 className="font-bold text-white">{item.title}</h4>
                                <p className="text-sm text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Enterprise WebSocket */}
                <section className="bg-surface border border-white/5 p-6 rounded-xl flex items-start gap-4">
                    <Radio className="w-6 h-6 text-danger animate-pulse mt-1 shrink-0" />
                    <div>
                        <h3 className="font-bold text-white text-lg">Enterprise Real-Time Stream</h3>
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                            For high-frequency trading engines, exchanges, and institutional compliance platforms, Cencera offers
                            a dedicated real-time data stream that pushes score updates on monitored entities as they are computed.
                            Available under custom Enterprise SLA with signal-level detail and configurable lookback periods.
                        </p>
                        <a
                            href="mailto:enterprise@cencera.xyz"
                            className="mt-4 inline-block text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-white px-3 py-2 rounded transition-colors uppercase font-mono tracking-wider"
                        >
                            Contact Enterprise →
                        </a>
                    </div>
                </section>

            </div>
        </div>
    );
}
