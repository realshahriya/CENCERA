"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What is Cencera?",
    answer:
      "Cencera is a trust and safety layer for Web3. We provide real-time risk detection APIs that help wallets, exchanges, and dApps protect users from malicious activity.",
  },
  {
    question: "Who is Cencera for?",
    answer:
      "Cencera is built for teams shipping Web3 products: consumer wallets, trading platforms, NFT marketplaces, infrastructure providers, and security-focused dApps.",
  },
  {
    question: "How do I integrate the API?",
    answer:
      "You can start with our REST API using your existing stack. Follow the Quick Start guide in the docs, grab an API key, and plug the risk scoring endpoints into your transaction flow.",
  },
  {
    question: "Which chains do you support?",
    answer:
      "We focus first on major ecosystems such as EVM chains and Solana, and expand coverage based on demand. Reach out if you need support for a specific network.",
  },
  {
    question: "Is there a dashboard?",
    answer:
      "Yes. The Cencera dashboard lets you explore risk events, monitor usage, and fine-tune policies. You can access it through the live product link on this page.",
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
