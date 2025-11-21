import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-amazon.jpg";

export const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5561999122626', '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Floresta Amazônica brasileira vista aérea"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            Protocolo Brasileiro de Governança e Sustentabilidade: Um Marco Histórico para o Turismo e a Bioeconomia
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
            Uma aliança inédita entre Bono ESG, BASAC, RCGI-USP, Instituto Veadeiros e CNTUR para criar a primeira plataforma nacional de certificação e registro de créditos socioambientais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={handleWhatsAppClick}
            >
              Quero Fazer Parte Desta Mudança
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
