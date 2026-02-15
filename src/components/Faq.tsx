"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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
      "We support 18+ blockchains with coverage across major ecosystems such as EVM chains and Solana. We expand coverage based on demand and ecosystem needs.",
  },
  {
    question: "How does behavioral risk analysis work?",
    answer:
      "Our system analyzes entity behavior across time, not just single transactions. We identify patterns and track historical behavior to detect emerging threats and unusual activity before they become attacks.",
  },
  {
    question: "How do I get early access or support?",
    answer:
      "Contact us through the dashboard or the docs support links. We work closely with early partners on integrations, custom rules, and enterprise features.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding border-t border-white/5 bg-void">
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-12">
          <p className="font-mono text-[10px] sm:text-xs text-neon/80 tracking-[0.2em] uppercase mb-3">
            FAQ
          </p>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto px-4">
            Learn how teams use Cencera to ship safer Web3 experiences.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="card-surface card-hover p-5 sm:p-6 cursor-pointer"
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-sans text-sm sm:text-base md:text-lg font-semibold">
                    {item.question}
                  </h3>
                  <motion.span
                    className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-neon text-sm font-mono"
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    {isOpen ? "−" : "+"}
                  </motion.span>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 font-mono text-xs sm:text-sm text-gray-400">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
