import { BarChart3, Database, Play, Code2 } from "lucide-react";

export default function ImmutableDefense() {
    return (
        <section id="core-mechanics" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-surface relative overflow-hidden">
            {/* Decoration Code */}
            <div className="hidden md:block absolute top-0 right-0 font-mono text-[10rem] font-bold text-white/5 pointer-events-none select-none -translate-y-1/2 translate-x-1/4">SCORE</div>

            <div className="max-w-7xl mx-auto">
                <div className="mb-12 sm:mb-16">
                    <h3 className="font-mono text-neon text-xs sm:text-sm mb-2">// CAPABILITIES</h3>
                    <h2 className="font-sans text-3xl sm:text-4xl md:text-6xl font-bold">CORE MECHANICS</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">

                    {/* Feature 1: Large */}
                    <div className="md:col-span-2 bg-void border border-white/10 p-6 sm:p-8 md:p-12 relative overflow-hidden group hover:border-gray-600 transition-colors">
                        <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-neon/20 to-neon/5 flex items-center justify-center">
                                <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-neon" strokeWidth={1.5} />
                            </div>
                        </div>
                        <h4 className="font-sans text-xl sm:text-2xl font-bold mb-3 sm:mb-4 z-10 relative">Trust Scoring Engine</h4>
                        <p className="font-mono text-gray-400 text-xs sm:text-sm z-10 relative max-w-md">
                            Multi-factor risk analysis using On-chain data (45%), Market metrics (30%), Social signals (15%), and AI pattern recognition (10%).
                        </p>
                        <div className="mt-6 sm:mt-8 relative z-10">
                            <div className="h-2 w-full bg-subtle rounded-full overflow-hidden">
                                <div className="h-full bg-safe w-[95%]"></div>
                            </div>
                            <div className="flex justify-between font-mono text-[9px] sm:text-[10px] mt-2 text-gray-500">
                                <span>ANALYSIS_COMPLETE</span>
                                <span>150ms</span>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: Tall */}
                    <div className="md:row-span-2 bg-void border border-white/10 p-6 sm:p-8 relative overflow-hidden group neon-border transition-all">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center mb-6">
                            <Database className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" strokeWidth={1.5} />
                        </div>
                        <h4 className="font-sans text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Entity Analysis</h4>

                        <div className="space-y-3">
                            {/* Node Item */}
                            <div className="flex items-center gap-3 text-[9px] sm:text-[10px] font-mono border-b border-white/5 pb-2">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-gray-400">Smart Contracts</span>
                                <span className="ml-auto text-safe">SUPPORTED</span>
                            </div>
                            <div className="flex items-center gap-3 text-[9px] sm:text-[10px] font-mono border-b border-white/5 pb-2">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-gray-400">EOA Wallets</span>
                                <span className="ml-auto text-safe">SUPPORTED</span>
                            </div>
                            <div className="flex items-center gap-3 text-[9px] sm:text-[10px] font-mono border-b border-white/5 pb-2">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-gray-400">NFT Collections</span>
                                <span className="ml-auto text-safe">SUPPORTED</span>
                            </div>
                            <div className="flex items-center gap-3 text-[9px] sm:text-[10px] font-mono border-b border-white/5 pb-2">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-gray-400">ERC-20 Tokens</span>
                                <span className="ml-auto text-safe">SUPPORTED</span>
                            </div>
                        </div>

                        <p className="font-mono text-gray-400 text-xs mt-6 sm:mt-8">
                            A comprehensive surveillance system for every entity type on the blockchain.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-void border border-white/10 p-6 sm:p-8 relative overflow-hidden group hover:border-neon/50 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon/20 to-neon/5 flex items-center justify-center mb-4">
                            <Play className="w-5 h-5 text-neon" strokeWidth={1.5} />
                        </div>
                        <h4 className="font-sans text-lg sm:text-xl font-bold mb-2">Tx Simulator</h4>
                        <p className="font-mono text-gray-400 text-xs">
                            Pre-execute transactions to detect honeypots, tax scams, and revert risks.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-void border border-white/10 p-6 sm:p-8 relative overflow-hidden group hover:bg-white hover:text-black transition-colors duration-500">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 group-hover:bg-black/10 flex items-center justify-center mb-4 transition-colors">
                            <Code2 className="w-5 h-5 text-blue-400 group-hover:text-black" strokeWidth={1.5} />
                        </div>
                        <h4 className="font-sans text-lg sm:text-xl font-bold mb-2">API Platform</h4>
                        <p className="font-mono text-gray-500 group-hover:text-black text-xs">
                            Integrate trust scores into exchanges, marketplaces, and dApps.
                        </p>
                        <span className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 text-2xl opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

