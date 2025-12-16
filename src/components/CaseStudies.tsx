"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, Zap } from "lucide-react";
import Link from "next/link"; // <--- Importante para navegar

const cases = [
  {
    title: "Inmobiliaria Automática",
    metric: "+30% Ventas",
    description: "Cualificación de leads 24/7 y agendamiento de visitas sin intervención humana.",
    tags: ["Real Estate", "WhatsApp Bot", "Make"],
    icon: <Users className="text-blue-500" />,
    link: "/casos/inmobiliaria" // <--- ENLACE CONECTADO
  },
  {
    title: "Soporte E-commerce",
    metric: "-80% Tickets",
    description: "IA entrenada con políticas de la empresa para resolver dudas de envíos y devoluciones.",
    tags: ["E-commerce", "Soporte IA", "Shopify"],
    icon: <Zap className="text-amber-500" />,
    link: "/casos/ecommerce" // <--- ENLACE CONECTADO
  },
  {
    title: "Automatización Financiera",
    metric: "40h Ahorradas",
    description: "Extracción de facturas, conciliación bancaria y reportes en Excel automáticos.",
    tags: ["Finanzas", "Procesamiento Docs", "GPT-4"],
    icon: <BarChart3 className="text-green-500" />,
    link: "/contacto" // Si no tenemos caso detallado, llevamos a contacto
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blue-200 bg-blue-50 text-blue-700">
            Resultados Comprobados
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            No prometemos, <span className="text-blue-600">demostramos</span>.
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Empresas reales. Problemas reales. Soluciones de IA que se pagan solas en el primer mes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="p-8 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group bg-white flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-blue-50 transition-colors">
                    {caseStudy.icon}
                  </div>
                  <span className="font-bold text-2xl text-slate-900 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
                    {caseStudy.metric}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {caseStudy.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {caseStudy.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {caseStudy.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link href={caseStudy.link} className="block mt-auto">
                <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all justify-between">
                  Ver Caso de Estudio <ArrowRight size={16} />
                </Button>
              </Link>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}