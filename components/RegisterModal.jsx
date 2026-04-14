"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

/**
 * @typedef {Object} RegisterModalProps
 * @property {boolean} open
 * @property {() => void} onClose
 * @property {string} [title]
 * @property {import("react").ReactNode} children
 */

/**
 * @param {RegisterModalProps} props
 */
export default function RegisterModal({
  open,
  onClose,
  title = "Reserva tu lugar gratis",
  children,
}) {
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999]">
      {/* overlay */}
      <button
        type="button"
        aria-label="Cerrar modal"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* wrapper */}
      <div className="relative z-10 flex min-h-full items-end justify-center p-3 sm:items-center sm:p-4">
        <div className="flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:max-h-[88vh] sm:rounded-3xl">
          {/* header */}
          <div className="flex items-start justify-between gap-3 border-b border-neutral-200 px-4 py-4 sm:px-6">
            <div className="min-w-0">
              <h3 className="text-base font-bold leading-tight text-neutral-900 sm:text-xl">
                {title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500 sm:text-sm">
                Regístrate y asegura tu acceso a la clase
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar modal"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition hover:bg-neutral-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* body */}
          <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}