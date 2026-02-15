"use client";

import { ArrowRight } from "phosphor-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Partner {
    name: string;
    logoUrl: string;
}

interface GitHubContentItem {
    type: string;
    name: string;
}

export default function Hero() {
    const [hasLogos, setHasLogos] = useState(false);
    const [partners, setPartners] = useState<Partner[]>([]);
    const [loadedCount, setLoadedCount] = useState(0);

    useEffect(() => {
        // Dynamically fetch partner list from GitHub repo
        const fetchPartners = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/CENCERA-PROTOCOL/partners/contents');
                const data = await response.json() as GitHubContentItem[];

                if (Array.isArray(data)) {
                    // Filter for directories only (partners)
                    const partnerFolders = data.filter((item) => item.type === 'dir');

                    // Build partner list with logo URLs
                    const partnerList: Partner[] = partnerFolders.map((folder) => ({
                        name: folder.name,
                        logoUrl: `https://raw.githubusercontent.com/CENCERA-PROTOCOL/partners/main/${folder.name}/logo.svg`
                    }));

                    setPartners(partnerList);
                    if (partnerList.length > 0) {
                        setHasLogos(true);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch partners:', error);
                setHasLogos(false);
            }
        };

        fetchPartners();
    }, []);

    useEffect(() => {
        // Hide belt if no logos loaded after 5 seconds
        const timer = setTimeout(() => {
            if (loadedCount === 0 && partners.length > 0) {
                setHasLogos(false);
            }
        }, 5000);
        return () => clearTimeout(timer);
    }, [loadedCount, partners]);

    const handleImageLoad = () => {
        setLoadedCount(prev => prev + 1);
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const img = e.currentTarget;
        const formats = ['svg', 'png', 'jpg', 'jpeg'];
        const current = img.src.split('.').pop();
        const nextIndex = formats.indexOf(current || '') + 1;

        if (nextIndex < formats.length) {
            img.src = img.src.replace(/\.[^.]+$/, `.${formats[nextIndex]}`);
        } else {
            img.style.display = 'none';
        }
    };

    return (
        <>
            {/* Fixed Overlay Elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100] mix-blend-overlay opacity-20" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
            <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-void via-neon to-void z-[101]"></div>

            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-void section-padding pt-24 sm:pt-28">
                {/* Solid gray base with grid spotlight effect */}
                <div className="absolute inset-0 bg-void" />

                {/* Grid pattern with radial mask - Using mask-image for smooth, wave-free blending */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(146, 220, 229, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(146, 220, 229, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '80px 80px',
                        backgroundPosition: 'center center',
                        maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
                        WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)'
                    }}
                />

                {/* Single central accent orb - Reduced size & smoother blur */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon/10 rounded-full blur-[160px] opacity-50 pointer-events-none" />

                <div className="relative z-10 text-center w-full max-w-7xl px-2 sm:px-4">
                    <h1 className="font-sans text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] sm:leading-[0.85] tracking-tighter text-gradient break-words px-2">
                        AGENTIC SECURITY<br /> <span className="text-outline">INTELLIGENCE</span>
                    </h1>

                    <p className="section-subtitle mt-6 sm:mt-8 max-w-xl mx-auto leading-relaxed text-xs sm:text-sm md:text-base px-4 sm:px-6">
                        The first Agentic Security Intelligence for Web3 platforms that learn, detect and predicts security threats in real-time. Protect your users before attacks happen.
                    </p>

                    <div className="mt-8 sm:mt-12 flex flex-col md:flex-row gap-4 justify-center items-center px-4">
                        <a href="https://app.cencera.xyz" className="btn-primary group relative w-full sm:w-auto max-w-xs md:max-w-none flex items-center justify-center gap-2">
                            <span>Join Testnet</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" weight="bold" />
                        </a>
                        <a href="https://ap.cencera.xyz" target="_blank" className="group relative w-full sm:w-auto max-w-xs md:max-w-none flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full text-white transition-all duration-300 bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 focus-visible:ring-offset-2 focus-visible:ring-offset-void">
                            <span>Test Demo</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" weight="bold" />
                        </a>
                    </div>

                    {/* Database Statistics */}
                    <div className="mt-12 sm:mt-16 flex flex-wrap gap-6 sm:gap-8 justify-center items-center">
                        <div className="text-center">
                            <div className="font-sans text-2xl sm:text-3xl font-bold text-neon">12M+</div>
                            <div className="font-mono text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mt-1">Wallets</div>
                        </div>
                        <div className="w-px h-8 bg-white/10"></div>
                        <div className="text-center">
                            <div className="font-sans text-2xl sm:text-3xl font-bold text-mint">5M+</div>
                            <div className="font-mono text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mt-1">Tokens</div>
                        </div>
                        <div className="w-px h-8 bg-white/10"></div>
                        <div className="text-center">
                            <div className="font-sans text-2xl sm:text-3xl font-bold text-neon">18+</div>
                            <div className="font-mono text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mt-1">Blockchains</div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-60 transition-all duration-300 hover:opacity-90 hover:-translate-y-1 group">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 text-gray-400 group-hover:text-neon">
                        Begin The Descent
                    </span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-neon/80 to-transparent transition-all duration-300 group-hover:h-14"></div>
                </div>
            </section>


            {/* Partner Ticker - Image Based - Auto-hides if no logos available */}
            {hasLogos && (
                <section className="py-4 sm:py-6 bg-void overflow-hidden relative pointer-events-none select-none">
                    {/* Left Fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-void via-void/90 via-void/60 to-transparent z-10 pointer-events-none"></div>

                    {/* Right Fade */}
                    <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-void via-void/90 via-void/60 to-transparent z-10 pointer-events-none"></div>

                    <div className="flex gap-8 sm:gap-12 items-center whitespace-nowrap animate-marquee">
                        {/* Dynamically rendered partner logos */}
                        {partners.map((partner, index) => (
                            <React.Fragment key={`${partner.name}-${index}`}>
                                <Image
                                    src={partner.logoUrl}
                                    alt={partner.name}
                                    width={120}
                                    height={32}
                                    className="h-6 sm:h-8 w-auto opacity-40 grayscale hover:opacity-60 hover:grayscale-0 transition-all"
                                    onLoad={handleImageLoad}
                                    onError={handleImageError}
                                />
                                <span className="text-white/10">•</span>
                            </React.Fragment>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {partners.map((partner, index) => (
                            <React.Fragment key={`${partner.name}-dup-${index}`}>
                                <Image
                                    src={partner.logoUrl}
                                    alt={partner.name}
                                    width={120}
                                    height={32}
                                    className="h-8 w-auto opacity-40 grayscale hover:opacity-60 hover:grayscale-0 transition-all"
                                    onError={handleImageError}
                                />
                                {index < partners.length - 1 && <span className="text-white/10">•</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </section>
            )}

        </>
    );
}
