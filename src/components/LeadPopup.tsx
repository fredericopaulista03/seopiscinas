import React from 'react';
import { X, Phone } from 'lucide-react';

interface LeadPopupProps {
  showPopup: boolean;
  setShowPopup: (show: boolean) => void;
}

export default function LeadPopup({ showPopup, setShowPopup }: LeadPopupProps) {
  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md relative">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        <h3 className="text-2xl font-bold mb-4">Consultoria Gratuita!</h3>
        <p className="mb-4">Quer aumentar as vendas da sua empresa de piscinas? Faça agora uma consulta gratuita e descubra como posso te ajudar!</p>
        <a
          href="https://wa.me/5531998955912"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Falar com Especialista
        </a>
      </div>
    </div>
  );
}