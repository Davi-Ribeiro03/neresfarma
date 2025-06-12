const Products = () => {
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
  );
};

export default Products;
