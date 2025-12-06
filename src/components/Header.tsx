import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";

const WHATSAPP_NUMBER = "5531986794960";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos da PBK Equipamentos.");

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#rompedores", label: "Rompedores" },
    { href: "#ponteiras", label: "Ponteiras" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#orcamento", label: "Orçamento" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src={logoIcon} alt="PBK Equipamentos" className="h-10 md:h-12 w-auto" />
            <span className="font-heading text-xl md:text-2xl font-bold text-primary hidden sm:block">
              EQUIPAMENTOS
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-sm uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg" className="gap-2">
                <Phone className="w-4 h-4" />
                Fale Conosco
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-lg uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button variant="whatsapp" size="lg" className="w-full gap-2">
                <Phone className="w-4 h-4" />
                Fale Conosco
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
