import React, { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Logo from "../../assets/logo.svg";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Contact />
      <header
        className={`bg-white shadow-md fixed  transition-all duration-200 ${
          scrolled ? "top-0" : "top-10"
        } z-50 w-full `}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={Logo} alt="Neres Farma Logo" className="h-12" />
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-blue-900 font-medium hover:text-blue-700 cursor-pointer whitespace-nowrap"
              >
                Início
              </a>
              <a
                href="#services"
                className="text-blue-900 font-medium hover:text-blue-700 cursor-pointer whitespace-nowrap"
              >
                Serviços
              </a>
              <a
                href="#products"
                className="text-blue-900 font-medium hover:text-blue-700 cursor-pointer whitespace-nowrap"
              >
                Produtos
              </a>
              {/* 
              <a
                href="#about"
                className="text-blue-900 font-medium hover:text-blue-700 cursor-pointer whitespace-nowrap"
              >
                Sobre Nós
              </a> */}
              <a
                href="#contact"
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
              {/* <div className="relative cursor-pointer">
                <i className="fas fa-shopping-cart text-blue-900 text-xl"></i>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </div> */}
              <button className="md:hidden">
                <i className="fas fa-bars text-blue-900 text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
