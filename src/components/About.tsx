import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const beneficios = [
  "Aumente a visibilidade da sua empresa de piscinas no Google",
  "Conquiste mais clientes qualificados para seu negócio",
  "Supere seus concorrentes nas buscas",
  "Melhore sua presença online com estratégias comprovadas",
  "Resultados mensuráveis e relatórios detalhados"
];

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Olá, sou Frederico Moura
          </h2>
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200"
              alt="Piscina profissional"
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
          </div>
          <p className="text-lg mb-6">
            Como especialista em SEO para empresas de piscinas, ajudo empresários como você a aumentarem sua presença online e conquistarem mais clientes.
          </p>
          <p className="text-lg mb-8">
            Trabalho com diversos segmentos do mercado de piscinas:
          </p>
          <ul className="grid md:grid-cols-2 gap-4 mb-8">
            {beneficios.map((beneficio, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>{beneficio}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}