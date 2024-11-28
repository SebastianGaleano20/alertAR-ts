import React, { useState } from "react";

const AlertButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isScreenRed, setScreenRed] = useState(false);
  const [isShaking, setShaking] = useState(false);

  const handleButtonClick = (): void => {
    setScreenRed(true);
    const audio = new Audio("/assets/audio/siren.mp3");
    audio.play();
    setTimeout(() => {
      setModalOpen(true);
    }, 200);
  };

  const closeModal = (): void => {
    setModalOpen(false);
    setScreenRed(false);
  };

  return (
    <>
      {/* Botón de alerta */}
      <button
        id="alertButton"
        className={`flex flex-col items-center justify-center bg-red-500 text-white w-full h-40 md:h-64 rounded-full shadow-lg transition-all duration-200 hover:shadow-2xl ${
          isShaking ? "animate-shake" : ""
        }`}
        onMouseEnter={() => setShaking(true)}
        onMouseLeave={() => setShaking(false)}
        onClick={handleButtonClick}
      >
        <img
          className="w-16 h-16 md:w-20 md:h-20"
          src="../assets/icons/alarm-icon.webp"
          alt="logo Alerta"
        />
        <span className="mt-2 md:mt-4">Alertar</span>
      </button>

      {/* Modal del formulario de alerta */}
      {isModalOpen && (
        <section
          id="alertModal"
          className={`fixed inset-0 flex items-center justify-center transition-all duration-300 ${
            isScreenRed
              ? "bg-red-500 bg-opacity-50"
              : "bg-gray-900 bg-opacity-50 dark:bg-opacity-70"
          }`}
        >
          <article
            id="alertModalContent"
            className="bg-white dark:bg-gray-800 dark:text-white p-6 md:p-10 rounded-lg shadow-2xl w-full max-w-md relative transition-transform duration-300 transform scale-100 opacity-100 z-9999"
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
              id="closeAlertModalBtn"
              type="button"
              aria-label="Cerrar modal"
              onClick={closeModal}
            >
              Cerrar
            </button>
            <header>
              <h2 className="text-center text-2xl mb-4">Generar Alerta</h2>
            </header>
            <form action="/alert" method="post">
              <div className="mb-4">
                <label htmlFor="incident" className="sr-only">
                  Descripción del Incidente
                </label>
                <textarea
                  id="incident"
                  name="incident"
                  placeholder="Descripción del incidente"
                  className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="location" className="sr-only">
                  Ubicación
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Ubicación"
                  className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              >
                Enviar Alerta
              </button>
            </form>
          </article>
        </section>
      )}

      {/* Estilos para la animación de temblor */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          50% { transform: translateX(8px); }
          75% { transform: translateX(-8px); }
        }
        .animate-shake {
          animation: shake 0.2s infinite;
        }
      `}</style>
    </>
  );
};

export default AlertButton;
