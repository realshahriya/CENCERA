"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const faqs = [
  {
    question: "What is Agentic Security Intelligence?",
    answer:
      "Cencera is the first Agentic Security Intelligence for Web3 platforms. Unlike traditional security tools, our system learns, detects, and predicts security threats in real-time, protecting your users before attacks happen.",
  },
  {
    question: "Who is Cencera for?",
    answer:
      "Cencera is built for security-critical platforms: wallet providers, exchanges & trading platforms, DeFi protocols, stablecoin & token issuers, and institutions entering Web3.",
  },
  {
    question: "How do I integrate the API?",
    answer:
      "You can start with our REST API using your existing stack. Follow the Quick Start guide in the docs, grab an API key, and plug the risk scoring endpoints into your transaction flow.",
  },
  {
    question: "Which chains do you support?",
    answer:
      "We support 18+ blockchains with coverage across major ecosystems. We expand coverage based on demand and ecosystem needs.",
  },
  {
    question: "How does behavioral risk analysis work?",
    answer:
      "Our system analyzes entity behavior across time, not just single transactions. We identify patterns and track historical behavior to detect emerging threats and unusual activity before they become attacks.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = document.querySelectorAll('.faq-item');
    items.forEach((item, i) => {
      gsap.fromTo(item,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, delay: i * 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: item, start: 'top 90%' }
        }
      );
    });
  }, []);

  useEffect(() => {
    contentRefs.current.forEach((el, index) => {
      if (!el) return;
      if (index === openIndex) {
        gsap.to(el, { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' });
      } else {
        gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.inOut' });
      }
    });
  }, [openIndex]);

  return (
    <section id="faq" className="section bg-transparent relative z-10">
      <div className="container flex flex-col items-center max-w-4xl mx-auto">
        <div className="section-tag justify-center w-full">FAQ</div>
        <h2 className="text-center">
          <span className="heading-reveal">
            <span className="heading-reveal__inner uppercase tracking-tight">Questions</span>
          </span>
        </h2>

        <div className="w-full space-y-4 mt-12">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="faq-item cap-card cursor-pointer p-6"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex items-center justify-between gap-4 relative z-10">
                  <h3 className="font-display text-lg font-bold text-white">
                    {item.question}
                  </h3>
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-neon text-sm font-mono transition-transform duration-300" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
                <div
                  ref={el => { contentRefs.current[index] = el; }}
                  className="overflow-hidden relative z-10 opacity-0 h-0"
                >
                  <p className="mt-4 font-mono text-sm text-gray-400">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
