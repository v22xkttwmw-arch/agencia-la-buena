import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget"; // IMPORTANTE: El chat

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', 
});

export const metadata: Metadata = {
  title: {
    default: "Agencia IA | Automatización de Negocios",
    template: "%s | Agencia IA"
  },
  description: "Transformamos tu empresa con automatizaciones inteligentes. Expertos en Chatbots, CRM, Make y OpenAI.",
  keywords: ["Agencia de IA", "Automatización", "Chatbots", "Make", "Inteligencia Artificial"],
  authors: [{ name: "Agencia IA" }],
  
  // AQUÍ ESTÁ LA LÍNEA MÁGICA PARA EL ICONO 👇
  icons: {
    icon: '/favicon.ico',
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://agenciaia.ai",
    title: "Agencia IA - Automatiza tu negocio",
    description: "Expertos en automatización de procesos con Inteligencia Artificial.",
    siteName: "Agencia IA",
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
        
      </body>
    </html>
  );
}