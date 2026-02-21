import Image from "next/image";
import { videos, urls, aiBots } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, Presentation, Bot } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AIChatModal } from "@/components/ai-chat-modal";
import { ElevenLabsWidget } from "@/components/eleven-labs-widget";

const VideoGallery = () => (
  <section>
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <PlayCircle className="size-8 text-primary" />
          <CardTitle>Galería de Videos</CardTitle>
        </div>
        <CardDescription>
          Explora estos recursos audiovisuales para reforzar tu aprendizaje.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video) => {
            const placeholder = PlaceHolderImages.find(p => p.id === video.imageId);
            return (
              <a href={video.src} target="_blank" rel="noopener noreferrer" key={video.id}>
                <div className="group relative aspect-video w-full overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={placeholder?.imageUrl || ''}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    data-ai-hint={placeholder?.imageHint || 'video thumbnail'}
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle className="size-12 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                    <h3 className="text-sm font-semibold text-white truncate">{video.title}</h3>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </CardContent>
    </Card>
  </section>
);

const SlidesVisualizer = () => (
  <section>
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Presentation className="size-8 text-primary" />
          <CardTitle>Visualizador de Slides</CardTitle>
        </div>
        <CardDescription>
          Interactúa con las presentaciones de Canva.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="slide1" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="slide1">Presentación 1</TabsTrigger>
            <TabsTrigger value="slide2">Presentación 2</TabsTrigger>
          </TabsList>
          <TabsContent value="slide1" className="mt-4">
            <div className="aspect-video w-full overflow-hidden rounded-lg border">
              <iframe
                src={urls.canvaSlide1}
                className="w-full h-full"
                allowFullScreen
                title="Canva Presentation 1"
              ></iframe>
            </div>
          </TabsContent>
          <TabsContent value="slide2" className="mt-4">
            <div className="aspect-video w-full overflow-hidden rounded-lg border">
              <iframe
                src={urls.canvaSlide2}
                className="w-full h-full"
                allowFullScreen
                title="Canva Presentation 2"
              ></iframe>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  </section>
);

const AIPanel = () => (
  <section>
    <Card>
      <CardHeader>
         <div className="flex items-center gap-4">
            <Bot className="size-8 text-primary" />
            <CardTitle>Panel de Inteligencia Artificial</CardTitle>
          </div>
        <CardDescription>
          Interactúa con nuestros asistentes de IA para una experiencia de aprendizaje personalizada.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {aiBots.map((bot) => {
          const BotIcon = bot.icon;
          const TriggerButton = (
            <Button variant="outline" className="h-24 w-full flex flex-col items-center justify-center gap-2 p-4 text-center hover:bg-accent/20 hover:border-accent">
                <BotIcon className="size-8 text-primary" />
                <span className="font-semibold">{bot.name}</span>
            </Button>
          );
          
          if (bot.id === 'learning-assistant') {
            return <AIChatModal key={bot.id} trigger={TriggerButton} bot={bot} />;
          }
          if (bot.id === 'eleven-labs') {
            return <ElevenLabsWidget key={bot.id} trigger={TriggerButton} bot={bot} />;
          }
          
          return (
             <AIChatModal key={bot.id} trigger={TriggerButton} bot={bot} isPlaceholder />
          );
        })}
      </CardContent>
    </Card>
  </section>
);


export default function InteractuaPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary">
          Módulo: Interactúa
        </h1>
        <p className="text-lg text-muted-foreground">
          Aprende haciendo. Explora, visualiza y conversa con la IA.
        </p>
      </header>
      
      <VideoGallery />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <SlidesVisualizer />
        <AIPanel />
      </div>
    </div>
  );
}
