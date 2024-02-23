"use client";
import chuva from "./img/chuva.png";
import { useState, useEffect } from "react";

const tempo = () => {
  const [weatherData, setWeatherData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const response = await 
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=38134f9f8954d078682e7d6e5fa50a7b"
      );
      const data = await response.json();
      setWeatherData({
        temp: data.main.temp - 273.15, 
        humidity: data.main.humidity,
      });
    };

    fetchData();
  }, []);


  return (
      <section class="tempo" className="bg-vermelho font-lexend w-full text-branco">
    { weatherData &&(
        <div className="bg-vermelho h-[550px]">
          <div className="h-[550px] flex flex-col items-center py-16 gap-y-6">
           
              <div className="space-y-4 flex flex-col items-center">
                <div className="text-[30px]">Agora</div>
                <div className="text-[80px]">{weatherData.temp.toFixed(1)}°C</div>
                <div className="text-[25px]">Amsterdam</div>
              </div>
            
            <div className="w-64 rounded h-1 bg-preto"></div>
  
            <div className="space-y-3 flex flex-col items-center">
              <div className="flex flex-row gap-x-4 items-center">
                <div className="w-10"><img src={chuva.src} alt="icone de chuva" /></div>
                <div className="text-[35px]">Umidade</div>
              </div>
              <div className="text-[40px]">{weatherData.humidity}%</div>
            </div>
          </div>
        </div>
    )}  
      </section>
  );
};

export default tempo;
