import { HardDrive } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2 font-bold">
        <HardDrive className="w-5 h-5 text-primary" />
        DiskBar
      </div>
      <div className="flex gap-6 text-sm text-muted-foreground">
        <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
        <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        <a href="#" className="hover:text-foreground transition-colors">Contact</a>
      </div>
      <p className="text-xs text-muted-foreground">© 2026 DiskBar. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
