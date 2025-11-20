import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import networkImage from "@/assets/sustainability-network.jpg";

export const ProcessSection = () => {
  const steps = [
    "Desenvolvimento do projeto com metodologia NTZ-L",
    "Registro e rastreabilidade na plataforma Bono",
    "Validação científica pela RCGI-USP",
    "Certificação e emissão de créditos",
    "Comercialização com repartição de benefícios",
  ];

  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={networkImage} 
          alt="Rede de sustentabilidade"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Como Funciona
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um processo transparente e verificável em cinco etapas
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-custom-md transition-all duration-300 hover:scale-[1.02] border-2 border-border hover:border-primary/30 bg-card"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-lg font-medium text-card-foreground flex-1">
                    {step}
                  </p>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-primary hidden md:block" />
                  )}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-primary text-primary-foreground border-0 shadow-custom-lg">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 shrink-0" />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Resultado</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  Turismo que financia conservação, gera renda local e oferece créditos verificáveis para empresas e municípios.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
