"use client";

import { useState } from "react";
import { PlayIcon } from "./Icons";

export function VideoButton({ className = "play" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className={className} aria-label="Play video" onClick={() => setOpen(true)}>
        <PlayIcon />
      </button>
      {open ? (
        <div className="modal" onClick={() => setOpen(false)}>
          <iframe
            src="https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1"
            title="Healthio story"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      ) : null}
    </>
  );
}
