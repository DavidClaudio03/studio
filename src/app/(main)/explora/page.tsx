import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, ArrowRight, HelpCircle } from "lucide-react";
import { urls, faqs } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function PdfCard() {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
      <CardHeader className="bg-muted/30 p-6">
        <div className="flex items-center gap-4">
          <BookOpen className="size-8 text-primary" />
          <div>
            <CardTitle>Compendio Pedagógico</CardTitle>
            <CardDescription>Tu guía completa de los temas del curso.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-muted-foreground mb-4">
          Este documento contiene el material de estudio fundamental. Accede a él para profundizar en los conceptos clave.
        </p>
        <div className="w-full h-40 bg-background rounded-md flex items-center justify-center border-2 border-dashed">
          <FileText className="size-16 text-muted-foreground" />
        </div>
      </CardContent>
      <CardFooter className="bg-muted/30 p-4">
        <Button asChild className="w-full" size="lg">
          <a href={urls.compendium} target="_blank" rel="noopener noreferrer">
            Abrir Compendio
            <ArrowRight className="ml-2" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

function FaqSection() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-4">
          <HelpCircle className="size-8 text-primary" />
          <CardTitle>Quiz Rápido: ¿Cuánto Sabes?</CardTitle>
        </div>
        <CardDescription>
          Pon a prueba tus conocimientos con estas preguntas frecuentes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}

export default function ExploraPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary">
          Módulo: Explora
        </h1>
        <p className="text-lg text-muted-foreground">
          Profundiza en el conocimiento y desafía tu comprensión.
        </p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <section>
          <PdfCard />
        </section>
        <section>
          <FaqSection />
        </section>
      </div>
    </div>
  );
}
