import { Card } from "@/components/ui/card";
import { Calendar, Rocket, TrendingUp, Trophy } from "lucide-react";

export const TimelineSection = () => {
  const phases = [
    {
      period: "2025-2026",
      title: "Lançamento e Implementação",
      description: "Lançamento na COP30 e implementação de projetos-piloto nos cinco biomas brasileiros",
      icon: Rocket,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      period: "2027-2030",
      title: "Expansão Nacional",
      description: "Expansão nacional do protocolo e implementação do selo regenerativo em escala",
      icon: TrendingUp,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      period: "2031-2035",
      title: "Liderança Global",
      description: "Brasil como 1º destino turístico carbono-positivo do mundo",
      icon: Trophy,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
              <Calendar className="w-4 h-4" />
              Roadmap do Protocolo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nossa Jornada até 2035
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-1 border-2 border-border hover:border-primary/30"
                >
                  <div className="space-y-4">
                    <div className={`inline-flex p-3 rounded-lg ${phase.bgColor}`}>
                      <Icon className={`w-6 h-6 ${phase.color}`} />
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-primary">
                        {phase.period}
                      </div>
                      <h3 className="text-xl font-bold text-card-foreground">
                        {phase.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
