"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

// ── Section config ────────────────────────────────────────────────
const SECTIONS = [
    { id: "hero", label: "Home", quip: "Hi there! I'm your guide ✨", mood: "wave" },
    { id: "capabilities", label: "Intelligence", quip: "Threats never sleep. But I do sometimes... 💤", mood: "sleepy" },
    { id: "process", label: "Trust Pipeline", quip: "Analyzing... oh, you're safe! 💚", mood: "love" },
    { id: "darkforest", label: "Risk Reports", quip: "Wait, did you see that?! 😰", mood: "danger" },
    { id: "who-its-for", label: "Who It's For", quip: "We protect the best builders.", mood: "happy" },
    { id: "roadmap", label: "Roadmap", quip: "Hmm, mapping the future... 🤔", mood: "confused" },
    { id: "faq", label: "FAQ", quip: "Ask me! I love questions! 🤩", mood: "excited" },
    { id: "metrics", label: "Network Stats", quip: "Look at those numbers... whoa.", mood: "alert" },
];

type Mood = "happy" | "alert" | "scanning" | "danger" | "excited" | "wave" | "sleepy" | "love" | "confused";
const NEON = "#92DCE5";
const GLOW = `drop-shadow(0 0 6px ${NEON})`;

// ── Cute Bot SVG ─────────────────────────────────────────────────
function BotFace({ mood, glowing, lookX, lookY, near }: {
    mood: Mood; glowing: boolean; lookX: number; lookY: number; near: boolean;
}) {
    const px = lookX * 3;
    const py = lookY * 4;

    const eyes = () => {
        if (mood === "danger") return (
            <>
                <motion.path d="M 12 18 L 18 22" stroke={NEON} strokeWidth="2.5" strokeLinecap="round" />
                <motion.path d="M 28 22 L 34 18" stroke={NEON} strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="15" cy="25" r="3" fill={NEON} />
                <circle cx="31" cy="25" r="3" fill={NEON} />
            </>
        );
        if (mood === "sleepy") return (
            <>
                <path d="M 11 25 Q 15 28 19 25" fill="none" stroke={NEON} strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
                <path d="M 27 25 Q 31 28 35 25" fill="none" stroke={NEON} strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
                <motion.text x="32" y="14" fontSize="10" fill={NEON} animate={{ opacity: [0, 1, 0], y: [0, -5, -10] }} transition={{ duration: 2, repeat: Infinity }}>z</motion.text>
                <motion.text x="38" y="8" fontSize="14" fill={NEON} animate={{ opacity: [0, 1, 0], y: [0, -5, -10] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }}>Z</motion.text>
            </>
        );
        if (mood === "love") return (
            <>
                <motion.path d="M 15 21 C 15 21 12 18 10 20 C 8 22 10 26 15 29 C 20 26 22 22 20 20 C 18 18 15 21 15 21 Z" fill={NEON} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                <motion.path d="M 31 21 C 31 21 28 18 26 20 C 24 22 26 26 31 29 C 36 26 38 22 36 20 C 34 18 31 21 31 21 Z" fill={NEON} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, delay: 0.2, repeat: Infinity }} />
            </>
        );
        if (mood === "excited") return (
            <>
                <path d="M 11 26 L 15 20 L 19 26 L 15 23 Z" fill={NEON} />
                <path d="M 27 26 L 31 20 L 35 26 L 31 23 Z" fill={NEON} />
                <motion.circle cx="15" cy="20" r="1.5" fill="white" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} />
                <motion.circle cx="31" cy="20" r="1.5" fill="white" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.6, repeat: Infinity }} />
            </>
        );
        if (mood === "confused") return (
            <>
                <circle cx={14 + px} cy={24 + py} r="4" fill={NEON} />
                <circle cx={32 + px} cy={24 + py} r="2.5" fill={NEON} />
                <path d="M 11 18 Q 14 15 17 18" fill="none" stroke={NEON} strokeWidth="2" strokeLinecap="round" />
                <path d="M 29 19 Q 32 17 35 19" fill="none" stroke={NEON} strokeWidth="2" strokeLinecap="round" />
            </>
        );
        if (mood === "scanning") return (
            <>
                <rect x="10" y="23" width="10" height="4" rx="2" fill="rgba(146,220,229,0.2)" />
                <motion.rect x="10" y="23" width="4" height="4" rx="2" fill={NEON} animate={{ x: [10, 16, 10] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                <rect x="26" y="23" width="10" height="4" rx="2" fill="rgba(146,220,229,0.2)" />
                <motion.rect x="26" y="23" width="4" height="4" rx="2" fill={NEON} animate={{ x: [26, 32, 26] }} transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 0.2 }} />
            </>
        );
        // Default happy/alert/wave
        return (
            <>
                <circle cx={15 + px} cy={24 + py} r={near ? 4.5 : 3.5} fill={NEON} />
                <circle cx={15 + px + 1} cy={24 + py - 1} r="1.5" fill="white" opacity="0.8" />

                <circle cx={31 + px} cy={24 + py} r={near ? 4.5 : 3.5} fill={NEON} />
                <circle cx={31 + px + 1} cy={24 + py - 1} r="1.5" fill="white" opacity="0.8" />

                {mood === "wave" || mood === "happy" ? (
                    <>
                        <path d="M 12 18 Q 15 15 18 18" fill="none" stroke={NEON} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                        <path d="M 28 18 Q 31 15 34 18" fill="none" stroke={NEON} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                    </>
                ) : null}
            </>
        );
    };

    const mouth = () => {
        if (mood === "sleepy") return <circle cx="23" cy="33" r="2" fill="none" stroke={NEON} strokeWidth="1.5" opacity="0.5" />;
        if (mood === "danger") return <path d="M 19 35 Q 23 31 27 35" stroke={NEON} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8" />;
        if (mood === "confused") return <path d="M 20 34 L 23 34 L 26 32" stroke={NEON} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8" />;
        if (mood === "excited" || mood === "happy" || mood === "wave" || mood === "love")
            return <path d={near ? "M 18 32 Q 23 38 28 32" : "M 19 32 Q 23 36 27 32"} stroke={NEON} strokeWidth="2.5" fill="none" strokeLinecap="round" />;
        if (mood === "alert") return <line x1="20" y1="33" x2="26" y2="33" stroke={NEON} strokeWidth="2" strokeLinecap="round" opacity="0.8" />;
        return null; // scanning has no mouth
    };

    return (
        <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
            <svg viewBox="0 0 46 54" width="56" height="66" fill="none" xmlns="http://www.w3.org/2000/svg"
                style={{
                    filter: glowing
                        ? `drop-shadow(0 0 16px ${NEON}66)`
                        : "drop-shadow(0 8px 16px rgba(0,0,0,0.4))"
                }}>

                {/* Cute Antenna */}
                <path d="M 23 4 L 23 10" stroke={NEON} strokeWidth="3" strokeLinecap="round" />
                <motion.circle cx="23" cy="4" r="3.5" fill={NEON}
                    animate={{ opacity: [1, 0.6, 1], scale: [1, 1.25, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }} style={{ filter: GLOW }} />

                {/* Main Orb Body */}
                <rect x="4" y="10" width="38" height="36" rx="18" fill="rgba(18, 18, 18, 1)" stroke="rgba(146,220,229,0.7)" strokeWidth="2" />
                <rect x="5" y="11" width="36" height="34" rx="17" fill="url(#glass)" />

                {/* Cheeks */}
                {(mood === "happy" || mood === "love" || mood === "excited" || mood === "wave") && (
                    <>
                        <ellipse cx="10" cy="28" rx="3" ry="2" fill={NEON} opacity="0.6" style={{ filter: GLOW }} />
                        <ellipse cx="36" cy="28" rx="3" ry="2" fill={NEON} opacity="0.6" style={{ filter: GLOW }} />
                    </>
                )}

                {eyes()}
                {mouth()}

                {/* Floating Ring / Base */}
                <ellipse cx="23" cy="50" rx="12" ry="2" fill="none" stroke={NEON} strokeWidth="1" opacity="0.3" />
                <motion.ellipse cx="23" cy="50" rx="4" ry="1" fill={NEON} opacity="0.5"
                    animate={{ rx: [4, 10, 4], opacity: [0.5, 0.1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }} />

                {/* Definitions */}
                <defs>
                    <linearGradient id="glass" x1="4" y1="10" x2="42" y2="46" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </motion.div>
    );
}

// ── Main Component ────────────────────────────────────────────────
export default function ScrollGuide() {
    // Safe initial values — no window access at module level
    const targetX = useMotionValue(0);
    const targetY = useMotionValue(0);

    const springX = useSpring(targetX, { stiffness: 80, damping: 20, mass: 0.8 });
    const springY = useSpring(targetY, { stiffness: 80, damping: 20, mass: 0.8 });

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

        function wander() {
            idleAngle.current += 0.004;
            const t = idleAngle.current;

            // Full viewport wandering using Lissajous-like smooth curves
            const w = window.innerWidth;
            const h = window.innerHeight;
            const cx = w / 2;
            const cy = h / 2;
            const ampX = cx - 80; // Keep away from edges
            const ampY = cy - 100;

            // Complex smooth path exploring the whole screen
            const nx = cx + Math.sin(t) * ampX * Math.sin(t * 0.4);
            const ny = cy + Math.cos(t * 1.3) * ampY * Math.cos(t * 0.6);

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

            // Bot trails the cursor closer
            const OX = 35, OY = 45;
            const tx = Math.max(30, Math.min(e.clientX + OX, window.innerWidth - 60));
            const ty = Math.max(30, Math.min(e.clientY + OY, window.innerHeight - 80));
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
