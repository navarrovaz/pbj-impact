import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ponteiraEspeciais from "@/assets/especiais-png.webp";
import ponteiraCinzel from "@/assets/ponteira-cinzel-png.webp";
import ponteiraUniversal from "@/assets/ponteira-universal-png_1.webp";
import ponteiraPlano from "@/assets/ponteira-plana-png.webp";

const WHATSAPP_NUMBER = "5531986794960";

const ponteiras = [
  {
    name: "Modelos Especiais",
    image: ponteiraEspeciais,
    description: "Ponteiras especiais para aplicações específicas e projetos customizados.",
  },
  {
    name: "Cinzel",
    image: ponteiraCinzel,
    description: "Ideal para corte e demolição de estruturas de concreto e asfalto.",
  },
  {
    name: "Universal",
    image: ponteiraUniversal,
    description: "Versátil para múltiplas aplicações em diferentes tipos de material.",
  },
  {
    name: "Plano",
    image: ponteiraPlano,
    description: "Perfeita para acabamento e trabalhos que exigem precisão.",
  },
];

const PonteirasSection = () => {
  const getWhatsAppLink = (ponteira: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre a ponteira ${ponteira} da PBK Equipamentos.`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  return (
    <section id="ponteiras" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary mb-4">
            Ponteiras para <span className="text-gradient">Rompedores</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Modelos de pontas disponíveis para máxima eficiência em cada aplicação
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ponteiras.map((ponteira, index) => (
            <div
              key={ponteira.name}
              className="bg-gradient-card rounded-xl border border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square bg-white/5 p-8 flex items-center justify-center">
                <img
                  src={ponteira.image}
                  alt={ponteira.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {ponteira.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {ponteira.description}
                </p>
                <a href={getWhatsAppLink(ponteira.name)} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Solicitar Orçamento
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ponteiras fabricadas em aço de alta resistência, projetadas para diferentes tipos de solo e aplicações.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de um orçamento personalizado para ponteiras PBK.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="lg" className="gap-2">
              <MessageCircle className="w-5 h-5" />
              Solicite um orçamento personalizado
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PonteirasSection;
