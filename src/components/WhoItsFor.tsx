"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, TrendingUp as ChartLineUp, Cpu, Coins, Landmark as Bank, Network as ShareNetwork } from "lucide-react";

const audiences = [
    {
        icon: ShieldCheck,
        title: "Wallet Providers",
        description: "Embed native security layers. Automatically block malicious contracts, identify phishing domains, and simulate approval outcomes before a transaction is ever signed."
    },
    {
        icon: ChartLineUp,
        title: "Exchanges (CEX/DEX)",
        description: "Monitor inflows and outflows in real-time. Instantly flag deposits from sanctioned entities, mixers, or known exploitation pathways before funds settle."
    },
    {
        icon: Cpu,
        title: "DeFi Protocols",
        description: "Secure smart contracts from flash loan attacks, oracle manipulation, and abnormal withdrawal patterns using continuous behavioral anomaly detection."
    },
    {
        icon: Coins,
        title: "Token Issuers",
        description: "Maintain network integrity. Track asset velocity, identify high-risk holders, and automate compliance operations without sacrificing decentralization."
    },
    {
        icon: Bank,
        title: "Institutions & Custodians",
        description: "Operate with intelligence-grade security. Enforce granular, role-based transaction policies and maintain comprehensive audit trails for regulatory compliance."
    },
    {
        icon: ShareNetwork,
        title: "Infrastructure Nodes",
        description: "Protect RPCs and sequencing layers. Filter toxic MEV vectors, throttle malicious requests, and guarantee uptime against coordinated distributed attacks."
    }
];

export default function WhoItsFor() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const cards = document.querySelectorAll('.audience-card');
        cards.forEach((card, i) => {
            gsap.fromTo(card,
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, delay: i * 0.1, ease: 'power2.out',
                    scrollTrigger: { trigger: card, start: 'top 88%' }
                }
            );

            const handleMouseMove = (e: Event) => {
                const mouseEvent = e as MouseEvent;
                const r = card.getBoundingClientRect();
                (card as HTMLElement).style.setProperty('--mx', ((mouseEvent.clientX - r.left) / r.width * 100) + '%');
                (card as HTMLElement).style.setProperty('--my', ((mouseEvent.clientY - r.top) / r.height * 100) + '%');
            };
            card.addEventListener('mousemove', handleMouseMove);

            return () => {
                card.removeEventListener('mousemove', handleMouseMove);
            };
        });
    }, []);

    return (
        <section className="capabilities section bg-transparent relative z-10" id="who-its-for">
            <div className="container">
                <div className="section-tag">Who It's For</div>
                <h2>
                    <span className="heading-reveal">
                        <span className="heading-reveal__inner uppercase tracking-tight">Ecosystem</span>
                    </span>
                </h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {audiences.map((audience, i) => {
                        const Icon = audience.icon;
                        return (
                            <div className="cap-card audience-card" key={i}>
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3.5 rounded-xl bg-white/5 text-neon border border-white/5 ring-1 ring-white/10 ring-inset">
                                        <Icon size={26} className="lucide-icon-animated" />
                                    </div>
                                    <span className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-1">
                                        0{i + 1}
                                    </span>
                                </div>
                                <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight">
                                    {audience.title}
                                </h3>
                                <p className="font-mono text-xs text-gray-400 leading-relaxed max-w-[95%]">
                                    {audience.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
