import { Button } from "@/components/ui/button";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import TechStack from "@/components/TechStack"; // <--- Nuevo
import ChatWidget from "@/components/ChatWidget"; // <--- Nuevo

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-neutral-800">
      
      {/* WIDGET DEL CHATBOT */}
      <ChatWidget />

      {/* SECCIÓN HERO (PORTADA) */}
      <section className="flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          
          {/* Etiqueta de estado */}
          <div className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-sm text-neutral-400">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Sistema Operativo: Online
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent pb-2">
            Agencia IA
          </h1>
          
          {/* Subtítulo Profesional */}
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            No vendemos "prompts". Implementamos infraestructuras de 
            Inteligencia Artificial que automatizan tus ventas, soporte y operaciones.
            <span className="block mt-2 text-white font-medium">Resultados medibles en 30 días.</span>
          </p>
          
          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-white text-black hover:bg-neutral-200 font-medium h-12 px-8">
              Solicitar Auditoría Técnica
            </Button>
            <Button size="lg" variant="outline" className="border-neutral-800 text-white hover:bg-neutral-900 h-12 px-8">
              Ver Demo en Vivo
            </Button>
          </div>

          {/* Componente de Logos Reales */}
          <TechStack />
          
        </div>
      </section>

      {/* SECCIÓN DE SERVICIOS */}
      <Services />

      {/* SECCIÓN DE PREGUNTAS FRECUENTES (FAQ) */}
      <FAQ />
      
    </main>
  );
}