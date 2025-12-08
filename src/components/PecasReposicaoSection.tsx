import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const pecas = [
  { nome: "Tirante", descricao: "Aço carbono de alta resistência" },
  { nome: "Pistões", descricao: "Precisão e durabilidade garantidas" },
  { nome: "Buchas com Anel", descricao: "Encaixe perfeito e longa vida útil" },
  { nome: "Buchas Lisas", descricao: "Acabamento superior" },
  { nome: "Pino Trava", descricao: "Segurança e fixação confiável" },
  { nome: "Tirante Lateral", descricao: "Reforço estrutural robusto" },
  { nome: "Cunhas", descricao: "Ajuste preciso e eficiente" },
  { nome: "Kit Vedação, Membranas e Amortecedores", descricao: "Pacote completo de manutenção" },
];

const PecasReposicaoSection = () => {
  const getWhatsAppLink = (peca: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de um orçamento para ${peca}.`);
    return `https://wa.me/5531986794960?text=${message}`;
  };

  return (
    <section id="pecas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            Peças de Reposição
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Peças originais e de alta durabilidade para manter seus equipamentos em perfeitas condições. 
            Garantia de fábrica e suporte técnico especializado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pecas.map((peca, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="aspect-square bg-muted flex items-center justify-center p-6">
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/10 rounded-lg flex items-center justify-center">
                  <span className="text-4xl text-primary/60 group-hover:text-primary transition-colors">
                    ⚙️
                  </span>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-heading font-semibold text-foreground mb-1 text-sm md:text-base">
                  {peca.nome}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  {peca.descricao}
                </p>
                <Button
                  asChild
                  size="sm"
                  className="w-full"
                >
                  <a
                    href={getWhatsAppLink(peca.nome)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Solicitar orçamento
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não encontrou a peça que precisa? Fale com um especialista!
          </p>
          <Button asChild variant="outline" size="lg">
            <a
              href="https://wa.me/5531986794960?text=Olá! Preciso de ajuda para encontrar uma peça de reposição."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Fale pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PecasReposicaoSection;
