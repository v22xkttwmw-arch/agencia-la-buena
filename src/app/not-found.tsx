import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center px-4">
      
      <div className="h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
        <AlertTriangle className="h-12 w-12 text-blue-600" />
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
        404
      </h1>
      
      <h2 className="text-2xl font-bold text-slate-800 mb-4">
        Página no encontrada (o quizás automatizada)
      </h2>

      <p className="text-slate-600 max-w-md mx-auto mb-8 text-lg">
        Parece que esta página ha sido movida, borrada o nunca existió. 
        Nuestros agentes de IA están investigando el misterio.
      </p>

      <Link href="/">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8">
          <Home className="mr-2 h-5 w-5" /> Volver al Inicio
        </Button>
      </Link>
    </div>
  );
}