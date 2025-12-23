import { CheckCircle2, Circle } from "lucide-react";

export default function Roadmap() {
    return (
        <section id="roadmap" className="py-24 px-6 border-t border-white/5 bg-void relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 font-mono text-[10rem] font-bold text-white/5 pointer-events-none select-none -translate-y-1/2 -translate-x-1/4">2025</div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="font-mono text-neon text-sm mb-2">// THE JOURNEY</h3>
                    <h2 className="font-sans text-4xl md:text-6xl font-bold mb-4">DEVELOPMENT ROADMAP</h2>
                    <p className="font-mono text-gray-400 text-sm max-w-2xl mx-auto">
                        Our path to becoming the industry-standard security API for Web3
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Phase 1 */}
                    <div className="bg-surface border border-white/10 p-8 relative overflow-hidden group hover:border-neon/50 transition-colors">
                        <div className="absolute top-0 right-0 font-mono text-6xl font-bold text-white/5 p-4">01</div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-full bg-neon/20 flex items-center justify-center">
                                    <CheckCircle2 className="w-5 h-5 text-neon" strokeWidth={2} />
                                </div>
                                <span className="font-mono text-xs text-gray-500">Q4 2025</span>
                            </div>
                            <h4 className="font-sans text-xl font-bold mb-4">Phase 1: Core Platform</h4>
                            <ul className="space-y-2 text-sm font-mono text-gray-400">
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Complete blockchain integration</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Expand multi-chain support</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Enhanced AI analysis with GPT-4</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>User authentication system</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="bg-surface border border-white/10 p-8 relative overflow-hidden group hover:border-purple-500/50 transition-colors">
                        <div className="absolute top-0 right-0 font-mono text-6xl font-bold text-white/5 p-4">02</div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                                    <Circle className="w-5 h-5 text-purple-400" strokeWidth={2} />
                                </div>
                                <span className="font-mono text-xs text-gray-500">Q1 2026</span>
                            </div>
                            <h4 className="font-sans text-xl font-bold mb-4">Phase 2: Advanced Security</h4>
                            <ul className="space-y-2 text-sm font-mono text-gray-400">
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Real-time transaction monitoring</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Smart contract source analysis</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Automated audit reports</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>NFT collection analysis</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="bg-surface border border-white/10 p-8 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
                        <div className="absolute top-0 right-0 font-mono text-6xl font-bold text-white/5 p-4">03</div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                    <Circle className="w-5 h-5 text-blue-400" strokeWidth={2} />
                                </div>
                                <span className="font-mono text-xs text-gray-500">Q2 2026</span>
                            </div>
                            <h4 className="font-sans text-xl font-bold mb-4">Phase 3: Integration & SDK</h4>
                            <ul className="space-y-2 text-sm font-mono text-gray-400">
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>JavaScript/TypeScript SDK</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Browser extension launch</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Mobile wallet SDK</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Webhook notifications</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Phase 4 */}
                    <div className="bg-surface border border-white/10 p-8 relative overflow-hidden group hover:border-orange-500/50 transition-colors">
                        <div className="absolute top-0 right-0 font-mono text-6xl font-bold text-white/5 p-4">04</div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                                    <Circle className="w-5 h-5 text-orange-400" strokeWidth={2} />
                                </div>
                                <span className="font-mono text-xs text-gray-500">Q3 2026</span>
                            </div>
                            <h4 className="font-sans text-xl font-bold mb-4">Phase 4: Enterprise & Scale</h4>
                            <ul className="space-y-2 text-sm font-mono text-gray-400">
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Team accounts & RBAC</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>White-label solutions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>Custom risk scoring models</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Circle className="w-3 h-3 mt-1 flex-shrink-0" />
                                    <span>SLA guarantees & support</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
