import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "./useTranslation";


// Tes composants existants
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { MethodSection } from "./components/MethodSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { OfferSection } from "./components/OfferSection";
import { FAQSection } from "./components/FAQSection";
import { WhatsAppButton } from "./components/WhatsappButon";
import { Footer } from "./components/Footer";
import { StickyCTA } from "./components/StickyCTA";
import { AuthorSection } from "./components/AuthorSection";


// Importe ton nouveau Dashboard
import { AdminDashboard } from "./components/AdminDashboard";

function App() {
  const { t } = useTranslation();
  
  // Utilisation de la devise dynamique (Prix de base: 8)
  const price  = 8;
  const symbol ="$";

  return (
    <Routes>
      {/* ROUTE ADMIN SECRÈTE */}
      <Route path="/admin-cacher-2026" element={<AdminDashboard />} />

      {/* ROUTE PRINCIPALE (TUNNEL DE VENTE) */}
      <Route path="/" element={
        <div className="min-h-screen bg-[#FAFAFA] text-slate-900 selection:bg-blue-100 selection:text-blue-900">
          
          
          <main className="pt-16"> {/* padding-top pour le header fixe */}
            <StickyCTA 
              currentPrice={price.toString()} 
              symbol={symbol}
              ctaText={t.hero.ctaPrimary} 
            /> 
            
            <HeroSection t={t.hero} price={price} symbol={symbol} />
            <AuthorSection />

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

              <SectionWrapper id="offer-section">
                <OfferSection
                  t={t.offer}
                  price={price}
                  symbol={symbol}
                  countdownText={t.hero.countdownText}
                  guarantees={t.reassurance.guarantees}
                />
              </SectionWrapper>

              <SectionWrapper>
                <FAQSection t={t.faq} />
              </SectionWrapper>
            </div>
          </main>

          {/* <WhatsAppButton /> */}
          <Footer t={t.footer} />
        </div>
      } />
    </Routes>
  );
}

// Ton Wrapper d'animation reste identique
const SectionWrapper = ({ children, id }: { children: React.ReactNode; id?: string; }) => (
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