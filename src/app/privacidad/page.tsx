export default function Privacidad() {
  return (
    <main className="container mx-auto px-4 py-32 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
      <p className="text-sm text-slate-500 mb-8">Última actualización: {new Date().toLocaleDateString()}</p>
      
      <div className="prose prose-slate">
        <p>En <strong>Agencia IA</strong>, nos tomamos muy en serio tu privacidad. Esta política describe cómo recopilamos y usamos tus datos.</p>
        
        <h3>1. Información que recopilamos</h3>
        <p>Podemos recopilar información personal como tu nombre, correo electrónico y número de teléfono cuando rellenas nuestros formularios de contacto o descargas nuestros recursos.</p>
        
        <h3>2. Uso de la información</h3>
        <p>Utilizamos tus datos exclusivamente para contactarte sobre los servicios que has solicitado y enviarte información relevante sobre automatización e IA. No vendemos tus datos a terceros.</p>
        
        <h3>3. Cookies</h3>
        <p>Utilizamos cookies para mejorar la experiencia de navegación y analizar el tráfico de nuestro sitio web.</p>
      </div>
    </main>
  );
}