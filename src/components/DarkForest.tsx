import { CheckCircle2 } from "lucide-react";

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
                    <div className="absolute -bottom-10 -right-10 bg-black border border-safe/50 p-6 max-w-xs z-20 backdrop-blur-md shadow-xl">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-safe" strokeWidth={2} />
                                <span className="font-mono text-xs text-safe">WALLET_VERIFIED</span>
                            </div>
                            <span className="text-safe animate-pulse">✓</span>
                        </div>
                        <div className="space-y-2 font-mono text-[10px] text-gray-400">
                            <div className="flex justify-between">
                                <span>Address:</span> <span className="text-white">0x71...c4a</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Entity:</span> <span className="text-white">Uniswap Protocol</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Trust Score:</span> <span className="text-safe">98.5/100</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-1 md:order-2">
                    <h2 className="font-sans text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        THE DARK<br />FOREST IS <span className="text-danger">REAL</span>.
                    </h2>
                    <p className="font-mono text-gray-400 mb-8 leading-relaxed">
                        No universal Web3 trust metric exists. Users often fall victim to scams, rug pulls, and malicious actors because there's no easy way to gauge legitimacy.
                    </p>
                    <ul className="space-y-4 font-mono text-sm border-l border-white/10 pl-6">
                        <li className="flex items-center gap-3 text-gray-300">
                            <span className="text-danger">✕</span> No Standard Reputation System
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <span className="text-danger">✕</span> High Risk of Phishing
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <span className="text-danger">✕</span> Opaque Contract Risks
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
