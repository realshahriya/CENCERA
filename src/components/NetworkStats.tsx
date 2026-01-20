export default function NetworkStats() {
    return (
        <section className="section-padding border-t border-b border-white/5 bg-black relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 bg-repeat bg-[length:100px_100px]"></div>

            <div className="section-container text-center">
                <h2 className="section-title text-2xl sm:text-3xl mb-8 sm:mb-12">SYSTEM METRICS</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
                    {/* Stats 1 */}
                    <div className="bg-black/80 p-4 sm:p-6 md:p-8 group hover:bg-white/5 transition-colors">
                        <p className="font-mono text-[10px] sm:text-xs text-gray-500 mb-2">BLOCKCHAINS</p>
                        <p className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-neon transition-colors">18+</p>
                    </div>
                    {/* Stats 2 */}
                    <div className="bg-black/80 p-4 sm:p-6 md:p-8 group hover:bg-white/5 transition-colors">
                        <p className="font-mono text-[10px] sm:text-xs text-gray-500 mb-2">UPTIME</p>
                        <p className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-safe transition-colors">120ms</p>
                    </div>
                    {/* Stats 3 */}
                    <div className="bg-black/80 p-4 sm:p-6 md:p-8 group hover:bg-white/5 transition-colors">
                        <p className="font-mono text-[10px] sm:text-xs text-gray-500 mb-2">WALLETS</p>
                        <p className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-purple-400 transition-colors">12M+</p>
                    </div>
                    {/* Stats 4 */}
                    <div className="bg-black/80 p-4 sm:p-6 md:p-8 group hover:bg-white/5 transition-colors">
                        <p className="font-mono text-[10px] sm:text-xs text-gray-500 mb-2">TOKENS</p>
                        <p className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-neon transition-colors">5M+</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
