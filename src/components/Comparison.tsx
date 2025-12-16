import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Comparison() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 mb-4">
            Empleado Tradicional vs. <span className="text-blue-600">Agente IA</span>
          </h2>
          <p className="text-neutral-600 max-w-[600px] mx-auto">
            La diferencia no es solo velocidad, es capacidad operativa y escalabilidad instantánea.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Columna Izquierda: Tradicional */}
          <Card className="p-8 border-neutral-200 bg-white shadow-sm opacity-80 hover:opacity-100 transition-opacity">
            <h3 className="text-xl font-bold mb-6 text-neutral-500">Método Tradicional</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="p-1 bg-red-100 rounded text-red-600"><X size={16} /></div>
                <span className="text-neutral-600">8 horas laborales al día</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1 bg-red-100 rounded text-red-600"><X size={16} /></div>
                <span className="text-neutral-600">1 tarea a la vez (Multitasking limitado)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1 bg-red-100 rounded text-red-600"><X size={16} /></div>
                <span className="text-neutral-600">Requiere supervisión constante</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1 bg-red-100 rounded text-red-600"><X size={16} /></div>
                <span className="text-neutral-600">Entrenamiento dura semanas</span>
              </li>
            </ul>
          </Card>

          {/* Columna Derecha: IA - DESTACADA */}
          <Card className="p-8 border-blue-200 bg-blue-50/50 shadow-xl relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              RECOMENDADO
            </div>
            <h3 className="text-xl font-bold mb-6 text-blue-700">Agente IA Certificado</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="p-1 bg-green-100 rounded text-green-600"><Check size={16} /></div>
                <span className="text-neutral-900 font-medium">24/7 sin pausas ni descansos</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1 bg-green-100 rounded text-green-600"><Check size={16} /></div>
                <span className="text-neutral-900 font-medium">10,000+ procesos simultáneos</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1 bg-green-100 rounded text-green-600"><Check size={16} /></div>
                <span className="text-neutral-900 font-medium">Autonomía total reportada</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1 bg-green-100 rounded text-green-600"><Check size={16} /></div>
                <span className="text-neutral-900 font-medium">Entrenamiento instantáneo (Knowledge Base)</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}