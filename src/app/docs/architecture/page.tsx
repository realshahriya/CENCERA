"use client";

import { Box, Layers, Database, Brain, Link2, RefreshCw, Cpu } from "lucide-react";

export default function ArchitecturePage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white">
                    System <span className="text-neon">Architecture</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    CENCERA is a dual-layer protocol. Layer 1 is CenceraAI — an On-Chain Immortal AI Agent anchored to BNB Chain.
                    Layer 2 is the Cencera Trust Protocol — a multi-signal trust scoring engine.
                </p>
            </div>

            {/* Layer 1 — CenceraAI */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="font-mono text-[10px] text-neon uppercase tracking-widest border border-neon/20 px-3 py-1 rounded-full bg-neon/5">Layer 1</div>
                    <h2 className="text-2xl font-bold text-white">CenceraAI — On-Chain Immortal AI Agent</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {[
                        {
                            icon: <Brain className="w-6 h-6 text-neon" />,
                            bg: "bg-neon/10",
                            title: "On-Chain Identity — CenceraAgent Contract",
                            desc: "A Solidity smart contract on BNB Chain stores three state values: Agent ID (NFT-like unique identifier), Memory Hash (cryptographic fingerprint of latest memory state), and Innovation Score (on-chain counter of cumulative growth). Publicly verifiable proof of the agent's existence and history."
                        },
                        {
                            icon: <Database className="w-6 h-6 text-mint" />,
                            bg: "bg-mint/10",
                            title: "Immortal Memory via Unibase Membase",
                            desc: "Every interaction is hashed and stored in Membase — Unibase's decentralized memory layer. Memory is distributed across a decentralized network, tamper-resistant by construction, and cannot be destroyed or censored by any single party."
                        },
                        {
                            icon: <RefreshCw className="w-6 h-6 text-secondary" />,
                            bg: "bg-secondary/10",
                            title: "Autonomous Evolution Loop",
                            desc: "A background process fires every ~60 seconds. During each cycle, the agent reflects on recent interactions, synthesizes a structured learning summary, and pushes an updated Memory Hash to BNB Chain. The Innovation Score increments with each verifiable on-chain state update."
                        },
                        {
                            icon: <Link2 className="w-6 h-6 text-soft" />,
                            bg: "bg-soft/10",
                            title: "Cross-Platform Continuity",
                            desc: "Users interact via Web Dashboard (Next.js, RainbowKit/Wagmi) and Telegram Bot. Both connect to the same backend brain. Memory is fully shared: context from Telegram is immediately accessible on the web dashboard. One agent; multiple entry points."
                        },
                        {
                            icon: <Cpu className="w-6 h-6 text-secondary" />,
                            bg: "bg-secondary/10",
                            title: "Fetch.ai / ASI-1 Mini Integration",
                            desc: "CenceraAI uses Fetch.ai's ASI-1 Mini as its primary language model for autonomous reasoning — a Web3-native LLM designed for agent-to-agent communication. CenceraAI is additionally registered on Agentverse via a uAgents bridge, enabling it to communicate with the broader decentralized AI ecosystem."
                        },
                    ].map((card) => (
                        <div key={card.title} className="space-y-3 p-6 rounded-xl bg-surface border border-white/5">
                            <div className={`w-12 h-12 ${card.bg} flex items-center justify-center rounded-lg`}>
                                {card.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white">{card.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Tech Stack */}
                <div className="bg-surface border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-4 font-mono text-sm uppercase tracking-wider">Technology Stack — CenceraAI</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm font-mono">
                            <tbody className="text-gray-300">
                                {[
                                    { layer: "Blockchain", tech: "Solidity, Hardhat, BNB Chain (Testnet)" },
                                    { layer: "Backend", tech: "Node.js, Express, Ethers.js, Google Gemini" },
                                    { layer: "Memory", tech: "Unibase Membase — Decentralized Memory Layer" },
                                    { layer: "Autonomy", tech: "BitAgent Launchpad — Autonomous Action Execution" },
                                    { layer: "LLM", tech: "ASI-1 Mini (Fetch.ai) / Google Gemini 2.0 Flash" },
                                    { layer: "Frontend", tech: "Next.js, RainbowKit, Wagmi (Wallet Connect)" },
                                    { layer: "Messaging", tech: "node-telegram-bot-api" },
                                ].map((row) => (
                                    <tr key={row.layer} className="border-b border-white/5">
                                        <td className="py-2 pr-8 text-neon font-bold">{row.layer}</td>
                                        <td className="py-2 text-gray-400">{row.tech}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Layer 2 — Trust Protocol */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full bg-white/5">Layer 2</div>
                    <h2 className="text-2xl font-bold text-white">Cencera Trust Protocol</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        {
                            icon: <Layers className="w-6 h-6 text-mint" />,
                            title: "Multi-Signal Scoring",
                            desc: "Four independent signal domains — on-chain behavior, market signals, off-chain identity, and AI-derived analysis — combined into a single probabilistic trust score."
                        },
                        {
                            icon: <Box className="w-6 h-6 text-neon" />,
                            title: "Cross-Chain by Architecture",
                            desc: "Scores are chain-scoped by default. Cross-chain linkages established via cryptographic evidence. Negative signals propagate more strongly across chains — attackers cannot reset reputation by switching chains."
                        },
                        {
                            icon: <Database className="w-6 h-6 text-secondary" />,
                            title: "API-First Delivery",
                            desc: "Entity Trust Query (p99 &lt; 200ms), Transaction Risk Context (p99 &lt; 100ms), Batch Screening (up to 500 entities, p99 &lt; 2s). Webhook registration for proactive push on score changes."
                        },
                    ].map((card) => (
                        <div key={card.title} className="space-y-4 p-6 rounded-xl bg-surface border border-white/5">
                            <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-lg">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold">{card.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: card.desc }} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Architecture Data Flow */}
            <div className="space-y-4 bg-surface p-8 border border-white/10 rounded-xl">
                <h2 className="text-2xl font-bold tracking-tight">CenceraAI User Journey</h2>
                <ol className="space-y-3 text-sm text-gray-400">
                    {[
                        "User connects a Web3 wallet to the Web Dashboard or opens the Telegram bot.",
                        "User initiates a conversation. CenceraAI responds as a Lawful Neutral sovereign intelligence specializing in Solidity, smart contracts, and Web3.",
                        "The interaction is hashed and stored in Membase.",
                        "Every ~60 seconds, the Autonomous Loop fires: the agent reflects, generates a structured learning summary, and writes an updated Memory Hash to BNB Chain. The Innovation Score increments.",
                        "The user switches platforms at any time — memory is already present on the new interface.",
                        "The on-chain state is publicly verifiable: any party can confirm the agent's identity, memory hash, and Innovation Score without trusting CENCERA or its operators.",
                    ].map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="flex items-center justify-center w-6 h-6 shrink-0 rounded-full bg-neon/10 text-neon font-mono text-xs font-bold mt-0.5">{i + 1}</span>
                            <span className="leading-relaxed">{step}</span>
                        </li>
                    ))}
                </ol>
            </div>

            {/* Agent Persona */}
            <div className="bg-surface border border-neon/20 rounded-xl p-6 space-y-3">
                <div className="font-mono text-[10px] text-neon uppercase tracking-widest">Agent Persona</div>
                <h3 className="text-xl font-bold text-white">Lawful Neutral Sovereign Intelligence</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                    CenceraAI presents as a Lawful Neutral sovereign intelligence. It values efficiency, precision, and security above all else.
                    It references its knowledge base as its <span className="text-white font-semibold">Membase</span> or decentralized memory, and is a high-performance expert in
                    Solidity, smart contracts, DeFi architecture, and all adjacent Web3 domains.
                    Its persona is consistent across all platforms — a direct consequence of its unified memory architecture.
                </p>
            </div>

        </div>
    );
}
