import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { urls, rubricCriteria } from "@/lib/data";
import { Download, Info, Award } from "lucide-react";

export default function EvaluacionPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary">
          Fase de Evaluación: Reto Final
        </h1>
        <p className="text-lg text-muted-foreground">
          Demuestra tu maestría. Es hora de aplicar y sintetizar todo lo que has aprendido.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Info className="size-8 text-primary" />
                <CardTitle>Instrucciones de la Actividad Evaluable</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                El Reto Final consiste en la creación de un proyecto que sintetice los conocimientos adquiridos a lo largo de la ruta de aprendizaje. Deberás elegir un tema relacionado con el "Ciclo del Agua" o la "Adaptación de los Seres Vivos" y desarrollar una presentación multimedia.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Utiliza los recursos y conocimientos de las fases de "Exploración" y "Laboratorio IA".</li>
                <li>Tu presentación puede ser un video, una serie de diapositivas interactivas o una infografía digital.</li>
                <li>Consulta la guía de evaluación para conocer los detalles completos y los requisitos de entrega.</li>
                <li>La creatividad, la precisión conceptual y el análisis crítico serán clave para una evaluación exitosa.</li>
                <li>Este proyecto es tu evidencia de aprendizaje para esta unidad.</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
               <div className="flex items-center gap-4">
                <Award className="size-8 text-primary" />
                <CardTitle>Rúbrica de Evaluación</CardTitle>
              </div>
              <CardDescription>
                Estos son los criterios con los que se evaluará tu proyecto final.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[150px]">Criterio</TableHead>
                      <TableHead className="text-green-400">Excelente</TableHead>
                      <TableHead className="text-yellow-400">Bueno</TableHead>
                      <TableHead className="text-red-400">Necesita Mejora</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rubricCriteria.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.criterion}</TableCell>
                        <TableCell>{item.excellent}</TableCell>
                        <TableCell>{item.good}</TableCell>
                        <TableCell>{item.needsImprovement}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="bg-primary/10 border-primary/20 text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/20 rounded-full p-3 w-fit">
                <Download className="size-8 text-primary" />
              </div>
              <CardTitle className="text-primary">Guía de Evaluación Detallada</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Descarga el documento completo con todas las especificaciones, requisitos técnicos y formato de entrega para tu proyecto.
              </p>
              <Button asChild size="lg" className="w-full">
                <a href={urls.finalChallengeGuide} target="_blank" rel="noopener noreferrer">
                  Descargar Guía (PDF)
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
