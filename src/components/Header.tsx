"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-6 z-50 glass-panel">
                <Link href="/" className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity">
                    <Image src="/logo.png" alt="Cencera Logo" width={40} height={40} className="w-7 h-7 sm:w-9 sm:h-9 shrink-0" />
                    <span className="font-sans font-bold text-lg sm:text-xl tracking-tighter">
                        CENCERA
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8 font-mono text-xs text-gray-400">
                    <Link href="/docs" className="hover:text-white transition-colors">[ DOCUMENTATION ]</Link>
                    <Link href="/brand-guidelines" className="hover:text-white transition-colors">[ BRAND ]</Link>
                </div>

                {/* Desktop Dashboard Button */}
                <a href="https://app.cencera.xyz/dashboard" className="hidden md:block btn-primary">
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
                            href="/#features"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-400 hover:text-white transition-colors py-2"
                        >
                            [ FEATURES ]
                        </Link>
                        <Link
                            href="/#core-mechanics"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-400 hover:text-white transition-colors py-2"
                        >
                            [ CAPABILITIES ]
                        </Link>
                        <Link
                            href="/docs"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-400 hover:text-white transition-colors py-2"
                        >
                            [ DOCUMENTATION ]
                        </Link>
                        <Link
                            href="/brand-guidelines"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-400 hover:text-white transition-colors py-2"
                        >
                            [ BRAND ]
                        </Link>
                        <Link
                            href="/#roadmap"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-400 hover:text-white transition-colors py-2"
                        >
                            [ ROADMAP ]
                        </Link>
                    </nav>

                    <div className="mt-8">
                        <a
                            href="https://app.cencera.xyz/dashboard"
                            className="btn-primary block w-full text-center"
                        >
                            DASHBOARD //
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
