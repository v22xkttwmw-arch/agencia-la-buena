"use client";

import Link from "next/link"; 
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import TechStack from "@/components/TechStack";
import CaseStudies from "@/components/CaseStudies"; 
import CTA from "@/components/CTA";
import Process from "@/components/Process"; 
import ROICalculator from "@/components/ROICalculator"; 
import LeadMagnet from "@/components/LeadMagnet"; 

// --- CARGA SEGURA ---
const Comparison = dynamic(() => import("@/components/Comparison"), {
  loading: () => <div className="h-96 w-full flex items-center justify-center text-neutral-400">Cargando análisis...</div>,
  ssr: false, 
});

const LiveStats = dynamic(() => import("@/components/LiveStats"), {
  loading: () => <div className="h-32 w-full flex items-center justify-center text-neutral-400">Cargando métricas...</div>,
  ssr: false, 
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-blue-100">
      
      {/* SECCIÓN HERO (PORTADA) */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center overflow-hidden">
        
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10" />

        <div className="space-y-8 max-w-5xl mx-auto z-10">
          <div className="animate-in inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            Agencia Certificada 2025
          </div>

          <h1 className="animate-in delay-100 text-4xl font-extrabold tracking-tighter sm:text-7xl pb-2 text-slate-900">
            Tu empresa, pero <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              en piloto automático.
            </span>
          </h1>
          
          <p className="animate-in delay-200 text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Implementamos infraestructuras de Inteligencia Artificial que trabajan mientras duermes.
            <span className="block mt-2 text-neutral-900 font-medium">Recupera 20+ horas semanales de tu equipo.</span>
          </p>
          
          <div className="animate-in delay-300 flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contacto">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:opacity-90 transition-opacity font-bold h-12 px-8 shadow-lg shadow-blue-500/20 border-0 w-full sm:w-auto">
                Solicitar Auditoría Técnica
              </Button>
            </Link>
            
            <Link href="/#servicios">
              <Button size="lg" variant="outline" className="border-neutral-200 text-neutral-900 hover:bg-neutral-50 h-12 px-8 w-full sm:w-auto">
                Ver Soluciones
              </Button>
            </Link>
          </div>

          <div className="min-h-[100px] w-full pt-8">
             <LiveStats />
          </div>

          <div className="animate-in delay-300 pt-8">
             <TechStack />
          </div>
        </div>
      </section>

      <div id="servicios"> <Services /> </div>
      <ROICalculator />
      <Process />
      <div id="casos"> <CaseStudies /> </div>
      <div className="min-h-[400px] w-full"> <Comparison /> </div>
      <LeadMagnet />
      <CTA /> 
      <div id="faq"> <FAQ /> </div>
      
    </main>
  );
}