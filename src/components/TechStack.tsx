export default function TechStack() {
  const partners = [
    { 
      name: "OpenAI", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
    },
    { 
      name: "Google Workspace", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg"
    },
    { 
      name: "AWS", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
    },
    { 
      name: "Salesforce", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
    },
    { 
      name: "HubSpot", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg"
    },
    { 
      name: "Stripe", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* TÍTULO ÚNICO */}
        <h3 className="text-2xl font-bold text-slate-900 text-center mb-12 tracking-tight">
          Technology stack
        </h3>

        {/* LOGOS: Una línea, misma separación, mismo tamaño */}
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-100">
          
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center w-full md:w-auto">
              <img 
                src={partner.logo} 
                alt={partner.name}
                title={partner.name}
                // CLAVE: 'h-8' fuerza a todos a tener EXACTAMENTE la misma altura (32px)
                // 'object-contain' asegura que no se deformen
                className="h-8 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}