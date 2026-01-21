import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    const message =
      "Olá! Acabei de enviar uma solicitação pelo site e gostaria de falar com vocês.";
    const url = `https://wa.me/5531986794960?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-card border border-border rounded-2xl shadow-2xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="mb-6 flex justify-center">
          <div className="bg-green-500/10 p-4 rounded-full">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Obrigado pelo contato!
        </h2>
        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
          Recebemos sua mensagem com sucesso. Nossa equipe entrará em contato o
          mais breve possível para atender sua solicitação.
        </p>
        <p className="text-muted-foreground text-sm mb-8">
          Equipe PBK Equipamentos
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto w-full">
          <Button
            onClick={() => navigate("/")}
            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white border-0"
            size="sm"
          >
            <ArrowLeft className="mr-1 h-3 w-3" />
            Voltar para a página inicial
          </Button>
          <Button
            onClick={handleWhatsApp}
            variant="whatsapp"
            className="flex-1"
            size="sm"
          >
            <MessageCircle className="mr-1 h-3 w-3" />
            Fale pelo WhatsApp
          </Button>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            PBK Equipamentos © 2026 — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
