import { Target, Eye, Award, Search, Zap, Gauge, Handshake } from "lucide-react";

const MissaoVisaoValoresSection = () => {
  const valores = [
    {
      icon: Award,
      titulo: "Qualidade",
      descricao: "Produtos confiáveis e selecionados."
    },
    {
      icon: Search,
      titulo: "Transparência",
      descricao: "Negociação clara do início ao fim."
    },
    {
      icon: Zap,
      titulo: "Performance",
      descricao: "Resultado real na obra e no campo."
    },
    {
      icon: Gauge,
      titulo: "Agilidade",
      descricao: "Respostas rápidas e suporte eficiente."
    },
    {
      icon: Handshake,
      titulo: "Parceria",
      descricao: "Acompanhamento da compra ao pós-venda."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título Principal */}
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary text-center mb-4">
          Mais do que Equipamentos: Nossa Identidade
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Conheça os princípios que guiam cada rompedor, ponteira e peça que entregamos.
        </p>

        {/* Missão e Visão - Cards Retangulares */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {/* Missão */}
          <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
            <div className="flex items-center mb-5 pb-4 border-b-2 border-primary">
              <div className="bg-primary p-3 rounded-lg mr-4">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary">Missão</h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Entregar soluções de alto desempenho para rompedores hidráulicos, com atendimento consultivo, transparência e acompanhamento contínuo, garantindo eficiência e satisfação em cada compra.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
            <div className="flex items-center mb-5 pb-4 border-b-2 border-primary">
              <div className="bg-primary p-3 rounded-lg mr-4">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary">Visão</h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Consolidar a PBK como referência nacional em rompedores hidráulicos, expandindo soluções através de importação, fabricação própria e parcerias estratégicas, sempre priorizando a experiência completa do cliente.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-2">
            Valores
          </h3>
          <p className="text-muted-foreground mb-8">
            Os pilares que guiam cada impacto
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {valores.map((valor, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-lg p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <valor.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-primary font-heading font-bold mb-2">
                  {valor.titulo}
                </h4>
                <p className="text-muted-foreground text-sm leading-snug">
                  {valor.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Transição para o Formulário */}
        <div className="text-center pt-8 mt-8 border-t border-border">
          <p className="text-foreground mb-2">
            Conheceu nossos produtos e nossa identidade?
          </p>
          <p className="text-primary font-bold">
            Agora é hora de transformar isso em performance para sua obra.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissaoVisaoValoresSection;
