import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, Loader2, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email";
    if (!message.trim()) e.message = "Message is required";
    else if (message.trim().length < 10) e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
    setSent(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-16 pb-20">
        <div className="section-container max-w-xl">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-muted-foreground mb-8">Have a question or feedback? We'd love to hear from you.</p>

          {sent ? (
            <div className="text-center py-16 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-primary mx-auto" />
              <h2 className="text-2xl font-bold">Message Sent!</h2>
              <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
              <button
                onClick={handleReset}
                className="glow-button text-sm px-6 py-2.5 rounded-full font-medium mt-4"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => { setName(e.target.value); if (errors.name) setErrors((p) => ({ ...p, name: undefined })); }}
                  placeholder="Your name"
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((p) => ({ ...p, email: undefined })); }}
                  placeholder="you@example.com"
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => { setMessage(e.target.value); if (errors.message) setErrors((p) => ({ ...p, message: undefined })); }}
                  placeholder="Write your message..."
                  rows={5}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                <p className="text-xs text-muted-foreground mt-1 text-right">{message.length} / 1000</p>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="glow-button px-6 py-2.5 rounded-full font-medium text-base w-full inline-flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Send Message</>}
              </button>
            </form>
          )}

          <div className="mt-10">
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
