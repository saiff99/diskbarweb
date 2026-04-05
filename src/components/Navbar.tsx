import logo from "@/assets/logo.webp";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
    <div className="section-container flex items-center justify-between h-16">
      <a href="#" className="flex items-center gap-2 font-bold text-lg">
        <img src={logo} alt="DiskBar logo" className="w-7 h-7" />
        DiskBar
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#features" className="hover:text-foreground transition-colors">Features</a>
        <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
        <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
      </div>
      <a href="#download" className="glow-button text-sm px-4 py-2">
        Download
      </a>
    </div>
  </nav>
);

export default Navbar;
