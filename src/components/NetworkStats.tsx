 "use client";

import { motion, useReducedMotion } from "framer-motion";

export default function NetworkStats() {
    const reduceMotion = useReducedMotion();

    return (
        <section className="section-padding border-t border-b border-white/5 bg-black relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 bg-repeat bg-[length:100px_100px]"></div>
            <div className="pointer-events-none absolute inset-0 opacity-70">
                <svg className="w-full h-full" viewBox="0 0 1200 520" fill="none" preserveAspectRatio="xMidYMid slice">
                    <motion.path
                        d="M80 280 C240 120 360 420 520 260 C680 100 820 420 980 260 C1060 180 1120 170 1160 210"
                        stroke="rgba(125, 211, 252, 0.16)"
                        strokeWidth="2"
                        initial={{ pathLength: reduceMotion ? 1 : 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={reduceMotion ? { duration: 0 } : { duration: 2.2, ease: "easeOut" }}
                    />
                    <motion.path
                        d="M60 360 C240 220 340 420 520 320 C700 220 860 380 1040 300"
                        stroke="rgba(168, 85, 247, 0.14)"
                        strokeWidth="2"
                        initial={{ pathLength: reduceMotion ? 1 : 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={reduceMotion ? { duration: 0 } : { delay: 0.08, duration: 2.0, ease: "easeOut" }}
                    />
                    {[
                        { cx: 170, cy: 220, r: 6, fill: "rgba(125, 211, 252, 0.55)" },
                        { cx: 420, cy: 280, r: 7, fill: "rgba(125, 211, 252, 0.35)" },
                        { cx: 660, cy: 220, r: 6, fill: "rgba(168, 85, 247, 0.35)" },
                        { cx: 860, cy: 310, r: 7, fill: "rgba(125, 211, 252, 0.45)" },
                        { cx: 1020, cy: 260, r: 6, fill: "rgba(168, 85, 247, 0.30)" }
                    ].map((n, i) => (
                        <motion.circle
                            key={i}
                            cx={n.cx}
                            cy={n.cy}
                            r={n.r}
                            fill={n.fill}
                            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.75 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={reduceMotion ? { duration: 0 } : { delay: 0.18 + i * 0.05, duration: 0.35, ease: "easeOut" }}
                        />
                    ))}
                </svg>
            </div>

            <div className="section-container text-center">
                <motion.h2
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="section-title text-2xl sm:text-3xl mb-8 sm:mb-12"
                >
                    SYSTEM METRICS
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
                    {/* Stats 1 */}
                    <motion.div
                        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="bg-black/80 p-4 sm:p-6 md:p-8 group hover:bg-white/5 transition-colors"
                    >
                        <p className="font-mono text-[10px] sm:text-xs text-gray-500 mb-2">BLOCKCHAINS</p>
                        <p className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-neon transition-colors">18+</p>
                    </motion.div>
                    {/* Stats 2 */}
                    <motion.div
                        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ delay: 0.05, duration: 0.45, ease: "easeOut" }}
                        className="bg-black/80 p-4 sm:p-6 md:p-8 group hover:bg-white/5 transition-colors"
                    >
                        <p className="font-mono text-[10px] sm:text-xs text-gray-500 mb-2">UPTIME</p>
                        <p className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-safe transition-colors">120ms</p>
                    </motion.div>
                    {/* Stats 3 */}
                    <motion.div
                        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ delay: 0.1, duration: 0.45, ease: "easeOut" }}
                        className="bg-black/80 p-4 sm:p-6 md:p-8 group hover:bg-white/5 transition-colors"
                    >
                        <p className="font-mono text-[10px] sm:text-xs text-gray-500 mb-2">WALLETS</p>
                        <p className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-purple-400 transition-colors">12M+</p>
                    </motion.div>
                    {/* Stats 4 */}
                    <motion.div
                        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ delay: 0.15, duration: 0.45, ease: "easeOut" }}
                        className="bg-black/80 p-4 sm:p-6 md:p-8 group hover:bg-white/5 transition-colors"
                    >
                        <p className="font-mono text-[10px] sm:text-xs text-gray-500 mb-2">TOKENS</p>
                        <p className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-neon transition-colors">5M+</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
