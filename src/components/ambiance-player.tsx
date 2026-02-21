"use client";

import { useState, useEffect, useRef } from "react";
import {
  aiAmbianceSelection,
  type AiAmbianceSelectionOutput,
} from "@/ai/flows/ai-ambiance-selection-flow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Play,
  Pause,
  Music4,
  Loader,
  ServerCrash,
  Volume2,
  VolumeX,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { urls } from "@/lib/data";

export function AmbiancePlayer() {
  const [ambiance, setAmbiance] = useState<AiAmbianceSelectionOutput | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const fetchAmbiance = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await aiAmbianceSelection({});
        setAmbiance(result);
      } catch (e) {
        console.error("Failed to generate ambiance:", e);
        setError("Failed to generate ambiance.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchAmbiance();
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const setAudioTime = () => {
      if (audio.duration > 0) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(e => console.error("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };
  
  const handleProgressChange = (value: number[]) => {
      const audio = audioRef.current;
      if (!audio || isNaN(audio.duration)) return;
      const newTime = (value[0] / 100) * audio.duration;
      audio.currentTime = newTime;
      setProgress(value[0]);
  }
  
  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds) || timeInSeconds === 0) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center gap-4 h-full min-h-[200px]">
          <Loader className="animate-spin text-primary size-10" />
          <p className="text-muted-foreground">Generando ambiente sonoro...</p>
        </div>
      );
    }

    const currentAmbiance = ambiance ?? {
        theme: "Cyber-Nature",
        mood: "Focalizado y Calmado",
        description: "Sonidos ambientales generados por IA para mejorar la concentración. El reproductor funcionará incluso si la descripción detallada no se puede cargar.",
    };
    
    const audioSrc = urls.activationAudio;

    return (
      <div className="flex flex-col md:flex-row items-center gap-6 p-6">
        <audio ref={audioRef} src={audioSrc} preload="metadata" muted={isMuted} onEnded={() => setIsPlaying(false)} />
        <div className="flex-shrink-0">
          <div className="size-32 rounded-lg bg-primary/10 flex items-center justify-center border-2 border-dashed border-primary">
            <Music4 className="size-16 text-primary" />
          </div>
        </div>
        <div className="w-full space-y-3">
          <div>
            <h3 className="text-2xl font-bold text-primary">{currentAmbiance.theme}</h3>
            <p className="text-sm text-muted-foreground">{currentAmbiance.mood}</p>
          </div>
          <p className="text-sm">{currentAmbiance.description}</p>
          <div className="space-y-2">
             <Slider value={[progress]} max={100} step={1} onValueChange={handleProgressChange} />
             <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
                <span>{formatTime(duration)}</span>
             </div>
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <VolumeX /> : <Volume2 />}
              </Button>
              <Button
                variant="default"
                size="icon"
                className="size-12 rounded-full"
                onClick={togglePlayPause}
              >
                {isPlaying ? <Pause /> : <Play />}
              </Button>
               <div className="w-10 h-10"></div> {/* Spacer */}
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
