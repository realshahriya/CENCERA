"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github as GithubLogo, Linkedin as LinkedinLogo, BookOpen } from "lucide-react";

export default function Footer() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('.footer__inner',
            { y: 30, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
                scrollTrigger: { trigger: '.footer', start: 'top 90%' }
            }
        );
    }, []);

    return (
        <>
            {/* Call to Action Section from design */}
            <section className="cta section bg-transparent relative z-10" id="contact">
                <div className="cta__inner cap-card p-10 sm:p-20 w-full max-w-none !rounded-none !border-l-0 !border-r-0 flex flex-col items-center text-center">
                    <div className="section-tag justify-center">Get In Touch</div>
                    <h2 className="cta__title">Secure the<br /> <em>Future</em></h2>
                    <p className="cta__sub">Ready to protect your platform with agentic intelligence?</p>
                    <a href="mailto:hello@cencera.xyz" className="cta__btn bg-void hover:bg-neon" data-magnetic>
                        <span>Contact Sales</span>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24" className="iconify iconify--solar"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"></path></svg>
                    </a>
                </div>
            </section>

            <footer className="footer relative z-10">
                <div className="container footer__inner flex justify-between items-start flex-wrap gap-8">
                    <div className="footer__left flex flex-col gap-4 max-w-sm">
                        <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                            Deploy with confidence.
                        </h3>
                        <p className="footer__tagline text-gray-400">Trust & Safety Infrastructure</p>
                    </div>

                    <div className="footer__right flex gap-16">
                        <div className="footer__col">
                            <span className="footer__col-title">Navigation</span>
                            <a href="#features">Features</a>
                            <a href="#capabilities">Capabilities</a>
                            <a href="#process">Process</a>
                            <a href="#roadmap">Roadmap</a>
                        </div>
                        <div className="footer__col">
                            <span className="footer__col-title">Connect</span>
                            <a href="https://x.com/cencera_xyz" className="flex items-center gap-2">
                                <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                X / Twitter
                            </a>
                            <a href="https://t.me/cencera_xyz" className="flex items-center gap-2">
                                <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor"><path d="M19.74 5.04 3.7 11.2c-1.1.43-1.1 1.06-.2 1.34l4.1 1.28 1.57 4.8c.2.55.1.77.74.77.5 0 .72-.23 1-.5l2.42-2.35 5.03 3.72c.92.5 1.58.24 1.81-.85l3.28-15.49c.31-1.32-.5-1.92-1.71-1.48Zm-2.7 3.05-7.26 6.63c-.26.23-.48.45-.62.84l-.98 3.4-.52-2.99c-.07-.46-.26-.67-.65-.8l-2.63-.83 12.3-5.05c.56-.22 1.05.13.36.8Z" /></svg>
                                Telegram
                            </a>
                            <a href="https://github.com/cencera-xyz" className="flex items-center gap-2">
                                <GithubLogo className="w-4 h-4" />
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/company/cenceraxyz/" className="flex items-center gap-2">
                                <LinkedinLogo className="w-4 h-4" />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-16 md:mt-24 pointer-events-none select-none overflow-hidden flex justify-center">
                    <svg
                        className="w-full px-4 md:px-8 text-white max-w-[1600px]"
                        viewBox="0 0 1000 200"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <text
                            x="50%"
                            y="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fill="currentColor"
                            className="font-display font-black tracking-tighter"
                            style={{ fontSize: "190px" }}
                        >
                            CENCERA
                        </text>
                    </svg>
                </div>

                <div className="container footer__bottom">
                    <span>© 2026 CENCERA.</span>
                    <span>Built for the new web</span>
                </div>
            </footer>
        </>
    );
}
