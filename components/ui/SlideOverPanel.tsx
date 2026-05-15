"use client";

import { type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "@/lib/icons";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { cn } from "@/lib/utils";

interface SlideOverPanelProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  closeLabel?: string;
  className?: string;
  size?: "sm" | "lg";
}

function PanelContent({
  onClose,
  closeLabel,
  children,
  className,
  size,
}: Omit<SlideOverPanelProps, "open">) {
  return (
    <>
      <motion.button
        type="button"
        aria-label="Close panel backdrop"
        className="fixed inset-0 z-40 bg-black/55 backdrop-blur-[2px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.aside
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed z-50 flex flex-col bg-surface-dark text-white shadow-2xl",
          "inset-x-3 bottom-3 top-3 max-h-[calc(100dvh-1.5rem)] rounded-panel sm:inset-y-4 sm:right-4 sm:left-auto sm:bottom-auto sm:max-h-[calc(100dvh-2rem)]",
          size === "sm" ? "sm:w-full sm:max-w-md" : "sm:w-full sm:max-w-lg",
          className,
        )}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 32 }}
        transition={{ type: "spring", damping: 30, stiffness: 280 }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute left-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-md transition-transform duration-200 hover:scale-105 active:scale-95"
          aria-label={closeLabel}
        >
          <Icons.close className="h-4 w-4" />
        </button>
        {children}
      </motion.aside>
    </>
  );
}

export function SlideOverPanel({
  open,
  onClose,
  children,
  closeLabel = "Close",
  className,
  size = "lg",
}: SlideOverPanelProps) {
  useBodyScrollLock(open);

  return (
    <AnimatePresence>
      {open ? (
        <PanelContent
          onClose={onClose}
          closeLabel={closeLabel}
          className={className}
          size={size}
        >
          {children}
        </PanelContent>
      ) : null}
    </AnimatePresence>
  );
}
