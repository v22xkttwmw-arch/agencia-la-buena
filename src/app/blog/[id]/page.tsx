"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, CheckCircle2 } from "lucide-react";
import { useParams } from "next/navigation";

// ==========================================
// BASE DE DATOS DE ARTÍCULOS (CONTENIDO REAL)
// ==========================================
const blogDatabase: Record<string, any> = {
  
  // --- ARTÍCULO 1: ROI EN IA ---
  "1": {
    title: "La Guía Definitiva del ROI en IA: Auditoría de 50 Empresas (2025)",
    subtitle: "Analizamos datos reales de facturación, costes operativos y márgenes de beneficio en 50 empresas medianas tras implementar Agentes Autónomos.",
    category: "Negocios",
    date: "16 Dic, 2025",
    readTime: "12 min",
    author: "Alex Founder",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=600",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
          En el panorama empresarial actual, la Inteligencia Artificial (IA) ha dejado de ser una novedad tecnológica para convertirse en un imperativo financiero. Ya no se trata de "si" implementarás IA, sino de "cuándo" y, lo más importante, "cuánto" retorno generará.
        </p>
        <h2>Introducción: La Falacia del Coste</h2>
        <p>
          Históricamente, la adopción tecnológica implicaba altos costes hundidos (CAPEX). Sin embargo, la revolución de los LLMs en 2024 cambió esta ecuación. La implementación de IA hoy se comporta como un gasto operativo (OPEX) flexible.
        </p>
        <blockquote className="border-l-4 border-blue-600 pl-6 italic my-8 text-xl text-slate-700 bg-slate-50 py-4 pr-4 rounded-r-lg">
          "La automatización no se trata de reemplazar humanos, sino de reemplazar tareas que deshumanizan a tus empleados."
        </blockquote>
        <h2>Capítulo 1: Los Números (Datos Reales)</h2>
        <p>Al analizar los balances financieros post-implementación, identificamos tres áreas críticas:</p>
        <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">1. Reducción de Costes Operativos</h3>
        <p>El 85% de las empresas auditadas reportó una reducción del 30% en costes administrativos.</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Antes:</strong> 12 minutos por factura manual.</li>
          <li><strong>Después:</strong> 4 segundos por factura con IA.</li>
        </ul>
        <h3 className="text-xl font-bold mt-6 mb-3 text-slate-800">2. Aumento en Conversión</h3>
        <p>Responder a un lead en los primeros 5 minutos aumenta la probabilidad de conversión en un 400%. Nuestros agentes lo hacen en 30 segundos.</p>
      </>
    )
  },

  // --- ARTÍCULO 2: RAG LEGAL ---
  "2": {
    title: "Implementando RAG en Bufetes de Abogados",
    subtitle: "Cómo entrenar a una IA con la jurisprudencia de tu país sin sufrir 'alucinaciones'. Caso técnico.",
    category: "Tecnología",
    date: "15 Dic, 2025",
    readTime: "10 min",
    author: "Sofia Tech",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200&h=600",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
          El sector legal enfrenta un dilema: tienen millones de documentos valiosos pero acceder a ellos es lento. La IA estándar no sirve porque inventa datos. La solución es <strong>RAG (Retrieval-Augmented Generation)</strong>.
        </p>
        <h2>El Problema de la Caja Negra</h2>
        <p>
          Si preguntas a ChatGPT sobre una ley local, puede fallar. Para un abogado, un error de cita es inaceptable.
        </p>
        <blockquote className="border-l-4 border-blue-600 pl-6 italic my-8 text-xl text-slate-700 bg-slate-50 py-4 pr-4 rounded-r-lg">
          "La precisión en el derecho no es un lujo, es el producto."
        </blockquote>
        <h2>La Solución Técnica</h2>
        <p>No entrenamos al modelo. Le damos una biblioteca de referencia mediante <strong>Vectorización</strong>.</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Paso 1:</strong> Convertimos PDFs a vectores matemáticos.</li>
          <li><strong>Paso 2:</strong> Almacenamos en Pinecone o Weaviate.</li>
          <li><strong>Paso 3:</strong> La IA busca en tu base de datos antes de responder.</li>
        </ul>
      </>
    )
  },

  // --- ARTÍCULO 3: NÓMINAS (CORREGIDO) ---
  "3": {
    title: "Automatización de Nóminas: De 40 horas a 15 minutos",
    subtitle: "Tutorial paso a paso para conectar tu banco con tu ERP automáticamente usando Make y Python.",
    category: "Tutoriales",
    date: "14 Dic, 2025",
    readTime: "15 min",
    author: "Marc Sales",
    image: "https://images.unsplash.com/photo-1554224155-9726b3028d77?auto=format&fit=crop&q=80&w=1200&h=600",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
          RRHH es el departamento más castigado por tareas repetitivas. Un error en la nómina destruye la moral del equipo.
        </p>
        <h2>El Dolor Tradicional</h2>
        {/* AQUÍ ESTABA EL ERROR: He cambiado las flechas "->" por "→" */}
        <p>Excel de ventas → Verificación manual → Excel de comisiones → Banco. Son 5 puntos de fallo humano.</p>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-xl">
          <h4 className="font-bold text-red-900 mb-2">Riesgo Crítico:</h4>
          <p className="text-red-800">Encontramos errores de cálculo en el 12% de las nóminas manuales.</p>
        </div>
        <h2>La Solución Automatizada</h2>
        <p>Hemos diseñado un script que conecta HubSpot (CRM), Google Sheets y la API bancaria.</p>
        <h3>Módulo 1: Validación</h3>
        <p>Un webhook escucha cada vez que un trato se cierra en HubSpot y calcula la comisión en tiempo real.</p>
      </>
    )
  },

  // --- ARTÍCULO 4: FIN DEL SAAS ---
  "4": {
    title: "El fin del SaaS: Por qué el 'Service-as-a-Software' es el futuro",
    subtitle: "El modelo de suscripción por usuario está muriendo. El futuro es pagar por resultados.",
    category: "Estrategia",
    date: "12 Dic, 2025",
    readTime: "8 min",
    author: "Alex Founder",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=600",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
          La economía digital se basó en el modelo SaaS (Software as a Service). En 2025, este modelo colapsa bajo la fatiga de las suscripciones.
        </p>
        <h2>De Herramientas a Agentes</h2>
        <p>
          Las empresas ya no quieren pagar por una herramienta de email marketing. Quieren pagar por "5 reuniones agendadas".
        </p>
        <blockquote className="border-l-4 border-purple-600 pl-6 italic my-8 text-xl text-slate-700 bg-purple-50 py-4 pr-4 rounded-r-lg">
          "El futuro no es software que usas, es software que trabaja por ti."
        </blockquote>
        <h2>Predicción 2026</h2>
        <p>Veremos empresas gestionadas por una sola persona y 10,000 agentes de IA. El coste marginal de operación caerá un 90%.</p>
      </>
    )
  },

  // --- ARTÍCULO 5: GDPR ---
  "5": {
    title: "Ética y Privacidad: Cumpliendo con la GDPR al usar OpenAI",
    subtitle: "Guía legal técnica para CTOs. Cómo anonimizar datos sensibles antes de enviarlos a la nube.",
    category: "Legal",
    date: "10 Dic, 2025",
    readTime: "9 min",
    author: "Sofia Tech",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=1200&h=600",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
          El miedo número uno es legal: "¿Mis datos entrenan a ChatGPT?". La respuesta es: depende de tu configuración.
        </p>
        <h2>Zero-Retention</h2>
        <p>
          Usamos <strong>Azure OpenAI Service</strong> para garantizar legalmente que los datos no se guardan ni entrenan modelos futuros.
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-xl">
          <h4 className="font-bold text-amber-900 mb-2">Advertencia:</h4>
          <p className="text-amber-800">Nunca introduzcas datos personales (PII) en la versión gratuita de ChatGPT.</p>
        </div>
        <h2>Anonimización en Vuelo</h2>
        <p>Antes de enviar el prompt, nuestro middleware sustituye nombres reales por alias (ej: CLIENTE_01), protegiendo la identidad.</p>
      </>
    )
  },

  // --- ARTÍCULO 6: MARKETING IA ---
  "6": {
    title: "Customer Experience 3.0: Hiper-personalización a escala",
    subtitle: "Cómo enviamos 10,000 videos personalizados por WhatsApp y rompimos récords de venta.",
    category: "Marketing",
    date: "08 Dic, 2025",
    readTime: "7 min",
    author: "Marc Sales",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200&h=600",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
          El Email Marketing tradicional está muriendo. Las tasas de apertura son bajas. La solución: Videos generados por IA donde un avatar dice tu nombre.
        </p>
        <h2>El Experimento</h2>
        <p>
          Usamos HeyGen y Make para generar 10,000 videos únicos. En cada uno, el agente saludaba al cliente por su nombre y mencionaba su producto específico.
        </p>
        <h3>Resultados</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Tasa de Apertura:</strong> 92% (vs 15% en email).</li>
          <li><strong>Conversión:</strong> 18% (vs 2% en email).</li>
        </ul>
        <p>La personalización masiva es la ventaja competitiva definitiva de esta década.</p>
      </>
    )
  },

  // --- FALLBACK (POR DEFECTO) ---
  "default": {
    title: "Artículo en Redacción",
    subtitle: "Estamos finalizando los detalles técnicos de este artículo.",
    category: "Próximamente",
    date: "Hoy",
    readTime: "1 min",
    author: "Equipo Agencia IA",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200&h=600",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
          Gracias por tu interés. Nuestro equipo editorial está verificando las fuentes y los datos técnicos de este artículo para garantizar la máxima calidad.
        </p>
        <div className="bg-slate-100 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">No te lo pierdas</h3>
          <p className="mb-6">Suscríbete a nuestra newsletter para recibir este artículo en tu correo en cuanto se publique.</p>
          <Button>Notificarme</Button>
        </div>
      </>
    )
  }
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================
export default function BlogPost() {
  const params = useParams();
  // Busca el artículo por ID. Si no existe, usa el "default"
  const id = typeof params?.id === 'string' ? params.id : "default";
  const post = blogDatabase[id] || blogDatabase["default"];

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      
      {/* HEADER DEL ARTÍCULO */}
      <div className="container px-4 mx-auto max-w-4xl mb-12">
        <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Volver al Blog
        </Link>
        
        <div className="flex gap-3 mb-6">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none px-3 py-1 text-sm">
            {post.category}
          </Badge>
          <span className="flex items-center text-slate-500 text-sm font-medium">
            <Clock size={16} className="mr-1" /> {post.readTime} lectura
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
          {post.title}
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed mb-8 border-l-4 border-slate-200 pl-6 italic">
          {post.subtitle}
        </p>

        <div className="flex items-center justify-between border-t border-b border-slate-100 py-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-slate-200 overflow-hidden relative">
               <Image 
                 src={`https://ui-avatars.com/api/?name=${post.author}&background=0D8ABC&color=fff`} 
                 alt={post.author} 
                 fill
                 className="object-cover"
               />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">{post.author}</p>
              <div className="flex items-center text-slate-500 text-xs gap-2">
                <Calendar size={12} /> {post.date}
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full text-slate-400 hover:text-blue-600">
              <Linkedin size={18} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full text-slate-400 hover:text-blue-400">
              <Twitter size={18} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full text-slate-400 hover:text-slate-900">
              <Share2 size={18} />
            </Button>
          </div>
        </div>
      </div>

      {/* IMAGEN PRINCIPAL */}
      <div className="container px-4 mx-auto max-w-5xl mb-16">
        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* CONTENIDO + SIDEBAR */}
      <div className="container px-4 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* COLUMNA IZQUIERDA: EL TEXTO */}
        <article className="lg:col-span-8 prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-2xl">
          {post.content}
        </article>

        {/* COLUMNA DERECHA: SIDEBAR */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* Widget 1: Autor */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4">Sobre el Autor</h3>
            <p className="text-sm text-slate-600 mb-4">
              Experto en automatización de procesos. Ayudo a fundadores a recuperar su tiempo libre mediante código y estrategia.
            </p>
            <Button variant="link" className="text-blue-600 p-0 h-auto font-bold">
              Ver perfil completo &rarr;
            </Button>
          </div>

          {/* Widget 2: CTA PEGAJOSO */}
          <div className="sticky top-24 bg-slate-900 text-white p-8 rounded-2xl shadow-xl overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            
            <h3 className="text-2xl font-bold mb-4 relative z-10">¿Te gustó este artículo?</h3>
            <p className="text-slate-300 mb-6 relative z-10 leading-relaxed">
              Podemos implementar exactamente esto en tu empresa en menos de 14 días.
            </p>
            <Link href="/contacto" className="relative z-10 block">
              <Button className="w-full bg-white text-slate-900 hover:bg-blue-50 font-bold py-6 text-lg">
                Solicitar Auditoría Gratis
              </Button>
            </Link>
          </div>

        </aside>

      </div>

    </main>
  );
}