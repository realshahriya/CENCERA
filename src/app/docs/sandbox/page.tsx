"use client";

import { Sliders, Box, Monitor } from "lucide-react";

export default function SandboxPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tighter text-white">
                    Interactive <span className="text-neon">Sandbox</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    Live demo environment with configurable thresholds and theme customization.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    <p className="text-gray-400 leading-relaxed">
                        Test Cencera's detection capabilities in a safe, controlled environment. Adjust risk tolerance thresholds and visually see how the scoring engine adapts.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm text-gray-300">
                            <Sliders className="w-4 h-4 text-neon" />
                            Configurable Risk Thresholds
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-300">
                            <Box className="w-4 h-4 text-blue-400" />
                            10+ Color Schemes & Theme Support
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-300">
                            <Monitor className="w-4 h-4 text-purple-400" />
                            Real-time Simulation Testing
                        </li>
                    </ul>

                    <a href="https://ap.cencera.xyz/playground" target="_blank" className="bg-neon text-black px-6 py-3 font-mono text-sm font-bold hover:bg-white transition-colors inline-block">
                        LAUNCH SANDBOX //
                    </a>
                </div>

                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-8 aspect-square flex items-center justify-center">
                    <div className="text-center">
                        <div className="inline-block relative">
                            <div className="absolute inset-0 bg-neon blur-xl opacity-20 animate-pulse"></div>
                            <Box className="w-20 h-20 text-white relative z-10" />
                        </div>
                        <p className="mt-6 text-gray-600 font-mono text-xs">Sandbox Environment Preview</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
