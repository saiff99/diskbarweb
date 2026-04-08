import logo from "@/assets/logo.webp";
import { useState } from "react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
];

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-bold text-lg" onClick={() => setActive(null)}>
          <img src={logo} alt="DiskBar logo" className="w-5 h-5" />
          DiskBar
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`relative pb-1 hover:text-foreground transition-colors ${active === link.href ? "text-foreground" : ""}`}
            >
              {link.label}
              {active === link.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-primary rounded-full" />
              )}
            </a>
          ))}
        </div>
        <a href="#download" className="glow-button text-sm px-4 py-2">
          Download
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
