"use client";

import { useEffect } from "react";

let lockCount = 0;
let savedPaddingRight = "";

function applyLock() {
  const scrollbarW =
    window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = "hidden";
  if (scrollbarW > 0) {
    savedPaddingRight = document.body.style.paddingRight;
    document.body.style.paddingRight = `${scrollbarW}px`;
  }
}

function releaseLock() {
  if (lockCount > 0) return;
  document.body.style.overflow = "";
  document.body.style.paddingRight = savedPaddingRight;
}

/** Locks document scroll while `locked` is true. Safe with multiple concurrent locks. */
export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    if (lockCount === 0) applyLock();
    lockCount += 1;

    return () => {
      lockCount = Math.max(0, lockCount - 1);
      if (lockCount === 0) releaseLock();
    };
  }, [locked]);
}
