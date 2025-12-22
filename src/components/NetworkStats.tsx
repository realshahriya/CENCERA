export default function NetworkStats() {
    return (
        <section className="py-20 border-t border-b border-white/5 bg-black relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 bg-repeat bg-[length:100px_100px]"></div>

            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="font-sans text-3xl font-bold mb-12">LIVE NETWORK ACTIVITY</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
                    {/* Stats 1 */}
                    <div className="bg-black p-8 group">
                        <p className="font-mono text-xs text-gray-500 mb-2">TRANSACTIONS SCANNED</p>
                        <p className="font-sans text-4xl font-bold text-white group-hover:text-neon transition-colors">8.2M+</p>
                    </div>
                    {/* Stats 2 */}
                    <div className="bg-black p-8 group">
                        <p className="font-mono text-xs text-gray-500 mb-2">RISKS MITIGATED</p>
                        <p className="font-sans text-4xl font-bold text-white group-hover:text-safe transition-colors">142K</p>
                    </div>
                    {/* Stats 3 */}
                    <div className="bg-black p-8 group">
                        <p className="font-mono text-xs text-gray-500 mb-2">VALUE PROTECTED</p>
                        <p className="font-sans text-4xl font-bold text-white group-hover:text-purple-400 transition-colors">$4.1B</p>
                    </div>
                    {/* Stats 4 */}
                    <div className="bg-black p-8 group">
                        <p className="font-mono text-xs text-gray-500 mb-2">NODE UPTIME</p>
                        <p className="font-sans text-4xl font-bold text-white group-hover:text-neon transition-colors">99.9%</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
