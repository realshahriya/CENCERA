import { ArrowRight } from "lucide-react";

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
                        <span className="w-2 h-2 bg-safe rounded-full animate-pulse"></span>
                        <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">System Status: Online</span>
                    </div>

                    <h1 className="font-sans text-[12vw] md:text-[8rem] font-bold leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
                        TRUST IS<br /> <span className="text-outline">COMPUTED.</span>
                    </h1>

                    <p className="font-mono text-gray-400 mt-8 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
                        The Universal Trust Score Layer. We analyze on-chain and off-chain data to generate real-time reputation scores for wallets, contracts, and tokens.
                    </p>

                    <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center items-center">
                        <a href="/apidashboard" className="group relative px-8 py-4 bg-neon text-black font-mono font-bold hover:bg-white transition-colors w-full md:w-auto flex items-center justify-center gap-2">
                            <span className="relative z-10">LIVE DEMO</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                            <div className="absolute inset-0 bg-white translate-x-1 translate-y-1 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform border border-black"></div>
                        </a>
                        <div className="font-mono text-gray-500 text-xs flex gap-4">
                            <span>// AI-POWERED</span>
                            <span>// MULTI-CHAIN</span>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll to Scan</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-neon to-transparent"></div>
                </div>
            </header>


            {/* Partner Ticker */}
            <section className="border-y border-white/5 py-4 bg-surface overflow-hidden relative pointer-events-none select-none">
                {/* Left Fade */}
                <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 via-[#0A0A0A]/60 to-transparent z-10 pointer-events-none"></div>

                {/* Right Fade */}
                <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/90 via-[#0A0A0A]/60 to-transparent z-10 pointer-events-none"></div>

                <div className="flex gap-16 font-sans text-2xl md:text-4xl font-bold uppercase text-white/20 whitespace-nowrap animate-marquee">
                    <span>Ethereum</span>
                    <span>•</span>
                    <span>Polygon</span>
                    <span>•</span>
                    <span>Arbitrum</span>
                    <span>•</span>
                    <span>Optimism</span>
                    <span>•</span>
                    <span>Base</span>
                    <span>•</span>
                    <span>Solana</span>
                    <span>•</span>
                    <span>Binance Smart Chain</span>
                    <span>•</span>
                    <span>Ethereum</span>
                    <span>•</span>
                    <span>Polygon</span>
                    <span>•</span>
                    <span>Arbitrum</span>
                    <span>•</span>
                </div>
            </section>

        </>
    );
}
