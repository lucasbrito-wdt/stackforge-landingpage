"use client";

import { useState } from "react";
import { KeyRound, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ActivatePage() {
  const [key, setKey] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    ok: boolean;
    message: string;
  } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_LICENSE_API_URL ?? "https://license.stackforge.app"}/api/v1/activate`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            key: key.trim().toUpperCase(),
            email: email.trim(),
            hardware_fingerprint: "web-browser",
          }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        setResult({
          ok: true,
          message:
            "License activated! Open StackForge and enter your license key in Settings → License to sync.",
        });
      } else {
        setResult({
          ok: false,
          message: data.message ?? "Activation failed. Please try again.",
        });
      }
    } catch {
      setResult({
        ok: false,
        message: "Could not reach the license server. Check your connection.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 mb-4">
            <KeyRound className="w-7 h-7 text-orange-500" />
          </div>
          <h1 className="text-3xl font-bold">Activate License</h1>
          <p className="text-neutral-400 text-sm mt-2">
            Enter your Pro license key and the email used at purchase.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 space-y-4"
        >
          <div>
            <label
              htmlFor="key"
              className="block text-sm font-medium text-neutral-300 mb-1.5"
            >
              License Key
            </label>
            <input
              id="key"
              type="text"
              required
              value={key}
              onChange={(e) => setKey(e.target.value.toUpperCase())}
              placeholder="SF-XXXX-XXXX-XXXX-XXXX"
              className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white font-mono placeholder:text-neutral-600 focus:outline-none focus:border-orange-500/50"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-300 mb-1.5"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500/50"
            />
          </div>

          {result && (
            <div
              className={`flex items-start gap-2 p-3 rounded-lg text-sm ${
                result.ok
                  ? "bg-green-500/10 text-green-400 border border-green-500/20"
                  : "bg-red-500/10 text-red-400 border border-red-500/20"
              }`}
            >
              {result.ok ? (
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              )}
              <span>{result.message}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Activating…
              </>
            ) : (
              "Activate"
            )}
          </button>
        </form>

        <p className="text-neutral-500 text-xs text-center mt-6">
          Don&apos;t have a license?{" "}
          <a href="/pricing" className="text-orange-400 hover:underline">
            View pricing
          </a>
        </p>
      </div>
    </main>
  );
}
