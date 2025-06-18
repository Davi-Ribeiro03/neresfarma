import { telephone, wpp } from "../../../Constants";
import { openWpp } from "../../../utils/openWpp";

const Contact = () => {
  return (
    <div className="bg-blue-900 text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center ">
            <i className="fas fa-phone-alt mr-2"></i>
            <span>{telephone}</span>
          </div>
          <div className="flex items-center">
            <i className="fab fa-whatsapp mr-2"></i>
            <span>{wpp}</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* <a href="#" className="hover:text-blue-200">
            <i className="fab fa-facebook-f"></i>
          </a> */}
          <a
            href="https://www.instagram.com/neresfarmaoficial/"
            target="_blank"
            className="hover:text-blue-200"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            onClick={() => openWpp()}
            className="hover:text-blue-200 cursor-pointer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
