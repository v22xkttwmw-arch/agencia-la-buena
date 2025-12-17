"use client";

import { AlertCircle, Zap, Layers, BarChart4, BrainCircuit, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Comparison() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      
      {/* FONDO DECORATIVO */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px]"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        
        {/* CABECERA ESTRATÉGICA */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700 bg-blue-50">
            Cambio de Paradigma
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            De "Apagar Fuegos" a <br />
            <span className="text-blue-600">Diseñar el Futuro.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Tu equipo está atrapado en tareas repetitivas de bajo valor. SparkOps no reemplaza tu talento; construye la infraestructura para que tu talento pueda escalar el negocio.
          </p>
        </div>

        {/* CONTENEDOR DE COMPARACIÓN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">

          {/* TARJETA 1: LA REALIDAD ACTUAL (El problema del proceso, no de la gente) */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Layers size={140} className="text-slate-900" />
            </div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="p-2 bg-slate-100 rounded-lg text-slate-500">
                  <Workflow size={20} />
                </div>
                <span className="text-slate-500 font-bold uppercase tracking-wider text-sm">Operativa Tradicional</span>
              </div>
              
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Procesos Fragmentados</h3>
              <p className="text-slate-500 mb-8 border-b border-slate-100 pb-8">
                El talento humano se desperdicia conectando sistemas manualmente.
              </p>

              <div className="space-y-6 mt-auto">
                <div className="flex items-start gap-4">
                  <AlertCircle className="text-slate-400 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-slate-900">Cuellos de Botella</p>
                    <p className="text-sm text-slate-500">El crecimiento se detiene si alguien enferma o se va de vacaciones.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <AlertCircle className="text-slate-400 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-slate-900">Foco del Equipo</p>
                    <p className="text-sm text-slate-500">80% Administrativo / 20% Estratégico.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <AlertCircle className="text-slate-400 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-slate-900">Escalabilidad</p>
                    <p className="text-sm text-slate-500">Costosa. Crecer requiere contratar linealmente.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TARJETA 2: LA SOLUCIÓN SPARKOPS (El futuro) */}
          <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl shadow-blue-900/20 border border-slate-800 relative overflow-hidden transform lg:scale-105 z-20">
            {/* Glow Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-20 animate-pulse"></div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="inline-flex items-center gap-2">
                  <div className="p-2 bg-blue-600 rounded-lg text-white">
                    <Zap size={20} fill="currentColor" />
                  </div>
                  <span className="text-blue-200 font-bold uppercase tracking-wider text-sm">Ecosistema SparkOps</span>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-2">Orquestación Autónoma</h3>
              <p className="text-slate-400 mb-8 border-b border-slate-700 pb-8">
                Infraestructura invisible que conecta todo tu negocio en tiempo real.
              </p>

              <div className="space-y-6 mt-auto">
                {/* Punto 1 */}
                <div className="flex items-start gap-4">
                  <div className="p-1 bg-green-500/10 rounded text-green-400 mt-1">
                    <BrainCircuit size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-white">Ejecución Instantánea</p>
                    <p className="text-sm text-slate-400">Tus sistemas trabajan 24/7. Tu equipo descansa y piensa.</p>
                  </div>
                </div>
                
                {/* Punto 2 */}
                <div className="flex items-start gap-4">
                  <div className="p-1 bg-blue-500/10 rounded text-blue-400 mt-1">
                    <BarChart4 size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-white">Foco del Equipo (Liberado)</p>
                    <p className="text-sm text-slate-400">10% Supervisión / <span className="text-blue-300 font-bold">90% Estrategia y Creatividad.</span></p>
                  </div>
                </div>

                {/* Punto 3 */}
                <div className="flex items-start gap-4">
                  <div className="p-1 bg-violet-500/10 rounded text-violet-400 mt-1">
                    <Zap size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-white">Escalabilidad Infinita</p>
                    <p className="text-sm text-slate-400">Duplica tus clientes sin duplicar tu nómina ni tu caos.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}