import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";
import { urls } from "@/lib/data";

export default function FundamentosPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary">
          Fase de Fundamentos
        </h1>
        <p className="text-lg text-muted-foreground">
          Visualiza la información clave para construir una base sólida de conocimiento.
        </p>
      </header>

      <section>
        <Card className="w-full max-w-3xl mx-auto overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
          <CardHeader className="bg-muted/30 p-6">
            <div className="flex items-center gap-4">
              <FileText className="size-8 text-primary" />
              <div>
                <CardTitle>Infografía: El Ciclo del Agua</CardTitle>
                <CardDescription>Una representación visual del viaje del agua en nuestro planeta.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground mb-6">
              Esta infografía resume el ciclo hidrológico de manera clara y concisa. Es el punto de partida para entender cómo funciona nuestro planeta. Haz clic en el botón para explorar el documento completo.
            </p>
            <div className="w-full h-64 bg-background rounded-md flex items-center justify-center border-2 border-dashed">
                <p className="text-muted-foreground">[Placeholder para previsualización de PDF]</p>
            </div>
          </CardContent>
          <CardFooter className="bg-muted/30 p-4">
            <Button asChild className="w-full" size="lg">
              <a href={urls.infographic} target="_blank" rel="noopener noreferrer">
                Ver Infografía Completa
                <ArrowRight className="ml-2" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
