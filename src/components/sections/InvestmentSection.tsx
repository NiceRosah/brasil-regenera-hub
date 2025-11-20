import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp, Users, Wallet } from "lucide-react";

export const InvestmentSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
              <Wallet className="w-4 h-4" />
              Modelo de Investimento
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Investimento e Retorno
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 space-y-6 border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-custom-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">
                  Modelo de Receita
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  Comissão de <strong className="text-primary text-lg">4%</strong> sobre créditos originados
                </p>
                <p className="text-muted-foreground">
                  Exemplo: Créditos de água a <strong className="text-primary">US$ 0,14/unidade</strong>
                </p>
              </div>
            </Card>

            <Card className="p-8 space-y-6 border-2 border-border hover:border-accent/30 transition-all duration-300 hover:shadow-custom-lg bg-gradient-to-br from-card to-accent/5">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">
                  Projeção
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  <strong className="text-accent text-lg">30 milhões</strong> de créditos/ano (projeção conservadora)
                </p>
                <p className="text-muted-foreground">
                  Apenas no GDF como exemplo inicial
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-accent text-accent-foreground border-0 shadow-custom-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 rounded-lg bg-accent-foreground/10">
                <Users className="w-8 h-8" />
              </div>
              <div className="flex-1 text-center md:text-left space-y-2">
                <h3 className="text-2xl font-bold">Repartição de Benefícios</h3>
                <p className="text-lg opacity-90">
                  Receita compartilhada entre instituições parceiras e municípios participantes
                </p>
              </div>
            </div>
          </Card>

          <div className="text-center pt-4">
            <Button variant="outline" size="lg" className="border-2">
              Solicitar Projeção Personalizada para Meu Município/Empresa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
