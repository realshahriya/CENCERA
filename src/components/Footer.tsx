import { Github, MessageCircle, FileText } from "lucide-react";

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="pt-20 sm:pt-28 md:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 bg-void relative overflow-hidden">

            <div className="max-w-5xl mx-auto text-center mb-16 sm:mb-20 md:mb-24 relative z-10">
                <h2 className="font-sans text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8">
                    SECURE THE<br /> FUTURE.
                </h2>
                <div className="flex flex-col items-center">
                    <div className="flex w-full max-w-md border-b border-white relative group">
                        <input
                            type="text"
                            placeholder="ENTER_EMAIL_ADDRESS"
                            className="bg-transparent w-full py-3 sm:py-4 text-sm sm:text-base text-white font-mono outline-none placeholder:text-gray-600"
                        />
                        <button className="text-neon font-mono text-xs sm:text-sm font-bold uppercase hover:text-white whitespace-nowrap">Initialize</button>
                        {/* Loading Bar Animation */}
                        <div className="absolute bottom-0 left-0 h-0.5 bg-neon w-0 transition-all duration-1000 group-hover:w-full"></div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end border-t border-white/10 pt-6 sm:pt-8 gap-6 sm:gap-8">
                <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                        <img src="/logo.png" alt="Cencera Logo" className="w-7 h-7 sm:w-8 sm:h-8" />
                        <span className="font-sans font-bold text-xl sm:text-2xl tracking-tighter">CENCERA</span>
                    </div>
                    <p className="font-mono text-[10px] sm:text-xs text-gray-500 mt-2 max-w-xs">
                        Universal Trust Score Layer.<br />
                        © 2026 CENCERA Protocol.
                    </p>
                </div>

                <div className="flex gap-4 sm:gap-6 font-mono text-xs text-gray-400">
                    <a href="https://x.com/CENCERA" className="hover:text-white transition-colors flex items-center gap-2">
                        <XIcon className="w-4 h-4" />
                    </a>
                    <a href="https://github.com/CENCERA-PROTOCOL" className="hover:text-white transition-colors flex items-center gap-2">
                        <Github className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                    <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                    <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                        <FileText className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
