import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is DiskBar?",
    answer: "DiskBar is a lightweight macOS menu bar app that displays your disk usage at a glance. It lets you monitor storage across all connected drives without opening any system utilities.",
  },
  {
    question: "Is DiskBar free to use?",
    answer: "Yes! DiskBar offers a free version with essential features. DiskBar Pro is a one-time purchase of $29 that unlocks advanced features like multi-drive monitoring, custom alerts, and priority support.",
  },
  {
    question: "Does DiskBar collect my data?",
    answer: "No. DiskBar runs entirely on your Mac and does not collect, store, or transmit any personal or usage data. Your privacy is fully protected.",
  },
  {
    question: "What macOS versions are supported?",
    answer: "DiskBar supports macOS 12 (Monterey) and later, including macOS Sonoma and Sequoia. It runs natively on both Intel and Apple Silicon Macs.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Absolutely. We offer a 30-day money-back guarantee on DiskBar Pro. Simply contact us through our Contact page and we'll process your refund, no questions asked.",
  },
];

const FAQ = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="section-container max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
    <Footer />
  </div>
);

export default FAQ;
