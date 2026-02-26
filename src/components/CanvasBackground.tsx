"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
// @ts-ignore
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
// @ts-ignore
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";

const VERT = `
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PHI 1.618033988749
attribute float aIndex;
attribute float aSize;
attribute float aPhase;
uniform float uCount;
uniform float uFormA;
uniform float uFormB;
uniform float uMix;
uniform float uTime;
uniform vec3 uMouse;
uniform float uMouseRadius;
uniform float uPointSize;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uScrollVel;
varying vec3 vColor;
varying float vAlpha;
float hash(float n) { return fract(sin(n + 0.1) * 43758.5453); }
vec3 formSphere(float i, float n) {
float p = acos(1.0 - 2.0 * (i + 0.5) / n);
float t = PI2 * PHI * i;
float r = 2.8 + hash(i * 6.7) * 0.4;
return r * vec3(sin(p)*cos(t), sin(p)*sin(t), cos(p));
}
vec3 formCube(float i, float n) {
float r = 2.2;
if (hash(i * 1.1) < 0.3) {
float face = floor(mod(i, 6.0));
float u = (hash(i * 2.2) * 2.0 - 1.0) * r;
float v = (hash(i * 3.3) * 2.0 - 1.0) * r;
if (face == 0.0) return vec3(r, u, v);
if (face == 1.0) return vec3(-r, u, v);
if (face == 2.0) return vec3(u, r, v);
if (face == 3.0) return vec3(u, -r, v);
if (face == 4.0) return vec3(u, v, r);
return vec3(u, v, -r);
} else {
float edge = floor(mod(i, 12.0));
float t = (hash(i * 4.4) * 2.0 - 1.0) * r;
float s1 = (hash(i * 5.5) > 0.5 ? 1.0 : -1.0) * r;
float s2 = (hash(i * 6.6) > 0.5 ? 1.0 : -1.0) * r;
if (edge < 4.0) return vec3(t, s1, s2);
if (edge < 8.0) return vec3(s1, t, s2);
return vec3(s1, s2, t);
}
}
vec3 formDoubleHelix(float i, float n) {
float t = i / n * PI2 * 3.0;
float r = 1.5;
float y = (i / n - 0.5) * 8.0;
float strand = hash(i * 1.1) > 0.5 ? 0.0 : PI;
if (hash(i * 2.2) < 0.15) {
float mix_val = hash(i * 3.3) * 2.0 - 1.0;
return vec3(mix_val * r * cos(t), y, mix_val * r * sin(t));
}
r += hash(i * 4.4) * 0.2;
return vec3(r * cos(t + strand), y, r * sin(t + strand));
}
vec3 formShield(float i, float n) {
float h = hash(i * 1.1);
float y = 3.0 - h * 6.0;
float w = 2.5 * (1.0 - pow(max(0.0, -y / 3.0), 2.0));
float x = 0.0;
if (hash(i * 2.2) < 0.4) {
x = (hash(i * 3.3) > 0.5 ? w : -w);
} else {
x = (hash(i * 4.4) * 2.0 - 1.0) * w;
}
float z = 1.0 - (x*x) / (w*w + 0.01) * 0.5;
return vec3(x, y, z + (hash(i*5.5)-0.5)*0.2);
}
vec3 formDiamond(float i, float n) {
float r = 2.6;
float type = hash(i * 1.1);
vec3 p = vec3(0.0);
if (type < 0.2) {
float u = hash(i * 2.2) * 2.0 - 1.0;
float v = hash(i * 3.3) * 2.0 - 1.0;
float w = hash(i * 4.4) * 2.0 - 1.0;
vec3 pSq = vec3(u, v, w);
p = pSq / (abs(pSq.x) + abs(pSq.y) + abs(pSq.z)) * (r * 0.3) * hash(i * 5.5);
} else if (type < 0.5) {
float u = hash(i * 2.2) * 2.0 - 1.0;
float v = hash(i * 3.3) * 2.0 - 1.0;
float w = hash(i * 4.4) * 2.0 - 1.0;
vec3 pSq = vec3(u, v, w);
p = pSq / (abs(pSq.x) + abs(pSq.y) + abs(pSq.z)) * r;
} else {
float edge = floor(mod(i * 7.1, 12.0));
float t = hash(i * 2.2);
vec3 v1 = vec3(0.0); vec3 v2 = vec3(0.0);
if (edge < 4.0) { v1 = vec3(0.0, r, 0.0); }
else if (edge < 8.0) { v1 = vec3(0.0, -r, 0.0); }
else if (edge == 8.0) { v1 = vec3(r,0.0,0.0); v2 = vec3(0.0,0.0,r); }
else if (edge == 9.0) { v1 = vec3(0.0,0.0,r); v2 = vec3(-r,0.0,0.0); }
else if (edge == 10.0) { v1 = vec3(-r,0.0,0.0); v2 = vec3(0.0,0.0,-r); }
else { v1 = vec3(0.0,0.0,-r); v2 = vec3(r,0.0,0.0); }
if (edge < 8.0) {
float e2 = mod(edge, 4.0);
if (e2 == 0.0) v2 = vec3(r,0.0,0.0);
else if (e2 == 1.0) v2 = vec3(-r,0.0,0.0);
else if (e2 == 2.0) v2 = vec3(0.0,0.0,r);
else v2 = vec3(0.0,0.0,-r);
}
p = mix(v1, v2, t) + (hash(i*3.3)-0.5)*0.1;
}
float tilt = 0.4;
return vec3(p.x, p.y * cos(tilt) - p.z * sin(tilt), p.y * sin(tilt) + p.z * cos(tilt));
}
vec3 formNetwork(float i, float n) {
float node = floor(mod(i * 7.1, 5.0));
vec3 c = vec3(0.0);
if(node == 0.0) c = vec3(0.0, 2.0, 0.0);
if(node == 1.0) c = vec3(-2.0, -1.5, 1.0);
if(node == 2.0) c = vec3(2.0, -1.0, -1.0);
if(node == 3.0) c = vec3(-1.5, 1.0, -2.0);
if(node == 4.0) c = vec3(1.5, 0.5, 2.0);
if (hash(i*1.1) < 0.4) {
float r = hash(i*2.2) * 1.2;
float theta = hash(i*3.3) * PI2;
float phi = acos(1.0 - 2.0 * hash(i*4.4));
return c + r * vec3(sin(phi)*cos(theta), sin(phi)*sin(theta), cos(phi));
} else {
float node2 = mod(node + 1.0 + floor(hash(i*5.5)*3.0), 5.0);
vec3 c2 = vec3(0.0);
if(node2 == 0.0) c2 = vec3(0.0, 2.0, 0.0);
if(node2 == 1.0) c2 = vec3(-2.0, -1.5, 1.0);
if(node2 == 2.0) c2 = vec3(2.0, -1.0, -1.0);
if(node2 == 3.0) c2 = vec3(-1.5, 1.0, -2.0);
if(node2 == 4.0) c2 = vec3(1.5, 0.5, 2.0);
return mix(c, c2, hash(i*6.6)) + (hash(i*7.7)-0.5)*0.2;
}
}
vec3 getForm(float id, float i, float n) {
if (id < 0.5) return formSphere(i, n);
if (id < 1.5) return formCube(i, n);
if (id < 2.5) return formDoubleHelix(i, n);
if (id < 3.5) return formShield(i, n);
if (id < 4.5) return formDiamond(i, n);
return formNetwork(i, n);
}
void main() {
vec3 posA = getForm(uFormA, aIndex, uCount);
vec3 posB = getForm(uFormB, aIndex, uCount);
float t = uMix * uMix * (3.0 - 2.0 * uMix);
vec3 pos = mix(posA, posB, t);
pos += vec3(sin(uTime*0.5+aPhase*PI2)*0.1, cos(uTime*0.4+aPhase*4.17)*0.1,
sin(uTime*0.3+aPhase*5.03)*0.1);
float vel = min(uScrollVel, 3.0);
pos += vec3(sin(aPhase*20.0+uTime*2.0), cos(aPhase*15.0+uTime*1.5),
sin(aPhase*25.0+uTime*1.8)) * vel * 0.06;
vec3 diff = pos - uMouse;
float dist = length(diff);
if (dist < uMouseRadius && dist > 0.001) {
float f = 1.0 - dist / uMouseRadius;
pos += normalize(diff) * f * f * f * 1.0;
}
vColor = mix(uColorA, uColorB, t) * (0.7 + hash(aIndex * 7.3) * 0.3);
if (dist < uMouseRadius) vColor += (1.0 - dist/uMouseRadius) * 0.2;
vAlpha = 0.28 + aSize * 0.14 + min(vel, 2.0) * 0.04;
vec4 mv = modelViewMatrix * vec4(pos, 1.0);
gl_PointSize = clamp(aSize * uPointSize * (80.0 / -mv.z), 0.8, 22.0);
gl_Position = projectionMatrix * mv;
}
`;
const FRAG = `
varying vec3 vColor;
varying float vAlpha;
void main() {
float d = length(gl_PointCoord - 0.5);
if (d > 0.5) discard;
float a = (1.0 - smoothstep(0.3, 0.5, d)) * vAlpha * 0.4; // Reduced global intensity
gl_FragColor = vec4(vColor, a);
}
`;

