"use client";

import { useMemo } from "react";

export function useSignalAnimation(progress: number, stepsCount: number) {
  return useMemo(() => {
    if (stepsCount <= 1) {
      return { connectorIndex: 0, connectorProgress: 0, overallProgress: 0 };
    }

    const clamped = Math.max(0, Math.min(1, progress));
    const scaled = clamped * (stepsCount - 1);
    const connectorIndex = Math.min(stepsCount - 2, Math.floor(scaled));
    const connectorProgress = scaled - connectorIndex;

    return {
      connectorIndex,
      connectorProgress,
      overallProgress: clamped,
    };
  }, [progress, stepsCount]);
}
