"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle2, Calendar } from "lucide-react";

export default function AgendarPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container px-4 mx-auto max-w-5xl">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Reserva tu <span className="text-blue-600">Consultoría Gratuita</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Selecciona un horario en el calendario. Analizaremos tu negocio y te daremos una hoja de ruta de automatización en 30 minutos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          
          {/* Columna Izquierda: Beneficios */}
          <div className="md:col-span-1 space-y-6">
            <Card className="p-6 bg-white border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Calendar className="text-blue-600" size={20} />
                ¿Qué lograremos?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="text-green-500 min-w-[16px]" size={16} />
                  <span>Auditoría rápida de tus procesos actuales.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="text-green-500 min-w-[16px]" size={16} />
                  <span>Cálculo real de cuánto dinero puedes ahorrar.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="text-green-500 min-w-[16px]" size={16} />
                  <span>Sin compromiso de compra.</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Columna Derecha: El Calendario */}
          <div className="md:col-span-2">
            <Card className="h-[600px] w-full flex items-center justify-center bg-white border-slate-200 shadow-xl overflow-hidden relative">
              
              {/* AQUÍ IRÁ EL EMBED REAL DE CALENDLY LUEGO */}
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Calendar className="text-slate-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Calendario de Reservas</h3>
                <p className="text-slate-500 max-w-sm mx-auto mb-6">
                  Aquí aparecerá tu widget de Calendly o Cal.com cuando tengas tu cuenta configurada.
                </p>
                <a 
                  href="https://calendly.com" 
                  target="_blank" 
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                  Crear cuenta gratis en Calendly
                </a>
              </div>

            </Card>
          </div>

        </div>
      </div>
    </main>
  );
}