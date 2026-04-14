"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { pageview } from "@/lib/meta-pixel";

export default function MetaPixelPageView() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!pathname) return;

    // Evita duplicar el PageView inicial,
    // porque ya se manda en MetaPixelScript
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    pageview();
  }, [pathname]);

  return null;
}