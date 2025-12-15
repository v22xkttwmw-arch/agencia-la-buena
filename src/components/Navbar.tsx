import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-neutral-800 bg-neutral-950/50 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tighter text-white">
          Agencia IA
        </div>

        {/* Enlaces (Menú central) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
          <Link href="#" className="hover:text-white transition-colors">Servicios</Link>
          <Link href="#" className="hover:text-white transition-colors">Proceso</Link>
          <Link href="#" className="hover:text-white transition-colors">Casos de Éxito</Link>
        </div>

        {/* Botón de acción */}
        <div>
          <Button size="sm" className="bg-white text-black hover:bg-neutral-200">
            Contacto
          </Button>
        </div>
      </div>
    </nav>
  );
}