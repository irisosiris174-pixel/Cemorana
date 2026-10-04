import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '4915779193294';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hallo Cemorana, ich möchte mich über ein Kreditangebot informieren.')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
    >
      <MessageCircle className="w-6 h-6 fill-current text-white" />
      <span className="hidden sm:inline text-sm">WhatsApp Support</span>
    </a>
  );
};
