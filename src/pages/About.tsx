import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="section-container max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">About DiskBar</h1>
        <p className="text-muted-foreground mb-4">
          DiskBar is a lightweight macOS menu bar utility that gives you instant visibility into your disk usage — right where you need it. No more digging through System Settings or running terminal commands.
        </p>
        <p className="text-muted-foreground mb-4">
          Built by a small team of Mac enthusiasts who believe that system monitoring should be effortless, beautiful, and unobtrusive. DiskBar sits quietly in your menu bar and surfaces the information you care about with zero friction.
        </p>
        <p className="text-muted-foreground mb-4">
          Whether you're a developer managing multiple projects, a creative professional working with large media files, or simply someone who likes to keep their Mac tidy — DiskBar helps you stay on top of your storage without breaking your workflow.
        </p>
        <p className="text-muted-foreground">
          We're committed to keeping DiskBar fast, private, and native. No telemetry, no cloud dependencies — just a clean, reliable tool that does one thing exceptionally well.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;
