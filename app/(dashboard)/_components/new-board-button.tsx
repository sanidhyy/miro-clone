"use client";

import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

type NewBoardButtonProps = {
  orgId: string;
  disabled?: boolean;
};

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  return (
    <button
      disabled={disabled}
      aria-disabled={disabled}
      onClick={() => {}}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 hover:bg-blue-800 rounded-lg flex flex-col items-center justify-center py-6",
        disabled && "opacity-75"
      )}
    >
      <div aria-hidden />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">New board</p>
    </button>
  );
};
