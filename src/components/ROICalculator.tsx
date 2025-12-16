"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, ArrowRight, Zap, TrendingUp, BarChart3, Clock } from "lucide-react";

export default function ROICalculator() {
  // Estado para cambiar entre pestañas: 'ventas' o 'capacidad'
  const [activeTab, setActiveTab] = useState<'ventas' | 'capacidad'>('ventas');

  // --- ESTADOS VENTAS ---
  const [leads, setLeads] = useState(100); // Leads al mes
  const [valorCliente, setValorCliente] = useState(500); // Valor por cliente
  const [tasaCierre, setTasaCierre] = useState(5); // % actual

  // Cálculos Ventas
  const ventasActuales = leads * (tasaCierre / 100) * valorCliente;
  // La IA mejora la conversión por velocidad de respuesta (aprox +25% de efectividad)
  const tasaCierreIA = tasaCierre * 1.35; 
  const ventasConIA = leads * (tasaCierreIA / 100) * valorCliente;
  const dineroExtra = ventasConIA - ventasActuales;

  // --- ESTADOS CAPACIDAD ---
  const [equipo, setEquipo] = useState(5);
  const [horasAdmin, setHorasAdmin] = useState(15); // Horas de admin/burocracia por semana

  // Cálculos Capacidad
  const horasTotales = equipo * horasAdmin; // Horas "quemadas" a la semana
  const horasRecuperadas = horasTotales * 0.80; // La IA automatiza el 80% del admin
  const horasAnuales = horasRecuperadas * 52;

  // Formateador de dinero
  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container px-4 mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            No recortes personal, <span className="text-blue-600">potencia tu equipo</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            La automatización no viene a restar, viene a multiplicar. Descubre el impacto real en tus ventas y en la calidad de vida de tu empresa.
          </p>
        </div>

        {/* PESTAÑAS DE SELECCIÓN */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1 rounded-xl border border-slate-200 shadow-sm inline-flex">
            <button
              onClick={() => setActiveTab('ventas')}
              className={`px-6 py-3 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'ventas' 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <TrendingUp size={18} /> Calculadora de Ventas
            </button>
            <button
              onClick={() => setActiveTab('capacidad')}
              className={`px-6 py-3 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'capacidad' 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Zap size={18} /> Calculadora de Capacidad
            </button>
          </div>
        </div>

        {/* --- MODO VENTAS --- */}
        {activeTab === 'ventas' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Controles Ventas */}
            <Card className="col-span-1 lg:col-span-7 p-8 bg-white border-slate-200 shadow-lg rounded-2xl">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-slate-800">
                <div className="bg-green-100 h-10 w-10 rounded-lg flex items-center justify-center text-green-600">
                  <DollarSign size={20} />
                </div>
                Tu embudo actual
              </h3>

              <div className="space-y-10">
                <div>
                  <div className="flex justify-between mb-3 items-end">
                    <label className="flex items-center gap-2 text-slate-600 font-semibold">
                      Leads mensuales (Prospectos)
                    </label>
                    <span className="font-bold text-2xl text-slate-900 bg-slate-50 px-3 py-1 rounded-lg tabular-nums border border-slate-100">
                      {leads}
                    </span>
                  </div>
                  <input type="range" min="10" max="1000" step="10" value={leads} onChange={(e) => setLeads(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-blue-600" />
                </div>

                <div>
                  <div className="flex justify-between mb-3 items-end">
                    <label className="flex items-center gap-2 text-slate-600 font-semibold">
                      Tasa de cierre actual (%)
                    </label>
                    <span className="font-bold text-2xl text-slate-900 bg-slate-50 px-3 py-1 rounded-lg tabular-nums border border-slate-100">
                      {tasaCierre}%
                    </span>
                  </div>
                  <input type="range" min="1" max="50" step="0.5" value={tasaCierre} onChange={(e) => setTasaCierre(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-blue-600" />
                  <p className="text-xs text-slate-400 mt-2">Los humanos tardan en responder. La IA responde en 2 segundos.</p>
                </div>

                <div>
                  <div className="flex justify-between mb-3 items-end">
                    <label className="flex items-center gap-2 text-slate-600 font-semibold">
                      Valor promedio por cliente
                    </label>
                    <span className="font-bold text-2xl text-slate-900 bg-slate-50 px-3 py-1 rounded-lg tabular-nums border border-slate-100">
                      ${valorCliente}
                    </span>
                  </div>
                  <input type="range" min="100" max="5000" step="50" value={valorCliente} onChange={(e) => setValorCliente(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-blue-600" />
                </div>
              </div>
            </Card>

            {/* Resultados Ventas */}
            <div className="col-span-1 lg:col-span-5 flex flex-col justify-center space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Facturación Mensual Actual</p>
                <div className="text-3xl font-bold text-slate-900 tabular-nums">{formatMoney(ventasActuales)}</div>
              </div>

              <div className="bg-blue-600 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="absolute top-0 right-0 bg-white/20 px-4 py-1 rounded-bl-xl text-xs font-bold">PROYECCIÓN IA</div>
                <p className="text-blue-100 text-sm font-bold uppercase tracking-widest mb-2">Dinero Extra Generado / Mes</p>
                <div className="text-5xl font-extrabold text-white mb-2 tabular-nums">{formatMoney(dineroExtra)}</div>
                <p className="text-blue-100 text-sm font-medium flex items-center gap-2">
                  <TrendingUp size={16} /> Aumentando conversión por velocidad
                </p>
              </div>

              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold h-14 text-lg shadow-lg">
                Quiero capturar esas ventas <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* --- MODO CAPACIDAD --- */}
        {activeTab === 'capacidad' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Controles Capacidad */}
            <Card className="col-span-1 lg:col-span-7 p-8 bg-white border-slate-200 shadow-lg rounded-2xl">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-slate-800">
                <div className="bg-purple-100 h-10 w-10 rounded-lg flex items-center justify-center text-purple-600">
                  <Users size={20} />
                </div>
                Carga de trabajo actual
              </h3>

              <div className="space-y-10">
                <div>
                  <div className="flex justify-between mb-3 items-end">
                    <label className="flex items-center gap-2 text-slate-600 font-semibold">
                      Personas en tu equipo
                    </label>
                    <span className="font-bold text-2xl text-slate-900 bg-slate-50 px-3 py-1 rounded-lg tabular-nums border border-slate-100">
                      {equipo}
                    </span>
                  </div>
                  <input type="range" min="1" max="50" value={equipo} onChange={(e) => setEquipo(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-blue-600" />
                </div>

                <div>
                  <div className="flex justify-between mb-3 items-end">
                    <label className="flex items-center gap-2 text-slate-600 font-semibold">
                      Horas de "Admin/Burocracia" (semanal por persona)
                    </label>
                    <span className="font-bold text-2xl text-slate-900 bg-slate-50 px-3 py-1 rounded-lg tabular-nums border border-slate-100">
                      {horasAdmin}h
                    </span>
                  </div>
                  <input type="range" min="5" max="40" value={horasAdmin} onChange={(e) => setHorasAdmin(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-blue-600" />
                  <p className="text-xs text-slate-400 mt-2">Emails, copiar datos, reportes, agendar, facturar...</p>
                </div>
              </div>
            </Card>

            {/* Resultados Capacidad */}
            <div className="col-span-1 lg:col-span-5 flex flex-col justify-center space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Tiempo Perdido Semanalmente</p>
                <div className="text-3xl font-bold text-slate-900 tabular-nums">{horasTotales} horas</div>
                <p className="text-red-500 text-xs mt-1 font-semibold">Tu equipo está saturado de tareas manuales</p>
              </div>

              <div className="bg-slate-900 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="absolute top-0 right-0 bg-blue-600 px-4 py-1 rounded-bl-xl text-xs font-bold">POTENCIAL IA</div>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Horas Liberadas al Año</p>
                <div className="text-5xl font-extrabold text-white mb-2 tabular-nums">{horasAnuales.toLocaleString()}h</div>
                
                <div className="mt-4 pt-4 border-t border-slate-700">
                   <p className="text-blue-300 font-medium text-sm">
                      Equivale a ganar <span className="text-white font-bold text-lg">{(horasAnuales / 2000).toFixed(1)} empleados virtuales</span> 
                   </p>
                   <p className="text-xs text-slate-400">Sin contratar a nadie más.</p>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 text-lg shadow-lg">
                Liberar a mi equipo ahora <Zap className="ml-2" />
              </Button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}