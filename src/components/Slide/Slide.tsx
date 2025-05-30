import { useEffect, useState } from "react";
import Slide1 from "../../assets/slide1.png";

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Sua saúde em primeiro lugar",
      description:
        "Medicamentos, cosméticos e produtos de bem-estar com entrega rápida",
      cta: "Faça seu pedido",
      image: Slide1,
    },
    {
      id: 2,
      title: "Atendimento especializado",
      description:
        "Conte com nossa equipe de farmacêuticos para melhor orientação",
      cta: "Conheça nossos serviços",
      image: Slide1,
    },
    {
      id: 3,
      title: "Ofertas especiais toda semana",
      description: "Economize em medicamentos e produtos de cuidados pessoais",
      cta: "Ver promoções",
      image: Slide1,
    },
  ];

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === slides.length - 1) {
          return 0;
        }
        return prev + 1;
      });
      //   if (currentSlide === slides.length - 2) {
      //     console.log("Entrou aqui");

      //     return setCurrentSlide(0);
      //   }
      //   return setCurrentSlide((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  //   console.log(currentSlide);

  return (
    <section className="relative h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-lg text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl mb-8">{slides[currentSlide].description}</p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
            {slides[currentSlide].cta}
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Slide;
