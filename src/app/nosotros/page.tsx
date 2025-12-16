"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Twitter, Award, Users, Clock, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Datos del equipo (Simulados)
const team = [
  {
    name: "Alex Founder",
    role: "CEO & Arquitecto de Soluciones",
    bio: "Ex-Google. Obsesionado con eliminar la burocracia empresarial mediante código.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    name: "Sofia Tech",
    role: "CTO & Lead IA",
    bio: "Ingeniera de Prompts y especialista en LLMs. Hace que los robots tengan empatía.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    name: "Marc Sales",
    role: "Director de Estrategia",
    bio: "Ayuda a las empresas a traducir 'tecnología' en 'dinero en el banco'.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
  },
];

// Métricas de autoridad
const stats = [
  { label: "Proyectos Entregados", value: "+150", icon: <Award className="w-5 h-5" /> },
  { label: "Horas Ahorradas/Año", value: "50k", icon: <Clock className="w-5 h-5" /> },
  { label: "Países Alcanzados", value: "12", icon: <Globe className="w-5 h-5" /> },
  { label: "Expertos en IA", value: "15", icon: <Users className="w-5 h-5" /> },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION CON FONDO SUTIL */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 -z-10" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 -z-10" />
        
        <div className="container mx-auto text-center max-w-4xl">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs bg-blue-100 px-3 py-1 rounded-full">
            Nuestra Filosofía
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-6 mb-6 leading-tight">
            No somos una agencia,<br />
            somos tu <span className="text-blue-600">Departamento de IA</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Nacimos con una misión simple: liberar el potencial humano automatizando lo aburrido. 
            Creemos que tu equipo debería estar creando, no copiando y pegando datos.
          </p>
        </div>
      </section>

      {/* 2. BARRA DE MÉTRICAS (AUTHORITY BAR) */}
      <section className="bg-slate-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800/50">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4">
                <div className="flex justify-center mb-2 text-blue-400 opacity-80">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HISTORIA / VALORES */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             {/* Imagen decorativa abstracta (Unsplash) */}
             <div className="aspect-square rounded-3xl overflow-hidden relative shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
               <Image 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=800"
                 alt="Equipo trabajando"
                 fill
                 className="object-cover"
               />
             </div>
             {/* Tarjeta flotante */}
             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
               <p className="font-bold text-slate-900 text-lg">"La automatización es el nuevo superpoder."</p>
               <p className="text-sm text-slate-500 mt-2">- Forbes Tech Council</p>
             </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              ¿Por qué existimos?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 shrink-0 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Transparencia Radical</h3>
                  <p className="text-slate-600">Odiamos las "cajas negras". Te explicamos exactamente qué hace la IA y cómo funciona tu sistema. Sin secretos.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 shrink-0 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Velocidad de Startup</h3>
                  <p className="text-slate-600">Las empresas tradicionales tardan meses. Nosotros entregamos prototipos funcionales en días usando Low-Code.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 shrink-0 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">ROI Obsesivo</h3>
                  <p className="text-slate-600">Si no ahorra dinero o genera ventas, no lo construimos. Tu inversión debe retornar multiplicada.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EL EQUIPO */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Mentes detrás del código</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, idx) => (
              <Card key={idx} className="bg-white p-6 border-slate-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden border-4 border-blue-50 group-hover:border-blue-500 transition-colors">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-4">{member.role}</p>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex justify-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full hover:text-blue-600 hover:border-blue-600">
                    <Linkedin size={18} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:text-blue-400 hover:border-blue-400">
                    <Twitter size={18} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">¿Listo para conocer al equipo?</h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-8 text-lg relative z-10">
            Aceptamos un número limitado de clientes al mes para mantener la calidad. Verifica si tenemos disponibilidad hoy.
          </p>
          <div className="relative z-10">
            <Link href="/contacto">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 h-12">
                Agendar una llamada <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}