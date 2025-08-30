import { Github } from "lucide-react";
import Link from "next/link";

import { Hint } from "@/components/hint";
import { links } from "@/config";

import { List } from "./list";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex p-3 flex-col justify-between text-white">
      <div className="flex flex-col gap-y-4">
        <List />
      </div>

      <div className="aspect-square">
        <Hint label="Source Code" side="right" align="start" sideOffset={18}>
          <Link
            href={links.sourceCode}
            target="_blank"
            rel="noreferrer noopener"
            className="size-full flex items-center justify-center rounded-md opacity-60 hover:opacity-100 transition"
          >
            <Image
              src="/github-white.png"
              alt="GitHub"
              width={24}
              height={24}
            />
          </Link>
        </Hint>
      </div>
    </aside>
  );
};
