import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Headphones, PlayCircle } from "lucide-react";
import { urls } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2 rounded-lg bg-card p-6 shadow-md">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary">
          Fase de Activación: Bienvenido a EcoCyberLearn
        </h1>
        <p className="text-lg text-muted-foreground">
          Prepara tu mente para el aprendizaje. La naturaleza y la tecnología convergen para potenciar tu conocimiento.
        </p>
      </header>

      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Headphones className="size-8 text-primary" />
            </div>
            <div>
              <CardTitle>Sintoniza tu Aprendizaje</CardTitle>
              <CardDescription>Guía de Escucha y Propósito Pedagógico</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            La música que escucharás ha sido diseñada para activar tu memoria sensorial. Sus ritmos y armonías están pensados para crear un estado de calma y concentración, facilitando la conexión y recordación de los conceptos que explorarás en esta unidad de aprendizaje.
          </p>
          <Button asChild className="w-full" size="lg">
            <a href={urls.activationAudio} target="_blank" rel="noopener noreferrer">
              <PlayCircle className="mr-2" />
              Escuchar Audio de Activación
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
