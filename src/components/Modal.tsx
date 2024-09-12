import React, { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isVisible && isOpen ? "opacity-100" : "opacity-0"}`}
    >
      <div
        className={`relative w-11/12 max-w-md p-6 bg-white rounded-md shadow-lg transform transition-transform duration-300 ${isVisible && isOpen ? "scale-100" : "scale-0"}`}
      >
        <button
          className="absolute top-2 right-2 text-bodydark duration-200 hover:text-bodydark2"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;