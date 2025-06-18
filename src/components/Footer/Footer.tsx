import { address, email, telephone, wpp } from "../../Constants";
import Logo from "../../assets/logo.svg";
import { openWpp } from "../../utils/openWpp";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="col-span-2">
            <img src={Logo} alt="Neres Farma Logo" className="h-10 mb-6" />
            <p className="text-gray-400 mb-6">
              Sua farmácia de confiança, com produtos de qualidade e atendimento
              especializado.
            </p>
            <div className="flex space-x-4">
              <a
                onClick={() => openWpp()}
                className="bg-blue-900 hover:bg-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 cursor-pointer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://www.instagram.com/neresfarmaoficial/"
                target="_blank"
                className="bg-blue-900 hover:bg-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 cursor-pointer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-500"></i>
                <span className="text-gray-400">{address}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-blue-500"></i>
                <span className="text-gray-400">{telephone}</span>
              </li>
              <li className="flex items-center">
                <i className="fab fa-whatsapp mr-3 text-blue-500"></i>
                <span className="text-gray-400">{wpp}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-blue-500"></i>
                <span className="text-gray-400">{email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 Neres Farma. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
