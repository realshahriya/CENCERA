"use client";

import { Play, AlertOctagon, CheckCircle } from "lucide-react";

export default function TransactionSimulatorPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tighter text-white">
                    Transaction <span className="text-neon">Simulator</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    Pre-execution testing with gas estimation, honeypot detection, and state change preview.
                </p>
            </div>

            <div className="space-y-8">
                <div className="bg-surface border border-white/5 p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-16 h-16 rounded-full bg-neon/10 flex items-center justify-center shrink-0 animate-pulse">
                        <Play className="w-8 h-8 text-neon ml-1" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-white">Simulate Before You Sign</h3>
                        <p className="text-gray-400">
                            Never sign a blind transaction again. Isolate the execution trace in a sandboxed environment to see exactly what asset transfers will occur.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4 p-4 rounded-lg bg-white/5">
                            <AlertOctagon className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-white">Honeypot Detection</h4>
                                <p className="text-xs text-gray-400 mt-1">Detects tokens that can be bought but not sold, or have exorbitant transfer taxes.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 rounded-lg bg-white/5">
                            <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-white">State Change Preview</h4>
                                <p className="text-xs text-gray-400 mt-1">Visual breakdown of all balance changes for native tokens, ERC-20s, and NFTs.</p>
                            </div>
                        </li>
                    </ul>

                    {/* Simple Visualization of Logic */}
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-6 font-mono text-xs flex flex-col justify-between">
                        <div className="flex justify-between text-gray-500 mb-2"><span>Input</span> <span>Output</span></div>
                        <div className="flex items-center justify-between">
                            <div className="bg-white/10 px-3 py-2 rounded text-white">TX Signature</div>
                            <div className="h-0.5 flex-1 bg-white/10 mx-2"></div>
                            <div className="bg-neon/10 px-3 py-2 rounded text-neon border border-neon/30">Asset Diff</div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/5 text-gray-400">
                            {">"} Gas Estimation<br />
                            {">"} Revert Reason Analysis<br />
                            {">"} Transfer Tax Checking
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
