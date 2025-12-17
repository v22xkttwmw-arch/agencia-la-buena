"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Clock, DollarSign, Users, BarChart3, Zap } from "lucide-react";

const cases = [
  {
    category: "E-Commerce & Retail",
    client: "Retailer de Moda Global",
    title: "Automatización del 66% del Soporte al Cliente",
    description: "Implementamos un Agente de IA capaz de gestionar 2.3 millones de conversaciones en 35 idiomas. El sistema no solo responde dudas, sino que gestiona devoluciones y cambios en el ERP en tiempo real.",
    result: "Equivalente al trabajo de 700 agentes full-time.",
    metrics: [
      { label: "Ahorro Proyectado", value: "$40M", sub: "Anuales (USD)" },
      { label: "Tiempo de Resolución", value: "2 min", sub: "Antes: 11 min" },
      { label: "Satisfacción (CSAT)", value: "4.8/5", sub: "Igual que humanos" }
    ],
    tags: ["Atención al Cliente", "Soporte 24/7", "Multilingüe"],
    color: "bg-blue-50 border-blue-100"
  },
  {
    category: "Logística & Supply Chain",
    client: "Operador Logístico Europeo",
    title: "Procesamiento de Facturas 'Touchless'",
    description: "La empresa procesaba 140,000 facturas manuales al año con un equipo de 20 personas. Creamos un flujo con Visión Artificial que extrae datos, valida con órdenes de compra y ejecuta el pago en SAP.",
    result: "Reducción del 80% en costes administrativos.",
    metrics: [
      { label: "Eficiencia", value: "+600%", sub: "Velocidad de proceso" },
      { label: "Tasa de Error", value: "0.1%", sub: "Antes: 12%" },
      { label: "Horas Ahorradas", value: "20k", sub: "Anuales" }
    ],
    tags: ["Finanzas", "OCR", "SAP Automation"],
    color: "bg-emerald-50 border-emerald-100"
  },
  {
    category: "Real Estate (Inmobiliaria)",
    client: "Firma de Bienes Raíces Top 10",
    title: "Cualificación de Leads Inmobiliarios 24/7",
    description: "Los agentes perdían el 40% de su tiempo filtrando curiosos. Implementamos un bot de WhatsApp que cualifica presupuesto, zona y urgencia antes de pasar el lead al humano.",
    result: "300% de aumento en visitas agendadas.",
    metrics: [
      { label: "Conversión", value: "+22%", sub: "Lead a Venta" },
      { label: "Respuesta", value: "< 1 min", sub: "24/7/365" },
      { label: "ROI", value: "15x", sub: "En 3 meses" }
    ],
    tags: ["Ventas", "WhatsApp API", "Cualificación"],
    color: "bg-purple-50 border-purple-100"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        
        {/* CABECERA DE SECCIÓN */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6">
            <BarChart3 size={14} /> Resultados Comprobados
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            No vendemos humo. <br />
            <span className="text-blue-600">Vendemos eficiencia medible.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Nuestros clientes no buscan "estar a la moda" con la IA. Buscan reducir costes operativos y escalar sin contratar más personal. Aquí están los datos.
          </p>
        </div>

        {/* GRID DE CASOS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div key={index} className="group relative">
              
              {/* TARJETA PRINCIPAL */}
              <Card className="h-full bg-white border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 p-8 flex flex-col relative z-10 hover:-translate-y-2">
                
                {/* ETIQUETA SUPERIOR */}
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200">
                    {caseStudy.category}
                  </Badge>
                  <div className={`p-2 rounded-full ${caseStudy.color}`}>
                    <ArrowUpRight className="w-5 h-5 text-slate-700" />
                  </div>
                </div>

                {/* TÍTULO Y CLIENTE */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-2">{caseStudy.client}</h4>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                    {caseStudy.title}
                  </h3>
                </div>

                {/* DESCRIPCIÓN */}
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {caseStudy.description}
                </p>

                {/* RESULTADO DESTACADO */}
                <div className="mb-8 p-4 bg-slate-50 border-l-4 border-blue-600 rounded-r-lg">
                  <span className="block text-xs font-bold text-blue-600 uppercase mb-1">Impacto Principal</span>
                  <span className="text-slate-900 font-medium">{caseStudy.result}</span>
                </div>

                {/* MÉTRICAS (GRID) */}
                <div className="grid grid-cols-3 gap-4 mt-auto border-t border-slate-100 pt-6">
                  {caseStudy.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-extrabold text-slate-900 tracking-tight">{metric.value}</div>
                      <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* TAGS (Al pie) */}
                <div className="mt-6 flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                   {caseStudy.tags.map(tag => (
                     <span key={tag} className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded">
                       #{tag}
                     </span>
                   ))}
                </div>
              </Card>
              
              {/* DECORACIÓN DE FONDO (GLOW) */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity -z-10" />
            </div>
          ))}
        </div>

        {/* CTA INFERIOR */}
        <div className="mt-20 text-center">
           <p className="text-slate-500 mb-6">¿Quieres ver el desglose técnico de estos casos?</p>
           <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-slate-900 border border-transparent rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900">
              <Zap className="w-5 h-5 mr-2" />
              Ver Estudio Completo en PDF
           </button>
        </div>

      </div>
    </section>
  );
}