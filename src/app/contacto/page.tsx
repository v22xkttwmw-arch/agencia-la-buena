"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);

  // ESTA ES LA MAGIA: Conectamos con tu Formspree real
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCargando(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xzznladd", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setEnviado(true);
        form.reset(); // Limpiamos el formulario
      } else {
        alert("Hubo un error al enviar. Por favor intenta de nuevo.");
      }
    } catch (error) {
      alert("Error de conexión.");
    } finally {
      setCargando(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      
      <div className="container px-4 mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Hablemos de <span className="text-blue-600">Negocios</span>
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          ¿Listo para automatizar? Cuéntanos tu reto y te diremos cómo la IA puede resolverlo.
        </p>
      </div>

      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Columna Izquierda: Info */}
          <div className="space-y-8">
            <Card className="p-8 border-none shadow-lg bg-blue-600 text-white">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/50 rounded-lg"><Mail size={24} /></div>
                  <div>
                    <p className="font-medium text-blue-100">Correo Electrónico</p>
                    <a href="mailto:hola@agenciaia.ai" className="text-lg font-semibold hover:text-blue-200">hola@agenciaia.ai</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/50 rounded-lg"><MapPin size={24} /></div>
                  <div>
                    <p className="font-medium text-blue-100">Oficinas</p>
                    <p className="text-lg font-semibold">Ciudad de México, MX</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="p-8 bg-white rounded-xl border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4">Tu privacidad es sagrada</h4>
              <p className="text-sm text-neutral-600">
                Firmamos NDA (Acuerdo de Confidencialidad) desde el día 1 si lo requieres.
              </p>
            </div>
          </div>

          {/* Columna Derecha: Formulario REAL */}
          <Card className="p-8 bg-white border-neutral-200 shadow-xl">
            {enviado ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in zoom-in">
                <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Mensaje Recibido!</h3>
                <p className="text-neutral-500 max-w-xs mx-auto">
                  Hemos recibido tu solicitud correctamente. Te responderemos en menos de 24 horas.
                </p>
                <Button onClick={() => setEnviado(false)} variant="outline" className="mt-8">
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* IMPORTANTE: Los campos ahora tienen 'name' para que Formspree los lea */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Nombre</label>
                    <input required name="nombre" type="text" placeholder="Tu nombre" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Apellido</label>
                    <input name="apellido" type="text" placeholder="Tu apellido" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Corporativo</label>
                  <input required name="email" type="email" placeholder="nombre@empresa.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Empresa</label>
                  <input name="empresa" type="text" placeholder="www.tuempresa.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">¿Cómo podemos ayudarte?</label>
                  <textarea required name="mensaje" placeholder="Describe tu caso..." className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none min-h-[150px]"></textarea>
                </div>

                <Button type="submit" disabled={cargando} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 text-lg">
                  {cargando ? "Enviando..." : "Enviar Mensaje"} <Send size={18} className="ml-2" />
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </main>
  );
}