"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CircleCheck as CheckCircle, Circle } from "lucide-react";

export default function Roadmap() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const items = document.querySelectorAll('.timeline-item');
        items.forEach((item, i) => {
            gsap.fromTo(item,
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, delay: i * 0.1, ease: 'power2.out',
                    scrollTrigger: { trigger: item, start: 'top 85%' }
                }
            );
        });

        // Animate the line
        gsap.fromTo('.timeline-line-glow',
            { height: 0 },
            {
                height: '100%',
                duration: 2,
                ease: 'power2.out',
                scrollTrigger: { trigger: '.timeline-container', start: 'top 80%', end: 'bottom 80%', scrub: 1 }
            }
        );
    }, []);

    const phases = [
        {
            quarter: "Q4 2025",
            title: "Phase 1: Foundation",
            color: "text-neon",
            icon: <CheckCircle className="w-4 h-4 mt-1 text-neon" />,
            status: "completed",
            items: [
                "Team Building & Research",
                "System Architecture Design",
                "Core Engine Prototypes"
            ]
        },
        {
            quarter: "Q1 2026",
            title: "Phase 2: Testnet",
            color: "text-mint",
            icon: <CheckCircle className="w-4 h-4 mt-1 text-mint" />,
            status: "in-progress",
            items: [
                "Public Testnet Launch",
                "Key Infrastructure Partnerships"
            ]
        },
        {
            quarter: "Q2 2026",
            title: "Phase 3: Mainnet V1",
            color: "text-white",
            icon: <Circle className="w-4 h-4 mt-1" strokeWidth={2} />,
            status: "upcoming",
            items: [
                "Mainnet API Deployment",
                "Enterprise Pilot Integrations"
            ]
        },
        {
            quarter: "Q3 2026",
            title: "Phase 4: Advanced AI",
            color: "text-neon",
            icon: <Circle className="w-4 h-4 mt-1 text-neon" strokeWidth={2} />,
            status: "upcoming",
            items: [
                "Predictive Neural Models",
                "Cross-chain Behavior Maps",
                "Decentralized Node Operators"
            ]
        }
    ];

    return (
        <section className="section bg-transparent relative z-10" id="roadmap">
            <div className="container max-w-5xl mx-auto">
                <div className="section-tag justify-center w-full flex">Development Roadmap</div>
                <h2 className="text-center">
                    <span className="heading-reveal">
                        <span className="heading-reveal__inner uppercase tracking-tight">Timeline</span>
                    </span>
                </h2>

                <div className="mt-20 relative timeline-container">
                    {/* The Background Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2"></div>
                    {/* The Glowing Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 w-px bg-gradient-to-b from-neon to-mint transform md:-translate-x-1/2 timeline-line-glow" style={{ boxShadow: '0 0 15px 2px rgba(146,220,229,0.5)' }}></div>

                    <div className="space-y-12 md:space-y-20">
                        {phases.map((phase, i) => {
                            const isEven = i % 2 === 0;
                            return (
                                <div key={i} className={`timeline-item relative flex flex-col md:flex-row items-center justify-between w-full`}>

                                    {/* Center Node */}
                                    <div className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full bg-black border border-white/20 transform -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(0,0,0,0.8)]">
                                        <div className={`w-2 h-2 rounded-full ${phase.status === 'completed' || phase.status === 'in-progress' ? 'bg-neon shadow-[0_0_8px_rgba(146,220,229,0.8)]' : 'bg-white/30'}`}></div>
                                    </div>

                                    {/* Left Content (or right on mobile) */}
                                    <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:order-2 md:text-left md:pl-12'}`}>
                                        <div className="cap-card p-6 md:p-8 border border-white/5 hover:border-white/20 transition-colors shadow-2xl">
                                            <span className={`font-mono text-xs font-bold uppercase tracking-[0.2em] mb-3 block ${phase.color}`}>{phase.quarter}</span>
                                            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-5">{phase.title}</h3>
                                            <ul className={`space-y-3 text-sm font-mono text-gray-400 flex flex-col ${isEven ? 'md:items-end' : ''}`}>
                                                {phase.items.map((item, idx) => (
                                                    <li key={idx} className={`flex items-start gap-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                                        <div className="shrink-0 flex items-center justify-center">
                                                            {phase.icon}
                                                        </div>
                                                        <span className={isEven ? 'md:text-right' : 'text-left'}>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Empty space for desktop alternating layout */}
                                    <div className={`hidden md:block w-5/12 ${isEven ? 'md:order-2' : ''}`}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
