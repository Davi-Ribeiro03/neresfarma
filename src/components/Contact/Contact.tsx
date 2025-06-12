import { useState } from "react";
import { openWpp } from "../../utils/openWpp";

interface IContactData {
  name: string | null;
  message: string | null;
}

const Contact = () => {
  const [contactData, setContactData] = useState<IContactData>({
    name: null,
    message: null,
  });

  return (
    <div id="contact" className="scroll-mt-24">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center lg:text-left  ">
        Entre em Contato
      </h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Seu nome"
            onChange={(e) =>
              setContactData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Digite sua mensagem aqui..."
            onChange={(e) =>
              setContactData((prev) => ({ ...prev, message: e.target.value }))
            }
          ></textarea>
        </div>
        <button
          aria-label="Enviar"
          type="button"
          className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg transition duration-300 font-medium !rounded-button whitespace-nowrap cursor-pointer disabled:opacity-70"
          onClick={() => openWpp(contactData.message ?? "")}
          disabled={!contactData.name || !contactData.message}
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default Contact;
