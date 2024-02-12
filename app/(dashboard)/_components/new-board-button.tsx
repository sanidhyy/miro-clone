"use client";

import { Plus } from "lucide-react";
import { toast } from "sonner";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";

type NewBoardButtonProps = {
  orgId: string;
  disabled?: boolean;
};

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created.");
        // TODO: Redirect to /board/{id}
      })
      .catch(() => toast.error("Failed to create board."));
  };

  return (
    <button
      disabled={pending || disabled}
      aria-disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 hover:bg-blue-800 rounded-lg flex flex-col items-center justify-center py-6",
        (pending || disabled) && "opacity-75"
      )}
    >
      <div aria-hidden />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">New board</p>
    </button>
  );
};
