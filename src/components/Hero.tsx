"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

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

    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        // Fetch partners
        const fetchPartners = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/CENCERA-PROTOCOL/partners/contents');
                const data = await response.json() as GitHubContentItem[];
                if (Array.isArray(data)) {
                    const partnerFolders = data.filter((item) => item.type === 'dir');
                    const partnerList: Partner[] = partnerFolders.map((folder) => ({
                        name: folder.name,
                        logoUrl: `https://raw.githubusercontent.com/CENCERA-PROTOCOL/partners/main/${folder.name}/logo.svg`
                    }));
                    setPartners(partnerList);
                    if (partnerList.length > 0) setHasLogos(true);
                }
            } catch (error) {
                console.error('Failed to fetch partners:', error);
                setHasLogos(false);
            }
        };
        fetchPartners();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (loadedCount === 0 && partners.length > 0) setHasLogos(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, [loadedCount, partners]);

    useEffect(() => {
        // GSAP Animations
        const tl = gsap.timeline({ delay: 0.15 });
        tl.fromTo('.hero__char',
            { y: 80, rotateX: 40, opacity: 0 },
            { y: 0, rotateX: 0, opacity: 1, duration: 0.7, stagger: 0.06, ease: 'expo.out' }
        );
        tl.fromTo('.hero__tag', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.35');
        tl.fromTo('.hero__sub', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.3');
        tl.fromTo('.hero__actions', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.2');
        tl.fromTo('.hero__stats', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1');

        // Magnetic Button Effect
        const magneticBtns = document.querySelectorAll('[data-magnetic]');
        const mouseMove = (e: Event) => {
            const btn = e.currentTarget as HTMLElement;
            const r = btn.getBoundingClientRect();
            const x = (e as MouseEvent).clientX - r.left - r.width / 2;
            const y = (e as MouseEvent).clientY - r.top - r.height / 2;
            gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: 'power2.out' });
        };
        const mouseLeave = (e: Event) => {
            const btn = e.currentTarget as HTMLElement;
            gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.3)' });
        };
        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', mouseMove);
            btn.addEventListener('mouseleave', mouseLeave);
        });

        return () => {
            magneticBtns.forEach(btn => {
                btn.removeEventListener('mousemove', mouseMove);
                btn.removeEventListener('mouseleave', mouseLeave);
            });
        }
    }, []);

    const handleImageLoad = () => setLoadedCount(prev => prev + 1);
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

    const titleText = "AGENTIC";
    const titleText2 = "SECURITY";

    return (
        <>
            <section className="hero section" id="hero">
                <div className="hero__content pointer-events-auto">
                    <div className="hero__tag">Security Intelligence</div>

                    <h1 className="hero__title" ref={titleRef}>
                        <div className="flex justify-center flex-wrap">
                            {titleText.split('').map((char, i) => (
                                <span key={i} className="hero__char" style={{ '--i': i } as React.CSSProperties}>{char}</span>
                            ))}
                        </div>
                        <div className="flex justify-center flex-wrap mt-0 sm:-mt-4">
                            {titleText2.split('').map((char, i) => (
                                <span key={i} className="hero__char text-outline" style={{ '--i': i + titleText.length } as React.CSSProperties}>{char}</span>
                            ))}
                        </div>
                    </h1>

                    <p className="hero__sub">
                        The first Agentic Security Intelligence for Web3 platforms that learns, detects and predicts security threats in real-time. Protect your users before attacks happen.
                    </p>

                    <div className="hero__actions">
                        <a href="https://app.cencera.xyz" className="hero__btn hero__btn--primary" data-magnetic>
                            Join Testnet
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="https://ap.cencera.xyz" target="_blank" className="hero__btn hero__btn--ghost" data-magnetic>
                            Test Demo
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div className="hero__stats mt-16 flex flex-wrap gap-4 justify-center items-center pointer-events-auto">
                    <div className="text-center rounded-xl px-5 py-3 bg-black/90 backdrop-blur-md">
                        <div className="font-display text-2xl sm:text-3xl font-bold text-neon">12M+</div>
                        <div className="font-mono text-xs text-gray-400 uppercase tracking-widest mt-1">Wallets</div>
                    </div>
                    <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
                    <div className="text-center rounded-xl px-5 py-3 bg-black/90 backdrop-blur-md">
                        <div className="font-display text-2xl sm:text-3xl font-bold text-mint">5M+</div>
                        <div className="font-mono text-xs text-gray-400 uppercase tracking-widest mt-1">Tokens</div>
                    </div>
                    <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
                    <div className="text-center rounded-xl px-5 py-3 bg-black/90 backdrop-blur-md">
                        <div className="font-display text-2xl sm:text-3xl font-bold text-neon">18+</div>
                        <div className="font-mono text-xs text-gray-400 uppercase tracking-widest mt-1">Blockchains</div>
                    </div>
                </div>
            </section>

            {hasLogos && (
                <section className="py-6 bg-transparent overflow-hidden relative pointer-events-none select-none z-10">
                    <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-bg via-bg/90 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-bg via-bg/90 to-transparent z-10 pointer-events-none"></div>

                    <div className="flex gap-8 sm:gap-12 items-center whitespace-nowrap animate-marquee">
                        {partners.map((partner, index) => (
                            <React.Fragment key={`${partner.name}-${index}`}>
                                <Image
                                    src={partner.logoUrl}
                                    alt={partner.name}
                                    width={120}
                                    height={32}
                                    className="h-6 sm:h-8 w-auto opacity-40 grayscale hover:opacity-60 hover:grayscale-0 transition-all pointer-events-auto"
                                    onLoad={handleImageLoad}
                                    onError={handleImageError}
                                />
                                <span className="text-white/10">•</span>
                            </React.Fragment>
                        ))}
                        {partners.map((partner, index) => (
                            <React.Fragment key={`${partner.name}-dup-${index}`}>
                                <Image
                                    src={partner.logoUrl}
                                    alt={partner.name}
                                    width={120}
                                    height={32}
                                    className="h-8 w-auto opacity-40 grayscale hover:opacity-60 hover:grayscale-0 transition-all pointer-events-auto"
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
