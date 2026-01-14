"use client";

import { Menu, X, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function DocsHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-6 z-50 glass-panel border-b border-white/5">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2 group">
                        <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-neon transition-colors" />
                        <span className="font-mono text-xs text-gray-400 group-hover:text-white transition-colors">Back</span>
                    </Link>
                    <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
                    <Link href="/docs" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
                        <img src="/logo.png" alt="Cencera Logo" className="w-6 h-6 sm:w-8 sm:h-8" />
                        <span className="font-sans font-bold text-lg sm:text-xl tracking-tighter">
                            CENCERA <span className="text-neon font-mono text-xs ml-1">/ DOCS</span>
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8 font-mono text-xs text-gray-400">
                    {/* Add docs specific top-level links here if needed */}
                </div>

                <div className="flex items-center gap-4">
                    {/* Desktop Dashboard Button */}
                    <a href="https://ap.cencera.xyz/" className="hidden md:block bg-white/5 border border-white/10 text-white px-5 py-2 font-mono text-sm font-bold hover:bg-neon hover:text-black hover:border-neon transition-all duration-300">
                        DASHBOARD //
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-neon transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/80 z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-surface border-l border-white/10 z-50 md:hidden transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full p-6 pt-20">
                    <nav className="flex flex-col gap-6 font-mono text-sm">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-400 hover:text-white transition-colors py-2"
                        >
                            [ BACK TO HOME ]
                        </Link>
                    </nav>

                    <div className="mt-8">
                        <a
                            href="https://ap.cencera.xyz/"
                            className="block w-full bg-white text-black px-5 py-3 font-mono text-sm font-bold hover:bg-neon transition-colors text-center"
                        >
                            DASHBOARD //
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
