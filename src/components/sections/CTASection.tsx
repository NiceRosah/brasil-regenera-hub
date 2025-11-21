import { Button } from "@/components/ui/button";
import { Building2, FileText, HandshakeIcon, Newspaper } from "lucide-react";

export const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5561999122626&text&type=phone_number&app_absent=0', '_blank', 'noopener,noreferrer');
  };

  const ctas = [
    {
      label: "Quero Ser um Município Pioneiro",
      icon: Building2,
      variant: "hero" as const,
    },
    {
      label: "Sou Imprensa e Quero o Release",
      icon: Newspaper,
      variant: "secondary" as const,
    },
    {
      label: "Tenho Interesse em Investir",
      icon: HandshakeIcon,
      variant: "accent" as const,
    },
    {
      label: "Receber One-Pager do Protocolo",
      icon: FileText,
      variant: "outline" as const,
    },
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Faça Parte Desta Transformação
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Escolha como você quer contribuir para o futuro sustentável do Brasil
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {ctas.map((cta, index) => {
              const Icon = cta.icon;
              return (
                <Button 
                  key={index}
                  variant={cta.variant}
                  size="lg"
                  className="w-full justify-start h-auto py-4 px-6"
                  onClick={handleWhatsAppClick}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="flex-1 text-left">{cta.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
