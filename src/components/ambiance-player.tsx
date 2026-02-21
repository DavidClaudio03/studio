"use client";

import { useState, useEffect } from "react";
import {
  aiAmbianceSelection,
  type AiAmbianceSelectionOutput,
} from "@/ai/flows/ai-ambiance-selection-flow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Play,
  Pause,
  Forward,
  Rewind,
  Music4,
  Loader,
  ServerCrash,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Badge } from "./ui/badge";

export function AmbiancePlayer() {
  const [ambiance, setAmbiance] = useState<AiAmbianceSelectionOutput | null>(
    null
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAmbiance = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await aiAmbianceSelection({});
        setAmbiance(result);
      } catch (e) {
        console.error(e);
        setError("No se pudo generar el ambiente sonoro. Inténtalo de nuevo.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchAmbiance();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center gap-4 h-full min-h-[200px]">
          <Loader className="animate-spin text-primary size-10" />
          <p className="text-muted-foreground">Generando ambiente sonoro...</p>
        </div>
      );
    }

    if (error || !ambiance) {
      return (
        <div className="flex flex-col items-center justify-center gap-4 h-full min-h-[200px] text-destructive">
          <ServerCrash className="size-10" />
          <p>{error || "Ocurrió un error inesperado."}</p>
        </div>
      );
    }

    return (
      <div className="flex flex-col md:flex-row items-center gap-6 p-6">
        <div className="flex-shrink-0">
          <div className="size-32 rounded-lg bg-primary/10 flex items-center justify-center border-2 border-dashed border-primary">
            <Music4 className="size-16 text-primary" />
          </div>
        </div>
        <div className="w-full space-y-3">
          <div>
            <h3 className="text-2xl font-bold text-primary">{ambiance.theme}</h3>
            <p className="text-sm text-muted-foreground">{ambiance.mood}</p>
          </div>
          <p className="text-sm">{ambiance.description}</p>
          <div className="space-y-2">
            <Slider value={[progress]} max={100} step={1} />
            <div className="flex items-center justify-center gap-4">
              <Button variant="ghost" size="icon">
                <Rewind />
              </Button>
              <Button
                variant="default"
                size="icon"
                className="size-12 rounded-full"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause /> : <Play />}
              </Button>
              <Button variant="ghost" size="icon">
                <Forward />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Sintoniza tu Aprendizaje</CardTitle>
      </CardHeader>
      <CardContent>{renderContent()}</CardContent>
    </Card>
  );
}
