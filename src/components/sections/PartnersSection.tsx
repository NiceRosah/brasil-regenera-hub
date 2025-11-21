import { Card } from "@/components/ui/card";
import bonoLogo from "@/assets/bono-esg-logo.png";
import basacLogo from "@/assets/basac-logo.jpg";
import rcgiLogo from "@/assets/rcgi-usp-logo.png";
import veadeirosLogo from "@/assets/instituto-veadeiros-logo.jpg";
import cnturLogo from "@/assets/cntur-logo.jpg";

export const PartnersSection = () => {
  const partners = [
    {
      name: "Bono ESG",
      role: "Desenvolvedora do projeto",
      logo: bonoLogo,
      description: "Plataforma tecnológica e governança",
    },
    {
      name: "BASAC",
      role: "Consultoria ambiental e estratégica",
      logo: basacLogo,
      description: "Expertise em projetos socioambientais",
    },
    {
      name: "RCGI-USP",
      role: "Validação científica e registro cartorial",
      logo: rcgiLogo,
      description: "Credibilidade acadêmica e rigor científico",
    },
    {
      name: "Instituto Veadeiros",
      role: "Metodologia NTZ-L",
      logo: veadeirosLogo,
      description: "Créditos integrados de carbono e biodiversidade",
    },
    {
      name: "CNTUR",
      role: "Adoção nacional pelo setor de turismo",
      logo: cnturLogo,
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
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-1 border-2 border-border hover:border-primary/30 bg-gradient-to-br from-card to-primary/5"
                >
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 rounded-lg bg-white p-3 shrink-0 flex items-center justify-center border border-border">
                        <img 
                          src={partner.logo} 
                          alt={`Logo ${partner.name}`}
                          className="w-full h-full object-contain"
                        />
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
