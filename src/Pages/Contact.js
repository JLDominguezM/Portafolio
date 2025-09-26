import React from "react";

function Contact() {
  const formspreeUrl = process.env.REACT_APP_FORMSPREE_URL;
  return (
    <main className="container mx-auto max-width section">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Contact
      </h1>

      <div className="mt-10 p-8 max-w-4xl mx-auto bg-white dark:bg-dark-card rounded-lg shadow-lg">
        <form 
          action= {formspreeUrl}
          method="POST"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Campo de Nombre */}
            <div>
              <label htmlFor="name" className="block mb-2 text-lg text-dark-heading dark:text-light-heading">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full p-3 bg-gray-100 dark:bg-dark-content rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Name"
              />
            </div>

            {/* Campo de Email */}
            <div>
              <label htmlFor="email" className="block mb-2 text-lg text-dark-heading dark:text-light-heading">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full p-3 bg-gray-100 dark:bg-dark-content rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Email"
              />
            </div>
          </div>

          {/* Campo de Mensaje */}
          <div className="mt-6">
            <label htmlFor="message" className="block mb-2 text-lg text-dark-heading dark:text-light-heading">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="6"
              className="w-full p-3 bg-gray-100 dark:bg-dark-content rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Message"
            ></textarea>
          </div>

          {/* Botón de Enviar */}
          <div className="text-right mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Contact;