export default function Header() {
    return (
        <nav className="fixed top-0 w-full flex justify-between items-center px-6 py-6 z-50 glass-panel">
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-neon rotate-45"></div>
                <span className="font-sans font-bold text-xl tracking-tighter">
                    AEGIS<span className="text-neon">.PROTOCOL</span>
                </span>
            </div>

            <div className="hidden md:flex gap-8 font-mono text-xs text-gray-400">
                <a href="#" className="hover:text-white transition-colors">[ INFRASTRUCTURE ]</a>
                <a href="#" className="hover:text-white transition-colors">[ DOCS ]</a>
                <a href="#" className="hover:text-white transition-colors">
                    [ NETWORK STATUS <span className="text-safe animate-pulse">●</span> ]
                </a>
            </div>

            <button className="bg-white text-black px-5 py-2 font-mono text-sm font-bold hover:bg-neon hover:scale-105 transition-all duration-300">
                CONNECT_NODE //
            </button>
        </nav>
    );
}
