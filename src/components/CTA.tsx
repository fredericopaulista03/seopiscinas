import React from 'react';
import { Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Pronto para aumentar suas vendas?
        </h2>
        <p className="text-xl mb-8">
          Faça uma consulta gratuita e descubra como posso ajudar seu negócio de piscinas a crescer
        </p>
        <a
          href="https://wa.me/5531998955912"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
        >
          <Phone className="w-6 h-6" />
          Solicitar Consultoria Grátis
        </a>
      </div>
    </section>
  );
}