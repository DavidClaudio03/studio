'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
  SidebarContent,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/lib/data';
import * as Lucide from 'lucide-react';
import { LogoIcon } from '@/components/icons/LogoIcon';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const getInitial = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('');
};

function NavItem({
  href,
  label,
  icon,
}: {
  href: string;
  label:string;
  icon: keyof typeof Lucide;
}) {
  const pathname = usePathname();
  const Icon = Lucide[icon] as Lucide.LucideIcon;
  const isActive = pathname === href;

  return (
    <SidebarMenuItem>
      <Link href={href} legacyBehavior passHref>
        <SidebarMenuButton
          isActive={isActive}
          tooltip={label}
        >
          <Icon />
          <span>{label}</span>
        </SidebarMenuButton>
      </Link>
    </SidebarMenuItem>
  );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="p-4">
          <div className="flex items-center gap-2">
            <LogoIcon className="size-8 text-primary" />
            <h1 className="text-xl font-semibold text-primary">EcoCyberLearn</h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navLinks.map((link) => (
              <NavItem key={link.href} {...link} />
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex h-auto w-full items-center justify-start gap-2 p-2"
              >
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
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b bg-background/95 px-4 md:px-6">
          <SidebarTrigger className="md:hidden" />
          <div className="flex-1">
            <h2 className="text-lg font-semibold tracking-tight">
              {navLinks.find((link) => link.href === usePathname())?.label || 'Home'}
            </h2>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
