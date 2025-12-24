"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Waitlist() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes("@")) {
            setStatus("error");
            setMessage("Please enter a valid email address");
            return;
        }

        setStatus("loading");

        try {
            // For now, we'll simulate an API call
            // Replace this with your actual backend endpoint
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Store in localStorage as a backup
            const waitlist = JSON.parse(localStorage.getItem("cencera_waitlist") || "[]");
            waitlist.push({
                email,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem("cencera_waitlist", JSON.stringify(waitlist));

            setStatus("success");
            setMessage("You're on the list! Check your email for updates.");
            setEmail("");
        } catch (error) {
            setStatus("error");
            setMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <section className="relative py-32 px-6 bg-void overflow-hidden border-y border-white/5">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon opacity-5 rounded-full blur-[150px]"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="font-sans text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                    SECURE THE<br />FUTURE.
                </h2>

                <p className="font-mono text-gray-400 text-sm md:text-base mb-12 max-w-2xl mx-auto">
                    Join the waitlist to get early access to CENCERA's trust scoring API.
                    Be among the first to integrate real-time security intelligence into your platform.
                </p>

                {status === "success" ? (
                    <div className="max-w-md mx-auto p-6 bg-neon/10 border border-neon/30 rounded-lg">
                        <div className="flex items-center justify-center gap-3 text-neon">
                            <CheckCircle className="w-6 h-6" />
                            <p className="font-mono text-sm">{message}</p>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                        <div className="relative group">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="ENTER_EMAIL_ADDRESS"
                                disabled={status === "loading"}
                                className="w-full bg-transparent border-b-2 border-white/20 focus:border-neon py-4 px-2 text-white placeholder-gray-600 font-mono text-sm md:text-base outline-none transition-colors disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="absolute right-0 top-1/2 -translate-y-1/2 font-mono text-neon hover:text-white transition-colors disabled:opacity-50 flex items-center gap-2 group"
                            >
                                {status === "loading" ? (
                                    <span className="text-sm">PROCESSING...</span>
                                ) : (
                                    <>
                                        <span className="text-sm font-bold">INITIALIZE</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>

                        {status === "error" && (
                            <p className="mt-4 text-red-500 font-mono text-xs">{message}</p>
                        )}

                        <p className="mt-6 font-mono text-xs text-gray-600">
                            // By joining, you agree to receive updates about CENCERA
                        </p>
                    </form>
                )}

                <div className="mt-16 flex flex-wrap justify-center gap-8 text-xs font-mono text-gray-600">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-neon rounded-full"></div>
                        <span>EARLY ACCESS</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-neon rounded-full"></div>
                        <span>PRIORITY SUPPORT</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-neon rounded-full"></div>
                        <span>EXCLUSIVE UPDATES</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
