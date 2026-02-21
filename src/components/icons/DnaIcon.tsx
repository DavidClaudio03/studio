import { SVGProps } from "react";

export function DnaIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M4 4c0 4.418 3.582 8 8 8s8-3.582 8-8" />
      <path d="M20 20c0-4.418-3.582-8-8-8s-8 3.582-8 8" />
      <path d="M12 4v16" />
      <path d="M9 7h6" />
      <path d="M9 17h6" />
      <path d="M8 12h8" />
    </svg>
  );
}
