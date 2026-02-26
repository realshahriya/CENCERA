"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
    {
        num: "01",
        title: "User Input",
        desc: "Wallet address, transaction data, or contract details are submitted to the CENCERA API."
    },
    {
        num: "02",
        title: "Signals Gathered",
        desc: "Real-time extraction of on-chain behavioral patterns, historical context, and ecosystem linkages."
    },
    {
        num: "03",
        title: "AI Processing",
        desc: "Advanced neural models analyze the signals to detect anomalies and identify emerging threat vectors."
    },
    {
        num: "04",
        title: "Trust Score",
        desc: "Instant delivery of a comprehensive trust score and actionable summary to enforce security policies."
    }
];

export default function TrustPipeline() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const psteps = document.querySelectorAll('.pstep');
        psteps.forEach((step, i) => {
            gsap.fromTo(step,
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, delay: i * 0.12, ease: 'power2.out',
                    scrollTrigger: { trigger: step, start: 'top 88%' }
                }
            );
        });
    }, []);

    return (
        <section className="process section bg-transparent relative z-10" id="process">
            <div className="container">
                <div className="section-tag">Trust Pipeline</div>
                <h2>
                    <span className="heading-reveal">
                        <span className="heading-reveal__inner">Process</span>
                    </span>
                </h2>

                <div className="process__steps">
                    {steps.map((step, index) => (
                        <div className="pstep" key={index}>
                            <span className="pstep__num">{step.num}</span>
                            <h3 className="pstep__title">{step.title}</h3>
                            <p className="pstep__desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
