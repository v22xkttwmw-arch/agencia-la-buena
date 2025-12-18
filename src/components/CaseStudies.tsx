import { ArrowUpRight, TrendingUp, Clock, Users } from "lucide-react";

const cases = [
  {
    company: "Inmobiliaria",
    metric: "+45% Leads",
    result: "Automatización de WhatsApp y cualificación 24/7.",
    icon: <TrendingUp size={20} className="text-green-600" />,
    color: "bg-green-50 border-green-100"
  },
  {
    company: "Logística",
    metric: "-20 Horas/Semana",
    result: "Sistema RPA para facturación y seguimiento de envíos.",
    icon: <Clock size={20} className="text-blue-600" />,
    color: "bg-blue-50 border-blue-100"
  },
  {
    company: "E-commerce",
    metric: "x2.5 Retención",
    result: "Personalización de ofertas mediante IA predictiva.",
    icon: <Users size={20} className="text-purple-600" />,
    color: "bg-purple-50 border-purple-100"
  }
];

export default function CaseStudies() {
  return (
    <section id="casos" className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">Resultados Reales</h2>
            <p className="text-slate-500 text-sm">Empresas que ya han dado el salto.</p>
          </div>
          <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors">
            Ver portfolio completo <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cases.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-fit p-2 rounded-lg mb-3 ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{item.metric}</h3>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Sector {item.company}</p>
              <p className="text-sm text-slate-600">
                {item.result}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}