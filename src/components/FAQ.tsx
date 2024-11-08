import React from 'react';

const faqs = [
  {
    question: "Quanto tempo leva para ver resultados com SEO para piscinas?",
    answer: "Em média, os primeiros resultados começam a aparecer entre 3 a 6 meses. Trabalho com estratégias focadas no seu mercado local para acelerar esse processo."
  },
  {
    question: "Como você pode ajudar minha empresa de piscinas?",
    answer: "Desenvolvo estratégias personalizadas para seu negócio aparecer nas primeiras posições do Google quando as pessoas procuram por serviços de piscina na sua região."
  },
  {
    question: "Quais tipos de empresas de piscina você atende?",
    answer: "Atendo empresas de construção, manutenção, limpeza, reforma e venda de equipamentos para piscinas. Cada estratégia é personalizada para seu segmento específico."
  },
  {
    question: "Por que preciso de um especialista em SEO para piscinas?",
    answer: "O mercado de piscinas tem suas particularidades. Como especialista no setor, conheço as palavras-chave certas e estratégias que realmente funcionam para atrair clientes qualificados."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Dúvidas Frequentes
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}