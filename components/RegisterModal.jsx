"use client";

import { useEffect, ReactNode } from "react";
import { X } from "lucide-react";

/**
 * @typedef {Object} RegisterModalProps
 * @property {boolean} open
 * @property {() => void} onClose
 * @property {string} [title]
 * @property {ReactNode} children
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

    const handleKeyDown = (/** @type {KeyboardEvent} */ event) => {
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
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Cerrar modal"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4 sm:px-6">
          <div>
            <h3 className="text-lg font-bold text-neutral-900 sm:text-xl">
              {title}
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Regístrate y asegura tu acceso a la clase
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition hover:bg-neutral-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[85vh] overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
          {children}
        </div>
      </div>
    </div>
  );
}