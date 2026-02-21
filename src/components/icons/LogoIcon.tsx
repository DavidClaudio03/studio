import { cn } from "@/lib/utils";
import { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 12c0-5 2-9 9-9 7 0 9 4 9 9s-2 9-9 9-9-4-9-9Z" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M5 12H2" />
      <path d="M7 12h2" />
      <path d="M15 12h2" />
      <path d="M12 15a3 3 0 0 0 3-3H9a3 3 0 0 0 3 3Z" />
      <path d="M12 9a3 3 0 0 1-3 3h6a3 3 0 0 1-3-3Z" />
    </svg>
  );
}