class VoidScene {
    N = typeof window !== 'undefined' && innerWidth < 769 ? 3000 : 6000;
    scroll = 0;
    scrollVel = 0;
    mouseNDC = { x: -100, y: -100 };
    mouse3D = new THREE.Vector3(100, 100, 100);
    _v = new THREE.Vector3();
    _d = new THREE.Vector3();
    ren: THREE.WebGLRenderer;
    cam: THREE.PerspectiveCamera;
    targetZ = 7;
    scene: THREE.Scene;
    mat: THREE.ShaderMaterial;
    points: THREE.Points;
    composer: any;
    kf: any[];
    animationFrameId: number | null = null;
    active = true;

    constructor(canvas: HTMLCanvasElement) {
        /* Renderer */
        this.ren = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true });
        this.ren.setSize(window.innerWidth, window.innerHeight);
        this.ren.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.ren.setClearColor(0x111111, 0); // Transparent to match globals.css

        /* Camera */
        this.cam = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
        this.cam.position.set(0, 0, 7);
        this.targetZ = 7;

        /* Scene */
        this.scene = new THREE.Scene();

        /* Particles */
        const geo = new THREE.BufferGeometry();
        const idx = new Float32Array(this.N);
        const sizes = new Float32Array(this.N);
        const phases = new Float32Array(this.N);

        for (let i = 0; i < this.N; i++) {
            idx[i] = i;
            sizes[i] = 0.4 + Math.random() * 1.0;
            phases[i] = Math.random();
        }

        geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(this.N * 3), 3));
        geo.setAttribute('aIndex', new THREE.BufferAttribute(idx, 1));
        geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
        geo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));

        this.mat = new THREE.ShaderMaterial({
            vertexShader: VERT,
            fragmentShader: FRAG,
            uniforms: {
                uCount: { value: this.N },
                uFormA: { value: 0 },
                uFormB: { value: 0 },
                uMix: { value: 0 },
                uTime: { value: 0 },
                uMouse: { value: new THREE.Vector3(100, 100, 100) },
                uMouseRadius: { value: 5.0 },
                uPointSize: { value: 1.2 },
                uColorA: { value: new THREE.Color(0x92DCE5) }, // neon
                uColorB: { value: new THREE.Color(0x92DCE5) }, // neon
                uScrollVel: { value: 0 },
            },
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
        });

        this.points = new THREE.Points(geo, this.mat);
        this.points.frustumCulled = false;
        this.scene.add(this.points);

        /* Post-processing */
        this.composer = new EffectComposer(this.ren);
        this.composer.addPass(new RenderPass(this.scene, this.cam));

        /* Formation keyframes: scroll → formation, camZ, color */
        this.kf = [
            { s: 0.00, f: 0, z: 7, r: 0.57, g: 0.86, b: 0.90 }, // #92DCE5
            { s: 0.07, f: 0, z: 7, r: 0.57, g: 0.86, b: 0.90 },
            { s: 0.19, f: 1, z: 9, r: 0.49, g: 0.80, b: 0.52 }, // #7DCD85
            { s: 0.26, f: 1, z: 9, r: 0.49, g: 0.80, b: 0.52 },
            { s: 0.38, f: 2, z: 8, r: 0.57, g: 0.86, b: 0.90 },
            { s: 0.45, f: 2, z: 8, r: 0.57, g: 0.86, b: 0.90 },
            { s: 0.57, f: 3, z: 7.5, r: 0.90, g: 0.90, b: 0.90 }, // #E6E6E6 (text)
            { s: 0.64, f: 3, z: 7.5, r: 0.90, g: 0.90, b: 0.90 },
            { s: 0.76, f: 4, z: 10, r: 0.49, g: 0.80, b: 0.52 },
            { s: 0.83, f: 4, z: 10, r: 0.49, g: 0.80, b: 0.52 },
            { s: 0.95, f: 5, z: 6, r: 0.57, g: 0.86, b: 0.90 },
            { s: 1.00, f: 5, z: 6, r: 0.57, g: 0.86, b: 0.90 },
        ];

        /* Events */
        window.addEventListener('resize', this.onResize);
        window.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('touchmove', this.onTouchMove, { passive: true });
        window.addEventListener('touchend', this.onTouchEnd);

        this.loop();
    }

    onResize = () => {
        const w = window.innerWidth, h = window.innerHeight;
        this.cam.aspect = w / h;
        this.cam.updateProjectionMatrix();
        this.ren.setSize(w, h);
        this.composer.setSize(w, h);
    }

    onMouseMove = (e: MouseEvent) => {
        this.mouseNDC.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouseNDC.y = -(e.clientY / window.innerHeight) * 2 + 1;
    }

    onTouchMove = (e: TouchEvent) => {
        if (!e.touches[0]) return;
        this.mouseNDC.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        this.mouseNDC.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
    }

    onTouchEnd = () => {
        this.mouseNDC.x = -100;
        this.mouseNDC.y = -100;
    }

    getState(s: number) {
        const kf = this.kf;
        let i = 0;
        while (i < kf.length - 1 && kf[i + 1].s <= s) i++;
        const a = kf[i], b = kf[Math.min(i + 1, kf.length - 1)];
        const range = b.s - a.s;
        const t = range > 0 ? Math.max(0, Math.min(1, (s - a.s) / range)) : 0;
        return {
            fA: a.f, fB: b.f, mix: a.f === b.f ? 0 : t,
            z: a.z + (b.z - a.z) * t,
            rA: a.r, gA: a.g, bA: a.b,
            rB: b.r, gB: b.g, bB: b.b,
        };
    }

    loop = () => {
        if (!this.active) return;
        this.animationFrameId = requestAnimationFrame(this.loop);
        const t = performance.now() * 0.001;
        const st = this.getState(this.scroll);

        const u = this.mat.uniforms;
        u.uFormA.value = st.fA;
        u.uFormB.value = st.fB;
        u.uMix.value = st.mix;
        u.uTime.value = t;
        u.uScrollVel.value += (Math.abs(this.scrollVel) - u.uScrollVel.value) * 0.1;

        u.uColorA.value.setRGB(st.rA, st.gA, st.bA);
        u.uColorB.value.setRGB(st.rB, st.gB, st.bB);

        /* Unproject mouse to z=0 plane */
        this._v.set(this.mouseNDC.x, this.mouseNDC.y, 0.5).unproject(this.cam);
        this._d.copy(this._v).sub(this.cam.position).normalize();
        const dist = -this.cam.position.z / this._d.z;
        this.mouse3D.copy(this.cam.position).addScaledVector(this._d, dist);

        u.uMouse.value.lerp(this.mouse3D, 0.05);

        /* Camera parallax + zoom (clamp NDC to viewport range) */
        this.targetZ += (st.z - this.targetZ) * 0.04;
        const mx = Math.max(-1, Math.min(1, this.mouseNDC.x));
        const my = Math.max(-1, Math.min(1, this.mouseNDC.y));

        this.cam.position.x += (mx * 0.4 - this.cam.position.x) * 0.02;
        this.cam.position.y += (my * 0.25 - this.cam.position.y) * 0.02;
        this.cam.position.z += (this.targetZ - this.cam.position.z) * 0.04;

        this.cam.lookAt(0, 0, 0);

        this.composer.render();
    }

    cleanup() {
        this.active = false;
        if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
        window.removeEventListener('resize', this.onResize);
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('touchmove', this.onTouchMove);
        window.removeEventListener('touchend', this.onTouchEnd);
        this.mat.dispose();
        this.points.geometry.dispose();
        this.ren.dispose();
    }
}

export default function CanvasBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const voidSceneRef = useRef<VoidScene | null>(null);

    useEffect(() => {
        if (canvasRef.current && !voidSceneRef.current) {
            voidSceneRef.current = new VoidScene(canvasRef.current);
        }

        const handleScroll = () => {
            if (voidSceneRef.current) {
                // Simple progress calculation based on scroll
                const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
                const progress = Math.min(1, Math.max(0, window.scrollY / scrollMax));
                voidSceneRef.current.scroll = progress;
                // Optionally pass velocity if we tie into Lenis later
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (voidSceneRef.current) {
                voidSceneRef.current.cleanup();
                voidSceneRef.current = null;
            }
        };
    }, []);

    return (
        <div className="canvas-wrap pointer-events-none fixed inset-0 z-0">
            <canvas ref={canvasRef} className="block h-full w-full" />
        </div>
    );
}
