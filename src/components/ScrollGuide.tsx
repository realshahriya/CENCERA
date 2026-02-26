"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

// ── Section config ────────────────────────────────────────────────
const SECTIONS = [
    { id: "hero", label: "Home", quip: "Welcome! I'll guide you 👋", mood: "happy" },
    { id: "features", label: "Intelligence", quip: "Threats never sleep. Neither do I. ⚡", mood: "alert" },
    { id: "trust", label: "Trust Pipeline", quip: "Analyzing... trust confirmed ✓", mood: "scanning" },
    { id: "darkforest", label: "Risk Reports", quip: "I see danger you can't see. 🔍", mood: "danger" },
    { id: "who-its-for", label: "Who It's For", quip: "Built for those who protect.", mood: "happy" },
    { id: "roadmap", label: "Roadmap", quip: "The future is already mapped.", mood: "scanning" },
    { id: "faq", label: "FAQ", quip: "Ask me anything! I know everything.", mood: "happy" },
    { id: "stats", label: "Network Stats", quip: "Numbers don't lie. Trust me.", mood: "alert" },
];

type Mood = "happy" | "alert" | "scanning" | "danger" | "excited" | "wave";
const NEON = "#92DCE5";
const GLOW = `drop-shadow(0 0 6px ${NEON})`;

