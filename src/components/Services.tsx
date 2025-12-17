"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Workflow, Database, ArrowRight, BrainCircuit, LineChart } from "lucide-react";

const services = [
  {
    icon: <Bot className="w-10 h-10 text-blue-600" />,
    title: "Agentes de IA Autónomos",
    description: "No son simples chatbots. Son empleados digitales capaces de resolver tickets complejos, gestionar devoluciones y agendar citas en tu CRM sin supervisión humana.",
    tags: ["Soporte 24/7", "Ventas Inbound", "Multi-idioma"]
  },
  {
    icon: <Workflow className="w-10 h-10 text-violet-600" />,
    title: "Orquestación de Flujos (RPA)",
    description: "Conectamos tu ecosistema (Salesforce, SAP, Slack). Cuando entra una factura, nuestro sistema la lee, la valida y la paga. Sin clics humanos.",
    tags: ["Make / Zapier Enterprise", "Automatización Financiera"]
  },
  {
    icon: <Database className="w-10 h-10 text-emerald-600" />,
    title: "Reactividad de Datos (ETL)",
    description: "Tu empresa genera datos que nadie mira. Creamos dashboards que te avisan por WhatsApp si las ventas bajan o si hay una anomalía en logística.",
    tags: ["Business Intelligence", "Alertas en Tiempo Real"]
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        
        {/* CABECERA */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700 bg-blue-50">
            Arquitectura de Soluciones
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Más allá del "Chatbot". <br />
            <span className="text-blue-600">Ingeniería de Procesos.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            No instalamos software y nos vamos. Diseñamos sistemas a medida que se integran profundamente en tu operativa actual.
          </p>
        </div>

        {/* GRID DE SERVICIOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group bg-white">
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-blue-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* FOOTER DE SECCIÓN */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-4">¿No ves exactamente lo que buscas?</p>
          <a href="/contacto" className="inline-flex items-center font-bold text-blue-600 hover:text-blue-800 transition-colors">
            Consultar desarrollo a medida <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}