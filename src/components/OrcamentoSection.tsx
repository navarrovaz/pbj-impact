import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "5531986794960";

const OrcamentoSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.telefone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e telefone.",
        variant: "destructive",
      });
      return;
    }

    const message = `Olá! Meu nome é ${formData.nome}.
${formData.email ? `E-mail: ${formData.email}` : ""}
Telefone: ${formData.telefone}
${formData.mensagem ? `\nMensagem: ${formData.mensagem}` : ""}

Gostaria de solicitar um orçamento.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Você será redirecionado para continuar a conversa.",
    });
  };

  return (
    <section id="orcamento" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary mb-4">
              Pronto para elevar a <span className="text-gradient">performance</span> da sua operação?
            </h2>
            <p className="text-muted-foreground text-lg">
              Para agilizar, informe exatamente o que precisa: equipamento ou peça. Se for rompedor, diga a máquina; se for peça, o modelo do rompedor.
            </p>
          </div>

          <div className="bg-gradient-card rounded-2xl border border-border p-8 md:p-12 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">
                    Nome *
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={handleChange}
                    className="bg-muted border-border focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-foreground mb-2">
                  Telefone / WhatsApp *
                </label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(31) 99999-9999"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="bg-muted border-border focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Descreva o equipamento ou peça que precisa..."
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={4}
                  className="bg-muted border-border focus:border-primary resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" variant="whatsapp" size="xl" className="flex-1 gap-2">
                  <Send className="w-5 h-5" />
                  Enviar pelo WhatsApp
                </Button>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground mb-4">
                Prefere falar agora?
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de falar com um especialista da PBK Equipamentos.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Chame no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrcamentoSection;
