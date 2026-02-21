"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "./ui/skeleton";

const userButtonContent = (
  <>
    <Avatar className="size-8">
      <AvatarImage src="https://picsum.photos/seed/user/40/40" />
      <AvatarFallback>ED</AvatarFallback>
    </Avatar>
    <div className="text-left">
      <p className="text-sm font-medium">El Docente</p>
      <p className="text-xs text-muted-foreground">
        docente@ecocyberlearn.edu
      </p>
    </div>
  </>
);

export function UserButton() {
  const [isMounted, setIsMounted] = React.useState(false);
  
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex h-auto w-full items-center justify-start gap-2 p-2">
        <Skeleton className="size-8 rounded-full" />
        <div className="w-full space-y-2">
          <Skeleton className="h-4 w-[70px]" />
          <Skeleton className="h-3 w-[150px]" />
        </div>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-auto w-full items-center justify-start gap-2 p-2"
        >
          {userButtonContent}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">El Docente</p>
            <p className="text-xs leading-none text-muted-foreground">
              docente@ecocyberlearn.edu
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Perfil</DropdownMenuItem>
        <DropdownMenuItem>Ajustes</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
