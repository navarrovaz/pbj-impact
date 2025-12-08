import { Shield, Wrench, Headphones, Zap, Star } from "lucide-react";

const diferenciais = [
  {
    icon: Shield,
    title: "Garantia de Fábrica",
    description: "Qualidade assegurada em todos os produtos com garantia completa.",
  },
  {
    icon: Wrench,
    title: "Peças Originais PBK & Multimarcas",
    description: "Componentes genuínos e das marcas mais confiáveis para maior durabilidade e desempenho.",
  },
  {
    icon: Headphones,
    title: "Suporte Técnico",
    description: "Atendimento especializado e contínuo para sua operação.",
  },
  {
    icon: Zap,
    title: "Atendimento Rápido",
    description: "Resposta ágil para todas as suas necessidades.",
  },
];

const DiferenciaisSection = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary mb-4">
            Por que escolher a <span className="text-gradient">PBK?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Equipamentos de alta performance com suporte completo para sua operação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map((item, index) => (
            <div
              key={item.title}
              className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
