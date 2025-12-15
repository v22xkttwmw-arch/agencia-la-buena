import {  Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-400 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Columna 1: Marca */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white tracking-tighter">Agencia IA</h3>
          <p className="text-sm leading-relaxed">
            Automatizando el futuro de los negocios con inteligencia artificial ética y eficiente.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="space-y-4">
          <h4 className="text-white font-medium">Empresa</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Servicios</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Casos de Éxito</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Legal */}
        <div className="space-y-4">
          <h4 className="text-white font-medium">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
          </ul>
        </div>

        {/* Columna 4: Social */}
        <div className="space-y-4">
          <h4 className="text-white font-medium">Síguenos</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
          </div>
        </div>
        
      </div>
      
      {/* Copyright */}
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-neutral-900 text-center text-sm text-neutral-600">
        © {new Date().getFullYear()} Agencia IA. Todos los derechos reservados.
      </div>
    </footer>
  );
}