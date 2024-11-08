import React from 'react';
import { Waves } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 text-white bg-gray-900">
      <div className="container px-4 mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Waves className="w-6 h-6" />
          <span className="text-lg font-bold">Consultor SEO Piscinas</span>
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} <a href="https://wa.me/5531998955912" title="Frederico Moura" target="_blank">Frederico Moura</a> - Especialista em SEO para Empresas de Piscinas
        </p>
      </div>
    </footer>
  );
}