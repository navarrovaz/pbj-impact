import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import buchasAnel from "@/assets/buchas-anel.png";
import buchasLisa from "@/assets/buchas-lisa.png";
import cunhas from "@/assets/cunhas.png";
import kitVedacao from "@/assets/kit-vedacao.png";
import pinoTrava from "@/assets/pino-trava.png";
import pistoes from "@/assets/pistoes.png";
import tiranteLateral from "@/assets/tirante-lateral.png";
import tirante from "@/assets/tirante.png";

const pecas = [
  { name: "Tirante", descricao: "Aço carbono de alta resistência", image: tirante },
  { name: "Pistões", descricao: "Precisão e durabilidade garantidas", image: pistoes },
  { name: "Buchas com Anel", descricao: "Encaixe perfeito e longa vida útil", image: buchasAnel },
  { name: "Buchas Lisas", descricao: "Acabamento superior", image: buchasLisa },
  { name: "Pino Trava", descricao: "Segurança e fixação confiável", image: pinoTrava },
  { name: "Tirante Lateral", descricao: "Reforço estrutural robusto", image: tiranteLateral },
  { name: "Cunhas", descricao: "Ajuste preciso e eficiente", image: cunhas },
  { name: "Kit Vedação, Membranas e Amortecedores", descricao: "Pacote completo de manutenção", image: kitVedacao },
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


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {pecas.map((peca, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="aspect-square bg-muted flex items-center justify-center p-6">
                <div className="w-full h-full   from-muted to-muted-foreground/10 rounded-lg flex items-center justify-center">
                  <img className="h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300" src={peca.image} alt={peca.name} />
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-heading font-semibold text-foreground mb-1 text-sm md:text-base">
                  {peca.name}
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
                    href={getWhatsAppLink(peca.name)}
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
