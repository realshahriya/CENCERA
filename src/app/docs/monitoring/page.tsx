"use client";

import { Activity, Bell, Radio } from "lucide-react";

export default function MonitoringPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tighter text-white">
                    Real-time <span className="text-neon">Monitoring</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    Track wallet activities and receive instant alerts for critical risk events.
                </p>
            </div>

            <div className="space-y-8">
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Activity className="w-6 h-6 text-emerald-400" /> Active Surveillance
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        The Monitoring API allows you to subscribe to specific addresses or contracts. Cencera nodes will actively watch the mempool and confirmed blocks for any activity related to your watched entities.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Bell className="w-6 h-6 text-neon" /> Webhook Integration
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        Receive POST requests to your server whenever a risk event is detected.
                    </p>

                    <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                        <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                            <span className="text-xs text-gray-500">PAYLOAD EXAMPLE</span>
                            <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-white">JSON</span>
                        </div>
                        <code className="text-gray-300">
                            {"{"}<br />
                            &nbsp;&nbsp;<span className="text-green-400">"event"</span>: <span className="text-yellow-400">"risk_detected"</span>,<br />
                            &nbsp;&nbsp;<span className="text-green-400">"address"</span>: <span className="text-yellow-400">"0x123...abc"</span>,<br />
                            &nbsp;&nbsp;<span className="text-green-400">"riskSummary"</span>: {"{"}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"score"</span>: <span className="text-red-500">12</span>,<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"flags"</span>: [<span className="text-yellow-400">"tornado_cash_interaction"</span>, <span className="text-yellow-400">"phishing_scam_origin"</span>]<br />
                            &nbsp;&nbsp;{"}"},<br />
                            &nbsp;&nbsp;<span className="text-green-400">"timestamp"</span>: <span className="text-blue-400">1678901234</span><br />
                            {"}"}
                        </code>
                    </div>
                </section>

                <section className="bg-surface border border-white/5 p-6 rounded-xl flex items-start gap-4">
                    <Radio className="w-6 h-6 text-red-500 animate-pulse mt-1" />
                    <div>
                        <h3 className="font-bold text-white text-lg">WebSocket Stream</h3>
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                            For high-frequency trading engines and exchanges, we offer a dedicated WebSocket stream that pushes risk updates with sub-10ms latency updates mainly for Solana and SVM chains and generally EVM chains.
                        </p>
                        <button className="mt-4 text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-white px-3 py-2 rounded transition-colors uppercase font-mono tracking-wider">
                            Request Access
                        </button>
                    </div>
                </section>

            </div>
        </div>
    );
}
