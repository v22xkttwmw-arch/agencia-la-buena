"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Activity, Zap, DollarSign } from "lucide-react";

export default function LiveStats() {
  // 1. Iniciamos en null para que no haya diferencia entre servidor y cliente al principio
  const [mounted, setMounted] = useState(false);
  const [tasks, setTasks] = useState(14520);
  const [money, setMoney] = useState(45200);
  const [activeBots, setActiveBots] = useState(124);

  // 2. Este efecto corre SOLO en el navegador, activando los datos
  useEffect(() => {
    setMounted(true); // Ya estamos en el cliente, podemos mostrar números

    const interval = setInterval(() => {
      setTasks(prev => prev + Math.floor(Math.random() * 3));
      
      if (Math.random() > 0.7) {
        setMoney(prev => prev + Math.floor(Math.random() * 50));
      }

      if (Math.random() > 0.9) {
        setActiveBots(prev => prev + (Math.random() > 0.5 ? 1 : -1));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // 3. Si no se ha montado aún, mostramos ceros o un esqueleto para evitar el error
  if (!mounted) return null; 

  return (
    <div className="w-full max-w-4xl mx-auto mt-16 animate-in delay-500 fade-in slide-in-from-bottom-4">
      <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
          Métricas de la Red en Tiempo Real
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: Tareas */}
        <Card className="bg-white/50 backdrop-blur border-neutral-200 shadow-sm p-4 flex items-center gap-4 hover:border-blue-500/50 transition-colors">
          <div className="p-3 bg-blue-50 rounded-full text-blue-600">
            <Zap size={24} />
          </div>
          <div>
            <p className="text-2xl font-bold text-neutral-900 tabular-nums">
              {tasks.toLocaleString()}
            </p>
            <p className="text-xs text-neutral-500 font-medium">Tareas Automatizadas Hoy</p>
          </div>
        </Card>

        {/* Card 2: Dinero */}
        <Card className="bg-white/50 backdrop-blur border-neutral-200 shadow-sm p-4 flex items-center gap-4 hover:border-green-500/50 transition-colors">
          <div className="p-3 bg-green-50 rounded-full text-green-600">
            <DollarSign size={24} />
          </div>
          <div>
            <p className="text-2xl font-bold text-neutral-900 tabular-nums">
              ${money.toLocaleString()}
            </p>
            <p className="text-xs text-neutral-500 font-medium">Costos Ahorrados (Est.)</p>
          </div>
        </Card>

        {/* Card 3: Bots Activos */}
        <Card className="bg-white/50 backdrop-blur border-neutral-200 shadow-sm p-4 flex items-center gap-4 hover:border-purple-500/50 transition-colors">
          <div className="p-3 bg-purple-50 rounded-full text-purple-600">
            <Activity size={24} />
          </div>
          <div>
            <p className="text-2xl font-bold text-neutral-900 tabular-nums">
              {activeBots}
            </p>
            <p className="text-xs text-neutral-500 font-medium">Agentes IA Activos Ahora</p>
          </div>
        </Card>
      </div>
    </div>
  );
}