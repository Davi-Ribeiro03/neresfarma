import React, { useCallback, useState } from "react";
import Map from "./Components/Map";

const Location = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center lg:text-left">
        Nossa Localização
      </h2>
      <div className="bg-gray-200 rounded-lg h-[400px] flex items-center justify-center mb-6">
        <div className="text-center w-full">
          <Map />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start">
          <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <i className="fas fa-map-marker-alt text-blue-900"></i>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Endereço</h3>
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
  );
};

export default Location;
