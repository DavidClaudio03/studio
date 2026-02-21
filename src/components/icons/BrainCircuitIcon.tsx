import { SVGProps } from "react";

export function BrainCircuitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5v.5a4.5 4.5 0 0 0-4.5 4.5v2a4.5 4.5 0 0 0 4.5 4.5h.5a4.5 4.5 0 0 0 4.5 4.5v-2.25M12 2a4.5 4.5 0 0 1 4.5 4.5v.5a4.5 4.5 0 0 1 4.5 4.5v2a4.5 4.5 0 0 1-4.5 4.5h-.5a4.5 4.5 0 0 1-4.5 4.5v-2.25" />
      <path d="M12 8.5v-1" />
      <path d="M12 16.5v-1.5" />
      <path d="M7.5 12h-1" />
      <path d="M17.5 12h-1.5" />
      <path d="m15 7-1-1" />
      <path d="m9 17-1 1" />
      <path d="m9 7 1-1" />
      <path d="m15 17 1 1" />
    </svg>
  );
}
