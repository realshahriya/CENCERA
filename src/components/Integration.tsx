"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle, ShieldCheck, Activity, Stack } from "phosphor-react";

export default function Integration() {
    const reduceMotion = useReducedMotion();

    const tiers = [
        {
            id: "starter",
            label: "Starter",
            priceMonthly: "$0",
            priceAnnual: "$0",
            priceNote: "Free",
            description: "Prototype trust checks.",
            alertRate: "0.8%",
            response: "140ms",
            coverage: "Standard",
            signalStrength: 62,
            tag: "Low friction",
            bullets: ["Trust score", "Address checks"]
        },
        {
            id: "growth",
            label: "Growth",
            priceMonthly: "$310",
            priceAnnual: "$290",
            priceNote: "per month",
            description: "Ship at scale.",
            alertRate: "1.4%",
            response: "110ms",
            coverage: "Expanded",
            signalStrength: 78,
            tag: "Most popular",
            bullets: ["Monitoring", "Priority support"]
        },
        {
            id: "enterprise",
            label: "Enterprise",
            priceMonthly: "Custom",
            priceAnnual: "Custom",
            priceNote: "Contact sales",
            description: "Custom policies + SLA.",
            alertRate: "2.1%",
            response: "85ms",
            coverage: "Maximum",
            signalStrength: 92,
            tag: "Max defense",
            bullets: ["Dedicated infra", "Onboarding"]
        }
    ];

    return (
        <section className="section-padding border-t border-white/5">
            <div className="section-container flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12">
                <motion.div
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="md:w-1/2 lg:w-5/12 space-y-6"
                >
                    <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold">
                        INTEGRATION WITHOUT<br /> THE INTEGRATION.
                    </h2>
                    <p className="font-mono text-gray-400 text-sm sm:text-base max-w-md">
                        Deploy a unified trust layer across wallets, exchanges, and dApps without rebuilding your stack.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded bg-gradient-to-br from-neon to-neon/70 flex items-center justify-center text-black flex-shrink-0">
                                <ShieldCheck className="w-5 h-5" weight="bold" />
                            </div>
                            <div>
                                <h5 className="font-sans font-bold text-sm sm:text-base">Policy-Ready Signals</h5>
                                <p className="font-mono text-xs text-gray-500">
                                    Risk labels and trust scores designed for enforcement workflows.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded bg-surface border border-neon/50 flex items-center justify-center text-neon flex-shrink-0">
                                <Stack className="w-5 h-5" weight="bold" />
                            </div>
                            <div>
                                <h5 className="font-sans font-bold text-sm sm:text-base">Composable Coverage</h5>
                                <p className="font-mono text-xs text-gray-500">
                                    Wallets, contracts, tokens, and NFT collections in one control plane.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white flex-shrink-0">
                                <Activity className="w-5 h-5" weight="bold" />
                            </div>
                            <div>
                                <h5 className="font-sans font-bold text-sm sm:text-base">Always-On Monitoring</h5>
                                <p className="font-mono text-xs text-gray-500">
                                    Continuous risk updates to protect users before confirmation.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <a
                            href="https://app.cencera.xyz"
                            target="_blank"
                            className="btn-primary"
                        >
                            LIVE PRODUCT CHECK
                        </a>
                        <a
                            href="https://ap.cencera.xyz"
                            target="_blank"
                            className="btn-secondary"
                        >
                            SEE PROTOTYPE
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: 0.05, duration: 0.5, ease: "easeOut" }}
                    className="md:w-1/2 lg:w-7/12"
                >
                    <div className="flex items-end justify-between gap-4 mb-5 sm:mb-6">
                        <div>
                            <div className="font-sans font-bold text-white text-lg sm:text-xl">Plans</div>
                            <div className="font-mono text-xs text-gray-500 mt-1">Choose what fits your rollout stage</div>
                        </div>
                        <div className="font-mono text-[10px] sm:text-xs text-gray-500">
                            Monthly and annual pricing shown
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 sm:gap-5">
                        {tiers.map((tier, index) => {
                            const isFeatured = tier.id === "growth";
                            const hasNumericPrice = tier.priceMonthly !== "Custom";
                            const monthlyLine = tier.priceMonthly === "$0" ? "Free" : hasNumericPrice ? `${tier.priceMonthly}/mo` : "Custom";
                            const annualLine = tier.priceAnnual === "$0" ? "Free (annual)" : hasNumericPrice ? `${tier.priceAnnual}/mo billed annually` : tier.priceNote;

                            return (
                                <motion.div
                                    key={tier.id}
                                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ delay: index * 0.06, duration: 0.45, ease: "easeOut" }}
                                    whileHover={reduceMotion ? undefined : { y: -2 }}
                                    className={`h-full text-left card-surface p-6 sm:p-7 shadow-2xl transition-colors ${isFeatured
                                        ? "border-neon/50 bg-neon/5"
                                        : "border-white/10 bg-surface"
                                        }`}
                                >
                                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 gap-y-2">
                                        <div className="min-w-0">
                                            <div className="font-sans font-bold text-white text-base sm:text-lg leading-tight">
                                                {tier.label}
                                            </div>
                                            <div className="mt-2">
                                                <span className="inline-flex font-mono text-[11px] sm:text-xs px-2 py-0.5 rounded-full border border-white/10 bg-black/30 text-gray-300 leading-none">
                                                    {tier.tag}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-sans text-base sm:text-lg font-bold text-white leading-none whitespace-nowrap">
                                                {monthlyLine}
                                            </div>
                                            <div className="font-mono text-[10px] sm:text-[11px] text-gray-500 mt-1 leading-tight whitespace-nowrap">
                                                {annualLine}
                                            </div>
                                        </div>
                                        <div className="col-span-2 font-mono text-[11px] sm:text-xs text-gray-500">
                                            {tier.description}
                                        </div>
                                    </div>

                                    <div className="mt-4 font-mono text-[10px] sm:text-xs text-gray-400">
                                        Response {tier.response} · Coverage {tier.coverage} · Signals {tier.signalStrength}%
                                    </div>

                                    <div className="mt-4 grid gap-2">
                                        {tier.bullets.map((b) => (
                                            <div key={b} className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-gray-300">
                                                <CheckCircle className="w-4 h-4 text-neon" weight="bold" />
                                                <span>{b}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-4 sm:p-5">
                        <div className="flex items-center gap-3 text-white mb-3">
                            <Stack className="w-5 h-5 text-neon" weight="bold" />
                            <span className="font-sans font-bold text-sm sm:text-base">Primary Use Cases</span>
                        </div>
                        <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs font-mono">
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">Wallet Safety</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">Exchange Risk</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">dApp Access</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">Compliance Ops</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
