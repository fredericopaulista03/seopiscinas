import React from 'react';
import { Waves, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Waves className="w-8 h-8" />
          <span className="text-xl font-bold">Consultor SEO Piscinas</span>
        </div>
        <a
          href="https://wa.me/5531998955912"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Consultoria Grátis
        </a>
      </nav>

      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Consultor SEO Especializado em Empresas de Piscinas
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Aumente sua visibilidade no Google e conquiste mais clientes para seu negócio de piscinas
        </p>
        <a
          href="https://wa.me/5531998955912"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
        >
          <Phone className="w-6 h-6" />
          Fale Comigo no WhatsApp
        </a>
      </div>
    </header>
  );
}