const Advantages = () => {
  const advantages = [
    {
      id: 1,
      title: "Entrega Rápida",
      description: "Receba em até 2 horas",
      icon: "fas fa-shipping-fast",
    },
    // {
    //   id: 2,
    //   title: "Atendimento 24h",
    //   description: "Sempre disponível para você",
    //   icon: "fas fa-clock",
    // },
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
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Por que escolher a Neres Farma?
          </h2>
          <p className="max-w-2xl mx-auto text-blue-100">
            Estamos comprometidos em oferecer o melhor atendimento e produtos de
            qualidade para cuidar da sua saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="text-center">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${advantage.icon} text-3xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
              <p className="text-blue-100">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
