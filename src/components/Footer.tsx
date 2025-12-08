import { Phone, MapPin, Globe, Shield, Wrench, Headphones, Zap } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const WHATSAPP_NUMBER = "5531986794960";

const Footer = () => {
  const navLinks = [
    { href: "#rompedores", label: "Rompedores" },
    { href: "#ponteiras", label: "Ponteiras" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#orcamento", label: "Orçamento" },
  ];

  const suporte = [
    { icon: Shield, label: "Garantia de Fábrica" },
    { icon: Wrench, label: "Peças Originais" },
    { icon: Headphones, label: "Suporte Técnico" },
    { icon: Zap, label: "Atendimento Rápido" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo e Slogan */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoIcon} alt="PBK Equipamentos" className="h-12 w-auto" />
              <span className="font-heading text-xl font-bold text-primary">
                EQUIPAMENTOS
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Força, Precisão e Confiança em Cada Impacto!
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-primary" />
                (31) 9 8679-4960
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Rua Maria Lúcia, 58<br />Lagoa Santa/MG</span>
              </div>
              <a
                href="https://pbkequipamentos.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Globe className="w-4 h-4 text-primary" />
                pbjequipamentos.com.br
              </a>
            </div>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Suporte
            </h4>
            <div className="space-y-3">
              {suporte.map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <item.icon className="w-4 h-4 text-primary" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} PBK Equipamentos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
