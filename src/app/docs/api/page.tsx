"use client";

export default function ApiPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tighter text-white">
                    API <span className="text-neon">Reference</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    HTTP endpoints backed by the same analysis engine that powers the Cencera dashboard.
                </p>
            </div>

            <div className="space-y-10">
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white mb-2">Base URL</h2>
                    <div className="bg-surface border border-white/10 rounded-lg p-4 font-mono text-sm text-neon">
                        https://api.cencera.xyz/v1
                    </div>
                    <p className="text-sm text-gray-400">
                        All endpoints below are relative to this base URL. In development you can call{" "}
                        <span className="font-mono text-gray-300">http://localhost:3000/v1</span>, which is internally
                        rewritten to the Next.js route handlers under <span className="font-mono text-gray-300">/api</span>.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white mb-2">Authentication</h2>
                    <p className="text-gray-400">
                        During the MVP the API is tied to your connected wallet and credit balance.
                        Requests should include both an API key header and your wallet address as a{" "}
                        <span className="font-mono text-gray-300">user</span> query parameter.
                    </p>
                    <div className="bg-surface border border-white/10 rounded-lg p-4 font-mono text-sm text-gray-300">
                        Authorization: Bearer <span className="text-neon">YOUR_API_KEY</span>
                    </div>
                    <p className="text-sm text-gray-400">
                        API keys are created from the Cencera dashboard under{" "}
                        <span className="font-mono text-gray-300">Dashboard → API Keys</span>. The{" "}
                        <span className="font-mono text-gray-300">user</span> parameter must be the EVM address that owns
                        the credits used for deductions.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white">Wallet and contract analysis</h2>

                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-xs font-bold font-mono">GET</span>
                            <code className="text-white font-mono text-sm">/analyze</code>
                        </div>
                        <p className="text-sm text-gray-400 pl-16">
                            Run the full chain analysis pipeline for a wallet, contract address, or ENS name.
                        </p>
                        <div className="bg-surface border border-white/10 rounded-lg p-4 font-mono text-xs text-gray-300 mt-3 overflow-x-auto">
                            <code>
                                GET /v1/analyze?q=vitalik.eth&amp;chain=1&amp;user=0xYOURWALLET<br />
                                <br />
                                q: search query (address, ENS, token symbol)<br />
                                chain: optional chain id (default 1 for Ethereum)<br />
                                user: required wallet address for credit deduction
                            </code>
                        </div>
                        <div className="bg-surface border border-white/10 rounded-lg p-4 font-mono text-xs text-gray-300 mt-3 overflow-x-auto">
                            <code>
                                {"{"}<br />
                                &nbsp;&nbsp;<span className="text-green-400">&quot;address&quot;</span>: <span className="text-yellow-300">&quot;0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045&quot;</span>,<br />
                                &nbsp;&nbsp;<span className="text-green-400">&quot;type&quot;</span>: <span className="text-yellow-300">&quot;wallet&quot;</span>,<br />
                                &nbsp;&nbsp;<span className="text-green-400">&quot;trust_score&quot;</span>: <span className="text-blue-400">94</span>,<br />
                                &nbsp;&nbsp;<span className="text-green-400">&quot;risk_level&quot;</span>: <span className="text-yellow-300">&quot;low&quot;</span>,<br />
                                &nbsp;&nbsp;<span className="text-green-400">&quot;risk_flags&quot;</span>: [<span className="text-yellow-300">&quot;airdrop_hunter&quot;</span>],<br />
                                &nbsp;&nbsp;<span className="text-green-400">&quot;summary&quot;</span>: <span className="text-yellow-300">&quot;High reputation wallet with long history and diversified activity.&quot;</span>,<br />
                                &nbsp;&nbsp;<span className="text-green-400">&quot;market_data&quot;</span>: {"{"} ... {"}"},<br />
                                &nbsp;&nbsp;<span className="text-green-400">&quot;report&quot;</span>: {"{"} ... {"}"},<br />
                                &nbsp;&nbsp;<span className="text-green-400">&quot;validation&quot;</span>: {"{"} ... {"}"},<br />
                                &nbsp;&nbsp;<span className="text-green-400">&quot;social_detail&quot;</span>: {"{"} ... {"}"}<br />
                                {"}"}
                            </code>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white">Sentiment and AI assistant</h2>

                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-xs font-bold font-mono">GET</span>
                            <code className="text-white font-mono text-sm">/x-sentiment</code>
                        </div>
                        <p className="text-sm text-gray-400 pl-16">
                            Fetch social sentiment for an entity across X and other sources.
                        </p>
                        <div className="bg-surface border border-white/10 rounded-lg p-4 font-mono text-xs text-gray-300 mt-3 overflow-x-auto">
                            <code>
                                GET /v1/x-sentiment?q=PEPE&amp;chain=1
                            </code>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-xs font-bold font-mono">GET</span>
                            <code className="text-white font-mono text-sm">/trust-agent</code>
                        </div>
                        <p className="text-sm text-gray-400 pl-16">
                            Ask an AI agent to run multi-chain checks and return an aggregated explanation.
                        </p>
                        <div className="bg-surface border border-white/10 rounded-lg p-4 font-mono text-xs text-gray-300 mt-3 overflow-x-auto">
                            <code>
                                GET /v1/trust-agent?q=Is+this+wallet+safe+to+interact+with%3F&amp;chains=1,137,42161
                            </code>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white">Simulation and reports</h2>

                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="bg-blue-500/10 text-blue-500 px-2 py-1 rounded text-xs font-bold font-mono">POST</span>
                            <code className="text-white font-mono text-sm">/simulate</code>
                        </div>
                        <p className="text-sm text-gray-400 pl-16">
                            Dry-run a transaction to estimate gas usage and see high level state changes.
                        </p>
                        <div className="bg-surface border border-white/10 rounded-lg p-4 font-mono text-xs text-gray-300 mt-3 overflow-x-auto">
                            <code>
                                POST /v1/simulate<br />
                                Content-Type: application/json<br />
                                <br />
                                {"{"}<br />
                                &nbsp;&nbsp;<span className="text-green-400">&quot;chainId&quot;</span>: <span className="text-yellow-300">&quot;1&quot;</span>,<br />
                                &nbsp;&nbsp;<span className="text-green-400">&quot;action&quot;</span>: <span className="text-yellow-300">&quot;native_transfer&quot;</span>,<br />
                                &nbsp;&nbsp;<span className="text-green-400">&quot;from&quot;</span>: <span className="text-yellow-300">&quot;0xFROM...&quot;</span>,<br />
                                &nbsp;&nbsp;<span className="text-green-400">&quot;to&quot;</span>: <span className="text-yellow-300">&quot;0xTO...&quot;</span>,<br />
                                &nbsp;&nbsp;<span className="text-green-400">&quot;value&quot;</span>: <span className="text-yellow-300">&quot;0.05&quot;</span><br />
                                {"}"}
                            </code>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-xs font-bold font-mono">GET</span>
                            <code className="text-white font-mono text-sm">/ca-report/pdf</code>
                        </div>
                        <p className="text-sm text-gray-400 pl-16">
                            Generate a one-page PDF summary of an address analysis suitable for sharing.
                        </p>
                        <div className="bg-surface border border-white/10 rounded-lg p-4 font-mono text-xs text-gray-300 mt-3 overflow-x-auto">
                            <code>
                                GET /v1/ca-report/pdf?q=0xADDRESS&amp;chain=1
                            </code>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
