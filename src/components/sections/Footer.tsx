import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 text-center">
            <h3 className="text-xl font-bold">Protocolo de Governança e Sustentabilidade para o Turismo Brasileiro</h3>
            <p className="text-background/80 leading-relaxed max-w-4xl mx-auto">
              O novo padrão nacional para certificação, registro e rastreabilidade de créditos socioambientais, impulsionando um turismo sustentável e inovador em todo o Brasil.
            </p>
          </div>

          <Separator className="my-8 bg-background/20" />

          <div className="text-center text-sm text-background/60">
            <p>© 2025 Protocolo Brasileiro de Governança e Sustentabilidade. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
