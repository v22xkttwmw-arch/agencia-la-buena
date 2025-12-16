"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, Search, Tag, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// --- 15 ARTÍCULOS PARA QUE EL BLOG SE VEA LLENO ---
const allPosts = [
  {
    id: "1",
    title: "La Guía Definitiva del ROI en IA: Auditoría de 50 Empresas (2025)",
    excerpt: "Un análisis profundo de 1200 palabras sobre cómo las empresas del S&P 500 están reduciendo OPEX mediante agentes autónomos. Datos reales y proyecciones financieras.",
    category: "Negocios",
    date: "16 Dic, 2025",
    readTime: "12 min", // Artículo largo
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400",
    featured: true
  },
  {
    id: "2",
    title: "Implementando RAG (Retrieval-Augmented Generation) en Bufetes de Abogados",
    excerpt: "Cómo entrenar a una IA con la jurisprudencia de tu país sin alucinar. Caso de estudio técnico.",
    category: "Tecnología",
    date: "15 Dic, 2025",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800&h=400",
    featured: false
  },
  {
    id: "3",
    title: "Automatización de Nóminas: De 40 horas a 15 minutos con Python y Make",
    excerpt: "Tutorial paso a paso para departamentos de RRHH. Elimina el error humano en los pagos.",
    category: "Tutoriales",
    date: "14 Dic, 2025",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1554224155-9726b3028d77?auto=format&fit=crop&q=80&w=800&h=400",
    featured: false
  },
  {
    id: "4",
    title: "El fin del SaaS: Por qué el 'Service-as-a-Software' es el futuro",
    excerpt: "Análisis de mercado sobre cómo los Agentes IA reemplazarán a las suscripciones de software tradicionales.",
    category: "Estrategia",
    date: "12 Dic, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=400",
    featured: false
  },
  {
    id: "5",
    title: "Ética y Privacidad: Cumpliendo con la GDPR al usar OpenAI",
    excerpt: "Guía legal para CTOs. Cómo anonimizar datos antes de enviarlos a la nube.",
    category: "Legal",
    date: "10 Dic, 2025",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800&h=400",
    featured: false
  },
  {
    id: "6",
    title: "Customer Experience 3.0: Hiper-personalización a escala",
    excerpt: "Cómo usar IA para enviar 10,000 videos personalizados a tus clientes por WhatsApp.",
    category: "Marketing",
    date: "08 Dic, 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=400",
    featured: false
  },
  {
    id: "7",
    title: "Comparativa: Make vs n8n vs Zapier en 2025",
    excerpt: "¿Cuál es mejor para escalar? Benchmarks de rendimiento y costes ocultos.",
    category: "Herramientas",
    date: "06 Dic, 2025",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400",
    featured: false
  },
  {
    id: "8",
    title: "Ingeniería de Prompts Avanzada: Chain-of-Thought",
    excerpt: "Mejora la lógica de tus agentes un 40% usando técnicas de razonamiento en cadena.",
    category: "Tecnología",
    date: "04 Dic, 2025",
    readTime: "14 min",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800&h=400",
    featured: false
  },
  {
    id: "9",
    title: "Automatización en Bienes Raíces: Cerrando tratos mientras duermes",
    excerpt: "Caso de éxito: Inmobiliaria que aumentó un 300% sus visitas usando bots de agendamiento.",
    category: "Negocios",
    date: "02 Dic, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800&h=400",
    featured: false
  },
  {
    id: "10",
    title: "El rol del 'AI Operations Manager'",
    excerpt: "La nueva profesión mejor pagada de la década. ¿Qué hacen y cómo contratar uno?",
    category: "RRHH",
    date: "30 Nov, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=400",
    featured: false
  },
  {
    id: "11",
    title: "Fine-Tuning de Llama 3 para empresas médicas",
    excerpt: "Cómo adaptar modelos open source para manejar terminología clínica con precisión.",
    category: "Tecnología",
    date: "28 Nov, 2025",
    readTime: "13 min",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=400",
    featured: false
  },
  {
    id: "12",
    title: "Ciberseguridad en la era de la IA Generativa",
    excerpt: "Defiéndete contra ataques de phishing generados por IA. Protocolos de seguridad 2025.",
    category: "Seguridad",
    date: "25 Nov, 2025",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=400",
    featured: false
  },
  {
    id: "13",
    title: "Dashboarding Financiero en Tiempo Real",
    excerpt: "Adiós al cierre de mes. Ten tu P&L actualizado al segundo conectando Stripe y bancos.",
    category: "Finanzas",
    date: "22 Nov, 2025",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400",
    featured: false
  },
  {
    id: "14",
    title: "La Psicología detrás de la adopción de IA",
    excerpt: "Cómo gestionar el miedo al cambio en tu equipo cuando introduces automatización.",
    category: "Liderazgo",
    date: "20 Nov, 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=400",
    featured: false
  },
  {
    id: "15",
    title: "Predicciones 2026: Agentes Autónomos y Economía",
    excerpt: "Nuestra visión sobre hacia dónde va el mercado y cómo prepararte hoy.",
    category: "Opinión",
    date: "18 Nov, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800&h=400",
    featured: false
  }
];

const categories = ["Todos", "Negocios", "Tecnología", "Tutoriales", "Estrategia", "Legal", "Marketing"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = activeCategory === "Todos" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find(p => p.featured);
  const gridPosts = searchTerm || activeCategory !== "Todos" ? filteredPosts : filteredPosts.filter(p => !p.featured);

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container px-4 mx-auto mb-16 text-center">
        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm bg-blue-100 px-3 py-1 rounded-full">
          Centro de Conocimiento
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-6 mb-4">
          Insights de <span className="text-blue-600">Automatización & IA</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Recursos tácticos para líderes que construyen el futuro. {allPosts.length} artículos disponibles.
        </p>
      </div>

      <div className="container px-4 mx-auto max-w-6xl">
        {/* FILTROS */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === cat ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`}>{cat}</button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
            <input type="text" placeholder="Buscar..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none" />
          </div>
        </div>

        {/* DESTACADO */}
        {activeCategory === "Todos" && !searchTerm && featuredPost && (
          <div className="mb-16">
            <Link href={`/blog/${featuredPost.id}`} className="group">
              <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden">
                  <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-bold text-xs">DESTACADO</span>
                    <span className="text-slate-500 flex items-center gap-1"><Calendar size={14}/> {featuredPost.date}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{featuredPost.title}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed">{featuredPost.excerpt}</p>
                  <Button variant="link" className="pl-0 text-blue-600 font-bold text-lg">Leer análisis completo <ArrowRight className="ml-2 w-5 h-5" /></Button>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* GRID DE 14 ARTÍCULOS RESTANTES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group">
              <Card className="h-full border-slate-200 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                   <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1">
                      <Tag size={12} className="text-blue-600" /> {post.category}
                   </div>
                   <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                  <p className="text-slate-500 text-sm line-clamp-3 mb-4 flex-1">{post.excerpt}</p>
                  <div className="text-blue-600 font-bold text-sm flex items-center mt-auto">Leer más <ArrowRight className="ml-1 w-4 h-4" /></div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* NEWSLETTER */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">La Newsletter de IA #1 en Latinoamérica</h2>
            <p className="text-slate-400 mb-8">Únete a +5,000 directivos. Análisis profundo, sin ruido.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="tu@email.com" className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <Button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 h-auto text-lg rounded-xl">Suscribirme</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}