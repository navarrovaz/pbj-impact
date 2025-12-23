import { useState, useMemo, useEffect } from "react";
import { MessageCircle, ChevronDown, Search, ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import rompedorImg from "@/assets/rompedor-png.webp";
import rompedorImg2 from "@/assets/rompedor-pbk-2.png";

const WHATSAPP_NUMBER = "5531986794960";

interface Modelo {
  modelo: string;
  peso: string;
  vazao: string;
  pressao: string;
  frequencia: string;
  energia: string;
  mangueira: string;
  ferramenta: string;
  escavadeira: string;
}

const modelos = {
  maisVendidos: [
    { modelo: "PBK53", peso: "190", vazao: "25-45", pressao: "90-120", frequencia: "500-1000", energia: "510", mangueira: "1/2", ferramenta: "53", escavadeira: "2-5" },
    { modelo: "PBK68", peso: "340", vazao: "30-60", pressao: "110-140", frequencia: "500-900", energia: "838", mangueira: "1/2", ferramenta: "68", escavadeira: "5-7" },
    { modelo: "PBK75", peso: "480", vazao: "50/90", pressao: "120-170", frequencia: "400-800", energia: "1030", mangueira: "1/2", ferramenta: "75", escavadeira: "7-9" },
    { modelo: "PBK140", peso: "1850", vazao: "210-230", pressao: "230-260", frequencia: "400-500", energia: "5800", mangueira: "1", ferramenta: "140", escavadeira: "20-30" },
    { modelo: "PBK155", peso: "2750", vazao: "220-250", pressao: "240-270", frequencia: "300-400", energia: "7500", mangueira: "1", ferramenta: "155", escavadeira: "27-36" },
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
  { key: "peso", label: "Peso Operacional", unit: "Kg" },
  { key: "vazao", label: "Vazão de Trabalho", unit: "L/min" },
  { key: "pressao", label: "Pressão de Trabalho", unit: "Bar" },
  { key: "frequencia", label: "Frequência de Impacto", unit: "bpm" },
  { key: "energia", label: "Energia de Impacto", unit: "Joule" },
  { key: "mangueira", label: "Diâmetro da Mangueira", unit: "pol" },
  { key: "ferramenta", label: "Diâmetro da Ferramenta", unit: "mm" },
  { key: "escavadeira", label: "Peso da Escavadeira", unit: "ton" },
];

const allModelos = [...modelos.maisVendidos, ...modelos.outrosModelos, ...modelos.linhasPesadas];

const getWhatsAppLink = (modelo: string) => {
  const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o rompedor ${modelo} da PBK Equipamentos.`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

// Individual Model View Component
const ModeloIndividualView = ({
  modelo,
  onClose
}: {
  modelo: Modelo;
  onClose: () => void;
}) => {
  return (
    <div className="animate-fade-in">
      <div className="bg-gradient-card rounded-xl border border-border overflow-hidden">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-heading uppercase tracking-wider mb-4">
              Especificações Técnicas
            </span>
            <h3 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
              {modelo.modelo}
            </h3>
            <p className="text-muted-foreground">
              Rompedor Hidráulico de Alta Performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {especificacoes.map((spec) => (
              <div
                key={spec.key}
                className="bg-muted/30 rounded-lg p-4 border border-border/50 hover:border-primary/50 transition-colors"
              >
                <p className="text-sm text-muted-foreground mb-1">{spec.label}</p>
                <p className="text-xl font-heading font-bold text-foreground">
                  {modelo[spec.key as keyof Modelo]}
                  <span className="text-sm text-primary ml-1">{spec.unit}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={onClose}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Ver outros modelos
            </Button>
            <a href={getWhatsAppLink(modelo.modelo)} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" className="gap-2 w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                Solicitar Orçamento
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Table Component with Filter
const ModelosTable = ({
  title,
  icon,
  subtitle,
  modelosList,
  onSelectModelo,
  searchFilter,
}: {
  title: string;
  icon: string;
  subtitle?: string;
  modelosList: Modelo[];
  onSelectModelo: (modelo: Modelo) => void;
  searchFilter: string;
}) => {
  const filteredModelos = useMemo(() => {
    if (!searchFilter) return modelosList;
    return modelosList.filter(m =>
      m.modelo.toLowerCase().includes(searchFilter.toLowerCase())
    );
  }, [modelosList, searchFilter]);

  if (filteredModelos.length === 0) return null;

  return (
    <div className="bg-gradient-card rounded-xl border border-border overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="font-heading text-xl font-semibold text-foreground flex items-center gap-2">
          <span>{icon}</span> {title}
        </h3>
        {subtitle && (
          <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="py-4 px-4 text-left text-sm font-heading text-muted-foreground">Especificação</th>
              {filteredModelos.map((m) => (
                <th
                  key={m.modelo}
                  className="py-4 px-4 text-center text-sm font-heading text-primary cursor-pointer hover:text-primary/80 transition-colors group"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); onSelectModelo(m); }}
                >
                  <span className="group-hover:underline underline-offset-4">{m.modelo}</span>
                  <span className="block text-[10px] text-muted-foreground font-normal opacity-0 group-hover:opacity-100 transition-opacity">
                    clique para detalhes
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {especificacoes.map((spec) => (
              <tr key={spec.key} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4 text-sm text-primary font-medium">
                  {spec.label} ({spec.unit})
                </td>
                {filteredModelos.map((m) => (
                  <td
                    key={m.modelo}
                    className="py-3 px-4 text-sm text-center text-muted-foreground cursor-pointer hover:text-foreground hover:bg-primary/5 transition-colors"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); onSelectModelo(m); }}
                  >
                    {m[spec.key as keyof Modelo]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 flex flex-wrap gap-2 justify-center border-t border-border">
        {filteredModelos.map((m) => (
          <Button
            key={m.modelo}
            variant="outline"
            size="sm"
            className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); onSelectModelo(m); }}
          >
            <MessageCircle className="w-4 h-4" />
            {m.modelo}
          </Button>
        ))}
      </div>
    </div>
  );
};

const RompedoresSection = () => {
  const [selectedModelo, setSelectedModelo] = useState<Modelo | null>(null);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    if (selectedModelo) {
      const timer = setTimeout(() => {
        const element = document.getElementById('card-detalhes-rompedor');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100); 

      return () => clearTimeout(timer);
    }
  }, [selectedModelo]);

  const hasResults = useMemo(() => {
    if (!searchFilter) return true;
    return allModelos.some(m =>
      m.modelo.toLowerCase().includes(searchFilter.toLowerCase())
    );
  }, [searchFilter]);

  const handleClearFilter = () => {
    setSearchFilter("");
  };

  return (
    <section id="rompedores" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background crack texture and glow effect */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNMCAwTDUwIDMwTDIwIDgwTDgwIDEwMEw0MCAxNTBMMTAwIDE4MEwxNTAgMTQwTDE4MCAyMDBMMjAwIDE1MEwxNzAgMTAwTDIwMCA1MEwxNTAgMjBMMTAwIDYwTDYwIDIwTDAgMFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary mb-4">
            Rompedores <span className="text-gradient">Hidráulicos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Equipamentos robustos para as mais exigentes aplicações industriais
          </p>
        </div>

        {/* Featured Product with Dual Equipment Alternating Effect */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl animate-pulse-glow opacity-50" />
              
              {/* Equipment 1 - Primary alternating */}
              <div className="absolute inset-0 flex items-center justify-center equipment-primary">
                <img
                  src={rompedorImg}
                  alt="Rompedor Hidráulico PBK - Modelo 1"
                  className="max-h-[90%] w-auto drop-shadow-2xl object-contain"
                />
              </div>
              
              {/* Equipment 2 - Secondary alternating */}
              <div className="absolute inset-0 flex items-center justify-center equipment-secondary">
                <img
                  src={rompedorImg2}
                  alt="Rompedor Hidráulico PBK - Modelo 2"
                  className="max-h-[90%] w-auto drop-shadow-2xl object-contain"
                />
              </div>
              
              {/* Ground shadow */}
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
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`}>
              <Button variant="hero" size="lg" className="gap-2">
                Falar com um especialista
              </Button>
            </a>
          </div>
        </div>

        {/* Search Filter */}
        <div className="mb-8">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar modelo (ex: PBK150)"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="pl-12 pr-10 py-6 bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
            />
            {searchFilter && (
              <button
                onClick={handleClearFilter}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            )}
          </div>
          {searchFilter && (
            <p className="text-center text-sm text-muted-foreground mt-2">
              {hasResults
                ? `Mostrando resultados para "${searchFilter}"`
                : `Nenhum modelo encontrado para "${searchFilter}"`
              }
            </p>
          )}
        </div>

        {/* Individual Model View or Tables */}
        {selectedModelo ? (
          // ADICIONEI O id="card-detalhes-rompedor" AQUI
          <div id="card-detalhes-rompedor" className="animate-fade-in">
            <ModeloIndividualView
              modelo={selectedModelo}
              onClose={() => setSelectedModelo(null)}
            />
          </div>
        ) : (
          <div className="space-y-12">
            {/* Most Sold Table */}
            <ModelosTable
              title="Os Mais Vendidos"
              icon="⭐"
              modelosList={modelos.maisVendidos}
              onSelectModelo={setSelectedModelo}
              searchFilter={searchFilter}
            />

            {/* Other Models Table */}
            <ModelosTable
              title="Mais Modelos Disponíveis"
              icon="✓"
              modelosList={modelos.outrosModelos}
              onSelectModelo={setSelectedModelo}
              searchFilter={searchFilter}
            />

            {/* Heavy Duty Lines Table */}
            <ModelosTable
              title="Linhas Pesadas – Alta Capacidade"
              icon="🔥"
              subtitle="Especificações técnicas das linhas PBK para máxima performance"
              modelosList={modelos.linhasPesadas}
              onSelectModelo={setSelectedModelo}
              searchFilter={searchFilter}
            />

            {/* No Results Message */}
            {!hasResults && (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  Nenhum modelo encontrado para "{searchFilter}"
                </p>
                <Button variant="outline" onClick={handleClearFilter}>
                  Limpar busca
                </Button>
              </div>
            )}

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
        )}
      </div>
    </section>
  );
};

export default RompedoresSection;