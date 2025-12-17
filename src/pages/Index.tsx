import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import MissaoVisaoValoresSection from "@/components/MissaoVisaoValoresSection";
import RompedoresSection from "@/components/RompedoresSection";
import PonteirasSection from "@/components/PonteirasSection";
import PecasReposicaoSection from "@/components/PecasReposicaoSection";
import OrcamentoSection from "@/components/OrcamentoSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>PBK Equipamentos | Rompedores e Ponteiras Industriais de Alta Performance</title>
        <meta
          name="description"
          content="Rompedores hidráulicos, ponteiras e peças originais para máxima durabilidade. Garantia de fábrica e suporte técnico especializado. Solicite orçamento!"
        />
        <meta
          name="keywords"
          content="rompedor hidráulico, ponteiras industriais, peças para rompedores, equipamentos de perfuração, PBK Equipamentos, demolição, mineração"
        />
        <meta property="og:title" content="PBK Equipamentos | Rompedores Hidráulicos de Alta Performance" />
        <meta
          property="og:description"
          content="Força, Precisão e Confiança em Cada Impacto! Rompedores e ponteiras industriais com garantia de fábrica."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pbjequipamentos.com.br" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <DiferenciaisSection />
          <MissaoVisaoValoresSection />
          <RompedoresSection />
          <PonteirasSection />
          <PecasReposicaoSection />
          <OrcamentoSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
