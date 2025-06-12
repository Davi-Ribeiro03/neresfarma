const Services = () => {
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

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma variedade de serviços farmacêuticos para cuidar da
            sua saúde com qualidade e profissionalismo.
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
