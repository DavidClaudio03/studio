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
import { navLinks } from '@/lib/data';
import * as Lucide from 'lucide-react';
import { LogoIcon } from '@/components/icons/LogoIcon';
import { UserButton } from '@/components/user-button';

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
      <Link href={href}>
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
  const pathname = usePathname();

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
          <UserButton />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b bg-background/95 px-4 md:px-6">
          <SidebarTrigger className="md:hidden" />
          <div className="flex-1">
            <h2 className="text-lg font-semibold tracking-tight">
              {navLinks.find((link) => link.href === pathname)?.label || 'Home'}
            </h2>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
