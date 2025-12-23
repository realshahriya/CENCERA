export default function Header() {
    return (
        <nav className="fixed top-0 w-full flex justify-between items-center px-6 py-6 z-50 glass-panel">
            <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img src="/logo.png" alt="Cencera Logo" className="w-8 h-8" />
                <span className="font-sans font-bold text-xl tracking-tighter">
                    CENCERA<span className="text-neon">.io</span>
                </span>
            </a>

            <div className="hidden md:flex gap-8 font-mono text-xs text-gray-400">
                <a href="#features" className="hover:text-white transition-colors">[ FEATURES ]</a>
                <a href="#core-mechanics" className="hover:text-white transition-colors">[ CAPABILITIES ]</a>
                <a href="#roadmap" className="hover:text-white transition-colors">[ ROADMAP ]</a>
            </div>

            <a href="/apidashboard" className="bg-white text-black px-5 py-2 font-mono text-sm font-bold hover:bg-neon hover:scale-105 transition-all duration-300">
                DASHBOARD //
            </a>
        </nav>
    );
}
