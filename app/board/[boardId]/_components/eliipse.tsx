import React from "react";

import { colorToCSS } from "@/lib/utils";
import type { EllipseLayer } from "@/types/canvas";

type EllipseProps = {
  id: string;
  layer: EllipseLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
};

export const Ellipse = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: EllipseProps) => {
  return (
    <ellipse
      className="drop-shadow-md"
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        transform: `translate(${layer.x}px, ${layer.y}px)`,
      }}
      cx={layer.width / 2}
      cy={layer.height / 2}
      rx={layer.width / 2}
      ry={layer.height / 2}
      fill={layer.fill ? colorToCSS(layer.fill) : "#000"}
      stroke={selectionColor || "transparent"}
      strokeWidth={1}
    />
  );
};
