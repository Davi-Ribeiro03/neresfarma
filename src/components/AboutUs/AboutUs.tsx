const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20" id="aboutUs">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">
        Sobre Nós
      </h2>
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center lg:flex-row justify-center bg-blue-50 p-10 rounded-2xl">
        <img
          src="https://ascoferj.com.br/wp-content/uploads/2023/12/Works-Ascoferj-20.jpg"
          alt="Equipe da farmácia"
          className="mx-auto w-[100%] max-w-md "
        />
        <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto w-full p-4 md:p-10 text-justify">
          Na Neres Farma, cuidamos da sua saúde com carinho e atenção. Somos uma
          farmácia comprometida em oferecer qualidade, confiança e um
          atendimento humanizado para toda a sua família. Nossa missão é estar
          sempre ao seu lado, promovendo bem-estar e acessibilidade para todos.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
