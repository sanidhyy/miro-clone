"use client";

import { memo } from "react";

import { useSelectionBounds } from "@/hooks/use-selection-bounds";
import { useSelf } from "@/liveblocks.config";
import type { Camera, Color } from "@/types/canvas";

import { ColorPicker } from "./color-picker";

type SelectionToolsProps = {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
};

export const SelectionTools = memo(
  ({ camera, setLastUsedColor }: SelectionToolsProps) => {
    const selection = useSelf((me) => me.presence.selection);

    const selectionBounds = useSelectionBounds();

    if (!selectionBounds) return null;

    const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
    const y = selectionBounds.y + camera.y;

    return (
      <div
        className="absolute p-3 rounded-xl bg-white shadow-sm border flex select-none"
        style={{
          transform: `translate(
            calc(${x}px - 50%),
            calc(${y - 16}px - 100%)
        )`,
        }}
      >
        <ColorPicker onChange={() => {}} />
      </div>
    );
  }
);

SelectionTools.displayName = "SelectionTools";
