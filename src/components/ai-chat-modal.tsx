"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader, Send, User, Bot as BotIconLucide } from "lucide-react";
import { aiLearningAssistant } from "@/ai/flows/ai-learning-assistant-flow";
import { useToast } from "@/hooks/use-toast";
import type { aiExperts } from "@/lib/data";
import { BrainCircuitIcon } from "@/components/icons/BrainCircuitIcon";
import { LeafIcon } from "@/components/icons/LeafIcon";
import { DnaIcon } from "@/components/icons/DnaIcon";
import { AtomIcon } from "@/components/icons/AtomIcon";
import React from "react";

const iconMap: { [key: string]: React.ElementType } = {
  BrainCircuitIcon,
  Bot: BotIconLucide,
  LeafIcon,
  DnaIcon,
  AtomIcon,
};

type Message = {
  role: "user" | "assistant";
  content: string;
};

type BotData = (typeof aiExperts)[number];
type BotWithIcon = Omit<BotData, "icon"> & { icon: React.ElementType };

export function AIChatModal({
  trigger,
  bot: botWithIconName,
  isPlaceholder = false,
}: {
  trigger: ReactNode;
  bot: BotData;
  isPlaceholder?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const BotIcon = iconMap[botWithIconName.icon];
  const bot: BotWithIcon = { ...botWithIconName, icon: BotIcon };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
        // Set initial greeting message from the bot
        const initialMessage: Message = {
            role: 'assistant',
            content: `¡Hola! Soy tu ${bot.name}. ${bot.description}`,
        };
        setMessages([initialMessage]);
    }
  }, [isOpen, messages.length, bot.name, bot.description]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Use a more specific prompt for different bots if needed in the future
      const { answer } = await aiLearningAssistant({ question: input });
      const assistantMessage: Message = { role: "assistant", content: answer };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "Lo siento, no pude procesar tu pregunta. Inténtalo de nuevo.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handlePlaceholderClick = () => {
    toast({
        title: "Próximamente",
        description: `El ${bot.name} está en desarrollo y estará disponible pronto.`,
    });
  }

  if (isPlaceholder) {
    return <div onClick={handlePlaceholderClick}>{trigger}</div>;
  }


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] grid-rows-[auto_1fr_auto] h-[80vh] max-h-[700px] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <bot.icon className="size-6 text-primary" /> {bot.name}
          </DialogTitle>
          <DialogDescription>{bot.description}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-1 my-4 pr-4 -mr-4">
            <div className="space-y-4">
                {messages.map((message, index) => (
                <div
                    key={index}
                    className={`flex items-start gap-3 ${
                    message.role === "user" ? "justify-end" : ""
                    }`}
                >
                    {message.role === "assistant" && (
                    <div className="size-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <bot.icon className="size-5 text-primary-foreground" />
                    </div>
                    )}
                    <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                        message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                    >
                    {message.content}
                    </div>
                    {message.role === "user" && (
                    <div className="size-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <User className="size-5" />
                    </div>
                    )}
                </div>
                ))}
                {isLoading && (
                    <div className="flex items-start gap-3">
                        <div className="size-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <bot.icon className="size-5 text-primary-foreground" />
                        </div>
                        <div className="rounded-lg px-4 py-2 bg-muted flex items-center">
                            <Loader className="size-5 animate-spin" />
                        </div>
                    </div>
                )}
            </div>
        </ScrollArea>
        <DialogFooter>
          <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta aquí..."
              disabled={isLoading}
              autoComplete="off"
            />
            <Button type="submit" disabled={isLoading || !input.trim()}>
              <Send className="mr-2 h-4 w-4" /> Enviar
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
