import { openWpp } from "../../utils/openWpp";

const WppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => openWpp()}
        className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition duration-300 cursor-pointer"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
      </button>
    </div>
  );
};

export default WppButton;
