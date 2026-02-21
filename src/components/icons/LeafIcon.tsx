import { SVGProps } from "react";

export function LeafIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M2 12c0-5 2-9 9-9 7 0 9 4 9 9s-2 9-9 9-9-4-9-9Z" />
      <path d="M2 12h20" />
      <path d="M12 2a12.5 12.5 0 0 0-3 2.2c-1.8 1.8-3 4.2-3 6.8" />
      <path d="M12 22a12.5 12.5 0 0 1-3-2.2c-1.8-1.8-3-4.2-3-6.8" />
    </svg>
  );
}
