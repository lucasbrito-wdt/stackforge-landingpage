import { PricingTable } from "@/components/pricing-table";
import {
  Cpu,
  Layers,
  Shield,
  Zap,
  Globe,
  Download,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Multi-Stack Support",
    description:
      "PHP 7.4–8.4, Node.js 18–22, Laravel, Express — all managed from one UI.",
  },
  {
    icon: Zap,
    title: "One-Click Setup",
    description:
      "Nginx, MySQL, PostgreSQL, Redis — running in seconds, not hours.",
  },
  {
    icon: Shield,
    title: "Trusted SSL",
    description:
      "Automatic SSL certificates with custom CA trust for seamless HTTPS development.",
  },
  {
    icon: Globe,
    title: "Share Instantly",
    description:
      "Expose local sites via secure tunnels — perfect for client demos and webhooks.",
  },
];

const downloads = [
  { os: "Linux", ext: ".deb / .AppImage", href: "#" },
  { os: "Windows", ext: ".msi", href: "#" },
  { os: "macOS", ext: ".dmg", href: "#" },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-sm mb-8">
            <Cpu className="w-4 h-4" />
            <span>StackForge v2.0 — Now with Pro features</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Your Full-Stack
            <br />
            <span className="text-orange-500">Dev Environment</span>
          </h1>
          <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
            The ultimate local development environment for PHP, Laravel,
            Node.js, and more. One app to manage Nginx, SSL, services, and
            sites — on Linux, Windows, and macOS.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Free
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-700 text-neutral-300 font-medium hover:border-neutral-500 transition-colors"
            >
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything you need
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50"
            >
              <f.icon className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">
          Simple pricing
        </h2>
        <p className="text-neutral-400 text-center mb-12">
          Free forever, or unlock everything with a one-time purchase.
        </p>
        <PricingTable />
      </section>

      {/* Download */}
      <section
        id="download"
        className="max-w-3xl mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Download StackForge</h2>
        <p className="text-neutral-400 mb-10">
          Available for all major platforms. Free tier included.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {downloads.map((d) => (
            <a
              key={d.os}
              href={d.href}
              className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-orange-500/30 transition-colors"
            >
              <p className="font-semibold text-lg">{d.os}</p>
              <p className="text-neutral-500 text-sm mt-1">{d.ext}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-8 text-center text-neutral-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} StackForge. Built by{" "}
          <a
            href="https://github.com/lucasbrito-wdt"
            className="text-orange-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucas Brito
          </a>
          .
        </p>
      </footer>
    </main>
  );
}
