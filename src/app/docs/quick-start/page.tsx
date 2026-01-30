"use client";

export default function QuickStartPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="space-y-6 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tighter text-white">
                    Quick <span className="text-neon">Start</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
                    Integrate Cencera&apos;s Trust & Safety layer into your application in minutes.
                </p>
            </div>

            {/* Step 1 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neon text-black font-mono text-sm">1</span>
                    Get an API key
                </h2>
                <p className="text-gray-400">
                    Connect your wallet to the Cencera app and create an API key from the dashboard.
                </p>

                <div className="bg-surface border border-white/10 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                    <code className="text-gray-300">
                        1. Open <span className="text-neon">https://app.cencera.xyz</span><br />
                        2. Connect your wallet<br />
                        3. Go to <span className="text-neon">Dashboard → API Keys</span><br />
                        4. Create a new key and copy it securely
                    </code>
                </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-mono text-sm">2</span>
                    First request
                </h2>
                <p className="text-gray-400">
                    Call the analysis endpoint directly from your backend using your API key and wallet address.
                </p>

                <div className="bg-surface border border-white/10 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                    <code className="text-gray-300">
                        <span className="text-gray-500"># Example using fetch (Node 18+ / modern runtimes)</span><br />
                        <span className="text-purple-400">const</span> apiKey = <span className="text-green-400">&apos;YOUR_API_KEY&apos;</span>;<br />
                        <span className="text-purple-400">const</span> userAddress = <span className="text-green-400">&apos;0xYOURWALLET...&apos;</span>;<br />
                        <br />
                        <span className="text-purple-400">const</span> url = <span className="text-green-400">&apos;https://api.cencera.xyz/v1/analyze&apos;</span> +<br />
                        &nbsp;&nbsp;<span className="text-green-400">&apos;?q=vitalik.eth&amp;chain=1&amp;user=&apos;</span> + userAddress;<br />
                        <br />
                        <span className="text-purple-400">const</span> res = <span className="text-purple-400">await</span> fetch(url, {"{"}<br />
                        &nbsp;&nbsp;headers: {"{"}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">&apos;Authorization&apos;</span>: <span className="text-green-400">&apos;Bearer &apos;</span> + apiKey,<br />
                        &nbsp;&nbsp;{"}"}<br />
                        {"}"});<br />
                        <span className="text-purple-400">const</span> data = <span className="text-purple-400">await</span> res.json();
                    </code>
                </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-mono text-sm">3</span>
                    Use the trust score
                </h2>
                <p className="text-gray-400">
                    Read the response and surface the trust score and risk flags inside your product.
                </p>

                <div className="bg-surface border border-white/10 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                    <code className="text-gray-300">
                        <span className="text-purple-400">const</span> score = data.trust_score;<br />
                        <span className="text-purple-400">const</span> level = data.risk_level;<br />
                        <span className="text-purple-400">const</span> flags = data.risk_flags;<br />
                        <br />
                        <span className="text-blue-400">console</span>.log(<span className="text-green-400">&apos;Score&apos;</span>, score, <span className="text-green-400">&apos;level&apos;</span>, level);<br />
                        <span className="text-blue-400">console</span>.log(<span className="text-green-400">&apos;Flags&apos;</span>, flags);
                    </code>
                </div>
            </div>

        </div>
    );
}
