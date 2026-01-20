import { CheckCircle2, Circle } from "lucide-react";

export default function Roadmap() {
    return (
        <section id="roadmap" className="section-padding border-t border-white/5 bg-void relative overflow-hidden">
            {/* Background decoration */}
            <div className="hidden md:block absolute top-0 left-0 font-mono text-[6rem] sm:text-[10rem] font-bold text-white/[0.09] pointer-events-none select-none -translate-y-1/2 -translate-x-1/4">2025</div>

            <div className="section-container">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="section-title text-3xl sm:text-4xl md:text-6xl mb-4">DEVELOPMENT ROADMAP</h2>
                    <p className="section-subtitle text-xs sm:text-sm max-w-2xl mx-auto px-4">
                        Our path to becoming the industry-standard security API for Web3
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {/* Phase 1 */}
                    <div className="card-surface card-hover p-6 sm:p-8 relative overflow-hidden group hover:border-neon/50">
                        <div className="absolute top-0 right-0 font-mono text-5xl sm:text-6xl font-bold text-white/[0.09] p-4">01</div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-full bg-neon/20 flex items-center justify-center">
                                    <CheckCircle2 className="w-5 h-5 text-neon" strokeWidth={2} />
                                </div>
                                <span className="font-mono text-[10px] sm:text-xs text-gray-500">Q4 2025</span>
                            </div>
                            <h4 className="font-sans text-lg sm:text-xl font-bold mb-3 sm:mb-4">Phase 1: Foundation</h4>
                            <ul className="space-y-2 text-xs sm:text-sm font-mono text-gray-400">
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Team Building</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Research</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Initial Planning</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="card-surface card-hover p-6 sm:p-8 relative overflow-hidden group hover:border-purple-500/50">
                        <div className="absolute top-0 right-0 font-mono text-5xl sm:text-6xl font-bold text-white/[0.09] p-4">02</div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                                    <Circle className="w-5 h-5 text-purple-400" strokeWidth={2} />
                                </div>
                                <span className="font-mono text-[10px] sm:text-xs text-gray-500">Q1 2026</span>
                            </div>
                            <h4 className="font-sans text-lg sm:text-xl font-bold mb-3 sm:mb-4">Phase 2: Testnet</h4>
                            <ul className="space-y-2 text-xs sm:text-sm font-mono text-gray-400">
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Testnet Launch</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Basic Features Launch</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Partnerships</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="card-surface card-hover p-6 sm:p-8 relative overflow-hidden group hover:border-blue-500/50">
                        <div className="absolute top-0 right-0 font-mono text-5xl sm:text-6xl font-bold text-white/[0.09] p-4">03</div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                    <Circle className="w-5 h-5 text-blue-400" strokeWidth={2} />
                                </div>
                                <span className="font-mono text-[10px] sm:text-xs text-gray-500">Q2 2026</span>
                            </div>
                            <h4 className="font-sans text-lg sm:text-xl font-bold mb-3 sm:mb-4">Phase 3: Mainnet V1</h4>
                            <ul className="space-y-2 text-xs sm:text-sm font-mono text-gray-400">
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Mainnet Launch (V1)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Pilot Integrations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Community Report Feature Launch</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Phase 4 */}
                    <div className="card-surface card-hover p-6 sm:p-8 relative overflow-hidden group hover:border-orange-500/50">
                        <div className="absolute top-0 right-0 font-mono text-5xl sm:text-6xl font-bold text-white/[0.09] p-4">04</div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                                    <Circle className="w-5 h-5 text-orange-400" strokeWidth={2} />
                                </div>
                                <span className="font-mono text-[10px] sm:text-xs text-gray-500">Q3 2026</span>
                            </div>
                            <h4 className="font-sans text-lg sm:text-xl font-bold mb-3 sm:mb-4">Phase 4: Advanced AI</h4>
                            <ul className="space-y-2 text-xs sm:text-sm font-mono text-gray-400">
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Advanced AI Model Launch</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Business Expansion</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>New Features Integrations</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
