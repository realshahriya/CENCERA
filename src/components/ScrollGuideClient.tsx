"use client";

import dynamic from "next/dynamic";

const ScrollGuide = dynamic(() => import("./ScrollGuide"), { ssr: false });

export default function ScrollGuideClient() {
    return <ScrollGuide />;
}
