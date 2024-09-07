"use client";

import { Circle, CircleCheck } from "lucide-react";
import React from "react";

function LangButton({
  play,
  title,
  onClick,
  value,
}: {
  play: string;
  title: string;
  value: string;
  onClick: () => void;
}) {
  return (
    <div
      className={`radio w-full text-sm p-3 border cursor-pointer rounded transition-all duration-500 ${
        play === value
          ? `border-primary text-primary`
          : "text-secondary-foreground border-rose-200"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-5">
        {play === value ? (
          <CircleCheck className="size-6 fill-current stroke-background" />
        ) : (
          <Circle className="size-5 stroke-primary" />
        )}
        <span className="flex flex-col">
          <h6>{title}</h6>
        </span>
      </div>
    </div>
  );
}

export default LangButton;
