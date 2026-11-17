"use client";

import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { boot, type Motion, type Skin } from "@/lib/siteMotion";

type Props = {
  skin?: Skin | string;
  motion?: Motion;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/** Page root: applies the colour skin and runs the shared motion engine on its subtree. */
export default function MotionRoot({ skin = "Indigo sky", motion = "Full", className, style, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Layout effect: set up reveal states before the browser paints the new page.
  useLayoutEffect(() => {
    if (!ref.current) return;
    const handle = boot(ref.current, { skin: skin as Skin, motion });
    return () => handle.stop();
  }, [skin, motion]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
