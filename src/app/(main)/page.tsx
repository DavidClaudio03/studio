import { AmbiancePlayer } from "@/components/ambiance-player";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Headphones } from "lucide-react";

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

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <section className="lg:col-span-2">
          <AmbiancePlayer />
        </section>

        <section>
          <Card className="h-full bg-primary/10 border-primary/20">
            <CardHeader className="flex-row items-center gap-4">
              <div className="rounded-full bg-primary/20 p-3">
                <Headphones className="size-6 text-primary" />
              </div>
              <CardTitle className="text-primary">Guía de Escucha y Propósito Pedagógico</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                La música que escuchas ha sido diseñada por una IA para activar tu memoria sensorial. Sus ritmos y armonías están pensados para crear un estado de calma y concentración, facilitando la conexión y recordación de los conceptos que explorarás en esta unidad de aprendizaje.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
