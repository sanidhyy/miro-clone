"use client";

import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";

import { Hint } from "@/components/hint";
import { cn } from "@/lib/utils";

type ItemProps = {
  id: string;
  name: string;
  imageUrl: string;
};

export const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;

    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative">
      <Hint label={name} side="right" align="start" sideOffset={18}>
        <Image
          src={imageUrl}
          alt={name}
          onClick={onClick}
          className={cn(
            "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
            isActive && "opacity-100",
          )}
          fill
        />
      </Hint>
    </div>
  );
};
