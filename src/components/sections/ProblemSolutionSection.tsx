import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle } from "lucide-react";

export const ProblemSolutionSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem */}
            <Card className="p-8 border-2 border-destructive/20 hover:border-destructive/40 transition-all duration-300 hover:shadow-custom-md">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-destructive/10 shrink-0">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-card-foreground">O Desafio</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Enquanto o mundo avança para a economia de baixo carbono, o Brasil carecia de um padrão nacional confiável para créditos de carbono e biodiversidade.
                  </p>
                </div>
              </div>
            </Card>

            {/* Solution */}
            <Card className="p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-custom-md bg-gradient-to-br from-card to-primary/5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-card-foreground">A Solução</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nasce o Protocolo que une tecnologia, ciência e governança para transformar o turismo em força regenerativa, com métricas claras, rastreabilidade total e impacto social mensurável.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
