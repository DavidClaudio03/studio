import type { LucideIcon } from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
  icon: keyof typeof import("lucide-react").icons;
};
