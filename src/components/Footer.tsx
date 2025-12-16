import Link from "next/link";
import { Zap, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* IDENTIDAD DE MARCA */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl text-slate-900">
              <div className="p-1 bg-blue-600 rounded text-white">
                <Zap size={20} fill="currentColor" />
              </div>
              <span>Nexus AI</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Ayudamos a empresas a escalar sus operaciones mediante Inteligencia Artificial y automatización estratégica.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/nosotros" className="hover:text-blue-600">Sobre Nosotros</Link></li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><Link href="/contacto" className="hover:text-blue-600">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="#" className="hover:text-blue-600">Privacidad</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Términos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-slate-400 hover:text-blue-600"><Twitter size={20} /></Link>
              <Link href="#" className="text-slate-400 hover:text-blue-700"><Linkedin size={20} /></Link>
              <Link href="#" className="text-slate-400 hover:text-slate-900"><Github size={20} /></Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Nexus AI. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}