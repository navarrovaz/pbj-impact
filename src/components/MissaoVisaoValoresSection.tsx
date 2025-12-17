import { Target, Eye, Award, Search, Zap, Rocket, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const MissaoVisaoValoresSection = () => {
  const valores = [
    {
      icon: Award,
      titulo: "Qualidade",
      descricao: "Produtos confiáveis e selecionados para máxima durabilidade."
    },
    {
      icon: Search,
      titulo: "Transparência",
      descricao: "Comunicação clara e honesta em todas as negociações."
    },
    {
      icon: Zap,
      titulo: "Performance",
      descricao: "Equipamentos de alta performance para resultados superiores."
    },
    {
      icon: Rocket,
      titulo: "Agilidade",
      descricao: "Atendimento rápido e entregas dentro do prazo."
    },
    {
      icon: Handshake,
      titulo: "Parceria",
      descricao: "Construímos relacionamentos duradouros com nossos clientes."
    }
  ];

  const scrollToCatalogo = () => {
    const catalogoSection = document.getElementById("rompedores");
    if (catalogoSection) {
      catalogoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Nossa Essência - Missão e Visão */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-12 text-left">
            Nossa Essência
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Missão */}
            <div className="group">
              <div className="relative bg-[rgba(30,30,30,0.7)] backdrop-blur-lg border border-[#555] rounded-full aspect-square flex flex-col items-center justify-center p-8 md:p-12 transition-all duration-300 hover:scale-[1.03] hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,143,51,0.2)]">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-gray-300 via-white to-gray-400 flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-8 h-8 md:w-10 md:h-10 text-background" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-4">
                  Missão
                </h3>
                <p className="text-foreground text-center text-sm md:text-base leading-relaxed max-w-[80%]">
                  Fornecer rompedores hidráulicos e peças de reposição de alta qualidade, garantindo máxima performance e durabilidade para nossos clientes em todo o Brasil.
                </p>
              </div>
            </div>

            {/* Visão */}
            <div className="group">
              <div className="relative bg-[rgba(30,30,30,0.7)] backdrop-blur-lg border border-[#555] rounded-full aspect-square flex flex-col items-center justify-center p-8 md:p-12 transition-all duration-300 hover:scale-[1.03] hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,143,51,0.2)]">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-gray-300 via-white to-gray-400 flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="w-8 h-8 md:w-10 md:h-10 text-background" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-4">
                  Visão
                </h3>
                <p className="text-foreground text-center text-sm md:text-base leading-relaxed max-w-[80%]">
                  Ser referência nacional em equipamentos para demolição e mineração, reconhecida pela excelência em produtos e atendimento ao cliente.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            Valores
          </h2>
          <p className="text-foreground text-lg mb-12">
            Os pilares que guiam cada impacto
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
            {valores.map((valor, index) => (
              <div key={index} className="group">
                <div className="relative bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#D4AF37] rounded-full aspect-square flex flex-col items-center justify-center p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] shadow-lg">
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#FFD700] to-[#D4AF37] opacity-50" />
                  <div className="relative z-10 flex flex-col items-center">
                    <valor.icon className="w-10 h-10 md:w-12 md:h-12 text-background mb-3" />
                    <h4 className="text-base md:text-lg font-heading font-bold text-background mb-2">
                      {valor.titulo}
                    </h4>
                    <p className="text-background/80 text-xs md:text-sm text-center leading-tight px-2">
                      {valor.descricao}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <p className="text-muted-foreground mb-6">
            Conheça nossos produtos com a qualidade e transparência que só a PBK oferece.
          </p>
          <Button 
            onClick={scrollToCatalogo}
            variant="default"
            size="lg"
            className="font-heading"
          >
            Conhecer Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MissaoVisaoValoresSection;
