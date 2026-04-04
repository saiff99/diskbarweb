import { HardDrive, CircleArrowUp, Monitor, Zap, Bell, Usb } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  { icon: HardDrive, title: "Real-time Disk Detection", desc: "Automatically detects every connected drive the moment it's plugged in." },
  { icon: CircleArrowUp, title: "One-click Safe Eject", desc: "Safely eject any drive with a single click from your menu bar." },
  { icon: Monitor, title: "Clean Menu Bar UI", desc: "A minimal, native-feeling interface that blends into macOS seamlessly." },
  { icon: Zap, title: "Lightweight & Fast", desc: "Uses nearly zero resources. You won't even know it's running." },
  { icon: Bell, title: "Smart Notifications", desc: "Get notified when a drive is connected, ejected, or needs attention." },
  { icon: Usb, title: "SSD & USB Support", desc: "Works with every type of external storage — USB, SSD, HDD, and more." },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 lg:py-32">
    <div className="section-container">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Features</p>
        <h2 className="text-3xl sm:text-4xl font-bold">Everything you need. Nothing you don't.</h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <AnimatedSection key={f.title} delay={i * 0.08}>
            <div className="glass-card-hover p-6 h-full">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
