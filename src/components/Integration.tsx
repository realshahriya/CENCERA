export default function Integration() {
    return (
        <section className="py-24 px-6 border-t border-white/5">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

                <div className="md:w-1/2">
                    <h3 className="font-mono text-neon text-sm mb-4">// DEVELOPER_FIRST</h3>
                    <h2 className="font-sans text-4xl md:text-5xl font-bold mb-6">
                        INTEGRATION IN<br /> LINES OF CODE.
                    </h2>
                    <p className="font-mono text-gray-400 mb-8 max-w-md">
                        Don't build your own blacklist. Import the Aegis Standard Protocol and inherit security from the entire network.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded bg-white flex items-center justify-center text-black font-bold text-xl">1</div>
                            <div>
                                <h5 className="font-sans font-bold">Install Package</h5>
                                <p className="font-mono text-xs text-gray-500">npm install @aegis/core</p>
                            </div>
                        </div>
                        <div className="h-8 w-px bg-white/10 ml-5"></div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded bg-surface border border-white/20 flex items-center justify-center font-bold text-xl">2</div>
                            <div>
                                <h5 className="font-sans font-bold">Wrap Contract</h5>
                                <p className="font-mono text-xs text-gray-500">Extend AegisGuard in Solidity</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2">
                    <div className="bg-[#0A0A0A] rounded border border-white/10 p-6 font-mono text-sm relative shadow-2xl">
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="overflow-x-auto text-xs md:text-sm text-gray-300">
                            <span className="text-purple-400">import</span> "@aegis/contracts/SecurityLayer.sol";<br /><br />

                            <span className="text-purple-400">contract</span> DeFiVault <span className="text-purple-400">is</span> SecurityLayer {'{'}<br />
                            &nbsp;&nbsp;<span className="text-purple-400">function</span> deposit() <span className="text-purple-400">external payable</span> onlySafe {'{'}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">// Aegis automatically checks msg.sender</span><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">// against global reputation score</span><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;balances[msg.sender] += msg.value;<br />
                            &nbsp;&nbsp;{'}'}<br />
                            {'}'}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
