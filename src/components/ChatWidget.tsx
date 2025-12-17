"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Zap, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 1. Historial inicial (Alex se presenta)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '¡Hola! Soy Alex, de SparkOps. ⚡️' },
    { role: 'assistant', content: '¿En qué puedo ayudarte a escalar tu negocio hoy?' }
  ]);

  // Auto-scroll hacia abajo
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 2. FUNCIÓN QUE CONECTA CON LA IA
  const sendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    // Guardamos el mensaje del usuario
    const userMessage = inputValue;
    setInputValue(""); // Limpiamos la cajita
    
    // Añadimos el mensaje del usuario a la pantalla
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // 📡 LLAMADA AL CEREBRO (Aquí ocurre la magia)
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          // Enviamos la conversación para que tenga contexto
          messages: [...messages, { role: 'user', content: userMessage }] 
        }),
      });

      if (!response.ok) throw new Error("Error en la red");

      const data = await response.json();

      // Añadimos la respuesta de Alex (IA)
      if (data.content) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.content }]);
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: 'assistant', content: "Lo siento, tuve un problema de conexión. ¿Podrías intentar de nuevo?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* VENTANA DEL CHAT */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 flex flex-col max-h-[600px]">
          
          {/* CABECERA PRO */}
          <div className="bg-slate-900 p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center border-2 border-slate-800 shadow-lg">
                  <Zap size={20} className="text-white" fill="currentColor" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">SparkOps AI</h4>
                <p className="text-xs text-blue-200 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  En línea ahora
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-800 rounded-full">
              <X size={20} />
            </button>
          </div>

          {/* ÁREA DE MENSAJES */}
          <div className="flex-1 bg-slate-50 p-4 overflow-y-auto space-y-4 min-h-[300px] max-h-[450px]">
            <div className="text-center pb-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-1 rounded-full">Hoy</span>
            </div>

            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'} animate-in fade-in slide-in-from-bottom-2`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'assistant' 
                    ? 'bg-white text-slate-700 rounded-tl-none border border-slate-200' 
                    : 'bg-blue-600 text-white rounded-tr-none shadow-blue-500/20'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Animación de "Escribiendo..." */}
            {isLoading && (
              <div className="flex justify-start animate-in fade-in">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-200 flex items-center gap-1.5 shadow-sm w-16">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* CAJA DE TEXTO (INPUT) */}
          <div className="p-3 bg-white border-t border-slate-100">
            <form className="flex gap-2 relative" onSubmit={sendMessage}>
              <Input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe tu consulta..." 
                className="pr-12 border-slate-200 focus-visible:ring-blue-600 bg-slate-50 focus:bg-white transition-all rounded-xl h-11"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" className="bg-blue-600 hover:bg-blue-700 shrink-0 rounded-xl absolute right-1.5 top-1.5 h-8 w-8 shadow-sm transition-all hover:scale-105 active:scale-95" disabled={isLoading || !inputValue.trim()}>
                {isLoading ? <Loader2 size={14} className="animate-spin text-white" /> : <Send size={14} className="ml-0.5" />}
              </Button>
            </form>
            <div className="text-center mt-2 flex justify-center items-center gap-1.5 opacity-60">
              <Zap size={10} className="text-slate-400" />
              <p className="text-[10px] text-slate-400 font-medium">Powered by SparkOps Engine</p>
            </div>
          </div>
        </div>
      )}

      {/* BOTÓN FLOTANTE (Trigger) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-16 h-16 bg-blue-600 hover:bg-slate-900 text-white rounded-full shadow-2xl hover:shadow-blue-900/40 transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 border-4 border-white"
      >
        {isOpen ? <X size={28} /> : (
          <>
            <MessageCircle size={30} fill="currentColor" className="text-white" />
            <span className="absolute top-0 right-0 flex h-4 w-4 -mt-0.5 -mr-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
            </span>
          </>
        )}
      </button>
    </div>
  );
}