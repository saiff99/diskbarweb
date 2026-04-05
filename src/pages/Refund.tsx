import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Refund = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="section-container max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-6">Refund Policy</h1>
        <p className="text-muted-foreground mb-6 text-sm">Last updated: April 5, 2026</p>

        <h2 className="text-xl font-semibold mb-3">30-Day Money-Back Guarantee</h2>
        <p className="text-muted-foreground mb-6">
          We offer a full refund within 30 days of your purchase if DiskBar Pro doesn't meet your expectations. No questions asked.
        </p>

        <h2 className="text-xl font-semibold mb-3">How to Request a Refund</h2>
        <p className="text-muted-foreground mb-6">
          To request a refund, simply reach out via our <a href="/contact" className="text-primary hover:underline">Contact page</a> with your purchase email and order details. We'll process your refund within 5–7 business days.
        </p>

        <h2 className="text-xl font-semibold mb-3">Eligibility</h2>
        <p className="text-muted-foreground mb-6">
          Refunds are available for purchases made directly through our website. If you purchased through a third-party platform, please refer to their refund policy.
        </p>

        <h2 className="text-xl font-semibold mb-3">After the Refund</h2>
        <p className="text-muted-foreground">
          Once a refund is processed, your Pro license will be deactivated. You may continue using the free version of DiskBar.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Refund;
