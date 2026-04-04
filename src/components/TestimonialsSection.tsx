import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Full-Stack Developer",
    quote: "DiskBar replaced three utilities I was running. It's fast, minimal, and does exactly what it promises.",
  },
  {
    name: "Sophie Chen",
    role: "UI/UX Designer",
    quote: "Finally a disk utility that actually looks like it belongs on macOS. Clean, polished, and beautifully designed.",
  },
  {
    name: "Marcus Johnson",
    role: "Photographer",
    quote: "I swap SD cards and drives all day. DiskBar saves me so much time with one-click ejecting. Love it.",
  },
];

const TestimonialsSection = () => (
  <section className="py-14 lg:py-20">
    <div className="section-container">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl font-bold">Loved by macOS users.</h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="glass-card-hover p-6 h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm leading-relaxed flex-1 mb-6">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
