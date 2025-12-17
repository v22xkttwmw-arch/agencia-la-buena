import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', 
});

export const metadata: Metadata = {
  // 1. ACTUALIZAMOS A SPARKOPS PARA QUE GOOGLE NOS VEA BIEN
  title: {
    default: "SparkOps | Automatización B2B con IA",
    template: "%s | SparkOps"
  },
  description: "Recupera 20+ horas semanales de tu equipo. Consultoría estratégica de Inteligencia Artificial y Automatización para empresas.",
  keywords: ["Consultoría IA", "Automatización B2B", "SparkOps", "Eficiencia Operativa", "Make", "OpenAI"],
  authors: [{ name: "SparkOps Team" }],
  
  icons: {
    icon: '/favicon.ico',
  },

  // 2. OPEN GRAPH: CÓMO SE VE AL COMPARTIR EN WHATSAPP/LINKEDIN
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://sparkops.ai", // Tu futura URL real
    title: "SparkOps - Tu empresa en piloto automático",
    description: "Infraestructura de IA para escalar sin caos.",
    siteName: "SparkOps",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        
        {/* 1. MENÚ FIJO */}
        <Navbar />
        
        {/* 2. CONTENIDO */}
        {children}
        
        {/* 3. CHATBOT FLOTANTE GLOBAL */}
        <ChatWidget />
        
        {/* 4. PIE DE PÁGINA */}
        <Footer />

        {/* 5. DATOS ESTRUCTURADOS (SEO AVANZADO - EL SECRETO) */}
        {/* Esto no lo ve el usuario, pero le dice a Google quién eres */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "SparkOps",
              "url": "https://sparkops.ai",
              "image": "https://sparkops.ai/logo.png", 
              "description": "Agencia de Automatización con IA para empresas B2B de alto nivel.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ES" // Puedes cambiarlo a tu país principal
              },
              "priceRange": "$$$",
              "openingHours": "Mo-Fr 09:00-18:00",
              "telephone": "+1-555-000-0000"
            }),
          }}
        />
        
      </body>
    </html>
  );
}