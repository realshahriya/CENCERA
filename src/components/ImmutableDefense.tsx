export default function ImmutableDefense() {
    return (
        <section className="py-24 px-6 bg-surface relative overflow-hidden">
            {/* Decoration Code */}
            <div className="absolute top-0 right-0 font-mono text-[10rem] font-bold text-white/5 pointer-events-none select-none -translate-y-1/2 translate-x-1/4">0x00</div>

            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h3 className="font-mono text-neon text-sm mb-2">// THE ARCHITECTURE</h3>
                    <h2 className="font-sans text-4xl md:text-6xl font-bold">IMMUTABLE DEFENSE</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">

                    {/* Feature 1: Large */}
                    <div className="md:col-span-2 bg-void border border-white/10 p-8 md:p-12 relative overflow-hidden group hover:border-gray-600 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-30">
                            <span className="text-6xl">🛡</span>
                        </div>
                        <h4 className="font-sans text-2xl font-bold mb-4 z-10 relative">Zero-Knowledge ID</h4>
                        <p className="font-mono text-gray-400 text-sm z-10 relative max-w-md">
                            Verify 'humanness' and compliance status without revealing underlying PII. Using zk-SNARKs to prove eligibility without on-chain doxxing.
                        </p>
                        <div className="mt-8 relative z-10">
                            <div className="h-2 w-full bg-subtle rounded-full overflow-hidden">
                                <div className="h-full bg-safe w-[88%]"></div>
                            </div>
                            <div className="flex justify-between font-mono text-[10px] mt-2 text-gray-500">
                                <span>PROOF_GENERATION_TIME</span>
                                <span>12ms</span>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: Tall */}
                    <div className="md:row-span-2 bg-void border border-white/10 p-8 relative overflow-hidden group neon-border transition-all">
                        <h4 className="font-sans text-2xl font-bold mb-8">Real-Time Consensus</h4>

                        <div className="space-y-3">
                            {/* Node Item */}
                            <div className="flex items-center gap-3 text-[10px] font-mono border-b border-white/5 pb-2">
                                <div className="w-2 h-2 bg-safe rounded-full animate-pulse"></div>
                                <span className="text-gray-400">Node_Alpha</span>
                                <span className="ml-auto text-safe">VALID</span>
                            </div>
                            <div className="flex items-center gap-3 text-[10px] font-mono border-b border-white/5 pb-2">
                                <div className="w-2 h-2 bg-safe rounded-full animate-pulse"></div>
                                <span className="text-gray-400">Node_Beta</span>
                                <span className="ml-auto text-safe">VALID</span>
                            </div>
                            <div className="flex items-center gap-3 text-[10px] font-mono border-b border-white/5 pb-2">
                                <div className="w-2 h-2 bg-danger rounded-full animate-blink"></div>
                                <span className="text-gray-400">Node_Gamma</span>
                                <span className="ml-auto text-danger">REJECT</span>
                            </div>
                            <div className="flex items-center gap-3 text-[10px] font-mono border-b border-white/5 pb-2">
                                <div className="w-2 h-2 bg-safe rounded-full animate-pulse"></div>
                                <span className="text-gray-400">Node_Delta</span>
                                <span className="ml-auto text-safe">VALID</span>
                            </div>
                        </div>

                        <p className="font-mono text-gray-400 text-xs mt-8">
                            A mesh network of 5,000+ risk nodes analyzing transaction patterns across EVM and Cosmos chains instantly.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-void border border-white/10 p-8 relative overflow-hidden group hover:border-neon/50 transition-colors">
                        <h4 className="font-sans text-xl font-bold mb-2">Instant Settlement</h4>
                        <p className="font-mono text-gray-400 text-xs">
                            Risk scoring happens in the same block. No latency added to UX.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-void border border-white/10 p-8 relative overflow-hidden group hover:bg-white hover:text-black transition-colors duration-500">
                        <h4 className="font-sans text-xl font-bold mb-2">SDK Ready</h4>
                        <p className="font-mono text-gray-500 group-hover:text-black text-xs">
                            Drop-in Solidity libraries and React Hooks.
                        </p>
                        <span className="absolute bottom-8 right-8 text-2xl opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