// ── Bot SVG Face ─────────────────────────────────────────────────
function BotFace({ mood, glowing, lookX, lookY, near }: {
    mood: Mood; glowing: boolean; lookX: number; lookY: number; near: boolean;
}) {
    const px = lookX * 2.5;
    const py = lookY * 2;

    const eyes = () => {
        if (mood === "danger") return (
            <>
                <line x1="11" y1="25" x2="19" y2="31" stroke={NEON} strokeWidth="2.2" strokeLinecap="round" style={{ filter: GLOW }} />
                <line x1="19" y1="25" x2="11" y2="31" stroke={NEON} strokeWidth="2.2" strokeLinecap="round" style={{ filter: GLOW }} />
                <line x1="29" y1="25" x2="37" y2="31" stroke={NEON} strokeWidth="2.2" strokeLinecap="round" style={{ filter: GLOW }} />
                <line x1="37" y1="25" x2="29" y2="31" stroke={NEON} strokeWidth="2.2" strokeLinecap="round" style={{ filter: GLOW }} />
            </>
        );
        if (mood === "scanning") return (
            <>
                <rect x="10" y="26" width="10" height="4" rx="2" fill="rgba(146,220,229,0.12)" stroke={NEON} strokeWidth="0.7" />
                <motion.rect x="10" y="26" width="4" height="4" rx="2" fill={NEON} opacity="0.7"
                    animate={{ x: [10, 16, 10] }} transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }} />
                <rect x="28" y="26" width="10" height="4" rx="2" fill="rgba(146,220,229,0.12)" stroke={NEON} strokeWidth="0.7" />
                <motion.rect x="28" y="26" width="4" height="4" rx="2" fill={NEON} opacity="0.7"
                    animate={{ x: [28, 34, 28] }} transition={{ duration: 1.1, repeat: Infinity, ease: "linear", delay: 0.3 }} />
            </>
        );
        if (mood === "excited") return (
            <>
                <motion.text x="10" y="32" fontSize="10" fill={NEON} style={{ filter: GLOW }}>★</motion.text>
                <motion.text x="28" y="32" fontSize="10" fill={NEON} style={{ filter: GLOW }}>★</motion.text>
            </>
        );
        // happy / alert / wave — look at cursor
        return (
            <>
                <circle cx="15" cy="28" r={near ? 5.5 : 5} fill="#111" stroke="rgba(146,220,229,0.2)" strokeWidth="0.8" />
                <circle cx={15 + px} cy={28 + py} r={near ? 3.2 : 2.8} fill={NEON} style={{ filter: GLOW }} />
                <circle cx={15 + px + 1} cy={28 + py - 1} r="0.8" fill="white" opacity="0.8" />

                <circle cx="33" cy="28" r={near ? 5.5 : 5} fill="#111" stroke="rgba(146,220,229,0.2)" strokeWidth="0.8" />
                <circle cx={33 + px} cy={28 + py} r={near ? 3.2 : 2.8} fill={NEON} style={{ filter: GLOW }} />
                <circle cx={33 + px + 1} cy={28 + py - 1} r="0.8" fill="white" opacity="0.8" />

                {mood === "alert" && (
                    <>
                        <path d="M 10 24 L 15 27 L 20 24" stroke={NEON} strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5" />
                        <path d="M 28 24 L 33 27 L 38 24" stroke={NEON} strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5" />
                    </>
                )}
            </>
        );
    };

    const mouth = () => {
        if (mood === "happy" || mood === "wave" || mood === "excited")
            return <path d={near ? "M 16 38 Q 24 44 32 38" : "M 16 38 Q 24 42 32 38"}
                stroke={NEON} strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.85" />;
        if (mood === "alert")
            return <path d="M 16 39 L 32 39" stroke={NEON} strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />;
        if (mood === "scanning")
            return <rect x="14" y="37" width="20" height="4" rx="2" fill="none" stroke={NEON} strokeWidth="0.8" opacity="0.5" />;
        if (mood === "danger")
            return <path d="M 16 42 Q 24 37 32 42" stroke={NEON} strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.85" />;
        return null;
    };

    return (
        <svg viewBox="0 0 48 60" width="60" height="76" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{
                filter: glowing
                    ? "drop-shadow(0 0 14px rgba(146,220,229,0.5))"
                    : "drop-shadow(0 0 5px rgba(0,0,0,0.7))"
            }}>
            {/* Antenna */}
            <line x1="24" y1="0" x2="24" y2="8" stroke={NEON} strokeWidth="1.6" strokeLinecap="round" />
            <motion.circle cx="24" cy="3.5" r="2.5" fill={NEON}
                animate={{ opacity: [1, 0.2, 1], r: [2.5, 3.2, 2.5] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                style={{ filter: GLOW }} />

            {/* Neck */}
            <rect x="20" y="8" width="8" height="5" rx="1.5" fill="#141414" stroke="rgba(146,220,229,0.25)" strokeWidth="0.8" />

            {/* Head */}
            <path d="M 4 16 L 44 16 L 46 19 L 46 46 L 44 48 L 4 48 L 2 46 L 2 19 Z"
                fill="#0e0e0e" stroke="rgba(146,220,229,0.3)" strokeWidth="1.2" />
            <rect x="7" y="19" width="34" height="27" rx="2" fill="rgba(146,220,229,0.02)" />

            {/* Screws */}
            {[[7, 19], [41, 19], [7, 46], [41, 46]].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="1.2" fill="rgba(146,220,229,0.2)" />
            ))}

            {eyes()}
            {mouth()}

            {/* Wave arm */}
            {mood === "wave" && (
                <motion.g
                    animate={{ rotate: [-15, 20, -15] }}
                    transition={{ duration: 0.35, repeat: 5, ease: "easeInOut" }}
                    style={{ transformOrigin: "44px 32px" }}>
                    <line x1="44" y1="32" x2="52" y2="23" stroke={NEON} strokeWidth="2" strokeLinecap="round" style={{ filter: GLOW }} />
                    <circle cx="53" cy="22" r="2" fill={NEON} style={{ filter: GLOW }} />
                </motion.g>
            )}

            {/* Chin */}
            <rect x="15" y="48" width="18" height="7" rx="2.5" fill="#0e0e0e" stroke="rgba(146,220,229,0.2)" strokeWidth="0.8" />
            <line x1="18" y1="51.5" x2="30" y2="51.5" stroke="rgba(146,220,229,0.3)" strokeWidth="0.8" strokeLinecap="round" />
        </svg>
    );
}

