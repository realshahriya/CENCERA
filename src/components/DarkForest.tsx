export default function DarkForest() {
    return (
        <section className="py-32 px-6 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                <div className="order-2 md:order-1 relative">
                    <div className="absolute -inset-4 bg-danger/10 blur-xl rounded-full"></div>
                    <img
                        src="https://images.unsplash.com/photo-1614064641938-3bcee529cf91?q=80&w=2071&auto=format&fit=crop"
                        alt="Abstract Dark Network Visualization"
                        className="relative z-10 w-full h-auto grayscale contrast-125 mix-blend-lighten border border-white/10 p-2"
                    />

                    {/* Floating Data Card */}
                    <div className="absolute -bottom-10 -right-10 bg-black border border-danger/50 p-6 max-w-xs z-20 backdrop-blur-md">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-mono text-xs text-danger">SYBIL_ATTACK_DETECTED</span>
                            <span className="text-danger animate-pulse">⚠</span>
                        </div>
                        <div className="space-y-2 font-mono text-[10px] text-gray-400">
                            <div className="flex justify-between">
                                <span>Origin:</span> <span className="text-white">0x4f...9a2</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Vector:</span> <span className="text-white">Flash Loan</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Risk Score:</span> <span className="text-danger">99.8%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-1 md:order-2">
                    <h2 className="font-sans text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        THE DARK<br />FOREST IS <span className="text-danger">REAL</span>.
                    </h2>
                    <p className="font-mono text-gray-400 mb-8 leading-relaxed">
                        Validators are blind to intent. Bridges are honeypots. Without a decentralized reputation layer, every interaction is a dice roll.
                    </p>
                    <ul className="space-y-4 font-mono text-sm border-l border-white/10 pl-6">
                        <li className="flex items-center gap-3 text-gray-300">
                            <span className="text-danger">✕</span> $4.2B Lost to Hacks in 2023
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <span className="text-danger">✕</span> Identity Fraud on L2s
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <span className="text-danger">✕</span> Regulatory Non-Compliance
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
