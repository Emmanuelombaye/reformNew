"use client";

import { useId } from "react";

export function CircleBadge({
  text = "CONTACT US * CONTACT US * CONTACT US * ",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <div className={`circle-badge ${className}`.trim()} aria-hidden>
      <svg viewBox="0 0 200 200">
        <defs>
          <path id={id} d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
        </defs>
        <text>
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
      </svg>
      <span className="circle-core" />
    </div>
  );
}
