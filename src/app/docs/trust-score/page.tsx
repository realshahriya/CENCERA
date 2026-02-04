"use client";

import { Gauge } from "lucide-react";

export default function TrustScorePage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tighter text-white">
                    Trust <span className="text-neon">Score</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    A unified metric for quantifying address reputation.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1 space-y-6">
                    <p className="text-gray-400 leading-relaxed">
                        The Trust Score is a normalized value between 0 and 100 that represents the calculated safety of interacting with a given address.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 shrink-0 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center font-bold text-secondary text-xl whitespace-nowrap">80+</div>
                            <div>
                                <h3 className="text-white font-bold">High Trust</h3>
                                <p className="text-sm text-gray-500">Established history, KYC verified, known entity.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 shrink-0 rounded-full bg-mint/10 border border-mint/20 flex items-center justify-center font-bold text-mint text-xl whitespace-nowrap">50-79</div>
                            <div>
                                <h3 className="text-white font-bold">Medium Trust</h3>
                                <p className="text-sm text-gray-500">New wallet, low activity, or minor suspicious associations.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 shrink-0 rounded-full bg-danger/10 border border-danger/20 flex items-center justify-center font-bold text-danger text-xl whitespace-nowrap">&lt;50</div>
                            <div>
                                <h3 className="text-white font-bold">High Risk</h3>
                                <p className="text-sm text-gray-500">Known malicious actor, mixer interactions, or phishing involvement.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/3 bg-surface p-6 rounded-xl border border-white/10">
                    <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-neon" /> Scoring Factors
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex justify-between border-b border-white/5 pb-2">
                            <span>On-chain Analysis</span>
                            <span className="text-white">45%</span>
                        </li>
                        <li className="flex justify-between border-b border-white/5 pb-2">
                            <span>Market Signals</span>
                            <span className="text-white">30%</span>
                        </li>
                        <li className="flex justify-between border-b border-white/5 pb-2">
                            <span>Social Reputation</span>
                            <span className="text-white">15%</span>
                        </li>
                        <li className="flex justify-between pt-2">
                            <span>AI Behavioral Analysis</span>
                            <span className="text-neon font-bold">10%</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}
