export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Auditoría (Discovery)",
      desc: "Analizamos tus flujos de trabajo actuales y detectamos cuellos de botella.",
    },
    {
      number: "02",
      title: "Construcción",
      desc: "Desarrollamos los agentes de IA y automatizaciones en un entorno de prueba.",
    },
    {
      number: "03",
      title: "Lanzamiento & Soporte",
      desc: "Implementamos en tu empresa y damos seguimiento para asegurar el ROI.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 tracking-tighter">
          Tu camino hacia la automatización
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Línea conectora (solo visible en escritorio) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-100 flex items-center justify-center text-3xl font-bold text-blue-600 shadow-sm mb-6 z-10">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
              <p className="text-slate-600 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}