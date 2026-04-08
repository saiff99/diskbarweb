import { useState, useEffect } from "react";
import { Home, Download } from "lucide-react";
import logo from "@/assets/logo.webp";

const Navbar = () => {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const check = () => {
      const hash = window.location.hash;
      setShowHome(hash === "#pricing" || hash === "#download");
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <img src={logo} alt="DiskBar logo" className="w-5 h-5" />
          DiskBar
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        </div>
        {showHome ? (
          <a href="#" className="glow-button text-sm px-3 py-2">
            <Home className="w-4 h-4" />
          </a>
        ) : (
          <a href="#download" className="glow-button text-sm px-4 py-2 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
