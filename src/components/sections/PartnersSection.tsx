import { Card } from "@/components/ui/card";
import { Building2, FlaskConical, Leaf, Shield, Users } from "lucide-react";

export const PartnersSection = () => {
  const partners = [
    {
      name: "Bono ESG",
      role: "Desenvolvedora do projeto",
      icon: Building2,
      description: "Plataforma tecnológica e governança",
    },
    {
      name: "BASAC",
      role: "Consultoria ambiental e estratégica",
      icon: Shield,
      description: "Expertise em projetos socioambientais",
    },
    {
      name: "RCGI-USP",
      role: "Validação científica e registro cartorial",
      icon: FlaskConical,
      description: "Credibilidade acadêmica e rigor científico",
    },
    {
      name: "Instituto Veadeiros",
      role: "Metodologia NTZ-L",
      icon: Leaf,
      description: "Créditos integrados de carbono e biodiversidade",
    },
    {
      name: "CNTUR",
      role: "Adoção nacional pelo setor de turismo",
      icon: Users,
      description: "Implementação em escala nacional",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Quem Está Por Trás
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma aliança de especialistas de ponta unindo tecnologia, ciência e governança
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-1 border-2 border-border hover:border-primary/30 bg-gradient-to-br from-card to-primary/5"
                >
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h3 className="text-lg font-bold text-card-foreground">
                          {partner.name}
                        </h3>
                        <p className="text-sm font-medium text-primary">
                          {partner.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {partner.description}
                    </p>
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
