'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { plantFlashcards, animalData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from '@/lib/utils';
import { Sprout, CheckCircle2, XCircle, RotateCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const InteractiveFlashcards = () => {
  const [flipped, setFlipped] = useState<string | null>(null);

  const handleFlip = (id: string) => {
    setFlipped(flipped === id ? null : id);
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Sprout className="size-8 text-primary" />
          <CardTitle>Laboratorio de Botánica: Flashcards</CardTitle>
        </div>
        <CardDescription>Haz clic en una tarjeta para descubrir la función de cada parte de la planta.</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {plantFlashcards.map((card) => (
          <div key={card.id} className={cn("flip-card aspect-square", { 'flipped': flipped === card.id })} onClick={() => handleFlip(card.id)}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Sprout className="size-12 text-primary mb-2" />
                <h3 className="font-bold text-lg">{card.name}</h3>
              </div>
              <div className="flip-card-back">
                <h4 className="font-bold text-md mb-2">{card.name}</h4>
                <p className="text-sm text-muted-foreground">{card.function}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

const SpeciesClassifier = () => {
  const { toast } = useToast();
  const [feedback, setFeedback] = useState<{[key: string]: {correct: boolean, explanation: string} | null}>({});

  const handleClassification = (animalId: string, animalType: string, selectedType: 'Vertebrado' | 'Invertebrado') => {
    const isCorrect = animalType === selectedType;
    const animal = animalData.find(a => a.id === animalId);
    if (!animal) return;

    setFeedback(prev => ({...prev, [animalId]: {correct: isCorrect, explanation: animal.explanation}}));
    
    toast({
      title: isCorrect ? '¡Correcto!' : 'Inténtalo de nuevo',
      description: animal.explanation,
      variant: isCorrect ? 'default' : 'destructive',
    });
  };
  
  const reset = () => setFeedback({});

  return (
    <Card className="shadow-lg mt-8">
      <CardHeader>
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <DnaIcon className="size-8 text-primary" />
              <CardTitle>Clasificador de Especies</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={reset}>
                <RotateCw className="size-5" />
            </Button>
          </div>
        <CardDescription>Clasifica cada animal como vertebrado o invertebrado y recibe retroalimentación inmediata.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {animalData.map(animal => {
          const placeholder = PlaceHolderImages.find(p => p.id === animal.imageId);
          const currentFeedback = feedback[animal.id];
          return (
            <div key={animal.id} className="grid grid-cols-3 gap-4 items-center">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md col-span-1">
                 <Image
                    src={placeholder?.imageUrl || ''}
                    alt={animal.name}
                    fill
                    className="object-cover"
                    data-ai-hint={placeholder?.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
                     <h3 className="text-sm font-semibold text-white truncate">{animal.name}</h3>
                  </div>
              </div>
              <div className="col-span-2 flex items-center justify-center gap-4">
                {currentFeedback ? (
                   <div className={`flex items-center gap-2 p-2 rounded-md w-full justify-center ${currentFeedback.correct ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                      {currentFeedback.correct ? <CheckCircle2 className="size-6" /> : <XCircle className="size-6" />}
                      <span className="font-bold">{currentFeedback.correct ? 'Correcto' : 'Incorrecto'}</span>
                   </div>
                ) : (
                  <>
                    <Button variant="outline" className="w-full" onClick={() => handleClassification(animal.id, animal.type, 'Vertebrado')}>Vertebrado</Button>
                    <Button variant="outline" className="w-full" onClick={() => handleClassification(animal.id, animal.type, 'Invertebrado')}>Invertebrado</Button>
                  </>
                )}
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}


export default function ExploracionPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary">
          Fase de Exploración
        </h1>
        <p className="text-lg text-muted-foreground">
          Interactúa con el conocimiento. Pon a prueba tu comprensión de forma práctica.
        </p>
      </header>
      
      <InteractiveFlashcards />
      <SpeciesClassifier />
    </div>
  );
}

const DnaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 4c0 4.418 3.582 8 8 8s8-3.582 8-8" />
      <path d="M20 20c0-4.418-3.582-8-8-8s-8 3.582-8 8" />
      <path d="M12 4v16" />
      <path d="M9 7h6" />
      <path d="M9 17h6" />
      <path d="M8 12h8" />
    </svg>
  );
