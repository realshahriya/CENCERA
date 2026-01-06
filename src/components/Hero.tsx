"use client";

import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";

interface Partner {
    name: string;
    logoUrl: string;
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
                const data = await response.json();

                if (Array.isArray(data)) {
                    // Filter for directories only (partners)
                    const partnerFolders = data.filter((item: any) => item.type === 'dir');

                    // Build partner list with logo URLs
                    const partnerList: Partner[] = partnerFolders.map((folder: any) => ({
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

            {/* Hero Section */}
            <header className="relative min-h-screen flex flex-col justify-center items-center pt-16 sm:pt-20 overflow-hidden px-4 sm:px-6">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 grid-bg"></div>

                {/* Abstract Hero Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] sm:w-[60vw] h-[80vw] sm:h-[60vw] bg-neon opacity-5 rounded-full blur-[120px]"></div>

                <div className="relative z-10 text-center w-full max-w-7xl px-2 sm:px-4">
                    <div className="inline-flex items-center gap-2 border border-subtle px-3 py-1 rounded-full mb-6 sm:mb-8 bg-surface/50">
                        <span className="w-2 h-2 bg-safe rounded-full animate-pulse"></span>
                        <span className="font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest">System Status: Online</span>
                    </div>

                    <h1 className="font-sans text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] sm:leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 break-words px-2">
                        TRUST & SAFETY<br /> <span className="text-outline">INFRASTRUCTURE</span>
                    </h1>

                    <p className="font-mono text-gray-400 mt-6 sm:mt-8 max-w-xl mx-auto leading-relaxed text-xs sm:text-sm md:text-base px-4 sm:px-6">
                        Cencera is an API-first trust & safety infrastructure for Web3. We help wallets, exchanges & dApps by providing real-time risk detection & user safety layer.
                    </p>

                    <div className="mt-8 sm:mt-12 flex flex-col md:flex-row gap-4 justify-center items-center px-4">
                        <a href="https://ap.cencera.xyz" target="_blank" className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-neon text-black font-mono text-sm sm:text-base font-bold hover:bg-white transition-colors w-full sm:w-auto max-w-xs md:max-w-none flex items-center justify-center gap-2">
                            <span className="relative z-10">LIVE DEMO</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                            <div className="absolute inset-0 bg-white translate-x-1 translate-y-1 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform border border-black"></div>
                        </a>
                        <div className="font-mono text-gray-500 text-[10px] sm:text-xs flex flex-wrap gap-3 sm:gap-4 justify-center">
                            <span>// AI-POWERED</span>
                            <span>// MULTI-CHAIN</span>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-50">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll to Scan</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-neon to-transparent"></div>
                </div>
            </header>


            {/* Partner Ticker - Image Based - Auto-hides if no logos available */}
            {hasLogos && (
                <section className="border-y border-white/5 py-4 sm:py-6 bg-surface overflow-hidden relative pointer-events-none select-none">
                    {/* Left Fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 via-[#0A0A0A]/60 to-transparent z-10 pointer-events-none"></div>

                    {/* Right Fade */}
                    <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/90 via-[#0A0A0A]/60 to-transparent z-10 pointer-events-none"></div>

                    <div className="flex gap-8 sm:gap-12 items-center whitespace-nowrap animate-marquee">
                        {/* Dynamically rendered partner logos */}
                        {partners.map((partner, index) => (
                            <React.Fragment key={`${partner.name}-${index}`}>
                                <img
                                    src={partner.logoUrl}
                                    alt={partner.name}
                                    className="h-6 sm:h-8 opacity-40 grayscale hover:opacity-60 hover:grayscale-0 transition-all"
                                    onLoad={handleImageLoad}
                                    onError={handleImageError}
                                />
                                <span className="text-white/10">•</span>
                            </React.Fragment>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {partners.map((partner, index) => (
                            <React.Fragment key={`${partner.name}-dup-${index}`}>
                                <img
                                    src={partner.logoUrl}
                                    alt={partner.name}
                                    className="h-8 opacity-40 grayscale hover:opacity-60 hover:grayscale-0 transition-all"
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
