"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "¿Qué tipo de procesos se pueden automatizar realmente?",
    answer:
      "Nos enfocamos en procesos B2B de alto volumen y basadas en reglas. Ejemplos ideales: procesamiento de facturas, cualificación inicial de leads, onboarding de clientes, generación de reportes financieros y sincronización entre ERPs y CRMs. Si tu equipo pasa horas copiando y pegando datos, podemos automatizarlo.",
  },
  {
    question: "¿Es segura la IA con mis datos confidenciales?",
    answer:
      "Absolutamente. La seguridad es nuestra prioridad. Utilizamos arquitecturas 'Zero-Retention' con proveedores como Azure OpenAI, lo que garantiza legalmente que tus datos NO se utilizan para entrenar modelos públicos. Además, firmamos NDAs estrictos desde el primer día.",
  },
  {
    question: "¿Cuánto tiempo tarda la implementación?",
    answer:
      "Depende de la complejidad. Una automatización de un solo flujo (ej: cualificación de leads) puede estar lista en 2-3 semanas. Proyectos más complejos de orquestación pueden llevar de 6 a 12 semanas. Nuestra metodología ágil entrega valor desde el primer mes.",
  },
  {
    question: "¿Necesito un equipo técnico interno para esto?",
    answer:
      "No. SparkOps se encarga de todo: diseño, desarrollo, implementación y mantenimiento. Entregamos soluciones 'llave en mano'. Tu equipo solo necesita disfrutar de la eficiencia ganada.",
  },
  {
    question: "¿Cómo se calcula el retorno de inversión (ROI)?",
    answer:
      "Antes de empezar, realizamos una auditoría donde calculamos las horas-hombre que te ahorrarás y el aumento de ingresos proyectado. Nuestros clientes suelen ver un ROI positivo en menos de 6 meses.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-slate-50" id="faq">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* COLUMNA IZQUIERDA: TÍTULO ESTRATÉGICO */}
          <div className="lg:col-span-5">
            <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700 bg-blue-50">
              Claridad ante todo
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Resolvemos tus dudas <span className="text-blue-600">antes de empezar.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Sabemos que invertir en IA es una decisión importante. Aquí respondemos las preguntas más comunes de CEOs y directores de operaciones.
            </p>
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
               <p className="font-bold text-slate-900 mb-2">¿Tienes una pregunta diferente?</p>
               <p className="text-slate-600 text-sm mb-4">Agenda una llamada directa con nuestro equipo de consultoría.</p>
               <a href="/contacto" className="text-blue-600 font-bold text-sm hover:underline">
                 Contactar ahora &rarr;
               </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: ACORDEÓN PRO */}
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-xl px-6 shadow-sm data-[state=open]:border-blue-200 data-[state=open]:ring-1 data-[state=open]:ring-blue-100 transition-all">
                  <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-blue-600 py-6 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
}