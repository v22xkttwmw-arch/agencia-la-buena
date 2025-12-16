"use client";

import { Card } from "@/components/ui/card";
import { Bot, BarChart3, Workflow, MessageSquare, Database, Zap } from "lucide-react";

const services = [
  {
    title: "Agentes de Atención 24/7",
    description: "Chatbots entrenados con tus propios datos que responden dudas, agendan citas y cierran ventas en WhatsApp y Web.",
    icon: <Bot className="w-10 h-10 text-blue-600" />,
    benefit: "Ahorra 2 sueldos de soporte al año."
  },
  {
    title: "Automatización de CRM",
    description: "Conectamos tus leads de Facebook/Instagram directo a tu CRM y les enviamos seguimiento automático inmediato.",
    icon: <Database className="w-10 h-10 text-purple-600" />,
    benefit: "Nunca pierdas un lead por tardar en responder."
  },
  {
    title: "Infraestructura RAG (Busqueda IA)",
    description: "Sistemas que 'leen' todos tus PDFs y excels para que tu equipo pueda hacer preguntas complejas y obtener respuestas en segundos.",
    icon: <Workflow className="w-10 h-10 text-green-600" />,
    benefit: "Tu conocimiento empresarial, accesible al instante."
  },
  {
    title: "Clonación de Voz & Video",
    description: "Creamos avatares de IA para tus videos de marketing o sistemas de llamadas automatizadas hiper-realistas.",
    icon: <MessageSquare className="w-10 h-10 text-pink-600" />,
    benefit: "Escala tu marca personal sin grabar todo el día."
  },
  {
    title: "Consultoría de Procesos",
    description: "Auditamos tu empresa para encontrar cuellos de botella y diseñamos el mapa de automatización completo.",
    icon: <BarChart3 className="w-10 h-10 text-amber-600" />,
    benefit: "Claridad total sobre dónde estás perdiendo dinero."
  },
  {
    title: "Dashboards Inteligentes",
    description: "Paneles de control que se actualizan solos en tiempo real para que tomes decisiones basadas en datos, no en intuición.",
    icon: <Zap className="w-10 h-10 text-cyan-600" />,
    benefit: "Control total de tu negocio en una sola pantalla."
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Nuestra Oferta</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-4">
            Soluciones que <span className="text-blue-600">escalan</span> contigo
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            No vendemos "herramientas", vendemos tiempo y eficiencia. Elige el módulo que tu empresa necesita hoy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group bg-white">
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-blue-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-green-500">✔</span> {service.benefit}
                </p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}