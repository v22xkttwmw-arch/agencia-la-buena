import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Clock, TrendingUp, Users } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      sector: "Inmobiliaria",
      title: "Calificación Automática de Leads",
      problem: "El equipo de ventas perdía 4 horas al día respondiendo preguntas básicas en WhatsApp y filtrando curiosos.",
      solution: "Implementamos un Agente de Voiceflow conectado a CRM que califica al prospecto, verifica presupuesto y agenda la visita solo si es cualificado.",
      stats: [
        { label: "Citas Agendadas", value: "+45%", icon: TrendingUp },
        { label: "Tiempo de Respuesta", value: "Instantáneo", icon: Clock },
      ],
      stack: ["Voiceflow", "WhatsApp API", "HubSpot"],
    },
    {
      sector: "E-commerce",
      title: "Soporte al Cliente & Devoluciones",
      problem: "Saturación en soporte técnico por preguntas repetitivas sobre 'dónde está mi pedido' y procesos de devolución.",
      solution: "Chatbot con IA entrenado con la base de conocimiento de la empresa. Resuelve dudas y procesa devoluciones automáticamente consultando la base de datos.",
      stats: [
        { label: "Tickets Reducidos", value: "-70%", icon: ArrowUpRight },
        { label: "Satisfacción (CSAT)", value: "4.8/5", icon: Users },
      ],
      stack: ["OpenAI", "Shopify", "Zendesk"],
    },
    {
      sector: "Agencia de Marketing",
      title: "Automatización de Reportes",
      problem: "Los Account Managers dedicaban los viernes enteros a descargar métricas de Facebook/Google Ads para hacer reportes en Excel.",
      solution: "Sistema en Make.com que extrae la data cada lunes, genera un PDF con análisis de IA y lo envía al cliente automáticamente.",
      stats: [
        { label: "Horas Ahorradas", value: "20h/semana", icon: Clock },
        { label: "Errores Humanos", value: "0%", icon: TrendingUp },
      ],
      stack: ["Make", "Google Sheets", "Slack"],
    },
  ];

  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Resultados Reales, No Teóricos
          </h2>
          <p className="text-neutral-400 text-lg">
            Así es como transformamos empresas utilizando automatización inteligente.
            Métricas validadas en entornos de producción.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <Card key={index} className="bg-neutral-950 border-neutral-800 flex flex-col hover:border-neutral-600 transition-all duration-300">
              <CardHeader>
                <div className="mb-4">
                  <Badge variant="outline" className="text-green-400 border-green-400/30 bg-green-400/10">
                    {item.sector}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-white mb-2">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-neutral-400 line-clamp-3">
                  {item.problem}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="mt-auto space-y-6">
                {/* Métricas destacadas */}
                <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-neutral-800">
                  {item.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-white flex justify-center items-center gap-2">
                        {stat.value}
                      </div>
                      <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stack Tecnológico */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.stack.map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-neutral-500 bg-neutral-900 px-2 py-1 rounded border border-neutral-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}