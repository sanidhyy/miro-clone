"use client";

import { useOrganization } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";

export const EmptyBoards = () => {
  const create = useMutation(api.board.create);
  const { organization } = useOrganization();

  const onClick = () => {
    if (!organization) return;

    create({
      orgId: organization.id,
      title: "Untitled",
    });
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/empty-boards.svg" alt="Empty" height={110} width={110} />
      <h2 className="text-2xl font-semibold mt-6">Create your first board.</h2>

      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization.
      </p>

      <div className="mt-6">
        <Button onClick={onClick} size="lg">
          Create board
        </Button>
      </div>
    </div>
  );
};
