'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, XCircle, Trophy, RotateCcw } from 'lucide-react';
import { quizData } from '@/lib/data';
import { cn } from '@/lib/utils';

const TOTAL_LEVELS = quizData.length;

export default function InteractiveEvaluationPage() {
  const [quizState, setQuizState] = useState<'not-started' | 'in-progress' | 'finished'>('not-started');
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{ correct: boolean; explanation: string; selected: number; } | null>(null);

  const currentQuestionData = useMemo(() => {
    if (quizState !== 'in-progress') return null;
    return quizData[currentLevel].questions[currentQuestionIndex];
  }, [quizState, currentLevel, currentQuestionIndex]);
  
  const totalQuestions = useMemo(() => quizData.reduce((acc, level) => acc + level.questions.length, 0), []);

  const progress = useMemo(() => {
    const answeredQuestions = score;
    return (answeredQuestions / totalQuestions) * 100;
  }, [score, totalQuestions]);

  const handleStartQuiz = () => {
    setCurrentLevel(0);
    setCurrentQuestionIndex(0);
    setScore(0);
    setFeedback(null);
    setQuizState('in-progress');
  };

  const handleAnswer = (selectedIndex: number) => {
    if (feedback) return; // Prevent answering again while feedback is shown

    const isCorrect = selectedIndex === currentQuestionData!.correctIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    setFeedback({
      correct: isCorrect,
      explanation: currentQuestionData!.explanation,
      selected: selectedIndex,
    });

    setTimeout(() => {
      setFeedback(null);
      const isLastQuestionInLevel = currentQuestionIndex === quizData[currentLevel].questions.length - 1;
      const isLastLevel = currentLevel === TOTAL_LEVELS - 1;

      if (isLastQuestionInLevel && isLastLevel) {
        setQuizState('finished');
      } else if (isLastQuestionInLevel) {
        setCurrentLevel(prev => prev + 1);
        setCurrentQuestionIndex(0);
      } else {
        setCurrentQuestionIndex(prev => prev + 1);
      }
    }, 2500);
  };
  
  if (quizState === 'not-started') {
    return (
       <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-in fade-in-50 duration-500">
         <header>
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary">
              Fase de Evaluación: Reto Final
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             ¡Es hora de demostrar lo que has aprendido! Este quiz interactivo pondrá a prueba tus conocimientos sobre los temas clave de la unidad.
            </p>
         </header>
         <Card className="w-full max-w-md text-center">
            <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                    <Trophy className="size-12 text-primary" />
                </div>
                <CardTitle>Prepárate para el Desafío</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-6">
                    Completarás {TOTAL_LEVELS} niveles que cubren desde la botánica hasta el reino animal. ¡Mucha suerte!
                </p>
                <Button onClick={handleStartQuiz} size="lg" className="w-full">
                    Comenzar el Reto
                </Button>
            </CardContent>
         </Card>
      </div>
    );
  }

  if (quizState === 'finished') {
    return (
       <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-in fade-in-50 duration-500">
         <header>
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-green-400">
              ¡Reto Completado!
            </h1>
            <p className="text-lg text-muted-foreground">
              Has finalizado la evaluación. ¡Excelente trabajo!
            </p>
         </header>
        <Card className="w-full max-w-md text-center">
            <CardHeader>
                <div className="mx-auto bg-yellow-400/10 rounded-full p-4 w-fit mb-4">
                    <Trophy className="size-12 text-yellow-400" />
                </div>
                <CardTitle>Dashboard de Logros</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <p className="text-muted-foreground">Tu puntaje final es:</p>
                    <p className="text-6xl font-bold text-primary">{score} / {totalQuestions}</p>
                </div>
                <div className="bg-muted p-4 rounded-lg border">
                    <p className="font-bold text-lg text-primary">Instrucción Final</p>
                    <p className="text-muted-foreground">
                        Captura esta pantalla y súbela como tu evidencia de aprendizaje.
                    </p>
                </div>
                 <Button onClick={handleStartQuiz} size="lg" variant="outline" className="w-full">
                    <RotateCcw className="mr-2"/>
                    Intentar de Nuevo
                </Button>
            </CardContent>
        </Card>
       </div>
    );
  }

  if (quizState === 'in-progress' && currentQuestionData) {
    const currentTotalQuestions = quizData[currentLevel].questions.length * (currentLevel + 1);
    const questionsAnsweredInLevel = (currentLevel * quizData[currentLevel].questions.length) + currentQuestionIndex;


    return (
      <div className="space-y-8 animate-in fade-in-20 duration-300">
        <header>
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary">
            {quizData[currentLevel].title}
          </h1>
          <p className="text-lg text-muted-foreground">
            Selecciona la respuesta correcta.
          </p>
        </header>

        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <div className="flex justify-between items-center mb-4">
                    <CardTitle>Pregunta {currentQuestionIndex + 1} de {quizData[currentLevel].questions.length}</CardTitle>
                    <div className="text-lg font-bold text-primary">Aciertos: {score}</div>
                </div>
                <Progress value={progress} className="w-full" />
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-xl font-semibold text-center min-h-[6rem] flex items-center justify-center p-4">
                    {currentQuestionData.text}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentQuestionData.options.map((option, index) => (
                        <Button
                            key={index}
                            onClick={() => handleAnswer(index)}
                            disabled={!!feedback}
                            size="lg"
                            variant="outline"
                            className={cn("h-auto py-4 text-base whitespace-normal justify-start text-left transition-all duration-300", 
                            "focus-visible:ring-primary/50",
                            feedback && index === currentQuestionData.correctIndex && 'bg-green-500/20 border-green-500 text-foreground hover:bg-green-500/20',
                            feedback && index !== currentQuestionData.correctIndex && index === feedback.selected && 'bg-red-500/20 border-red-500 text-foreground hover:bg-red-500/20'
                            )}
                        >
                           <div className="flex-shrink-0 w-8">
                           {feedback && index === currentQuestionData.correctIndex && <CheckCircle2 className="size-6 text-green-400" />}
                           {feedback && index !== currentQuestionData.correctIndex && index === feedback.selected && <XCircle className="size-6 text-red-400" />}
                           </div>
                           <span>{option}</span>
                        </Button>
                    ))}
                </div>
                 {feedback && (
                    <div className={cn(
                        "p-4 rounded-md text-center animate-in fade-in-50 duration-500 border",
                        feedback.correct ? 'bg-green-500/10 text-green-300 border-green-500/20' : 'bg-red-500/10 text-red-300 border-red-500/20'
                        )}>
                        <h4 className="font-bold text-lg mb-1">{feedback.correct ? '¡Correcto!' : 'Respuesta Incorrecta'}</h4>
                        <p className="text-sm">{currentQuestionData.explanation}</p>
                    </div>
                 )}
            </CardContent>
        </Card>
      </div>
    );
  }

  return null;
}
