"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Code, Shield, Zap, Box } from "lucide-react";

const sidebarItems = [
    {
        title: "Getting Started",
        items: [
            { name: "Introduction", href: "/docs", icon: FileText },
            { name: "Quick Start", href: "/docs/quick-start", icon: Zap },
            { name: "Architecture", href: "/docs/architecture", icon: Box },
        ],
    },
    {
        title: "Core Concepts",
        items: [
            { name: "Risk Detection", href: "/docs/risk-detection", icon: Shield },
            { name: "Trust Score", href: "/docs/trust-score", icon: Code },
            { name: "Entity Analysis", href: "/docs/entity-analysis", icon: Box },
            { name: "Transaction Simulator", href: "/docs/transaction-simulator", icon: Zap },
            { name: "Connection Guard", href: "/docs/connection-guard", icon: Shield },
            { name: "Sandbox", href: "/docs/sandbox", icon: Box },
        ],
    },
    {
        title: "API Reference",
        items: [
            { name: "API Overview", href: "/docs/api", icon: Code },
        ],
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 h-screen sticky top-0 border-r border-white/10 bg-black/50 backdrop-blur-md hidden lg:flex flex-col pt-24 pb-8 overflow-y-auto">
            <div className="px-6 mb-8">
                <h2 className="font-mono text-xs text-neon font-bold tracking-widest uppercase mb-2">
                    Documentation
                </h2>
                <div className="h-0.5 w-8 bg-neon"></div>
            </div>

            <nav className="flex-1 px-4 space-y-8">
                {sidebarItems.map((section) => (
                    <div key={section.title}>
                        <h3 className="px-2 font-mono text-[10px] text-gray-500 uppercase tracking-wider mb-3">
                            {section.title}
                        </h3>
                        <ul className="space-y-1">
                            {section.items.map((item) => {
                                const isActive = pathname === item.href;
                                const Icon = item.icon;
                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={`flex items-center gap-3 px-2 py-2 rounded-md transition-all duration-200 group ${isActive
                                                ? "bg-white/5 text-neon"
                                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                                }`}
                                        >
                                            <Icon className={`w-4 h-4 ${isActive ? "text-neon" : "text-gray-500 group-hover:text-white"}`} />
                                            <span className="font-mono text-xs sm:text-sm">
                                                {item.name}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </nav>

            <div className="px-6 mt-auto">
                <div className="p-4 rounded-lg bg-surface border border-white/5">
                    <p className="font-mono text-[10px] text-gray-500 mb-2">Need help?</p>
                    <a
                        href="mailto:support@cencera.xyz"
                        className="text-xs font-bold text-white hover:text-neon transition-colors"
                    >
                        Contact Support →
                    </a>
                </div>
            </div>
        </aside>
    );
}
