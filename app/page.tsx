import { Audience } from "@/components/Audience";
import { BeforeAfter } from "@/components/BeforeAfter";
import { DemoForm } from "@/components/DemoForm";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { ProblemSection } from "@/components/ProblemSection";
import { ScreensGallery } from "@/components/ScreensGallery";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  offers: [
    {
      "@type": "Offer",
      name: "Plano VendeLeve - lançamento",
      price: "100",
      priceCurrency: "BRL",
      description:
        "Condição especial de lançamento para os primeiros 20 clientes: R$ 100 por mês e implantação promocional de R$ 500.",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <Features />
        <Audience />
        <ScreensGallery />
        <BeforeAfter />
        <HowItWorks />
        <Pricing />
        <DemoForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
