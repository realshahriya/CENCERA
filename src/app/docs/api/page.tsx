"use client";

import { Code, Server, Lock } from "lucide-react";

export default function ApiPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tighter text-white">
                    API <span className="text-neon">Reference</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    Direct access to the Cencera intelligence network.
                </p>
            </div>

            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Base URL</h2>
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-4 font-mono text-sm text-neon">
                        https://api.cencera.xyz/v1
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white mb-2">Authentication</h2>
                    <p className="text-gray-400">Authenticate your requests by including your API key in the header.</p>
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-4 font-mono text-sm text-gray-300">
                        Authorization: Bearer <span className="text-neon">YOUR_API_KEY</span>
                    </div>
                </section>

                <section className="space-y-6 pt-6">
                    <h2 className="text-2xl font-bold text-white">Endpoints</h2>

                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-xs font-bold font-mono">GET</span>
                            <code className="text-white font-mono text-sm">/wallet/:address/score</code>
                        </div>
                        <p className="text-sm text-gray-500 pl-16">Retrieve the current trust score for a wallet address.</p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-xs font-bold font-mono">GET</span>
                            <code className="text-white font-mono text-sm">/wallet/:address/risk-report</code>
                        </div>
                        <p className="text-sm text-gray-500 pl-16">Get a detailed risk report including specific flags and activity history.</p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="bg-blue-500/10 text-blue-500 px-2 py-1 rounded text-xs font-bold font-mono">POST</span>
                            <code className="text-white font-mono text-sm">/contracts/verify</code>
                        </div>
                        <p className="text-sm text-gray-500 pl-16">Submit a smart contract bytecode for instant security analysis.</p>
                    </div>
                </section>

            </div>

        </div>
    );
}
