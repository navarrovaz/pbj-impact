import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/rompedor-hidraulico-pbk.webp";

const WHATSAPP_NUMBER = "5531986794960";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para equipamentos PBK.");

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Rompedor hidráulico em ação"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up">
            Força, Precisão e{" "}
            <span className="text-gradient">Confiança</span> em Cada Impacto!
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Rompedores hidráulicos, ponteiras e peças industriais de alta performance
            para máxima durabilidade e eficiência em suas operações.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a href="#orcamento">
              <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
                Solicite um Orçamento
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="xl" className="w-full sm:w-auto gap-2">
                <MessageCircle className="w-5 h-5" />
                Fale pelo WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-8 h-12 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
