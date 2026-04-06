import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";

const Footer = () => (
  <footer className="border-t border-border py-3">
    <div className="section-container flex flex-col md:flex-row items-center justify-between gap-3">
      <div className="flex items-center gap-1.5 font-bold text-sm">
        <img src={logo} alt="DiskBar logo" className="w-4 h-4" />
        DiskBar
      </div>
      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
        <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
        <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
        <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
        <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        <Link to="/refund" className="hover:text-foreground transition-colors">Refund</Link>
        <Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link>
      </div>
      <p className="text-[11px] text-muted-foreground">© 2026 DiskBar. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
