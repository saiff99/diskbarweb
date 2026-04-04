import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "For casual users",
    features: ["Monitor up to 3 drives", "Open / eject drive", "Limited updates", "Basic support"],
    cta: "Download Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "one-time",
    desc: "For power users",
    features: ["Unlimited drives", "Open / eject drive", "Eject all unlocked", "Regular updates", "Advanced support"],
    cta: "Upgrade to Pro",
    highlighted: true,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-14 lg:py-20 bg-secondary/30">
    <div className="section-container">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Pricing</p>
        <h2 className="text-3xl sm:text-4xl font-bold">Simple pricing. No subscriptions.</h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {plans.map((p, i) => (
          <AnimatedSection key={p.name} delay={i * 0.1}>
            <div className={`glass-card p-8 h-full flex flex-col ${p.highlighted ? "border-primary/50 shadow-[0_0_40px_hsl(var(--glow)/0.1)]" : ""}`}>
              {p.highlighted && (
                <span className="self-start text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-muted-foreground text-sm mt-1 mb-4">{p.desc}</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold">{p.price}</span>
                {p.period && <span className="text-muted-foreground text-sm">/{p.period}</span>}
              </div>
              <ul className="flex-1 space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#download"
                className={`text-center font-semibold py-3 rounded-xl transition-all duration-300 ${
                  p.highlighted
                    ? "glow-button"
                    : "border border-border bg-secondary/50 hover:bg-secondary"
                }`}
              >
                {p.cta}
              </a>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
