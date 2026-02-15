"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, ShieldCheck, Lightning, ShareNetwork, Database } from "phosphor-react";

export default function Features() {
    const reduceMotion = useReducedMotion();

    return (
        <section id="features" className="section-padding relative bg-void">
            <div className="section-container">
                <motion.div
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="section-title mb-4 sm:mb-6 leading-tight">
                        SECURITY INTELLIGENCE<br />BUILT FOR MODERN THREATS
                    </h2>
                    <p className="section-subtitle max-w-2xl mx-auto px-4">
                        Advanced threat detection and behavioral analysis to protect your users from emerging security risks
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* Feature 1 */}
                    <motion.div
                        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="card-surface card-hover p-6 sm:p-8 hover:border-neon/50 group"
                    >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon/20 to-neon/5 flex items-center justify-center mb-6">
                            <Activity className="w-6 h-6 text-neon" weight="duotone" />
                        </div>
                        <h3 className="font-sans text-lg sm:text-xl font-bold mb-3">Behavioral Risk Analysis</h3>
                        <p className="font-mono text-xs sm:text-sm text-gray-400 mb-4">
                            Understand entity behavior across time, not just single transactions
                        </p>
                        <ul className="space-y-2 font-mono text-xs text-gray-500">
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-neon rounded-full"></div>
                                Pattern recognition over time
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-neon rounded-full"></div>
                                Historical behavior tracking
                            </li>
                        </ul>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ delay: 0.05, duration: 0.5, ease: "easeOut" }}
                        className="card-surface card-hover p-6 sm:p-8 hover:border-mint/50 group"
                    >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-mint/20 to-mint/5 flex items-center justify-center mb-6">
                            <ShieldCheck className="w-6 h-6 text-mint" weight="duotone" />
                        </div>
                        <h3 className="font-sans text-lg sm:text-xl font-bold mb-3">Adaptive Threat Detection</h3>
                        <p className="font-mono text-xs sm:text-sm text-gray-400 mb-4">
                            Identify known exploits and emerging attack patterns early
                        </p>
                        <ul className="space-y-2 font-mono text-xs text-gray-500">
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-mint rounded-full"></div>
                                Known exploit detection
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-mint rounded-full"></div>
                                Emerging pattern identification
                            </li>
                        </ul>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                        className="card-surface card-hover p-6 sm:p-8 hover:border-secondary/50 group"
                    >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-6">
                            <Lightning className="w-6 h-6 text-secondary" weight="duotone" />
                        </div>
                        <h3 className="font-sans text-lg sm:text-xl font-bold mb-3">Real-Time Intelligence Delivery</h3>
                        <p className="font-mono text-xs sm:text-sm text-gray-400 mb-4">
                            Receive actionable risk signals instantly via low-latency API
                        </p>
                        <ul className="space-y-2 font-mono text-xs text-gray-500">
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-secondary rounded-full"></div>
                                Low-latency responses
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-secondary rounded-full"></div>
                                Instant risk signals
                            </li>
                        </ul>
                    </motion.div>

                    {/* Feature 4 */}
                    <motion.div
                        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
                        className="card-surface card-hover p-6 sm:p-8 hover:border-mint/50 group"
                    >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-mint/20 to-mint/5 flex items-center justify-center mb-6">
                            <ShareNetwork className="w-6 h-6 text-mint" weight="duotone" />
                        </div>
                        <h3 className="font-sans text-lg sm:text-xl font-bold mb-3">Cross-Ecosystem Visibility</h3>
                        <p className="font-mono text-xs sm:text-sm text-gray-400 mb-4">
                            Monitor wallets, tokens, contracts, and dApps from one intelligence layer
                        </p>
                        <ul className="space-y-2 font-mono text-xs text-gray-500">
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-mint rounded-full"></div>
                                Unified monitoring
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-mint rounded-full"></div>
                                Multi-chain coverage
                            </li>
                        </ul>
                    </motion.div>

                    {/* Feature 5 */}
                    <motion.div
                        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                        className="card-surface card-hover p-6 sm:p-8 hover:border-safe/50 group"
                    >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-safe/20 to-safe/5 flex items-center justify-center mb-6">
                            <Database className="w-6 h-6 text-safe" weight="duotone" />
                        </div>
                        <h3 className="font-sans text-lg sm:text-xl font-bold mb-3">Policy-Ready Signals</h3>
                        <p className="font-mono text-xs sm:text-sm text-gray-400 mb-4">
                            Automate security decisions with customizable risk thresholds
                        </p>
                        <ul className="space-y-2 font-mono text-xs text-gray-500">
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-safe rounded-full"></div>
                                Customizable thresholds
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-safe rounded-full"></div>
                                Automated enforcement
                            </li>
                        </ul>
                    </motion.div>


                </div>
            </div>
        </section>
    );
}
