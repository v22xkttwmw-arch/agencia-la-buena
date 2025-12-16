"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" onClick={closeMenu} className="flex items-center gap-2 font-bold text-xl text-slate-900">
            <div className="p-1 bg-blue-600 rounded text-white">
              <Zap size={20} fill="currentColor" />
            </div>
            <span>Agencia IA</span>
          </Link>

          {/* MENÚ DE ESCRITORIO */}
          <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-600">
            <Link href="/#servicios" className="hover:text-blue-600 transition-colors">Servicios</Link>
            <Link href="/#casos" className="hover:text-blue-600 transition-colors">Casos de Éxito</Link>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="/nosotros" className="hover:text-blue-600 transition-colors">Nosotros</Link>
          </div>

          {/* BOTÓN DE ACCIÓN (ESCRITORIO) -> AHORA VA A /agendar */}
          <div className="hidden md:flex">
            <Link href="/agendar"> 
              <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-6 shadow-lg shadow-blue-900/20">
                Agendar Llamada
              </Button>
            </Link>
          </div>

          {/* BOTÓN MENÚ MÓVIL */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white absolute w-full px-4 py-6 space-y-4 shadow-xl h-screen">
          <Link href="/#servicios" onClick={closeMenu} className="block text-lg font-medium text-slate-600 hover:text-blue-600 py-2">Servicios</Link>
          <Link href="/#casos" onClick={closeMenu} className="block text-lg font-medium text-slate-600 hover:text-blue-600 py-2">Casos de Éxito</Link>
          <Link href="/blog" onClick={closeMenu} className="block text-lg font-medium text-slate-600 hover:text-blue-600 py-2">Blog</Link>
          <div className="pt-4">
            {/* BOTÓN MÓVIL -> AHORA VA A /agendar */}
            <Link href="/agendar" onClick={closeMenu}>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 shadow-xl">
                Agendar Auditoría
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}