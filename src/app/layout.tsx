import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Configuración de la fuente para que cargue rápido (swap)
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', 
});

// SEO: Configuración de Metadatos para Google y Redes Sociales
export const metadata: Metadata = {
  title: {
    default: "Agencia IA | Automatización de Negocios con Inteligencia Artificial",
    template: "%s | Agencia IA"
  },
  description: "Transformamos tu empresa con automatizaciones inteligentes. Expertos en Chatbots, CRM, Make y OpenAI. Ahorra tiempo y escala tu negocio hoy.",
  keywords: [
    "Agencia de IA", 
    "Automatización de procesos", 
    "Consultoría IA", 
    "Chatbots para empresas", 
    "Make", 
    "n8n", 
    "Inteligencia Artificial México", 
    "Optimización de negocios"
  ],
  authors: [{ name: "Agencia IA" }],
  creator: "Agencia IA",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://agenciaia.ai", // Cuando tengas dominio real, cámbialo aquí
    title: "Agencia IA - Automatiza tu negocio",
    description: "Expertos en automatización de procesos con Inteligencia Artificial. Reduce costos y aumenta ventas.",
    siteName: "Agencia IA",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Barra de navegación fija arriba */}
        <Navbar /> 
        
        {/* El contenido de cada página se renderiza aquí */}
        {children}
        
        {/* Pie de página al final de todo */}
        <Footer />
      </body>
    </html>
  );
}