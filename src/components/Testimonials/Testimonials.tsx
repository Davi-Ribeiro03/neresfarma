const Testimonials = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
          O que nossos clientes dizem
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md text-left">
            <p className="text-gray-800 italic mb-4">
              "Fui super bem atendida! A equipe é atenciosa e me explicaram tudo
              com calma. Recomendo demais."
            </p>
            <p className="text-blue-900 font-semibold">– Ana Clara</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-left">
            <p className="text-gray-800 italic mb-4">
              "A farmácia é linda, organizada e os preços são ótimos. Dá gosto
              de comprar aqui."
            </p>
            <p className="text-blue-900 font-semibold">– João Pedro</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-left">
            <p className="text-gray-800 italic mb-4">
              "Quando precisei de orientação sobre um medicamento, me ajudaram
              com muita paciência. Nota 10!"
            </p>
            <p className="text-blue-900 font-semibold">– Beatriz Silva</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
