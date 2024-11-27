import React, { useState, useRef, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "../layouts/styles.css";

// Tipos de las propiedades
interface EmergencyMenuProps {}

const EmergencyMenu: React.FC<EmergencyMenuProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Cerrar menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Añadir listener si el menú está abierto
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Limpiar listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed left-1/2 transform -translate-x-1/2 z-50"
      style={{ bottom: "90px" }}
    >
      {/* Botón principal */}
      <button
        className="bg-cyan-500 rounded-full px-4 py-2 text-white text-xs flex items-center justify-center border border-black shadow-lg space-x-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaPhoneAlt />
        <span>Números de emergencia</span>
      </button>

      {/* Lista de números de emergencia */}
      <div
        className={`
          absolute bottom-20 left-1/2 transform -translate-x-1/2 
          flex flex-col space-y-2 
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 translate-y-[-20px] invisible"
          } 
          shadow-lg
        `}
      >
        {/* Opción Policía */}
        <a
          href="tel:911"
          className={`
            bg-gradient-to-r from-blue-400 to-blue-600 
            text-white p-2 rounded-lg flex items-center 
            justify-between w-48 h-12 border border-black 
            shadow-md transition-all duration-300 
            ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[-20px]"
            }
          `}
          style={{ transitionDelay: isOpen ? "100ms" : "0ms" }}
        >
          <span className="flex-grow text-center">Policía 911</span>
          <FaPhoneAlt />
        </a>

        {/* Opción Bomberos */}
        <a
          href="tel:100"
          className={`
            bg-gradient-to-r from-red-400 to-red-600 
            text-white p-2 rounded-lg flex items-center 
            justify-between w-48 h-12 border border-black 
            shadow-md transition-all duration-300
            ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[-20px]"
            }
          `}
          style={{ transitionDelay: isOpen ? "200ms" : "0ms" }}
        >
          <span className="flex-grow text-center">Bomberos 100</span>
          <FaPhoneAlt />
        </a>

        {/* Opción SAME */}
        <a
          href="tel:107"
          className={`
            bg-gradient-to-r from-green-400 to-green-600 
            text-white p-2 rounded-lg flex items-center 
            justify-between w-48 h-12 border border-black 
            shadow-md transition-all duration-300
            ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[-20px]"
            }
          `}
          style={{ transitionDelay: isOpen ? "300ms" : "0ms" }}
        >
          <span className="flex-grow text-center">SAME 107</span>
          <FaPhoneAlt />
        </a>
      </div>
    </div>
  );
};

export default EmergencyMenu;
