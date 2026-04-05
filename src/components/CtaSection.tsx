import { Download } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CtaSection = () => (
  <section id="download" className="py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute inset-0 hero-gradient" />
    <div className="section-container relative text-center">
      <AnimatedSection className="flex flex-col items-center gap-6">
        <h2 className="text-3xl sm:text-5xl font-extrabold">Download DiskBar Today</h2>
        <p className="text-muted-foreground text-lg max-w-lg">
          Take control of your external drives with the cleanest menu bar utility for macOS.
        </p>
        <a href="#" className="glow-button flex items-center gap-2 text-lg px-10 py-5 rounded-full mt-2">
          <Download className="w-6 h-6" />
          Download for macOS
        </a>
        <p className="text-xs text-muted-foreground">Requires macOS 12 or later · Free to start</p>
      </AnimatedSection>
    </div>
  </section>
);

export default CtaSection;
