"use client";

import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
}

const Popup = ({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
}: PopupProps) => {
  const popupRef = useRef<HTMLDivElement>(null);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
      <div
        ref={popupRef}
        className="bg-white shadow-lg p-4 md:p-6 relative max-w-3xl w-full max-h-[60vh] overflow-auto"
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-1 right-1 cursor-pointer"
          >
            <svg
              className="size-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                stroke="#000000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        {title && (
          <h2 className="text-lg font-semibold mb-4 text-center">{title}</h2>
        )}

        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Popup;
