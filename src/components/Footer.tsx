"use client";

import { Github, Linkedin, Book } from "lucide-react";
import Image from "next/image";
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

import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (!res.ok) throw new Error('Failed');

            setStatus('success');
            setEmail("");
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };
    return (
        <footer className="section-padding pb-10 sm:pb-12 bg-void relative overflow-hidden">

            <div className="max-w-5xl mx-auto text-center mb-16 sm:mb-20 md:mb-24 relative z-10">
                <h2 className="section-title text-4xl sm:text-6xl md:text-8xl mb-6 sm:mb-8">
                    SECURE THE<br /> FUTURE.
                </h2>
                <div className="flex flex-col items-center">
                    <form
                        onSubmit={handleSubmit}
                        className="flex w-full max-w-md border border-white/10 rounded-full px-4 py-1 bg-white/5 backdrop-blur relative group focus-within:border-neon/50 focus-within:ring-1 focus-within:ring-neon/30"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={status === 'success' ? "SUBSCRIPTION_CONFIRMED" : "ENTER_EMAIL_ADDRESS"}
                            disabled={status === 'loading' || status === 'success'}
                            className="bg-transparent w-full py-3 sm:py-4 text-sm sm:text-base text-white font-mono outline-none focus-visible:outline-none placeholder:text-gray-600 disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            className="text-neon font-mono text-xs sm:text-sm font-bold uppercase whitespace-nowrap px-3 sm:px-4 py-2 rounded-full transition-colors hover:text-black hover:bg-neon disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? 'INITIALIZING...' : status === 'success' ? 'ACTIVE' : 'INITIALIZE'}
                        </button>
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-neon rounded-full transition-all duration-1000 ${status === 'loading' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                    </form>
                    {status === 'error' && (
                        <p className="text-red-500 font-mono text-xs mt-2">CONNECTION_FAILED: PLEASE_RETRY</p>
                    )}
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end border-t border-white/10 pt-6 sm:pt-8 gap-6 sm:gap-8">
                <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                        <Image src="/logo.png" alt="Cencera Logo" width={32} height={32} className="w-7 h-7 sm:w-8 sm:h-8" />
                        <span className="font-sans font-bold text-xl sm:text-2xl tracking-tighter">CENCERA</span>
                    </div>
                    <p className="font-mono text-[10px] sm:text-xs text-gray-500 mt-2 max-w-xs">
                        Trust & Safety Infrastructure.<br />
                        © 2026 CENCERA.
                    </p>
                </div>

                <div className="flex gap-4 sm:gap-6 font-mono text-xs text-gray-400">
                    <a href="https://x.com/cencera_xyz" className="hover:text-white transition-colors flex items-center gap-2">
                        <XIcon className="w-4 h-4" />
                    </a>
                    <a href="https://github.com/cencera_xyz" className="hover:text-white transition-colors flex items-center gap-2">
                        <Github className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                    <a href="https://www.linkedin.com/company/cenceraxyz/" className="hover:text-white transition-colors flex items-center gap-2">
                        <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                    <a href="/docs" className="hover:text-white transition-colors flex items-center gap-2">
                        <Book className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
