import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* About */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Protocolo de Governança e Sustentabilidade para o Turismo Brasileiro</h3>
              <p className="text-background/80 leading-relaxed">
                O novo padrão nacional para certificação, registro e rastreabilidade de créditos socioambientais, impulsionando um turismo sustentável e inovador em todo o Brasil.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-background/80">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span className="text-sm">contato@protocolo.gov.br</span>
                </div>
                <div className="flex items-center gap-3 text-background/80">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span className="text-sm">+55 (61) 3000-0000</span>
                </div>
                <div className="flex items-center gap-3 text-background/80">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span className="text-sm">Brasília - DF, Brasil</span>
                </div>
              </div>
            </div>
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
