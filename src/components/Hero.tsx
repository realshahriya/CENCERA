export default function Hero() {
    return (
        <>
            {/* Fixed Overlay Elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100] mix-blend-overlay opacity-20" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
            <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-void via-neon to-void z-[101]"></div>

            {/* Hero Section */}
            <header className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 grid-bg"></div>

                {/* Abstract Hero Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-neon opacity-5 rounded-full blur-[120px]"></div>

                <div className="relative z-10 text-center max-w-5xl px-4">
                    <div className="inline-flex items-center gap-2 border border-subtle px-3 py-1 rounded-full mb-8 bg-surface/50">
                        <span className="w-2 h-2 bg-danger rounded-full animate-blink"></span>
                        <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">Global Threat Index: High</span>
                    </div>

                    <h1 className="font-sans text-[12vw] md:text-[8rem] font-bold leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
                        TRUST IS<br /> <span className="text-outline">COMPUTED.</span>
                    </h1>

                    <p className="font-mono text-gray-400 mt-8 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
                        A decentralized consensus layer for risk assessment. We validate identity, solvency, and intent before the transaction touches the mempool.
                    </p>

                    <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center items-center">
                        <button className="group relative px-8 py-4 bg-neon text-black font-mono font-bold hover:bg-white transition-colors w-full md:w-auto">
                            <span className="relative z-10">INTEGRATE API_KEY</span>
                            <div className="absolute inset-0 bg-white translate-x-1 translate-y-1 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform border border-black"></div>
                        </button>
                        <div className="font-mono text-gray-500 text-xs flex gap-4">
                            <span>// ZK-PROOFS</span>
                            <span>// ON-CHAIN ANALYTICS</span>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Initialize</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-neon to-transparent"></div>
                </div>
            </header>

            {/* Partner Ticker */}
            <section className="border-y border-white/5 py-4 bg-surface overflow-hidden relative">
                <div className="flex gap-16 font-sans text-2xl md:text-4xl font-bold uppercase text-white/20 whitespace-nowrap animate-marquee">
                    <span>Ethereum Foundation</span>
                    <span>•</span>
                    <span>Polygon Security</span>
                    <span>•</span>
                    <span>Chainlink</span>
                    <span>•</span>
                    <span>Consensys</span>
                    <span>•</span>
                    <span>Arbitrum</span>
                    <span>•</span>
                    <span>Optimism</span>
                    <span>•</span>
                    <span>Base</span>
                    <span>•</span>
                    <span>Ethereum Foundation</span>
                    <span>•</span>
                    <span>Polygon Security</span>
                    <span>•</span>
                    <span>Chainlink</span>
                    <span>•</span>
                </div>
            </section>
        </>
    );
}
