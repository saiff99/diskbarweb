import AnimatedSection from "./AnimatedSection";
import mockupImg from "@/assets/e9277785-65e5-4127-b48b-f986318cd9bb.png";

const PreviewSection = () => (
  <section className="py-24 lg:py-32">
    <div className="section-container">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Preview</p>
        <h2 className="text-3xl sm:text-4xl font-bold">Designed for macOS. Built for speed.</h2>
      </AnimatedSection>

      <AnimatedSection className="relative max-w-3xl mx-auto">
        <div className="glass-card p-3 sm:p-4">
          {/* macOS title bar */}
          <div className="flex items-center gap-2 mb-3 px-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs text-muted-foreground ml-2">DiskBar</span>
          </div>
          <img
            src={mockupImg}
            alt="DiskBar app preview showing disk list and eject controls"
            className="w-full rounded-lg"
            loading="lazy"
            width={800}
            height={900}
          />
        </div>
        <div className="absolute -inset-12 -z-10 rounded-3xl bg-primary/5 blur-3xl" />
      </AnimatedSection>
    </div>
  </section>
);

export default PreviewSection;
