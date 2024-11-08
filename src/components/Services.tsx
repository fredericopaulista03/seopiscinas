import React from 'react';
import { Target, Users, Award } from 'lucide-react';

const services = [
  {
    icon: <Target className="w-12 h-12 text-blue-600" />,
    title: "Otimização SEO para Piscinas",
    description: "Alcance o topo do Google com estratégias exclusivas para empresas de piscinas"
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: "Marketing Digital para Piscinas",
    description: "Atraia clientes qualificados interessados em seus serviços de piscina"
  },
  {
    icon: <Award className="w-12 h-12 text-blue-600" />,
    title: "Consultoria Especializada",
    description: "Análise completa do seu negócio com foco em resultados"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Serviços Especializados para seu Negócio de Piscinas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}