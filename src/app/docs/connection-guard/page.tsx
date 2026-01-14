"use client";

import { ShieldAlert, Globe, Lock } from "lucide-react";

export default function ConnectionGuardPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tighter text-white">
                    dApp Connection <span className="text-neon">Guard</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    Phishing domain detection with protocol whitelisting and permission analysis.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="col-span-full bg-red-500/10 border border-red-500/20 p-6 rounded-xl flex items-center gap-4">
                    <ShieldAlert className="w-10 h-10 text-red-500" />
                    <div>
                        <h3 className="text-xl font-bold text-white">Phishing Prevention</h3>
                        <p className="text-sm text-gray-400">
                            Real-time comparison of domain URL against our database of known malicious phishing sites and verified protocol domains.
                        </p>
                    </div>
                </div>

                <div className="bg-surface border border-white/5 p-6 rounded-xl">
                    <Globe className="w-6 h-6 text-neon mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Protocol Whitelisting</h3>
                    <p className="text-sm text-gray-400">
                        Strict checks to ensure you are connecting to the legitimate front-end of protocols like Uniswap, Aave, or OpenSea.
                    </p>
                </div>

                <div className="bg-surface border border-white/5 p-6 rounded-xl">
                    <Lock className="w-6 h-6 text-orange-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Permission Analysis</h3>
                    <p className="text-sm text-gray-400">
                        Alerts when a dApp requests excessive permissions, such as unlimited token approvals or access to NFTs not involved in the transaction.
                    </p>
                </div>

                <div className="bg-surface border border-white/5 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">Gas Fee Monitoring</h3>
                    <p className="text-sm text-gray-400">
                        Detects abnormal gas limits that may indicate a 'drainer' script attempting to consume max capability or complex malicious execution.
                    </p>
                </div>
            </div>
        </div>
    );
}
