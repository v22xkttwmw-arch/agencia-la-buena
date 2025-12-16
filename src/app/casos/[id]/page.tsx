import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, BarChart3, Clock, TrendingUp } from "lucide-react";
import { notFound } from "next/navigation";

// SIMULACIÓN DE DATOS (Base de datos ficticia de casos)
const casos = [
  {
    id: "inmobiliaria",
    title: "Automatización de Inmobiliaria: +30% Ventas",
    client: "InmoCapital MX",
    sector: "Real Estate",
    description: "Cómo logramos calificar leads automáticamente 24/7 y agendar visitas sin intervención humana.",
    challenge: "El equipo de ventas perdía 4 horas al día respondiendo preguntas básicas en WhatsApp. Los leads fríos saturaban a los vendedores y los leads calientes se enfriaban por falta de respuesta rápida.",
    solution: "Implementamos un Agente IA en WhatsApp conectado a su CRM. El bot responde dudas, califica al cliente (presupuesto, zona, crédito) y, si cumple los requisitos, agenda una visita directamente en el calendario del vendedor.",
    results: [
      { icon: <Clock />, text: "Ahorro de 25 horas semanales al equipo." },
      { icon: <TrendingUp />, text: "Aumento del 30% en visitas agendadas." },
      { icon: <CheckCircle2 />, text: "Respuesta instantánea (0 min de espera)." }
    ]
  },
  {
    id: "ecommerce",
    title: "Soporte E-commerce: Reducción del 80% en Tickets",
    client: "ModaStyle Shop",
    sector: "E-commerce",
    description: "Un chatbot entrenado con todo el catálogo y políticas de devolución que resuelve dudas complejas.",
    challenge: "Durante rebajas, el soporte colapsaba con preguntas de '¿dónde está mi pedido?'. Tiempos de respuesta de 48h generaban quejas.",
    solution: "Creamos un Chatbot con RAG (Búsqueda Inteligente) conectado a Shopify. El bot puede ver el estado del pedido en tiempo real y responder. También gestiona cambios de talla automáticamente.",
    results: [
      { icon: <BarChart3 />, text: "80% de tickets resueltos sin humanos." },
      { icon: <TrendingUp />, text: "NPS (Satisfacción) subió de 3.5 a 4.8." },
      { icon: <CheckCircle2 />, text: "ROI positivo en el primer mes." }
    ]
  }
];

export async function generateStaticParams() {
  return casos.map((c) => ({ id: c.id }));
}

export default async function CasoDetalle({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const caso = casos.find((c) => c.id === id);

  if (!caso) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        
        <div className="mb-8">
          <Link href="/#casos">
            <Button variant="ghost" className="text-slate-500 hover:text-blue-600 pl-0 gap-2">
              <ArrowLeft size={16} /> Volver a Casos
            </Button>
          </Link>
        </div>

        {/* Encabezado */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              {caso.sector}
            </span>
            <span className="text-slate-400 text-sm font-medium">Cliente: {caso.client}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            {caso.title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {caso.description}
          </p>
        </div>

        {/* Cuerpo del Caso */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Columna Principal (Texto) */}
          <div className="md:col-span-2 space-y-8">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">El Desafío 🔴</h2>
              <p className="text-slate-600 leading-relaxed">{caso.challenge}</p>
            </section>
            
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Nuestra Solución 💡</h2>
              <p className="text-slate-600 leading-relaxed">{caso.solution}</p>
            </section>
          </div>

          {/* Columna Lateral (Resultados) */}
          <div className="md:col-span-1">
            <div className="bg-slate-900 text-white p-8 rounded-2xl sticky top-24 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-blue-400">Resultados Clave</h3>
              <ul className="space-y-6">
                {caso.results.map((res, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 text-green-400">{res.icon}</div>
                    <span className="text-sm font-medium leading-snug">{res.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-700">
                <Link href="/contacto">
                  <Button className="w-full bg-blue-600 hover:bg-blue-500 font-bold">
                    Quiero resultados así
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}