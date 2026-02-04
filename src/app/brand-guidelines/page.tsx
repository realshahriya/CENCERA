import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Brand Guidelines",
  description:
    "Official CENCERA brand guidelines: logo usage, colors, typography, and downloadable assets.",
};

const swatches = [
  { name: "Primary", value: "#92DCE5" },
  { name: "Secondary", value: "#7DCD85" },
  { name: "Accent Mint", value: "#88D5B5" },
  { name: "Soft", value: "#F3E8EE" },
  { name: "Base", value: "#111111" },
];

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      </div>
      {children}
    </section>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-surface p-6 sm:p-7">
      <div className="font-mono text-xs text-gray-400 uppercase tracking-widest">
        {title}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default function BrandGuidelinesPage() {
  return (
    <main>
      <Header />

      <div className="section-padding pt-32 sm:pt-36">
        <div className="section-container max-w-6xl space-y-14">
          <header className="space-y-6 border-b border-white/10 pb-10">
            <div className="inline-flex items-center gap-2 border border-white/10 px-3 py-1 rounded-full bg-white/5">
              <span className="w-1.5 h-1.5 bg-[#92DCE5] rounded-full animate-pulse"></span>
              <span className="font-mono text-[10px] text-[#92DCE5] uppercase tracking-widest">
                Brand v1.0
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tighter text-white">
              CENCERA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#92DCE5] to-white">
                Brand Guidelines
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
              Use these rules to keep CENCERA consistent across product UI,
              content, press, and partner integrations.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/logo.png" className="btn-secondary" download>
                DOWNLOAD LOGO
              </a>
              <Link href="/docs" className="btn-primary">
                DEVELOPER DOCS //
              </Link>
            </div>
          </header>

          <Section
            title="Logo"
            subtitle="Use the logo on dark surfaces. Keep clear space, don’t stretch, and don’t recolor the mark."
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Card title="Primary Lockup">
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-6">
                  <Image
                    src="/logo.png"
                    alt="Cencera Logo"
                    width={56}
                    height={56}
                    className="w-10 h-10 sm:w-14 sm:h-14"
                  />
                  <div className="space-y-1">
                    <div className="font-sans font-bold text-2xl tracking-tighter">
                      CENCERA
                    </div>
                    <div className="font-mono text-xs text-gray-400">
                      Trust & Safety Infrastructure
                    </div>
                  </div>
                </div>
              </Card>

              <Card title="Minimum Size & Clear Space">
                <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                  <p>
                    Minimum icon size:{" "}
                    <span className="text-white font-medium">24px</span>.
                    Maintain clear space equal to the icon’s width on all sides.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                      <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                        Do
                      </div>
                      <div className="mt-3 flex items-center justify-center rounded-md bg-void border border-white/10 py-6">
                        <Image
                          src="/logo.png"
                          alt="Cencera Logo"
                          width={32}
                          height={32}
                          className="w-8 h-8"
                        />
                      </div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                      <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                        Don’t
                      </div>
                      <div className="mt-3 flex items-center justify-center rounded-md bg-void border border-white/10 py-6">
                        <div className="scale-x-125">
                          <Image
                            src="/logo.png"
                            alt="Distorted Cencera Logo"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Section>

          <Section
            title="Color Palette"
            subtitle="Use Primary and Secondary for accents, highlights, and UI emphasis. Keep large surfaces calm; use Ink and Soft for contrast and balance."
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {swatches.map((swatch) => (
                <div
                  key={swatch.name}
                  className="card-surface p-5 flex items-center justify-between gap-4"
                >
                  <div className="min-w-0">
                    <div className="text-white font-semibold">{swatch.name}</div>
                    <div className="font-mono text-xs text-gray-400">
                      {swatch.value}
                    </div>
                  </div>
                  <div
                    className="h-10 w-10 rounded-xl border border-white/15"
                    style={{ backgroundColor: swatch.value }}
                  />
                </div>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 pt-2">
              <Card title="Text Colors">
                <div className="space-y-3 font-mono text-xs text-gray-400">
                  <div className="flex items-center justify-between gap-4">
                    <span>Primary</span>
                    <span className="text-white">#E6E6E6</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>Secondary</span>
                    <span className="text-white">#C7C7C7</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>Muted</span>
                    <span className="text-white">#B0B0B0</span>
                  </div>
                </div>
              </Card>

              <Card title="Gradients">
                <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
                  <p>
                    Use subtle gradients for emphasis, especially Primary → Soft
                    on highlight surfaces and in hero moments.
                  </p>
                  <div className="rounded-xl border border-white/10 p-4 bg-gradient-to-r from-[#92DCE5]/30 to-[#F3E8EE]/10">
                    <div className="text-white font-semibold">
                      Primary Accent Gradient
                    </div>
                    <div className="font-mono text-xs text-gray-300">
                      from-[#92DCE5]/30 to-[#F3E8EE]/10
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Section>

          <Section
            title="Typography"
            subtitle="Primary fonts: Poppins and TT Octosquares. Use Poppins for UI and body, with Medium Italic as a signature accent style."
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Card title="TT Octosquares (Headlines)">
                <div className="space-y-3">
                  <div
                    className="text-3xl sm:text-4xl tracking-tight text-white"
                    style={{
                      fontFamily:
                        "TT Octosquares, Poppins, system-ui, -apple-system, Segoe UI, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    TRUST & SAFETY, ENGINEERED.
                  </div>
                  <div className="text-sm text-gray-400 leading-relaxed">
                    Use for titles, hero headlines, and short brand statements.
                  </div>
                </div>
              </Card>

              <Card title="Poppins (UI/Body)">
                <div className="space-y-3">
                  <div className="text-sm text-gray-300">
                    Use for navigation, product UI, and long-form reading.
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="text-white font-medium italic">
                      Poppins Medium Italic
                    </div>
                    <div className="mt-2 text-sm text-gray-400 leading-relaxed">
                      Clean, modern, and readable. Use italics sparingly for
                      emphasis.
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 pt-2">
              <Card title="Additional Fonts">
                <div className="font-mono text-xs text-gray-300 leading-relaxed">
                  League Spartan · Open Sans · Montserrat · Bebas Neue
                </div>
              </Card>
              <Card title="Usage Notes">
                <div className="text-sm text-gray-400 leading-relaxed">
                  Keep font pairings consistent across a surface. If TT
                  Octosquares isn’t available, fall back to Poppins.
                </div>
              </Card>
            </div>
          </Section>

          <Section
            title="Voice & UI Tone"
            subtitle="CENCERA feels technical, calm, and precise. Prefer short labels, uppercase UI actions, and minimal punctuation."
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Card title="Do">
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-[#92DCE5] font-mono text-xs">[✓]</span>
                    Use direct technical language and measurable claims.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#92DCE5] font-mono text-xs">[✓]</span>
                    Keep UI labels short: SCAN, MONITOR, SIMULATE.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#92DCE5] font-mono text-xs">[✓]</span>
                    Use Primary/Secondary as accents for key states and focus.
                  </li>
                </ul>
              </Card>

              <Card title="Don’t">
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-gray-500 font-mono text-xs">[x]</span>
                    Avoid playful or overly casual marketing language.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gray-500 font-mono text-xs">[x]</span>
                    Don’t use Primary/Secondary for long paragraphs or large backgrounds.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gray-500 font-mono text-xs">[x]</span>
                    Don’t distort the logo or apply heavy effects.
                  </li>
                </ul>
              </Card>
            </div>
          </Section>

          <Section
            title="Assets"
            subtitle="Use official assets only. If you need additional formats, export from the source brand files."
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Card title="Logo">
                <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                  <p>
                    The logo is available as a transparent PNG for product UI and
                    docs.
                  </p>
                  <a href="/logo.png" className="btn-primary inline-block" download>
                    DOWNLOAD /logo.png //
                  </a>
                </div>
              </Card>
              <Card title="Press Contact">
                <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
                  <p>
                    For press kits, partnership placements, and brand approvals:
                  </p>
                  <div className="bg-surface border border-white/10 rounded-lg p-4 font-mono text-xs text-white">
                    hello@cencera.xyz
                  </div>
                </div>
              </Card>
            </div>
          </Section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
