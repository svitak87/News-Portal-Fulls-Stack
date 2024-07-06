import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./DollarRates.css"; // Importar el archivo CSS para estilos y animaciones

const DollarRates = () => {
  const [animationPaused, setAnimationPaused] = useState(false); // Estado para controlar la pausa de la animación
  const dollarRates = useSelector((state) => state.dollarRates);
  const renderedData = dollarRates.map((item, index) => {
    return {
      key: index,
      type: item.nombre,
      buy: item.compra,
      sell: item.venta,
      date: item.fechaActualizacion.substring(0, 10).split('-').reverse().join('-')
    };
  });

  const handleContainerClick = () => {
    setAnimationPaused(!animationPaused); // Cambiar el estado de pausa de la animación al hacer clic en el contenedor
  };

  return (
    <div className={`dollar-rates-container ${animationPaused ? 'paused' : ''}`} onClick={handleContainerClick}>
      <h2 className="mt-20 font-bold text-3xl ml-10">Cotizaciones Argentina:</h2>
      <div className="stats stats-vertical lg:stats-horizontal shadow mt-6 ml-10 animate-left-to-right">
        {Array.isArray(renderedData) &&
          renderedData.map((item) => (
            <div className="stat" key={item.key}>
              <div className="stat-title"><p className="font-bold text-lime-600">{item.type}</p></div>
              <div className="stat-value text-xl">
                Compra: {item.buy} - Venta: {item.sell}
              </div>
              <div className="stat-desc">{item.date}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DollarRates;
