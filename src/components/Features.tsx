"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, ShieldCheck, Zap as Lightning, Network as ShareNetwork, Database } from "lucide-react";

export default function Features() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const cards = document.querySelectorAll('.cap-card');
        cards.forEach(card => {
            // Spotlight effect
            const handleMouseMove = (e: Event) => {
                const mouseEvent = e as MouseEvent;
                const r = card.getBoundingClientRect();
                (card as HTMLElement).style.setProperty('--mx', ((mouseEvent.clientX - r.left) / r.width * 100) + '%');
                (card as HTMLElement).style.setProperty('--my', ((mouseEvent.clientY - r.top) / r.height * 100) + '%');
            };
            card.addEventListener('mousemove', handleMouseMove);

            // Reveal animation
            gsap.fromTo(card,
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
                    scrollTrigger: { trigger: card, start: 'top 88%' }
                }
            );

            return () => {
                card.removeEventListener('mousemove', handleMouseMove);
            };
        });

        const revealText = document.querySelectorAll('.heading-reveal__inner');
        revealText.forEach(el => {
            gsap.to(el, {
                y: 0,
                duration: 1,
                ease: 'expo.out',
                scrollTrigger: { trigger: el.parentElement, start: 'top 85%' },
            });
        });
    }, []);

    // Helper for text scramble on hover
    const handleScrambleStart = (e: React.MouseEvent<HTMLHeadingElement>) => {
        const el = e.currentTarget;
        const original = el.getAttribute('data-orig') || el.textContent || '';
        if (!el.getAttribute('data-orig')) el.setAttribute('data-orig', original);

        const chars = '!<>-_\\\\/[]{}—=+*^?#________';
        let iter = 0;

        // @ts-ignore
        clearInterval(el._si);
        // @ts-ignore
        el._si = setInterval(() => {
            el.textContent = original.split('').map((c, i) =>
                i < iter ? original[i] : chars[Math.floor(Math.random() * chars.length)]
            ).join('');
            iter += 0.5;
            if (iter >= original.length) {
                // @ts-ignore
                clearInterval(el._si);
                el.textContent = original;
            }
        }, 30);
    };

    return (
        <section className="capabilities section bg-transparent relative z-10" id="capabilities">
            <div className="container">
                <div className="section-tag">Security Intelligence</div>
                <h2>
                    <span className="heading-reveal">
                        <span className="heading-reveal__inner uppercase tracking-tight">Capabilities</span>
                    </span>
                </h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* Card 1 */}
                    <div className="cap-card">
                        <span className="cap-card__num">01</span>
                        <Activity className="cap-card__icon lucide-feature" size={28} />
                        <h3 className="cap-card__title" onMouseEnter={handleScrambleStart}>Behavioral Risk Analysis</h3>
                        <p className="cap-card__desc">Understand entity behavior across time, not just single transactions. Pattern recognition over time and historical behavior tracking.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="cap-card">
                        <span className="cap-card__num">02</span>
                        <ShieldCheck className="cap-card__icon lucide-feature" size={28} />
                        <h3 className="cap-card__title" onMouseEnter={handleScrambleStart}>Adaptive Threat Detection</h3>
                        <p className="cap-card__desc">Identify known exploits and emerging attack patterns early. Detect known vulnerabilities before they are exploited widely.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="cap-card">
                        <span className="cap-card__num">03</span>
                        <Lightning className="cap-card__icon lucide-feature" size={28} />
                        <h3 className="cap-card__title" onMouseEnter={handleScrambleStart}>Real-Time Intelligence</h3>
                        <p className="cap-card__desc">Receive actionable risk signals instantly via low-latency API. Build smarter and safer applications with instant data feeds.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="cap-card">
                        <span className="cap-card__num">04</span>
                        <ShareNetwork className="cap-card__icon lucide-feature" size={28} />
                        <h3 className="cap-card__title" onMouseEnter={handleScrambleStart}>Cross-Ecosystem</h3>
                        <p className="cap-card__desc">Monitor wallets, tokens, contracts, and dApps from one intelligence layer. Unified monitoring with multi-chain coverage.</p>
                    </div>

                    {/* Card 5 */}
                    <div className="cap-card">
                        <span className="cap-card__num">05</span>
                        <Database className="cap-card__icon lucide-feature" size={28} />
                        <h3 className="cap-card__title" onMouseEnter={handleScrambleStart}>Policy-Ready Signals</h3>
                        <p className="cap-card__desc">Automate security decisions with customizable risk thresholds and automated enforcement tailored to your application's risk appetite.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
