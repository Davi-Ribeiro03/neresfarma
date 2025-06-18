import { useMemo } from "react";
import { openWpp } from "../../utils/openWpp";
import { motion } from "motion/react";
import Miosan from "../../assets/miosan.png";
import Belfaren from "../../assets/belfaren.png";
import Sabonete from "../../assets/sabonete.png";
import Cloreto from "../../assets/cloreto-magnesio.png";

const Products = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Belfaren",
      price: "R$ 45,90",
      oldPrice: "R$ 59,90",
      discount: "23%",
      image: Belfaren,
    },
    {
      id: 2,
      name: "Cloreto de Magnésio",
      price: "R$ 89,90",
      oldPrice: "R$ 109,90",
      discount: "18%",
      image: Cloreto,
    },
    {
      id: 3,
      name: "Miosan",
      price: "R$ 29,90",
      oldPrice: "R$ 39,90",
      discount: "25%",
      image: Miosan,
    },
    {
      id: 4,
      name: "Sabonete",
      price: "R$ 19,90",
      oldPrice: "R$ 24,90",
      discount: "20%",
      image: Sabonete,
    },
  ];

  const seeAllProductsMessage = useMemo(
    () => "Olá, gostaria de olhar os produtos da loja!",
    []
  );

  const productMessage = (name: string) => {
    return "Olá, gostaria de comprar um(a) " + name;
  };

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12 flex-col ">
          <div className="mb-4">
            <h2 className="text-3xl font-bold text-blue-900 mb-2 text-center">
              Produtos em Destaque
            </h2>
            <p className="text-gray-600 text-center">
              Confira nossas ofertas especiais e produtos mais vendidos
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 * index }}
              viewport={{ once: true }}
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative flex items-center justify-center w-full h-auto rounded-lg bg-gradient-to-br from-white to-gray-200 shadow-[40px_40px_60px_-20px_rgba(0,0,0,0.1)]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain transition-all hover:scale-110 cursor-pointer"
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
                <button
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-full transition duration-300 !rounded-button whitespace-nowrap cursor-pointer"
                  onClick={() => openWpp(productMessage(product.name))}
                >
                  Comprar
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            className="px-8 py-3 border-2 border-blue-900 text-blue-900 font-medium rounded-full hover:bg-blue-900 hover:text-white transition duration-300 !rounded-button whitespace-nowrap cursor-pointer"
            onClick={() => openWpp(seeAllProductsMessage)}
          >
            Ver todos os produtos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
