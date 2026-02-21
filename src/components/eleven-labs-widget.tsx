"use client";

import { useState, useEffect, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { aiBots } from "@/lib/data";
import { BrainCircuitIcon } from "@/components/icons/BrainCircuitIcon";
import { LeafIcon } from "@/components/icons/LeafIcon";
import { DnaIcon } from "@/components/icons/DnaIcon";
import { AtomIcon } from "@/components/icons/AtomIcon";
import { Bot as BotIconLucide } from "lucide-react";
import React from "react";

const iconMap: { [key: string]: React.ElementType } = {
  BrainCircuitIcon,
  Bot: BotIconLucide,
  LeafIcon,
  DnaIcon,
  AtomIcon,
};

type BotData = (typeof aiBots)[number];
type BotWithIcon = Omit<BotData, 'icon'> & { icon: React.ElementType };

const SCRIPT_ID = "elevenlabs-convai-script";
const AGENT_ID = "agent_7801khmjk06seegbb6msgw9b2q6d";

export function ElevenLabsWidget({
  trigger,
  bot: botWithIconName,
}: {
  trigger: ReactNode;
  bot: BotData;
}) {
  const [isOpen, setIsOpen] = useState(false);
  
  const BotIcon = iconMap[botWithIconName.icon];
  const bot: BotWithIcon = { ...botWithIconName, icon: BotIcon };

  useEffect(() => {
    if (isOpen) {
      const existingScript = document.getElementById(SCRIPT_ID);
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = SCRIPT_ID;
        script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <bot.icon className="size-6 text-primary" /> {bot.name}
          </DialogTitle>
          <DialogDescription>{bot.description}</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {isOpen && (
            // @ts-ignore
            <elevenlabs-convai agent-id={AGENT_ID}></elevenlabs-convai>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