// ── Main Component ────────────────────────────────────────────────
export default function ScrollGuide() {
    // Safe initial values — no window access at module level
    const targetX = useMotionValue(0);
    const targetY = useMotionValue(0);

    const springX = useSpring(targetX, { stiffness: 30, damping: 15, mass: 1.1 });
    const springY = useSpring(targetY, { stiffness: 30, damping: 15, mass: 1.1 });

    const [mounted, setMounted] = useState(false);
    const [mood, setMood] = useState<Mood>("happy");
    const [quip, setQuip] = useState<string | null>(null);
    const [glowing, setGlowing] = useState(false);
    const [lookX, setLookX] = useState(0);
    const [lookY, setLookY] = useState(0);
    const [near] = useState(false);

    // All mutable state in refs to avoid stale closures in event listeners
    const botPos = useRef({ x: 0, y: 0 });
    const lastCursor = useRef({ x: 0, y: 0, time: 0 });
    const moodLocked = useRef(false);
    const activeSection = useRef(-1); // -1 so first section always triggers
    const idleRaf = useRef(0);
    const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const idleAngle = useRef(0);
    const quipTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const moodLockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    // ── Helpers (stable — use only refs, not state) ───────────────
    function fireQuip(msg: string, ms = 3200) {
        setQuip(msg);
        setGlowing(true);
        if (quipTimer.current) clearTimeout(quipTimer.current);
        quipTimer.current = setTimeout(() => { setQuip(null); setGlowing(false); }, ms);
    }

    function lockMood(m: Mood, ms: number) {
        if (moodLocked.current) return;
        setMood(m);
        moodLocked.current = true;
        if (moodLockTimer.current) clearTimeout(moodLockTimer.current);
        moodLockTimer.current = setTimeout(() => { moodLocked.current = false; }, ms);
    }

    function stopIdle() {
        cancelAnimationFrame(idleRaf.current);
    }

    function startIdle() {
        stopIdle();
        const cx = botPos.current.x;
        const cy = botPos.current.y;
        const r = 50;

        function wander() {
            idleAngle.current += 0.012;
            const t = idleAngle.current;
            const nx = Math.max(50, Math.min(cx + Math.sin(t) * r, window.innerWidth - 100));
            const ny = Math.max(50, Math.min(cy + Math.sin(t * 2) * (r / 2), window.innerHeight - 120));
            targetX.set(nx);
            targetY.set(ny);
            idleRaf.current = requestAnimationFrame(wander);
        }
        idleRaf.current = requestAnimationFrame(wander);
    }

    // ── Mount: set initial centered-right position ────────────────
    useEffect(() => {
        setMounted(true);
        const ix = window.innerWidth * 0.85;
        const iy = window.innerHeight * 0.45;
        targetX.set(ix);
        targetY.set(iy);
        botPos.current = { x: ix, y: iy };
    }, [targetX, targetY]);

    // ── Sync spring values → botPos ref ──────────────────────────
    useEffect(() => {
        const ua = springX.on("change", (v) => { botPos.current.x = v; });
        const ub = springY.on("change", (v) => { botPos.current.y = v; });
        return () => { ua(); ub(); };
    }, [springX, springY]);

    // ── Mouse tracking ────────────────────────────────────────────
    useEffect(() => {
        if (!mounted) return;

        function onMouseMove(e: MouseEvent) {
            const now = Date.now();

            // Bot trails the cursor by an offset
            const OX = 55, OY = 65;
            const tx = Math.max(50, Math.min(e.clientX + OX, window.innerWidth - 100));
            const ty = Math.max(50, Math.min(e.clientY + OY, window.innerHeight - 120));
            targetX.set(tx);
            targetY.set(ty);

            // Eye look direction (bot position vs actual cursor)
            const dx = e.clientX - botPos.current.x;
            const dy = e.clientY - botPos.current.y;
            setLookX(Math.max(-1, Math.min(1, dx / 200)));
            setLookY(Math.max(-1, Math.min(1, dy / 200)));

            // Speed detection — only cursor-speed triggers from mousemove
            const dt = Math.max(1, now - lastCursor.current.time);
            const speed = Math.hypot(
                e.clientX - lastCursor.current.x,
                e.clientY - lastCursor.current.y
            ) / dt;

            if (speed > 2.5) {
                lockMood("danger", 700);
                fireQuip("Whoa! Slow down! 😰", 1600);
            }

            lastCursor.current = { x: e.clientX, y: e.clientY, time: now };

            // Reset idle timer
            stopIdle();
            if (idleTimer.current) clearTimeout(idleTimer.current);
            idleTimer.current = setTimeout(() => {
                if (!moodLocked.current) setMood("scanning");
                fireQuip("*scanning the void...*", 4500);
                startIdle();
            }, 6000);
        }

        window.addEventListener("mousemove", onMouseMove, { passive: true });

        // Start idle after a short wait if mouse hasn't moved
        idleTimer.current = setTimeout(() => {
            startIdle();
        }, 2500);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            stopIdle();
            if (idleTimer.current) clearTimeout(idleTimer.current);
            if (quipTimer.current) clearTimeout(quipTimer.current);
            if (moodLockTimer.current) clearTimeout(moodLockTimer.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mounted, targetX, targetY]);

    // ── Section IntersectionObserver ─────────────────────────────
    useEffect(() => {
        if (!mounted) return;
        const observers: IntersectionObserver[] = [];
        const ratios = new Map<number, number>();

        // Slight delay to ensure DOM is fully painted since this is an ssr:false component
        const timer = setTimeout(() => {
            SECTIONS.forEach(({ id }, i) => {
                const el = document.getElementById(id);
                if (!el) return;
                const obs = new IntersectionObserver((entries) => {
                    entries.forEach((e) => {
                        if (e.isIntersecting) ratios.set(i, e.intersectionRatio);
                        else ratios.delete(i);
                        if (ratios.size > 0) {
                            const best = [...ratios.entries()].sort((a, b) => b[1] - a[1])[0][0];
                            const sec = SECTIONS[best];
                            if (best !== activeSection.current) {
                                // New section entered — update tracker, change mood, fire quip
                                activeSection.current = best;
                                if (!moodLocked.current) setMood(sec.mood as Mood);
                                fireQuip(sec.quip, 3500);
                            }
                        }
                    });
                }, { threshold: [0.1, 0.35, 0.6] });
                obs.observe(el);
                observers.push(obs);
            });
        }, 300);

        return () => {
            clearTimeout(timer);
            observers.forEach((o) => o.disconnect());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mounted]);

    // ── Click — scroll to next section ───────────────────────────
    function goNext() {
        const next = (activeSection.current + 1) % SECTIONS.length;
        document.getElementById(SECTIONS[next].id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        lockMood("excited", 1200);
        fireQuip("Let's go! ⚡", 2000);
    }

    // Render nothing on server or before mount
    if (!mounted) return null;

    return (
        <motion.div
            style={{
                x: springX,
                y: springY,
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 9999,
                pointerEvents: "none",
            }}
            className="hidden md:block"
        >
            {/* Speech bubble */}
            <AnimatePresence>
                {quip && (
                    <motion.div
                        key={quip}
                        initial={{ opacity: 0, y: 8, scale: 0.88 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.88 }}
                        transition={{ duration: 0.18 }}
                        style={{
                            position: "absolute",
                            bottom: "86px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            whiteSpace: "nowrap",
                            pointerEvents: "none",
                        }}
                    >
                        <div style={{
                            position: "relative",
                            background: "rgba(12,12,12,0.96)",
                            border: "1px solid rgba(146,220,229,0.22)",
                            borderRadius: "14px 14px 14px 2px",
                            padding: "7px 13px",
                            boxShadow: "0 0 22px rgba(146,220,229,0.1)",
                        }}>
                            <p style={{
                                fontFamily: "monospace",
                                fontSize: "10px",
                                color: "rgba(146,220,229,0.9)",
                                margin: 0,
                                lineHeight: 1.5,
                            }}>{quip}</p>
                            {/* Tail */}
                            <div style={{
                                position: "absolute",
                                bottom: "-7px",
                                left: "14px",
                                width: 0,
                                height: 0,
                                borderLeft: "7px solid transparent",
                                borderRight: "7px solid transparent",
                                borderTop: "7px solid rgba(12,12,12,0.96)",
                            }} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bot button */}
            <motion.button
                onClick={goNext}
                title="Click to jump to next section"
                style={{
                    display: "block",
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "auto",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    padding: 0,
                }}
                whileHover={{ scale: 1.14 }}
                whileTap={{ scale: 0.87, rotate: -10 }}
            >
                {/* Body float */}
                <motion.div
                    animate={{ y: [0, -5, 0], rotate: [-1.5, 1.5, -1.5] }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <BotFace mood={mood} glowing={glowing} lookX={lookX} lookY={lookY} near={near} />
                </motion.div>
            </motion.button>
        </motion.div>
    );
}
