import React, { useEffect, useState } from "react";

const Weatherdate = () => {
  const API_KEY = "362c159b4a2f0ecf29d38785457dcba1";
  const [temperatures, setTemperatures] = useState({
    buenosAires: null,
    bogota: null,
    newYork: null,
    jerusalem: null,
  });

  useEffect(() => {
    const cities = [
      { city: "Buenos%20Aires", country: "ar", key: "buenosAires" },
      { city: "Bogota", country: "co", key: "bogota" },
      { city: "New%20York", country: "us", key: "newYork" },
      { city: "Jerusalem", country: "il", key: "jerusalem" },
    ];

    const getWeather = async (city, country, key) => {
      try {
        const response = await fetch(
          // `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data && data.main && data.main.temp) {
          // Temperatura en grados Kelvin, convirtiéndola a grados Celsius
          const temperatureKelvin = data.main.temp;
          const temperatureCelsius = temperatureKelvin - 273.15;
          const tempGrados = temperatureCelsius.toFixed(0);

          setTemperatures((prevTemperatures) => ({
            ...prevTemperatures,
            [key]: tempGrados,
          }));
        }
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    cities.forEach(({ city, country, key }) => {
      getWeather(city, country, key);
    });
  }, []);

  return (
    <div className="mt-20 text-center ml-40">
      <h2 className="text-2xl font-extrabold mb-4">Estado del tiempo</h2>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
        <ul className="space-y-8">
          <li className="text-center">
            <div className="text-2xl font-light">Buenos Aires</div>
            <div className="text-4xl font-extrabold">
              {temperatures.buenosAires} °C
            </div>
          </li>
          <li className="text-center">
            <div className="text-2xl font-light">Bogotá</div>
            <div className="text-4xl font-extrabold">
              {temperatures.bogota} °C
            </div>
          </li>
          <li className="text-center">
            <div className="text-2xl font-light">New York</div>
            <div className="text-4xl font-extrabold">
              {temperatures.newYork} °C
            </div>
          </li>
          <li className="text-center">
            <div className="text-2xl font-light">Jerusalén</div>
            <div className="text-4xl font-extrabold">
              {temperatures.jerusalem} °C
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Weatherdate;
