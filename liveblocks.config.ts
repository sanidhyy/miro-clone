import type { LiveList, LiveMap, LiveObject } from "@liveblocks/client";

import type { Color, Layer } from "@/types/canvas";

declare global {
  interface Liveblocks {
    Presence: {
      cursor: { x: number; y: number } | null;
      selection: string[];
      pencilDraft: [x: number, y: number, pressure: number][] | null;
      penColor: Color | null;
    };

    Storage: {
      layers: LiveMap<string, LiveObject<Layer>>;
      layerIds: LiveList<string>;
    };

    UserMeta: {
      id?: string;
      info?: {
        name?: string;
        picture?: string;
      };
    };
  }
}

export * from "@liveblocks/react/suspense";
