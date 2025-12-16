"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle2 } from "lucide-react";

export default function LeadMagnet() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Agregamos un campo oculto para saber que vino del Lead Magnet
    formData.append("origen", "Lead Magnet (Guía Gratis)");

    try {
      const response = await fetch("https://formspree.io/f/xzznladd", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset();
      }
    } catch (error) {
      setStatus("idle"); // Si falla, dejamos que intenten de nuevo
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
        
        {/* Decoración */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
              Recurso Gratuito
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              50 Tareas que puedes <span className="text-blue-400">automatizar hoy</span> con IA
            </h2>
            <p className="text-slate-300 mb-6 text-lg">
              Descarga nuestra checklist interna y descubre oportunidades ocultas de ahorro.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
            {status === "success" ? (
              <div className="text-center py-8 animate-in zoom-in">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">¡Enviado!</h3>
                <p className="text-slate-300">Revisa tu correo, la guía va en camino.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="text-center mb-2">
                  <p className="font-bold text-lg">Descargar PDF ahora 👇</p>
                </div>
                
                {/* Campo Email con NAME="email" para Formspree */}
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <Button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-6 text-lg"
                >
                  {status === "loading" ? "Enviando..." : "Quiero la Guía Gratis"} <Download className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-xs text-center text-slate-400 mt-2">
                  🔒 Cero spam. Datos seguros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}