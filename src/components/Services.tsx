import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brain, MessageSquare, Zap } from "lucide-react"; // Iconos

const services = [
  {
    title: "Chatbots con IA",
    description:
      "Asistentes virtuales que responden 24/7, agendan citas y cierran ventas en WhatsApp y Web.",
    icon: <MessageSquare className="h-10 w-10 text-blue-500 mb-4" />,
  },
  {
    title: "Automatización de Procesos",
    description:
      "Conectamos tus apps (CRM, Email, Sheets) para eliminar tareas manuales repetitivas.",
    icon: <Zap className="h-10 w-10 text-yellow-500 mb-4" />,
  },
  {
    title: "Consultoría Estratégica",
    description:
      "Auditoría completa de tu empresa para detectar dónde la IA puede ahorrarte más dinero.",
    icon: <Brain className="h-10 w-10 text-purple-500 mb-4" />,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-neutral-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tighter sm:text-4xl">
          Nuestras Soluciones
        </h2>
        
        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-neutral-900 border-neutral-800 text-neutral-100 hover:border-neutral-600 transition-colors">
              <CardHeader>
                <div>{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}