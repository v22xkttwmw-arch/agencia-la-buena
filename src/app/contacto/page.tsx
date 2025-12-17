"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, Zap, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulamos el envío
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      
      {/* FONDO DECORATIVO */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-white pointer-events-none" />

      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* COLUMNA IZQUIERDA: VENTA Y CONTEXTO */}
          <div className="space-y-8 pt-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                Consultoría Estratégica
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                ¿Listo para escalar <br />
                <span className="text-blue-600">sin aumentar el caos?</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dejemos de lado las teorías. Cuéntanos qué proceso te está robando tiempo hoy y diseñaremos una solución para eliminarlo mañana.
              </p>
            </div>

            {/* Puntos de Valor */}
            <div className="space-y-6 py-6 border-y border-slate-200">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Zap size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Auditoría Inicial Gratuita</h3>
                  <p className="text-sm text-slate-500">Analizamos tus cuellos de botella sin coste.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Privacidad Total</h3>
                  <p className="text-sm text-slate-500">Tus datos y procesos están bajo NDA desde el día 1.</p>
                </div>
              </div>
            </div>

            {/* Datos de Contacto */}
            <div className="space-y-4">
              <p className="text-sm font-bold text-slate-900 uppercase tracking-wide">Otros canales</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-slate-600">
                  <Mail size={18} /> <span>hola@sparkops.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <MapPin size={18} /> <span>Global (Remote First)</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: EL FORMULARIO PRO */}
          <Card className="p-8 md:p-10 bg-white shadow-2xl shadow-slate-200/50 border-slate-100 rounded-3xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <CheckCircle2 size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Solicitud Recibida!</h3>
                  <p className="text-slate-600 max-w-xs mx-auto">
                    Nuestro equipo técnico analizará tu caso y te contactará en menos de 24 horas.
                  </p>
                </div>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4 w-full">
                  Volver al formulario
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">Solicitar Auditoría</h3>
                  <p className="text-sm text-slate-500">Completa el formulario para ver si podemos ayudarte.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase">Nombre</label>
                    <Input required placeholder="Ej: Ana" className="bg-slate-50 border-slate-200 focus:bg-white transition-all h-11" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase">Apellido</label>
                    <Input required placeholder="Ej: García" className="bg-slate-50 border-slate-200 focus:bg-white transition-all h-11" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">Email Corporativo</label>
                  <Input required type="email" placeholder="nombre@tuempresa.com" className="bg-slate-50 border-slate-200 focus:bg-white transition-all h-11" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">Sitio Web / LinkedIn</label>
                  <Input placeholder="www.tuempresa.com" className="bg-slate-50 border-slate-200 focus:bg-white transition-all h-11" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">¿Cuál es tu mayor desafío hoy?</label>
                  <Textarea 
                    required 
                    placeholder="Ej: Mi equipo pierde 10 horas semanales copiando datos de facturas..." 
                    className="min-h-[140px] bg-slate-50 border-slate-200 focus:bg-white transition-all resize-none p-4"
                  />
                </div>

                <Button type="submit" className="w-full bg-slate-900 hover:bg-blue-600 text-white text-lg font-bold py-7 rounded-xl shadow-lg transition-all duration-300" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">Enviando...</span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Enviar Solicitud <ArrowRight size={20} />
                    </span>
                  )}
                </Button>
                
                <p className="text-[10px] text-center text-slate-400 mt-4 leading-tight">
                  Al hacer clic, aceptas que procesemos tus datos para contactarte. Odiamos el spam tanto como tú.
                </p>
              </form>
            )}
          </Card>

        </div>
      </div>
    </main>
  );
}