"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
    { target: 18, label: "Blockchains Supported", suffix: "+" },
    { target: 120, label: "Average Latency (ms)", suffix: "ms" },
    { target: 12, label: "Wallets Monitored (Millions)", suffix: "M+" },
    { target: 5, label: "Tokens Tracked (Millions)", suffix: "M+" },
];

export default function NetworkStats() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const metricNums = document.querySelectorAll('.metric__num');
        metricNums.forEach(el => {
            const target = Number(el.getAttribute('data-count'));
            gsap.fromTo(el, { textContent: 0 }, {
                textContent: target,
                duration: 2,
                ease: 'power2.out',
                snap: { textContent: 1 },
                scrollTrigger: { trigger: el, start: 'top 85%' },
                onUpdate: function () {
                    // Update text to include the suffix
                    const num = Math.round(Number(this.targets()[0].textContent));
                    const suffix = el.getAttribute('data-suffix');
                    this.targets()[0].innerHTML = num + (suffix || "");
                }
            });
        });

        const metrics = document.querySelectorAll('.metric');
        metrics.forEach((m, i) => {
            gsap.fromTo(m,
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.7, delay: i * 0.1, ease: 'power2.out',
                    scrollTrigger: { trigger: m, start: 'top 90%' }
                }
            );
        });
    }, []);

    return (
        <section className="metrics section bg-transparent relative z-10" id="metrics">
            <div className="container">
                <div className="metrics__grid cap-card p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {stats.map((stat, i) => (
                        <div className="metric flex-1 w-full flex flex-col items-center justify-center text-center pt-8 md:pt-0 first:pt-0" key={i}>
                            <span
                                className="metric__num font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-2"
                                data-count={stat.target}
                                data-suffix={stat.suffix}
                            >
                                0{stat.suffix}
                            </span>
                            <span className="metric__label font-mono text-sm text-gray-400">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
