import React from 'react';
import { Waves } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Waves className="w-6 h-6" />
          <span className="text-lg font-bold">Consultor SEO Piscinas</span>
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} Frederico Moura - Especialista em SEO para Empresas de Piscinas
        </p>
      </div>
    </footer>
  );
}