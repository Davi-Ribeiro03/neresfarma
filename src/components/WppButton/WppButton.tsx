import { wpp } from "../../Constants";

const WppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={`https://api.whatsapp.com/send/?phone=${
          "55" + wpp.replace("/D/g", "")
        }5585981721495`}
        className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition duration-300 cursor-pointer"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>
    </div>
  );
};

export default WppButton;
