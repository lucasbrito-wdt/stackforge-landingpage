import { PricingTable } from "@/components/pricing-table";

export const metadata = {
  title: "Pricing — StackForge",
  description:
    "Simple, transparent pricing. Free forever or unlock everything with a one-time purchase.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Simple pricing
        </h1>
        <p className="text-neutral-400 text-center mb-12 max-w-xl mx-auto">
          Free forever, or unlock everything with a one-time purchase.
          No subscriptions, no hidden fees.
        </p>
        <PricingTable />

        {/* FAQ */}
        <div className="mt-20 max-w-2xl mx-auto space-y-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>

          {[
            {
              q: "Is Pro a subscription?",
              a: "No. It's a one-time payment for a lifetime license. Pay once, use forever.",
            },
            {
              q: "Can I use my license on multiple machines?",
              a: "Yes. Pro licenses allow activation on up to 3 devices. You can deactivate and move seats anytime.",
            },
            {
              q: "What payment methods are accepted?",
              a: "We accept credit/debit cards and Pix (Brazil) via Stripe. All payments are secure and encrypted.",
            },
            {
              q: "What happens if I exceed Free plan limits?",
              a: "You'll see a friendly prompt to upgrade. No features break — you just can't add new items beyond the limit.",
            },
            {
              q: "Can I get a refund?",
              a: "Yes. We offer a 30-day money-back guarantee. Contact support and we'll process your refund.",
            },
          ].map((item) => (
            <div key={item.q} className="border-b border-neutral-800 pb-4">
              <h3 className="font-semibold text-neutral-200 mb-2">
                {item.q}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
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
