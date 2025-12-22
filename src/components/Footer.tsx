export default function Footer() {
    return (
        <footer className="pt-32 pb-12 px-6 bg-void relative overflow-hidden">

            <div className="max-w-5xl mx-auto text-center mb-24 relative z-10">
                <h2 className="font-sans text-5xl md:text-8xl font-bold mb-8">
                    SECURE THE<br /> FUTURE.
                </h2>
                <div className="flex flex-col items-center">
                    <div className="flex w-full max-w-md border-b border-white relative group">
                        <input
                            type="text"
                            placeholder="ENTER_EMAIL_ADDRESS"
                            className="bg-transparent w-full py-4 text-white font-mono outline-none placeholder:text-gray-600"
                        />
                        <button className="text-neon font-mono text-sm font-bold uppercase hover:text-white">Initialize</button>
                        {/* Loading Bar Animation */}
                        <div className="absolute bottom-0 left-0 h-0.5 bg-neon w-0 transition-all duration-1000 group-hover:w-full"></div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8 gap-8">
                <div>
                    <span className="font-sans font-bold text-2xl tracking-tighter">AEGIS</span>
                    <p className="font-mono text-xs text-gray-500 mt-2 max-w-xs">
                        Decentralized infrastructure for a trustless world.<br />
                        © 2024 Aegis Protocol Foundation.
                    </p>
                </div>

                <div className="flex gap-8 font-mono text-xs text-gray-400">
                    <a href="#" className="hover:text-white">TWITTER (X)</a>
                    <a href="#" className="hover:text-white">GITHUB</a>
                    <a href="#" className="hover:text-white">DISCORD</a>
                    <a href="#" className="hover:text-white">WHITEPAPER</a>
                </div>
            </div>
        </footer>
    );
}
