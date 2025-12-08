import { MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import rompedorImg from "@/assets/rompedor-png.webp";

const WHATSAPP_NUMBER = "5531986794960";

const modelos = {
  maisVendidos: [
    { modelo: "PBK53", peso: "190", vazao: "25-45", pressao: "90-120", frequencia: "500-1000", energia: "510", mangueira: "1/2", ferramenta: "53", escavadeira: "2-5" },
    { modelo: "PBK68", peso: "340", vazao: "30-60", pressao: "110-140", frequencia: "500-900", energia: "838", mangueira: "1/2", ferramenta: "68", escavadeira: "5-7" },
    { modelo: "PBK75", peso: "480", vazao: "50/90", pressao: "120-170", frequencia: "400-800", energia: "1030", mangueira: "1/2", ferramenta: "75", escavadeira: "7-9" },
    { modelo: "PBK140", peso: "1850", vazao: "210-230", pressao: "230-260", frequencia: "400-500", energia: "5800", mangueira: "1", ferramenta: "140", escavadeira: "20-30" },
    { modelo: "PBK155", peso: "2750", vazao: "220-250", pressao: "140-270", frequencia: "300-400", energia: "7500", mangueira: "1", ferramenta: "155", escavadeira: "27-36" },
  ],
  outrosModelos: [
    { modelo: "PBK45", peso: "150", vazao: "20-40", pressao: "90-120", frequencia: "500-1000", energia: "350", mangueira: "1/2", ferramenta: "45", escavadeira: "1-2" },
    { modelo: "PBK85", peso: "580", vazao: "130-170", pressao: "150-190", frequencia: "400-800", energia: "1492", mangueira: "3/4", ferramenta: "85", escavadeira: "9-12" },
    { modelo: "PBK100", peso: "950", vazao: "140-180", pressao: "160-200", frequencia: "400-700", energia: "2600", mangueira: "3/4", ferramenta: "100", escavadeira: "12-17" },
    { modelo: "PBK125", peso: "1450", vazao: "170-210", pressao: "190-230", frequencia: "400-650", energia: "4200", mangueira: "1", ferramenta: "125", escavadeira: "15-18" },
    { modelo: "PBK135", peso: "1680", vazao: "210-230", pressao: "230-260", frequencia: "400-650", energia: "4930", mangueira: "1", ferramenta: "135", escavadeira: "18-25" },
  ],
  linhasPesadas: [
    { modelo: "PBK150", peso: "2600", vazao: "220-250", pressao: "240-270", frequencia: "300-450", energia: "6600", mangueira: "1", ferramenta: "150", escavadeira: "25-30" },
    { modelo: "PBK165", peso: "3100", vazao: "250-270", pressao: "260-280", frequencia: "250-400", energia: "10500", mangueira: "5/4", ferramenta: "165", escavadeira: "30-40" },
    { modelo: "PBK175", peso: "4150", vazao: "270-290", pressao: "280-300", frequencia: "250-350", energia: "12000", mangueira: "5/4", ferramenta: "175", escavadeira: "35-45" },
    { modelo: "PBK195", peso: "5380", vazao: "290-310", pressao: "300-320", frequencia: "210-300", energia: "17300", mangueira: "5/4", ferramenta: "195", escavadeira: "48-60" },
    { modelo: "PBK215", peso: "6800", vazao: "340-370", pressao: "350-380", frequencia: "200-300", energia: "20500", mangueira: "5/4", ferramenta: "215", escavadeira: "70-120" },
  ],
};

const especificacoes = [
  "Peso Operacional (Kg)",
  "Vazão de Trabalho (L/min)",
  "Pressão de Trabalho (Bar)",
  "Frequência de Impacto (bpm)",
  "Energia de Impacto (Joule)",
  "Diâmetro da Mangueira (pol)",
  "Diâmetro da Ferramenta (mm)",
  "Peso da Escavadeira (ton)",
];

const TableRow = ({ spec, values }: { spec: string; values: string[] }) => (
  <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors">
    <td className="py-3 px-4 text-sm text-primary font-medium">{spec}</td>
    {values.map((value, idx) => (
      <td key={idx} className="py-3 px-4 text-sm text-center text-muted-foreground">
        {value}
      </td>
    ))}
  </tr>
);

const RompedoresSection = () => {
  const getWhatsAppLink = (modelo: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o rompedor ${modelo} da PBK Equipamentos.`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  return (
    <section id="rompedores" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary mb-4">
            Rompedores <span className="text-gradient">Hidráulicos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Equipamentos robustos para as mais exigentes aplicações industriais
          </p>
        </div>

        {/* Featured Product */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src={rompedorImg}
                alt="Rompedor Hidráulico PBK"
                className="w-full max-w-lg mx-auto drop-shadow-2xl animate-float"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-xl" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-heading uppercase tracking-wider mb-4">
              ⭐ Os mais vendidos
            </span>
            <h3 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4">
              Alta Performance em Cada Impacto
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossos rompedores hidráulicos são projetados para oferecer máxima eficiência
              e durabilidade. Fabricados com materiais de alta qualidade e tecnologia de ponta,
              são ideais para demolição, mineração e construção civil.
            </p>
            <a href="#orcamento">
              <Button variant="hero" size="lg" className="gap-2">
                Ver todos os modelos
                <ChevronDown className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>

        {/* Tables */}
        <div className="space-y-12">
          {/* Most Sold Table */}
          <div className="bg-gradient-card rounded-xl border border-border overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="font-heading text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="text-yellow-500">⭐</span> Os Mais Vendidos
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="py-4 px-4 text-left text-sm font-heading text-muted-foreground">Especificação</th>
                    {modelos.maisVendidos.map((m) => (
                      <th key={m.modelo} className="py-4 px-4 text-center text-sm font-heading text-primary">
                        {m.modelo}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {especificacoes.map((spec, idx) => (
                    <TableRow
                      key={spec}
                      spec={spec}
                      values={modelos.maisVendidos.map((m) => {
                        const keys = ["peso", "vazao", "pressao", "frequencia", "energia", "mangueira", "ferramenta", "escavadeira"];
                        return m[keys[idx] as keyof typeof m];
                      })}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 flex flex-wrap gap-2 justify-center border-t border-border">
              {modelos.maisVendidos.map((m) => (
                <a key={m.modelo} href={getWhatsAppLink(m.modelo)} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2">
                    <MessageCircle className="w-4 h-4" />
                    {m.modelo}
                  </Button>
                </a>
              ))}
            </div>
          </div>

          {/* Other Models Table */}
          <div className="bg-gradient-card rounded-xl border border-border overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="font-heading text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="text-green-500">✓</span> Mais Modelos Disponíveis
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="py-4 px-4 text-left text-sm font-heading text-muted-foreground">Especificação</th>
                    {modelos.outrosModelos.map((m) => (
                      <th key={m.modelo} className="py-4 px-4 text-center text-sm font-heading text-primary">
                        {m.modelo}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {especificacoes.map((spec, idx) => (
                    <TableRow
                      key={spec}
                      spec={spec}
                      values={modelos.outrosModelos.map((m) => {
                        const keys = ["peso", "vazao", "pressao", "frequencia", "energia", "mangueira", "ferramenta", "escavadeira"];
                        return m[keys[idx] as keyof typeof m];
                      })}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 flex flex-wrap gap-2 justify-center border-t border-border">
              {modelos.outrosModelos.map((m) => (
                <a key={m.modelo} href={getWhatsAppLink(m.modelo)} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2">
                    <MessageCircle className="w-4 h-4" />
                    {m.modelo}
                  </Button>
                </a>
              ))}
            </div>
          </div>

          {/* Heavy Duty Lines Table - PBK150 to PBK215 */}
          <div className="bg-gradient-card rounded-xl border border-border overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="font-heading text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="text-primary">🔥</span> Linhas Pesadas – Alta Capacidade
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                Especificações técnicas das linhas PBK para máxima performance
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="py-4 px-4 text-left text-sm font-heading text-muted-foreground">Especificação</th>
                    {modelos.linhasPesadas.map((m) => (
                      <th key={m.modelo} className="py-4 px-4 text-center text-sm font-heading text-primary">
                        {m.modelo}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {especificacoes.map((spec, idx) => (
                    <TableRow
                      key={spec}
                      spec={spec}
                      values={modelos.linhasPesadas.map((m) => {
                        const keys = ["peso", "vazao", "pressao", "frequencia", "energia", "mangueira", "ferramenta", "escavadeira"];
                        return m[keys[idx] as keyof typeof m];
                      })}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 flex flex-wrap gap-2 justify-center border-t border-border">
              {modelos.linhasPesadas.map((m) => (
                <a key={m.modelo} href={getWhatsAppLink(m.modelo)} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2">
                    <MessageCircle className="w-4 h-4" />
                    {m.modelo}
                  </Button>
                </a>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center pt-8">
            <p className="text-muted-foreground mb-4">
              Não encontrou o modelo ideal? Fale com um especialista!
            </p>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os rompedores PBK.")}`} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Fale pelo WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RompedoresSection;
