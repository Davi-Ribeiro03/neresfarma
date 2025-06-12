import React, { useEffect, useMemo, useState } from "react";
import Contact from "./components/Contact";
import Logo from "../../assets/logo.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const navlinks = useMemo(
    () => [
      {
        title: "Início",
        href: "#",
      },
      {
        title: "Seriços",
        href: "#services",
      },
      {
        title: "Produtos",
        href: "#products",
      },
      {
        title: "Contato",
        href: "#contact",
      },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Contact />
      <header
        className={`bg-white shadow-md fixed  transition-all duration-200 ${
          scrolled ? "top-0" : "top-10"
        } z-50 w-full px-10 md:px-6 lg:px-20  `}
      >
        <div className="container mx-auto md:px-4 py-4 relative ">
          <div className="flex justify-between items-center ">
            <div className="flex items-center">
              <img src={Logo} alt="Neres Farma Logo" className="h-12" />
            </div>

            <nav
              className={`${
                menuActive ? "hidden" : "flex"
              }  flex-col absolute top-8 right-[-80px] bg-white text-2xl w-[80%] rounded-xl pt-4 md:flex md:static md:flex-row md:justify-end space-x-8`}
            >
              {navlinks.map(({ title, href }) => (
                <a
                  href={href}
                  className="text-blue-900 font-medium md:hover:text-blue-700 hover:bg-blue-700 hover:text-white p-6 md:p-2 rounded-xl cursor-pointer whitespace-nowrap"
                  onClick={() => setMenuActive((prev) => !prev)}
                >
                  {title}
                </a>
              ))}
            </nav>

            {/* <div className="flex items-center space-x-4"> */}
            {/* <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div> */}
            {/* <div className="relative cursor-pointer">
                <i className="fas fa-shopping-cart text-blue-900 text-xl"></i>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </div> */}
            <button
              className="md:hidden z-10"
              onClick={() => setMenuActive((prev) => !prev)}
            >
              <i className="fas fa-bars text-blue-900 text-xl"></i>
            </button>
            {/* </div> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
