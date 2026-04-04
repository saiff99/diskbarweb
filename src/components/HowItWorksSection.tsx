import { Download, Cable, MousePointerClick } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { icon: Download, title: "Install DiskBar", desc: "Download and drop it into your Applications folder." },
  { icon: Cable, title: "Connect Your Device", desc: "Plug in any USB, SSD, or external hard drive." },
  { icon: MousePointerClick, title: "Open or Eject Safely", desc: "One click to open the drive or safely eject it." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-14 lg:py-20 bg-secondary/30">
    <div className="section-container">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">How It Works</p>
        <h2 className="text-3xl sm:text-4xl font-bold">Three steps. That's it.</h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.15} className="text-center">
            <div className="glass-card p-8 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <s.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary/60 uppercase tracking-widest">Step {i + 1}</span>
              <h3 className="font-bold text-xl">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
