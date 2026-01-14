"use client";

import { Terminal } from "lucide-react";

export default function QuickStartPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tighter text-white">
                    Quick <span className="text-neon">Start</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    Integrate Cencera's Trust & Safety layer into your application in minutes.
                </p>
            </div>

            {/* Step 1 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neon text-black font-mono text-sm">1</span>
                    Installation
                </h2>
                <p className="text-gray-400">Install the Cencera SDK using your preferred package manager.</p>

                <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                    <code className="text-gray-300">
                        <span className="text-gray-500"># npm</span><br />
                        <span className="text-neon">$</span> npm install @cencera/sdk<br /><br />
                        <span className="text-gray-500"># yarn</span><br />
                        <span className="text-neon">$</span> yarn add @cencera/sdk
                    </code>
                </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-mono text-sm">2</span>
                    Configuration
                </h2>
                <p className="text-gray-400">Initialize the client with your API key.</p>

                <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                    <code className="text-gray-300">
                        <span className="text-purple-400">import</span> {"{ CenceraClient }"} <span className="text-purple-400">from</span> <span className="text-green-400">'@cencera/sdk'</span>;<br /><br />
                        <span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> CenceraClient({"{"}<br />
                        &nbsp;&nbsp;apiKey: <span className="text-green-400">'YOUR_API_KEY'</span><br />
                        {"}"});
                    </code>
                </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-mono text-sm">3</span>
                    Verify a Wallet
                </h2>
                <p className="text-gray-400">Check a wallet address for risk signals.</p>

                <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                    <code className="text-gray-300">
                        <span className="text-purple-400">const</span> address = <span className="text-green-400">'0x123...'</span>;<br />
                        <span className="text-purple-400">const</span> riskScore = <span className="text-purple-400">await</span> client.getTrustScore(address);<br /><br />
                        <span className="text-blue-400">console</span>.log(riskScore);
                    </code>
                </div>
            </div>

        </div>
    );
}
