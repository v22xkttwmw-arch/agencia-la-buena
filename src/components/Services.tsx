import { Cpu, BarChart3, Globe, Zap, Bot, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <Bot className="w-8 h-8 text-blue-500" />,
    title: "Agentes IA Autónomos",
    description: "Bots que trabajan 24/7. Atienden clientes, agendan citas y cualifican leads mientras duermes."
  },
  {
    icon: <Cpu className="w-8 h-8 text-purple-500" />,
    title: "Automatización (RPA)",
    description: "Adiós a las tareas repetitivas. Conectamos tus apps para que los datos fluyan solos sin errores humanos."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-green-500" />,
    title: "Dashboards Inteligentes",
    description: "Visualiza tus métricas en tiempo real. Toma decisiones basadas en datos, no en intuición."
  },
  {
    icon: <Globe className="w-8 h-8 text-indigo-500" />,
    title: "Webs de Alta Conversión",
    description: "Diseño minimalista y persuasivo enfocado en una sola cosa: convertir visitantes en clientes."
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    title: "Consultoría de Procesos",
    description: "Auditamos tu flujo de trabajo para detectar cuellos de botella y eliminar ineficiencias."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
    title: "Seguridad de Datos",
    description: "Implementamos IA cumpliendo normativas GDPR y protegiendo la información sensible de tu empresa."
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
            Nuestros Servicios
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
            Tecnología punta simplificada para escalar tu negocio sin aumentar personal.
          </p>
        </div>

        {/* GRID COMPACTO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
            >
              <div className="mb-3 bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}