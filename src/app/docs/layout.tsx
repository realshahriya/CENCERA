"use client";

import DocsHeader from "./components/DocsHeader";
import Sidebar from "./components/Sidebar";

export default function DocumentationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-neon selection:text-black">
            <DocsHeader />

            <div className="flex max-w-[1600px] mx-auto">
                <Sidebar />

                <main className="flex-1 min-h-screen pt-24 px-4 sm:px-8 lg:px-12 pb-20 relative overflow-hidden">
                    {/* Background Grid - Local to content area to avoid sidebar overlap issues if desired, or keep global */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>

            {/* Optional: Add a simple footer or use global footer if responsive */}
        </div>
    );
}
