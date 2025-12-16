import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24 bg-white border-y border-neutral-100">      
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-neutral-900 mb-6">
          ¿Listo para automatizar?
        </h2>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-10">
          Analizamos tus procesos actuales y diseñamos una arquitectura a medida.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-700 h-14 px-8 text-lg font-medium">
            Agendar Consultoría
          </Button>
          <p className="text-sm text-neutral-500 mt-4 sm:mt-0 sm:ml-4">
            * Sin compromiso
          </p>
        </div>
      </div>
    </section>
  );
}