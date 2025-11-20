import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import cerradoImage from "@/assets/cerrado-landscape.jpg";

export const CoverageSection = () => {
  const biomes = [
    "Amazônia",
    "Cerrado",
    "Mata Atlântica",
    "Caatinga",
    "Pampas",
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={cerradoImage} 
          alt="Cerrado brasileiro"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
            <MapPin className="w-4 h-4" />
            Abrangência Nacional
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            De Norte a Sul do Brasil
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Lançado oficialmente na <strong className="text-primary">COP30 (Belém)</strong> e simbolicamente no <strong className="text-primary">Cristo Redentor</strong>, o Protocolo já está sendo implementado em projetos-piloto nos principais biomas brasileiros, com expansão nacional até 2030.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {biomes.map((biome) => (
              <Badge 
                key={biome}
                variant="secondary"
                className="px-6 py-2 text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default shadow-custom-sm"
              >
                {biome}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
