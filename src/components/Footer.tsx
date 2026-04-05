import { HardDrive } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2 font-bold">
        <HardDrive className="w-5 h-5 text-primary" />
        DiskBar
      </div>
      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
        <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
        <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
        <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
        <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        <Link to="/refund" className="hover:text-foreground transition-colors">Refund</Link>
        <Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link>
      </div>
      <p className="text-xs text-muted-foreground">© 2026 DiskBar. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
