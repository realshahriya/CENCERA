"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`nav ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'nav--menu-open' : ''}`}>
                <Link href="/" className="nav__logo flex items-center gap-2 font-display select-none">
                    <Image src="/logo.png" alt="Cencera Logo" width={32} height={32} className="w-8 h-8 shrink-0" />
                    CENCERA
                </Link>

                {/* Desktop Navigation */}
                <div className="nav__links hidden md:flex">
                    <Link href="/docs">Documentation</Link>
                    <Link href="/brand-guidelines">Brand</Link>
                </div>

                {/* Desktop Dashboard Button */}
                <a href="https://app.cencera.xyz/dashboard" className="nav__cta hidden md:flex">
                    Dashboard
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="14" height="14" viewBox="0 0 24 24" className="iconify iconify--solar"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"></path></svg>
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`nav__toggle md:hidden ${mobileMenuOpen ? 'active' : ''}`}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`nav__links md:hidden ${mobileMenuOpen ? 'open' : ''}`}>
                <Link href="/#features" onClick={() => setMobileMenuOpen(false)}>Features</Link>
                <Link href="/#core-mechanics" onClick={() => setMobileMenuOpen(false)}>Capabilities</Link>
                <Link href="/docs" onClick={() => setMobileMenuOpen(false)}>Documentation</Link>
                <Link href="/brand-guidelines" onClick={() => setMobileMenuOpen(false)}>Brand</Link>
                <Link href="/#roadmap" onClick={() => setMobileMenuOpen(false)}>Roadmap</Link>
                <a href="https://app.cencera.xyz/dashboard" className="text-neon mt-4" onClick={() => setMobileMenuOpen(false)}>
                    Dashboard //
                </a>
            </div>
        </>
    );
}
