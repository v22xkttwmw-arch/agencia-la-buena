import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="py-24 bg-white text-neutral-900">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tighter">
          Preguntas Frecuentes
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-neutral-200">
            <AccordionTrigger className="text-left hover:no-underline hover:text-neutral-600">
              ¿Qué procesos se pueden automatizar?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-600">
              Casi cualquier tarea digital repetitiva: facturación, emails, leads en WhatsApp, reportes, etc.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-neutral-200">
            <AccordionTrigger className="text-left hover:no-underline hover:text-neutral-600">
              ¿Es segura la IA con mis datos?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-600">
              Absolutamente. Usamos conexiones encriptadas y firmamos NDA. Tus datos no entrenan modelos públicos.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-neutral-200">
            <AccordionTrigger className="text-left hover:no-underline hover:text-neutral-600">
              ¿Tiempo de implementación?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-600">
              Desde 48h para automatizaciones simples hasta 4 semanas para sistemas complejos.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}