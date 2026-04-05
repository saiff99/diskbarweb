import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="section-container max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-6 text-sm">Last updated: April 5, 2026</p>

        <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
        <p className="text-muted-foreground mb-6">
          DiskBar does not collect, store, or transmit any personal data. The app runs entirely on your local machine and does not communicate with any external servers. If you purchase DiskBar Pro, your payment is processed securely by our payment provider, and we do not store your payment details.
        </p>

        <h2 className="text-xl font-semibold mb-3">2. Usage Data</h2>
        <p className="text-muted-foreground mb-6">
          We do not collect analytics, usage data, or telemetry of any kind. Your disk usage information stays on your device.
        </p>

        <h2 className="text-xl font-semibold mb-3">3. Third-Party Services</h2>
        <p className="text-muted-foreground mb-6">
          Our website may use basic analytics to understand page visits. No personally identifiable information is tracked. Payment processing is handled by third-party providers subject to their own privacy policies.
        </p>

        <h2 className="text-xl font-semibold mb-3">4. Cookies</h2>
        <p className="text-muted-foreground mb-6">
          Our website may use essential cookies to ensure proper functionality. We do not use tracking or advertising cookies.
        </p>

        <h2 className="text-xl font-semibold mb-3">5. Contact</h2>
        <p className="text-muted-foreground">
          If you have questions about this privacy policy, please reach out via our <a href="/contact" className="text-primary hover:underline">Contact page</a>.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Privacy;
