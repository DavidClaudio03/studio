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
import { Download, Info, CheckCircle, Award } from "lucide-react";

export default function RetoFinalPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary">
          Módulo: Reto Final
        </h1>
        <p className="text-lg text-muted-foreground">
          Demuestra tu maestría. Es hora de aplicar todo lo que has aprendido.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Info className="size-8 text-primary" />
                <CardTitle>Instrucciones del Reto</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                El Reto Final consiste en la creación de un proyecto que sintetice los conocimientos adquiridos a lo largo de los módulos. Deberás elegir un tema relacionado con el "Ciclo del Agua" o la "Adaptación de los Seres Vivos" y desarrollar una presentación multimedia.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Utiliza los recursos de los módulos "Explora" e "Interactúa".</li>
                <li>Tu presentación puede ser un video, una serie de diapositivas interactivas o una infografía digital.</li>
                <li>Consulta la guía de evaluación para conocer los detalles completos y los requisitos de entrega.</li>
                <li>La creatividad y la precisión conceptual serán clave para una evaluación exitosa.</li>
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
                Estos son los criterios con los que se evaluará tu proyecto.
              </CardDescription>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="bg-primary/10 border-primary/20 text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/20 rounded-full p-3 w-fit">
                <Download className="size-8 text-primary" />
              </div>
              <CardTitle className="text-primary">Guía de Evaluación</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Descarga el documento completo con todas las especificaciones, requisitos técnicos y formato de entrega.
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
