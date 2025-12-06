import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5531986794960";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos da PBK Equipamentos.");

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale pelo WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <MessageCircle className="w-6 h-6" />
          <span className="font-heading text-sm uppercase tracking-wide hidden sm:block pr-1">
            Fale Conosco
          </span>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
