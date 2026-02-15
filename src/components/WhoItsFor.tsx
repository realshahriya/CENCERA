"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Wallet, TrendUp, CirclesThreePlus, Buildings, Briefcase } from "phosphor-react";

export default function WhoItsFor() {
    const reduceMotion = useReducedMotion();

    const audiences = [
        {
            icon: Wallet,
            title: "Wallet Providers",
            description: "Protect users from scams, drainers, and malicious approvals.",
            color: "neon"
        },
        {
            icon: TrendUp,
            title: "Exchanges & Trading Platforms",
            description: "Detect risky entities before funds are exposed.",
            color: "mint"
        },
        {
            icon: CirclesThreePlus,
            title: "DeFi Protocols",
            description: "Prevent exploit pathways and abnormal activity.",
            color: "secondary"
        },
        {
            icon: Buildings,
            title: "Stablecoin & Token Issuers",
            description: "Monitor ecosystem risk in real time.",
            color: "safe"
        },
        {
            icon: Briefcase,
            title: "Institutions Entering Web3",
            description: "Operate with intelligence-grade security infrastructure.",
            color: "soft"
        }
    ];

    const getHoverBorderClass = (color: string) => {
        switch (color) {
            case "neon": return "hover:border-neon/50";
            case "mint": return "hover:border-mint/50";
            case "secondary": return "hover:border-secondary/50";
            case "safe": return "hover:border-safe/50";
            case "soft": return "hover:border-soft/50";
            default: return "hover:border-white/50";
        }
    };

    const getBgGradientClass = (color: string) => {
        switch (color) {
            case "neon": return "bg-gradient-to-br from-neon/20 to-neon/5";
            case "mint": return "bg-gradient-to-br from-mint/20 to-mint/5";
            case "secondary": return "bg-gradient-to-br from-secondary/20 to-secondary/5";
            case "safe": return "bg-gradient-to-br from-safe/20 to-safe/5";
            case "soft": return "bg-gradient-to-br from-soft/20 to-soft/5";
            default: return "bg-gradient-to-br from-white/20 to-white/5";
        }
    };

    const getTextColorClass = (color: string) => {
        switch (color) {
            case "neon": return "text-neon";
            case "mint": return "text-mint";
            case "secondary": return "text-secondary";
            case "safe": return "text-safe";
            case "soft": return "text-soft";
            default: return "text-white";
        }
    };

    return (
        <section id="who-its-for" className="section-padding bg-void border-t border-white/5">
            <div className="section-container">
                <motion.div
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <p className="font-mono text-[10px] sm:text-xs text-neon/80 tracking-[0.2em] uppercase mb-3">
                        WHO IT'S FOR
                    </p>
                    <h2 className="section-title mb-4 sm:mb-6 leading-tight">
                        BUILT FOR<br />SECURITY-CRITICAL PLATFORMS
                    </h2>
                    <p className="section-subtitle max-w-2xl mx-auto px-4">
                        Trusted by platforms that demand the highest level of security intelligence for their users
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {audiences.map((audience, index) => {
                        const Icon = audience.icon;
                        return (
                            <motion.div
                                key={audience.title}
                                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                                className={`card-surface card-hover p-6 sm:p-8 ${getHoverBorderClass(audience.color)} group`}
                            >
                                <div className={`w-12 h-12 rounded-lg ${getBgGradientClass(audience.color)} flex items-center justify-center mb-6`}>
                                    <Icon className={`w-6 h-6 ${getTextColorClass(audience.color)}`} weight="duotone" />
                                </div>
                                <h3 className="font-sans text-lg sm:text-xl font-bold mb-3">{audience.title}</h3>
                                <p className="font-mono text-xs sm:text-sm text-gray-400">
                                    {audience.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
