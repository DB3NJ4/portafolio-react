import { useState } from "react";

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Botón de abrir modal */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={openModal}
          className="relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#007bff_0%,#00d4ff_50%,#00ffab_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
            Contáctame
          </span>
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 rounded-lg p-4 w-full max-w-lg relative"
          >
            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Contenido */}
            <div className="container px-4 py-4 mx-auto max-h-[90vh] overflow-y-auto">
              <div>
                <p className="font-medium text-blue-500 dark:text-blue-400">Contáctanos</p>
                <h1 className="mt-2 text-xl font-semibold text-gray-800 md:text-2xl dark:text-white">
                  Formulario de Contacto
                </h1>
                <p className="mt-3 text-gray-500 dark:text-gray-400">
                  Si necesitas contactarme, llena este formulario o envíame un correo.
                </p>
                <p className="mt-3 text-gray-500 dark:text-gray-400">
                  Correo Electrónico: benjalop24@gmail.com
                </p>
              </div>

              {/* Formulario */}
              <div className="mt-6">
                <form>
                  <div className="-mx-2 md:items-center md:flex">
                    <div className="flex-1 px-2">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Nombre</label>
                      <input
                        type="text"
                        placeholder="John"
                        className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div className="flex-1 px-2 mt-4 md:mt-0">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Apellido</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Correo Electrónico</label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Mensaje</label>
                    <textarea
                      className="block w-full h-24 px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Mensaje"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
