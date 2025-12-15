import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="py-24 bg-neutral-950 text-white border-t border-neutral-900">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tighter sm:text-4xl">
          Preguntas Frecuentes
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          
          <AccordionItem value="item-1" className="border-neutral-800">
            <AccordionTrigger className="text-left hover:text-neutral-300">
              ¿Qué tipo de procesos se pueden automatizar?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              Casi cualquier tarea digital repetitiva. Desde la calificación de leads en WhatsApp, 
              sincronización de facturas entre CRM y contabilidad, hasta la creación de reportes 
              automáticos. Si usas una computadora para hacerlo, probablemente podamos automatizarlo.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-neutral-800">
            <AccordionTrigger className="text-left hover:text-neutral-300">
              ¿Necesito conocimientos técnicos para usar sus soluciones?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              No. Nosotros construimos la infraestructura "invisible". Tú solo recibirás las notificaciones 
              importantes o verás los resultados en tu dashboard. Entregamos sistemas "llave en mano".
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-neutral-800">
            <AccordionTrigger className="text-left hover:text-neutral-300">
              ¿Es segura la Inteligencia Artificial con mis datos?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              Absolutamente. Utilizamos entornos seguros y conexiones encriptadas (API Enterprise). 
              Tus datos nunca se utilizan para entrenar modelos públicos de IA. Firmamos acuerdos de confidencialidad (NDA) con todos nuestros clientes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-neutral-800">
            <AccordionTrigger className="text-left hover:text-neutral-300">
              ¿Cuánto tiempo tarda la implementación?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-400">
              Depende de la complejidad. Una automatización simple de WhatsApp puede estar lista en 48 horas. 
              Sistemas complejos de gestión empresarial suelen tomar entre 2 a 4 semanas.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  );
}