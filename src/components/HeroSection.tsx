import { Download, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import mockupImg from "@/assets/4993c224-d0bf-499d-b20c-006eb0216fbb.webp";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-16 hero-gradient overflow-hidden">
    <div className="section-container flex flex-col items-center text-center gap-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Now available for macOS
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
      >
        Control Your Disks.
        <br />
        <span className="text-primary">Instantly.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
      >
        DiskBar lets you monitor and safely eject external drives directly from your macOS menu bar.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <a href="#download" className="glow-button flex items-center gap-2 text-base px-8 py-4 rounded-xl">
          <Apple className="w-5 h-5" />
          Download for macOS
        </a>
        <a
          href="#features"
          className="flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-secondary/50 text-foreground font-semibold hover:bg-secondary transition-colors"
        >
          <ArrowDown className="w-5 h-5" />
          View Features
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative mt-8 w-full max-w-sm"
      >
        <div className="glass-card p-2 animate-float">
          <img
            src={mockupImg}
            alt="DiskBar macOS menu bar app showing connected drives"
            className="w-full rounded-xl object-cover"
            width={800}
            height={900}
          />
        </div>
        {/* Glow effect behind mockup */}
        <div className="absolute -inset-8 -z-10 rounded-3xl bg-primary/10 blur-3xl" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
