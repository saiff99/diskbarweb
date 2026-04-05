import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="section-container max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-6 text-sm">Last updated: April 5, 2026</p>

        <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
        <p className="text-muted-foreground mb-6">
          By downloading or using DiskBar, you agree to be bound by these terms. If you do not agree, please do not use the application.
        </p>

        <h2 className="text-xl font-semibold mb-3">2. License</h2>
        <p className="text-muted-foreground mb-6">
          DiskBar grants you a non-exclusive, non-transferable license to use the software for personal or commercial purposes on devices you own or control.
        </p>

        <h2 className="text-xl font-semibold mb-3">3. Restrictions</h2>
        <p className="text-muted-foreground mb-6">
          You may not reverse-engineer, decompile, or redistribute DiskBar. You may not sublicense or resell the software without written permission.
        </p>

        <h2 className="text-xl font-semibold mb-3">4. Disclaimer</h2>
        <p className="text-muted-foreground mb-6">
          DiskBar is provided "as is" without warranty of any kind. We are not liable for any damages arising from the use of the software.
        </p>

        <h2 className="text-xl font-semibold mb-3">5. Changes</h2>
        <p className="text-muted-foreground">
          We reserve the right to update these terms at any time. Continued use of DiskBar after changes constitutes acceptance of the updated terms.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Terms;
