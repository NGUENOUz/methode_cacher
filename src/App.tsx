import { motion } from "framer-motion";
import { useTranslation } from "./useTranslation";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { MethodSection } from "./components/MethodSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { AudienceSection } from "./components/AudienceSection";
import { OfferSection } from "./components/OfferSection";
import { FAQSection } from "./components/FAQSection";
import { WhatsAppButton } from "./components/WhatsappButon";
import { Footer } from "./components/Footer";
import { StickyCTA } from "./components/StickyCTA";
import { AuthorSection } from "./components/AuthorSection";

function App() {
  const { t, language, setLanguage } = useTranslation();

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} /> */}

      <main>
         <StickyCTA 
        currentPrice={t.hero.currentPrice} 
        ctaText={t.hero.ctaPrimary} 
      /> 
        <HeroSection t={t.hero} />
        <AuthorSection />
        {/* Conteneur pour les sections avec scroll animation */}
        <div className="space-y-0">
          <SectionWrapper>
            <ProblemSection t={t.problem} />
          </SectionWrapper>

          <SectionWrapper>
            <MethodSection t={t.method} />
          </SectionWrapper>

          <SectionWrapper>
            <BenefitsSection t={t.benefits} />
          </SectionWrapper>

          <SectionWrapper>
            <AudienceSection t={t.audience} />
          </SectionWrapper>

          <SectionWrapper id="offer-section">
            <OfferSection
              t={t.offer}
              countdownText={t.hero.countdownText}
              guarantees={t.reassurance.guarantees}
            />
          </SectionWrapper>

          <SectionWrapper>
            <FAQSection t={t.faq} />
          </SectionWrapper>
        </div>
      </main>

      <WhatsAppButton />
      <Footer t={t.footer} />
    </div>
  );
}

// Petit composant utilitaire pour les animations de section
const SectionWrapper = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    {children}
  </motion.section>
);

export default App;
