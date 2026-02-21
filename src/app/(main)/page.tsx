import { AmbiancePlayer } from "@/components/ambiance-player";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2 rounded-lg bg-card p-6 shadow-md">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary">
          Bienvenido a EcoCyberLearn
        </h1>
        <p className="text-lg text-muted-foreground">
          Un ecosistema de aprendizaje virtual donde la naturaleza y la tecnología convergen para potenciar tu conocimiento.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <section className="lg:col-span-2">
          <AmbiancePlayer />
        </section>

        <section>
          <Card className="h-full bg-accent/20 border-accent/50">
            <CardHeader className="flex-row items-center gap-4">
              <div className="rounded-full bg-accent/30 p-3">
                <Lightbulb className="size-6 text-accent-foreground" />
              </div>
              <CardTitle className="text-accent-foreground">Intención Didáctica</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                La música ambiental no es solo un fondo sonoro; es una herramienta neuro-pedagógica. Al seleccionar pistas con tempos específicos y sin letras distractoras, creamos un "flujo" de concentración. Este estado reduce la ansiedad, optimiza la actividad de las ondas cerebrales alfa asociadas con la calma y la creatividad, y mejora la retención de información a largo plazo. En EcoCyberLearn, cada sonido está diseñado para esculpir un entorno de aprendizaje óptimo.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
