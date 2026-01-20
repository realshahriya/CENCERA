import { Shield, Search, Play, Zap, Database, AlertTriangle } from "lucide-react";

export default function Features() {
    return (
        <section id="features" className="section-padding relative bg-void">
            <div className="section-container">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="section-title mb-4 sm:mb-6 leading-tight">
                        COMPREHENSIVE<br />SECURITY SUITE
                    </h2>
                    <p className="section-subtitle max-w-2xl mx-auto px-4">
                        AI-powered trust scoring and analysis for wallets, contracts, tokens, and NFTs across multiple blockchain networks
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* Feature 1 */}
                    <div className="card-surface card-hover p-6 sm:p-8 hover:border-neon/50 group">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon/20 to-neon/5 flex items-center justify-center mb-6">
                            <Shield className="w-6 h-6 text-neon" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-sans text-lg sm:text-xl font-bold mb-3">Trust Scoring Engine</h3>
                        <p className="font-mono text-xs sm:text-sm text-gray-400 mb-4">
                            Multi-factor risk analysis combining on-chain (45%), market (30%), social (15%), and AI (10%) signals
                        </p>
                        <ul className="space-y-2 font-mono text-xs text-gray-500">
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-neon rounded-full"></div>
                                Transaction history analysis
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-neon rounded-full"></div>
                                Portfolio value tracking
                            </li>
                        </ul>
                    </div>

                    {/* Feature 2 */}
                    <div className="card-surface card-hover p-6 sm:p-8 hover:border-purple-500/50 group">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center mb-6">
                            <Search className="w-6 h-6 text-purple-400" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-sans text-lg sm:text-xl font-bold mb-3">Entity Analysis</h3>
                        <p className="font-mono text-xs sm:text-sm text-gray-400 mb-4">
                            Deep analysis of wallets, smart contracts, tokens, and NFTs with ENS resolution and metadata detection
                        </p>
                        <ul className="space-y-2 font-mono text-xs text-gray-500">
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                                Multi-chain support
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                                Historical score tracking
                            </li>
                        </ul>
                    </div>

                    {/* Feature 3 */}
                    <div className="card-surface card-hover p-6 sm:p-8 hover:border-blue-500/50 group">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-6">
                            <Play className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-sans text-lg sm:text-xl font-bold mb-3">Transaction Simulator</h3>
                        <p className="font-mono text-xs sm:text-sm text-gray-400 mb-4">
                            Pre-execution testing with gas estimation, honeypot detection, and state change preview
                        </p>
                        <ul className="space-y-2 font-mono text-xs text-gray-500">
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                                Honeypot detection
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                                Transfer tax checking
                            </li>
                        </ul>
                    </div>

                    {/* Feature 4 */}
                    <div className="card-surface card-hover p-6 sm:p-8 hover:border-orange-500/50 group">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center mb-6">
                            <AlertTriangle className="w-6 h-6 text-orange-400" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-sans text-lg sm:text-xl font-bold mb-3">dApp Connection Guard</h3>
                        <p className="font-mono text-xs sm:text-sm text-gray-400 mb-4">
                            Phishing domain detection with protocol whitelisting and permission analysis
                        </p>
                        <ul className="space-y-2 font-mono text-xs text-gray-500">
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                                Phishing prevention
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                                Gas fee monitoring
                            </li>
                        </ul>
                    </div>

                    {/* Feature 5 */}
                    <div className="card-surface card-hover p-6 sm:p-8 hover:border-green-500/50 group">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center mb-6">
                            <Zap className="w-6 h-6 text-green-400" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-sans text-lg sm:text-xl font-bold mb-3">API Platform</h3>
                        <p className="font-mono text-xs sm:text-sm text-gray-400 mb-4">
                            RESTful API with key management, usage tracking, and comprehensive documentation
                        </p>
                        <ul className="space-y-2 font-mono text-xs text-gray-500">
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                                Rate limiting & control
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                                Multiple environments
                            </li>
                        </ul>
                    </div>

                    {/* Feature 6 */}
                    <div className="card-surface card-hover p-6 sm:p-8 hover:border-pink-500/50 group">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-500/5 flex items-center justify-center mb-6">
                            <Database className="w-6 h-6 text-pink-400" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-sans text-lg sm:text-xl font-bold mb-3">Interactive Sandbox</h3>
                        <p className="font-mono text-xs sm:text-sm text-gray-400 mb-4">
                            Live demo environment with configurable thresholds and theme customization
                        </p>
                        <ul className="space-y-2 font-mono text-xs text-gray-500">
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                                10+ color schemes
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                                Simulation testing
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
