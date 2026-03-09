import { Download, Monitor, Apple, Terminal } from "lucide-react";

export const metadata = {
  title: "Download — StackForge",
  description:
    "Download StackForge for Linux, Windows, or macOS. Free tier included.",
};

const releases = [
  {
    os: "Linux",
    icon: Terminal,
    formats: [
      { label: "Debian / Ubuntu (.deb)", href: "#", arch: "amd64" },
      { label: "AppImage", href: "#", arch: "x86_64" },
    ],
    note: "Requires Ubuntu 22.04+ or equivalent. AppImage works on most distributions.",
  },
  {
    os: "Windows",
    icon: Monitor,
    formats: [{ label: "Installer (.msi)", href: "#", arch: "x64" }],
    note: "Requires Windows 10 version 1803+ or Windows 11.",
  },
  {
    os: "macOS",
    icon: Apple,
    formats: [
      { label: "Apple Silicon (.dmg)", href: "#", arch: "aarch64" },
      { label: "Intel (.dmg)", href: "#", arch: "x64" },
    ],
    note: "Requires macOS 11 Big Sur or later.",
  },
];

export default function DownloadPage() {
  return (
    <main className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-sm mb-6">
            <Download className="w-4 h-4" />
            <span>v2.0 — Latest Release</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Download StackForge
          </h1>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Available for all major platforms. The Free tier is included — no
            registration required. Upgrade to Pro anytime from within the app.
          </p>
        </div>

        <div className="space-y-6">
          {releases.map((r) => (
            <div
              key={r.os}
              className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <r.icon className="w-6 h-6 text-orange-500" />
                <h2 className="text-xl font-semibold">{r.os}</h2>
              </div>

              <div className="flex flex-wrap gap-3 mb-3">
                {r.formats.map((f) => (
                  <a
                    key={f.label}
                    href={f.href}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors text-sm"
                  >
                    <Download className="w-4 h-4" />
                    {f.label}
                    <span className="text-orange-200 text-xs">({f.arch})</span>
                  </a>
                ))}
              </div>

              <p className="text-neutral-500 text-sm">{r.note}</p>
            </div>
          ))}
        </div>

        {/* CLI */}
        <div className="mt-12 p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50">
          <h2 className="text-xl font-semibold mb-2">CLI (optional)</h2>
          <p className="text-neutral-400 text-sm mb-4">
            The CLI is bundled with the desktop app. You can also install it
            standalone:
          </p>
          <pre className="bg-neutral-950 rounded-lg p-4 text-sm text-neutral-300 overflow-x-auto">
            <code>curl -fsSL https://stackforge.app/install.sh | bash</code>
          </pre>
        </div>

        {/* System requirements */}
        <div className="mt-12 text-center text-neutral-500 text-sm">
          <p>
            All downloads are code-signed. Verify checksums on the{" "}
            <a href="#" className="text-orange-400 hover:underline">
              releases page
            </a>
            .
          </p>
        </div>
      </section>

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
