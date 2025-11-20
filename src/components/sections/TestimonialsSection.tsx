import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Award, Globe, FlaskConical } from "lucide-react";

export const TestimonialsSection = () => {
  const recognitions = [
    {
      title: "Selo Shell de Sustentabilidade",
      icon: Award,
      color: "text-accent",
    },
    {
      title: "COP30 Official Side Event",
      icon: Globe,
      color: "text-secondary",
    },
    {
      title: "Apoio RCGI-USP",
      icon: FlaskConical,
      color: "text-primary",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Reconhecimento e Credibilidade
            </h2>
          </div>

          {/* Testimonial */}
          <Card className="p-8 md:p-12 border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 shadow-custom-lg relative overflow-hidden">
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-24 h-24 text-primary" />
            </div>
            <div className="relative space-y-6">
              <blockquote className="text-xl md:text-2xl font-medium text-card-foreground italic leading-relaxed">
                "Esta é a iniciativa mais estruturante que vi para créditos socioambientais no Brasil. Une credibilidade científica, tecnologia e escala nacional."
              </blockquote>
              <div className="flex items-center gap-3 pt-4">
                <div className="h-1 w-12 bg-primary rounded-full" />
                <p className="text-muted-foreground font-medium">
                  Secretário de Meio Ambiente de Barueri
                </p>
              </div>
            </div>
          </Card>

          {/* Recognitions */}
          <div>
            <h3 className="text-xl font-bold text-center mb-6 text-foreground">
              Selos e Reconhecimentos
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {recognitions.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card 
                    key={index}
                    className="p-6 hover:shadow-custom-md transition-all duration-300 hover:-translate-y-1 border-2 border-border hover:border-primary/30"
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="p-4 rounded-full bg-primary/10">
                        <Icon className={`w-8 h-8 ${item.color}`} />
                      </div>
                      <Badge 
                        variant="secondary"
                        className="px-4 py-1 text-sm font-semibold whitespace-normal h-auto"
                      >
                        {item.title}
                      </Badge>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
