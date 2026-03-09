import { Check } from "lucide-react";

const freeFeatures = [
  { label: "3 PHP/Laravel sites", included: true },
  { label: "1 Node.js site", included: true },
  { label: "1 PHP version at a time", included: true },
  { label: "Self-signed SSL", included: true },
  { label: "Basic services", included: true },
  { label: "Tunneling", included: false },
  { label: "Custom CA certificates", included: false },
  { label: "Auto updates", included: false },
  { label: "Priority support", included: false },
];

const proFeatures = [
  "Unlimited PHP/Laravel sites",
  "Unlimited Node.js sites",
  "Multiple PHP versions (isolate)",
  "Trusted CA certificates",
  "All services (Redis, MySQL, PostgreSQL…)",
  "Tunneling (ngrok, Cloudflare)",
  "Auto updates",
  "Priority support",
];

export function PricingTable() {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {/* Free */}
      <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50">
        <h3 className="text-xl font-semibold">Free</h3>
        <p className="text-4xl font-bold mt-4">
          $0{" "}
          <span className="text-sm font-normal text-neutral-500">
            / forever
          </span>
        </p>
        <ul className="mt-8 space-y-3">
          {freeFeatures.map((f) => (
            <li key={f.label} className="flex items-start gap-2.5 text-sm">
              {f.included ? (
                <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
              ) : (
                <span className="w-4 h-4 text-neutral-600 shrink-0 mt-0.5 text-center">
                  ✗
                </span>
              )}
              <span
                className={
                  f.included
                    ? "text-neutral-300"
                    : "text-neutral-600 line-through"
                }
              >
                {f.label}
              </span>
            </li>
          ))}
        </ul>
        <a
          href="#download"
          className="mt-8 block w-full text-center px-4 py-2.5 rounded-lg border border-neutral-700 text-neutral-300 font-medium hover:border-neutral-500 transition-colors"
        >
          Download Free
        </a>
      </div>

      {/* Pro */}
      <div className="p-8 rounded-2xl border border-orange-500/30 bg-orange-500/5 ring-1 ring-orange-500/10 relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-semibold bg-orange-500 text-white rounded-full">
          Popular
        </div>
        <h3 className="text-xl font-semibold">Pro</h3>
        <p className="text-4xl font-bold mt-4">
          $29{" "}
          <span className="text-sm font-normal text-neutral-500">
            / lifetime
          </span>
        </p>
        <ul className="mt-8 space-y-3">
          {proFeatures.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm">
              <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span className="text-neutral-200">{f}</span>
            </li>
          ))}
        </ul>
        <a
          href="https://buy.stripe.com/stackforge_pro"
          className="mt-8 block w-full text-center px-4 py-2.5 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
        >
          Buy Pro License
        </a>
      </div>
    </div>
  );
}
