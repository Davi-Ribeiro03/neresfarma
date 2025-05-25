import React, { useState } from "react";

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const slides = [
    {
      id: 1,
      title: "Sua saúde em primeiro lugar",
      description:
        "Medicamentos, cosméticos e produtos de bem-estar com entrega rápida",
      cta: "Faça seu pedido",
      image:
        "https://readdy.ai/api/search-image?query=modern%20pharmacy%20interior%20with%20clean%20white%20shelves%20filled%20with%20medicine%20and%20health%20products%2C%20professional%20lighting%2C%20blue%20accents%2C%20high%20quality%20professional%20photography%20with%20soft%20focus%20background&width=800&height=500&seq=1&orientation=landscape",
    },
    {
      id: 2,
      title: "Atendimento especializado",
      description:
        "Conte com nossa equipe de farmacêuticos para melhor orientação",
      cta: "Conheça nossos serviços",
      image:
        "https://readdy.ai/api/search-image?query=professional%20pharmacist%20in%20white%20coat%20helping%20customer%20at%20modern%20pharmacy%20counter%2C%20blue%20accent%20lighting%2C%20clean%20modern%20interior%2C%20professional%20photography%20with%20soft%20background%20blur&width=800&height=500&seq=2&orientation=landscape",
    },
    {
      id: 3,
      title: "Ofertas especiais toda semana",
      description: "Economize em medicamentos e produtos de cuidados pessoais",
      cta: "Ver promoções",
      image:
        "https://readdy.ai/api/search-image?query=pharmacy%20products%20display%20with%20special%20offer%20tags%2C%20discount%20signs%20on%20medicine%20and%20health%20products%2C%20clean%20modern%20pharmacy%20interior%20with%20blue%20accent%20lighting%2C%20professional%20photography&width=800&height=500&seq=3&orientation=landscape",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Aplicação de Injetáveis",
      description: "Serviço realizado por profissionais qualificados",
      icon: "fas fa-syringe",
    },
    {
      id: 2,
      title: "Aferição de Pressão",
      description: "Monitoramento rápido e preciso da sua saúde",
      icon: "fas fa-heartbeat",
    },
    {
      id: 3,
      title: "Teste de Glicemia",
      description: "Resultados em poucos minutos",
      icon: "fas fa-tint",
    },
    {
      id: 4,
      title: "Entrega em Domicílio",
      description: "Receba seus medicamentos sem sair de casa",
      icon: "fas fa-truck",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Vitamina C 1000mg",
      price: "R$ 45,90",
      oldPrice: "R$ 59,90",
      discount: "23%",
      image:
        "https://readdy.ai/api/search-image?query=vitamin%20c%20supplement%20bottle%20on%20clean%20white%20background%2C%20professional%20product%20photography%20with%20soft%20shadows%2C%20high%20resolution%20detailed%20image%20of%20orange%20vitamin%20c%20tablets&width=300&height=300&seq=4&orientation=squarish",
    },
    {
      id: 2,
      name: "Protetor Solar FPS 50",
      price: "R$ 89,90",
      oldPrice: "R$ 109,90",
      discount: "18%",
      image:
        "https://readdy.ai/api/search-image?query=sunscreen%20spf%2050%20bottle%20on%20clean%20white%20background%2C%20professional%20product%20photography%20with%20soft%20shadows%2C%20high%20resolution%20detailed%20image%20of%20premium%20sunscreen%20product&width=300&height=300&seq=5&orientation=squarish",
    },
    {
      id: 3,
      name: "Termômetro Digital",
      price: "R$ 29,90",
      oldPrice: "R$ 39,90",
      discount: "25%",
      image:
        "https://readdy.ai/api/search-image?query=digital%20thermometer%20on%20clean%20white%20background%2C%20professional%20product%20photography%20with%20soft%20shadows%2C%20high%20resolution%20detailed%20image%20of%20modern%20medical%20thermometer&width=300&height=300&seq=6&orientation=squarish",
    },
    {
      id: 4,
      name: "Máscara Facial Hidratante",
      price: "R$ 19,90",
      oldPrice: "R$ 24,90",
      discount: "20%",
      image:
        "https://readdy.ai/api/search-image?query=hydrating%20face%20mask%20package%20on%20clean%20white%20background%2C%20professional%20product%20photography%20with%20soft%20shadows%2C%20high%20resolution%20detailed%20image%20of%20premium%20skincare%20product&width=300&height=300&seq=7&orientation=squarish",
    },
  ];

  const advantages = [
    {
      id: 1,
      title: "Entrega Rápida",
      description: "Receba em até 2 horas",
      icon: "fas fa-shipping-fast",
    },
    {
      id: 2,
      title: "Atendimento 24h",
      description: "Sempre disponível para você",
      icon: "fas fa-clock",
    },
    {
      id: 3,
      title: "Farmacêuticos Especializados",
      description: "Orientação profissional",
      icon: "fas fa-user-md",
    },
    {
      id: 4,
      title: "Produtos Certificados",
      description: "Qualidade garantida",
      icon: "fas fa-certificate",
    },
  ];

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <i className="fas fa-phone-alt mr-2"></i>
              <span>(11) 4321-5678</span>
            </div>
            <div className="flex items-center">
              <i className="fab fa-whatsapp mr-2"></i>
              <span>(11) 98765-4321</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-blue-200">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-blue-200">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-blue-200">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="https://readdy.ai/api/search-image?query=pharmacy%20logo%20with%20red%20cross%20and%20blue%20text%2C%20clean%20professional%20design%2C%20white%20background%2C%20vector%20style%20logo%20for%20Neres%20Farma&width=180&height=60&seq=8&orientation=landscape"
                alt="Neres Farma Logo"
                className="h-12"
              />
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-blue-900 font-medium hover:text-blue-700 cursor-pointer whitespace-nowrap"
              >
                Início
              </a>
              <a
                href="#"
                className="text-blue-900 font-medium hover:text-blue-700 cursor-pointer whitespace-nowrap"
              >
                Produtos
              </a>
              <a
                href="#"
                className="text-blue-900 font-medium hover:text-blue-700 cursor-pointer whitespace-nowrap"
              >
                Serviços
              </a>
              <a
                href="#"
                className="text-blue-900 font-medium hover:text-blue-700 cursor-pointer whitespace-nowrap"
              >
                Sobre Nós
              </a>
              <a
                href="#"
                className="text-blue-900 font-medium hover:text-blue-700 cursor-pointer whitespace-nowrap"
              >
                Contato
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              <div className="relative cursor-pointer">
                <i className="fas fa-shopping-cart text-blue-900 text-xl"></i>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </div>
              <button className="md:hidden">
                <i className="fas fa-bars text-blue-900 text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Slider */}
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

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Nossos Serviços
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Oferecemos uma variedade de serviços farmacêuticos para cuidar
                da sua saúde com qualidade e profissionalismo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-blue-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg text-center"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${service.icon} text-blue-900 text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="text-blue-700 font-medium hover:text-blue-900 flex items-center justify-center mx-auto !rounded-button whitespace-nowrap cursor-pointer">
                    Saiba mais{" "}
                    <i className="fas fa-chevron-right ml-2 text-sm"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12 flex-col lg:flex-row">
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-blue-900 mb-2 text-center">
                  Produtos em Destaque
                </h2>
                <p className="text-gray-600 text-center">
                  Confira nossas ofertas especiais e produtos mais vendidos
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                  Medicamentos
                </button>
                <button className="px-4 py-2 border border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                  Cosméticos
                </button>
                <button className="px-4 py-2 border border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                  Higiene
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      -{product.discount}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-4">
                      <span className="text-gray-400 line-through text-sm mr-2">
                        {product.oldPrice}
                      </span>
                      <span className="text-blue-900 font-bold text-xl">
                        {product.price}
                      </span>
                    </div>
                    <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-full transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <button className="px-8 py-3 border-2 border-blue-900 text-blue-900 font-medium rounded-full hover:bg-blue-900 hover:text-white transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                Ver todos os produtos
              </button>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Por que escolher a Neres Farma?
              </h2>
              <p className="max-w-2xl mx-auto text-blue-100">
                Estamos comprometidos em oferecer o melhor atendimento e
                produtos de qualidade para cuidar da sua saúde.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage) => (
                <div key={advantage.id} className="text-center">
                  <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${advantage.icon} text-3xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-blue-100">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location and Contact */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Nossa Localização
                </h2>
                <div className="bg-gray-200 rounded-lg h-[400px] flex items-center justify-center mb-6">
                  <div className="text-center">
                    <i className="fas fa-map-marker-alt text-4xl text-blue-900 mb-4"></i>
                    <p className="text-gray-600">
                      Mapa interativo será carregado aqui
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-blue-900"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Endereço
                      </h3>
                      <p className="text-gray-600">
                        Av. Principal, 1234
                        <br />
                        Centro, São Paulo - SP
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-clock text-blue-900"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Horário de Funcionamento
                      </h3>
                      <p className="text-gray-600">
                        Segunda a Sábado: 8h às 22h
                        <br />
                        Domingo: 9h às 18h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
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
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 mb-2"
                    >
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-2"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Digite sua mensagem aqui..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg transition duration-300 font-medium !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <img
                src="https://readdy.ai/api/search-image?query=pharmacy%20logo%20with%20red%20cross%20and%20blue%20text%20on%20dark%20background%2C%20clean%20professional%20design%20for%20Neres%20Farma%20with%20white%20text&width=180&height=60&seq=9&orientation=landscape"
                alt="Neres Farma Logo"
                className="h-10 mb-6"
              />
              <p className="text-gray-400 mb-6">
                Sua farmácia de confiança há mais de 15 anos, oferecendo
                produtos de qualidade e atendimento especializado.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-900 hover:bg-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 cursor-pointer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="bg-blue-900 hover:bg-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 cursor-pointer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="bg-blue-900 hover:bg-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 cursor-pointer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="bg-blue-900 hover:bg-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 cursor-pointer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Produtos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Categorias</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Medicamentos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Dermocosméticos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Higiene Pessoal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Suplementos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Ortopédicos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                  >
                    Infantil
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-500"></i>
                  <span className="text-gray-400">
                    Av. Principal, 1234
                    <br />
                    Centro, São Paulo - SP
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone-alt mr-3 text-blue-500"></i>
                  <span className="text-gray-400">(11) 4321-5678</span>
                </li>
                <li className="flex items-center">
                  <i className="fab fa-whatsapp mr-3 text-blue-500"></i>
                  <span className="text-gray-400">(11) 98765-4321</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-blue-500"></i>
                  <span className="text-gray-400">
                    contato@neresfarma.com.br
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © 2025 Neres Farma. Todos os direitos reservados.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-500 hover:text-white text-sm cursor-pointer"
                >
                  Política de Privacidade
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white text-sm cursor-pointer"
                >
                  Termos de Uso
                </a>
                <div className="flex items-center space-x-2">
                  <i className="fab fa-cc-visa text-xl text-gray-500"></i>
                  <i className="fab fa-cc-mastercard text-xl text-gray-500"></i>
                  <i className="fab fa-cc-amex text-xl text-gray-500"></i>
                  <i className="fab fa-pix text-xl text-gray-500"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#"
          className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition duration-300 cursor-pointer"
        >
          <i className="fab fa-whatsapp text-3xl"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
