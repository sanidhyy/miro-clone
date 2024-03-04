"use client";

import { ClientSideSuspense } from "@liveblocks/react";
import type { ReactNode } from "react";

import { RoomProvider } from "@/liveblocks.config";

type RoomProps = {
  children: React.ReactNode;
  roomId: string;
  fallback: NonNullable<ReactNode> | null;
};

export const Room = ({ children, roomId, fallback }: RoomProps) => {
  return (
    <RoomProvider id={roomId} initialPresence={{}}>
      <ClientSideSuspense fallback={fallback}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};
