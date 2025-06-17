import { useEffect, useMemo, useState } from "react";
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
        title: "Sobre nós",
        href: "#aboutUs",
      },
      {
        title: "Serviços",
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
                menuActive ? "flex" : "hidden"
              }  flex-col absolute top-8 right-[-80px] bg-white  w-[80%] sm:w-[60%] rounded-xl pt-4 md:flex md:static md:flex-row md:justify-end space-x-8`}
            >
              {navlinks.map(({ title, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-blue-900 font-medium  md:hover:text-blue-700  hover:text-white p-6 md:p-2 rounded-xl cursor-pointer whitespace-nowrap"
                  onClick={() => setMenuActive((prev) => !prev)}
                >
                  {title}
                </a>
              ))}
            </nav>

            <button
              className=" md:hidden z-10"
              onClick={() => setMenuActive((prev) => !prev)}
            >
              <i className="fas fa-bars text-blue-900 text-xl"></i>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
