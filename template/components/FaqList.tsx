"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export function FaqList() {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {faqs.map((item, i) => (
        <div className={open === i ? "faq-item open" : "faq-item"} key={item.q}>
          <button onClick={() => setOpen(open === i ? -1 : i)}>
            {item.q}
            <span>{open === i ? "−" : "+"}</span>
          </button>
          <p>{item.a}</p>
        </div>
      ))}
    </div>
  );
}
