"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import homeImage from "./img/home.jpg";
import chuva from "./img/chuva.png";
import wpp from "./img/whats.png";
import email from "./img/email.png";
import logo from "./img/byronbranco.png";
import heineken1 from "./img/heineken1.jpg";
import heineken2 from "./img/heineken2.png";
import heineken3 from "./img/heineken3.jpg";
import annefrank1 from "./img/annefrank1.jpg";
import annefrank2 from "./img/annefrank2.jpg";
import annefrank3 from "./img/annefrank3.jpg";
import vangogh1 from "./img/vangogh1.jpg";
import vangogh2 from "./img/vangogh2.jpg";
import vangogh3 from "./img/vangogh3.jpg";
import loversboat1 from "./img/loversboat1.jpg";
import loversboat2 from "./img/loversboat2.jpg";
import loversboat3 from "./img/loversboat3.jpg";
import rjm1 from "./img/rjm1.jpg";
import rjm2 from "./img/rjm2.jpg";
import rjm3 from "./img/rjm3.jpg";
import sexmuseum1 from "./img/sexmuseum1.jpg";
import sexmuseum2 from "./img/sexmuseum2.jpg";
import sexmuseum3 from "./img/sexmuseum3.jpg";

const heineken = [heineken1, heineken2, heineken3];
const annefrank = [annefrank1, annefrank2, annefrank3];
const vangogh = [vangogh1, vangogh2, vangogh3];
const loversboat = [loversboat1, loversboat2, loversboat3];
const rjm = [rjm1, rjm2, rjm3];
const sexmuseum = [sexmuseum1, sexmuseum2, sexmuseum3];

const Carrossel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      nextSlide();
    }, 4000); //milissegundos

    return () => clearInterval(intervalo);
  }, [currentIndex]);

  return (
    <div className="ease-in lg:mt-12">
      <img
        src={images[currentIndex].src}
        alt=""
        className="h-[340px]  w-[430px]  lg:rounded-2xl lg:w-[900px] lg:h-[450px] "
      />
    </div>
  );
};

export default function Home() {
  const [weatherData, setWeatherData] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
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
    <body className="h-screen bg-preto  min-h-screen ">
      <main className="flex flex-col">
        <section className="min-h-screen flex flex-col ">
          <div className="w-full md :w-1/2">
            <Image
              src={homeImage}
              layout="fill"
              objectFit="cover"
              alt="Imagem de fundo"
              className="absolute inset-0 opacity-90"
            />
          </div>
          <navbar className="  absolute  px-2  py-0  font-inter w-full  flex justify-between scroll-smooth">
            <div className="ml-7 mt-12 text-2xl font-normal text-white">
              Amsterdam Travel
            </div>
            <div className="scroll-smooth focus:scroll-auto">
              <ul className="hidden lg:flex lg:row-reverse lg:mt-14  lg:px-12  scroll-smooth">
                <li className="mx-4 my-6 lg:my-0 lg:space-x-4 lg:hover:-translate-y-1.5 duration-300 scroll-smooth">
                  <a
                    href="#sobre"
                    className=" text-branco px-3 py-2 rounded-md text-2xl scroll-smooth "
                  >
                    Sobre
                  </a>
                </li>
                <li className="mx-4 my-6 lg:my-0 lg:space-x-4 lg:hover:-translate-y-1.5 duration-300">
                  <a
                    href="#passeios"
                    className=" text-branco px-3 py-2 rounded-md text-2xl"
                  >
                    Passeios
                  </a>
                </li>
                <li className="mx-4 my-6 lg:my-0 lg:space-x-4 lg:hover:-translate-y-1.5 duration-300">
                  <a
                    href="#tempo"
                    className=" text-branco px-3 py-2 rounded-md text-2xl"
                  >
                    Tempo
                  </a>
                </li>
                <li className="mx-4 my-6 lg:my-0 lg:space-x-4 lg:hover:-translate-y-1.5 duration-300">
                  <a
                    href="#contato"
                    className=" text-branco px-3 py-2 rounded-md text-2xl"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </navbar>

          <div className="text-branco text-bold font-lexend mb-4 p-4 lg:p-8 lg:px-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full lg:w-auto mt-9 lg:mt-28">
            <div className="flex flex-col place-items-center text-4xl lg:text-5xl font-medium mt-80 mb-0 text-white py-4 px-6 w-full lg:w-auto justify-center ">
              <div>A AVENTURA</div>
              COMEÇA AQUI
            </div>
            <div className="flex flex-col place-items-center  hover:translate-y-1.5 duration-300">
              <button
                onClick={() => {
                  const element = document.getElementById("sobre");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full  flex flex-col place-items-center lg:h-40"
              >
                <svg
                  width="77"
                  height="99"
                  viewBox="0 0 77 99"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0.803711L38.5 54.4034L76 0.803711M1 43.6835L38.5 97.2832L76 43.6835"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-vermelho w-431  ">
          <div className="flex flex-col place-items-center my-4 ">
            <div className="text-branco font-inter text-4xl font-regular mt-9">
              SOBRE
            </div>

            <div className="text-branco font-inter text-lg text-center mt-9 mb-9 mx-7 lg:w-[65%] lg:text-2xl">
              Bem-vindo à Amsterdam Travel, sua porta de entrada para uma
              experiência única em viagens pela deslumbrante cidade de
              Amsterdam. Fundada por duas entusiastas brasileiras com a paixão
              por desvendar os encantos dessa cidade fascinante e facilitar a
              jornada dos brasileiros com roteiros turísticos e exclusivos de
              acordo com as necessidades e desejos do cliente.
            </div>
          </div>
        </section>

        <section id="passeios" className="bg-preto  ">
          <div className="flex flex-col place-items-center gap-[70px] lg:grid lg:grid-cols-2  lg:h-screen lg:justify-center">
            <div className="flex flex-col place-items-center gap-[70px] lg:h-[460px]  lg:items-center lg:py-10 lg:mt-20 lg:w-[112%] lg:ml-24">
              <div className="text-branco font-lexend text-4xl  text-center font-regular mt-[70px] lg:flex-col  lg:text-center  lg:justify-center lg:ml-12 lg:mt-16">
                HEINEKEN EXPERIENCE
              </div>
              <div className="text-branco font-inter text-lg text-center w-[82%] lg:text-2xl lg:w-[90%] lg:ml-10 lg:mt-4 lg:space-y-4 lg:mr-0">
                Consiste em uma atração localizada na primeira cervejaria
                construída pela Heineken no centro de Amsterdã. Em 1988, a
                cervejaria foi fechada devido à impossibilidade de atender a
                alta demanda. Saiba mais sobre o legado da Heineken, o processo
                de fabricação, inovações e patrocínio. O tour tem duração de uma
                hora e meia e você poderá desfrutar de uma Heineken ou duas ao
                final do passeio.
              </div>
            </div>

            <div className="flex flex-col items-center lg:w-[80%]  lg:mr-24 lg:mt-24 lg:ml-20 ">
              <Carrossel images={heineken} className="" />
            </div>
          </div>

          <div className="flex flex-col place-items-center gap-[70px]  lg:flex-row-reverse  lg:h-screen lg:justify-center">
            <div className="flex flex-col place-items-center gap-[70px] lg:h-[460px]   lg:items-center lg:py-10 lg:w-[112%] lg:mt-28 lg:mr-10 lg:ml-0">
              <div className="text-branco font-lexend text-4xl mr-1 text-center  font-regular mt-[70px] lg:flex-col lg:text-center  lg:justify-center lg:ml-0 lg:mt-16">
                ANNE FRANK HOUSE
              </div>
              <div className="text-branco font-inter text-lg text-center w-[82%] lg:text-2xl lg:w-[90%] lg:ml-10 lg:mt-4 lg:mr-14 ">
                A Casa da Anne Frank é um dos edifícios mais significativos da
                história da cidade. Ali, viveram escondidos Anne Frank e sua
                família durante a invasão nazista durante a Segunda Guerra
                Mundial. Durante o tour são explicados detalhadamente os
                acontecimentos ocorridos em cada um dos espaços da casa e alguns
                parágrafos extraídos do diário de Anne Frank, através dos quais
                você viajará a outra época.
              </div>
            </div>
            <div className="flex flex-col items-center   lg:w-[80%]  lg:mr-0 lg:mt-24 lg:ml-20 lg:flex lg:flex-row-reverse">
              <Carrossel images={annefrank} className="" />
            </div>
          </div>

          <div className="flex flex-col place-items-center gap-[70px] lg:grid lg:grid-cols-2 lg:grid-rows-{10} lg:h-screen lg:justify-center ">
            <div className="flex flex-col place-items-center gap-[70px] lg:h-[460px]  lg:items-center lg:py-10 lg:mt-20 lg:w-[112%] lg:ml-24">
              <div className="text-branco font-lexend text-4xl mr-1 text-center font-regular  mt-[70px] lg:flex-col  lg:text-center  lg:justify-center lg:ml-12 lg:mt-16">
                VAN GOGH MUSEUM
              </div>
              <div className="text-branco font-inter text-lg text-center w-[82%] lg:text-2xl lg:w-[90%] lg:ml-10 lg:mt-4 lg:space-y-4 lg:mr-0">
                O Museu Van Gogh é o museu mais visitado da Holanda. Nas
                modernas instalações do Museu Van Gogh, você poderá encontrar
                mais de 200 pinturas, 500 desenhos e centenas de cartas do
                artista. As pinturas estão organizadas cronologicamente, o que
                faz com que seja possível observar facilmente a evolução do
                artista, com as cenas campestres do início até os tormentosos
                trabalhos do final de sua vida.
              </div>
            </div>
            <div className="flex flex-col items-center  lg:w-[80%] lg:mr-24 lg:mt-24 lg:ml-20">
              <Carrossel images={vangogh} className="" />
            </div>
          </div>

          <div className="flex flex-col place-items-center gap-[70px]  lg:flex-row-reverse  lg:h-screen lg:justify-center">
            <div className="flex flex-col place-items-center gap-[70px] lg:h-[460px]   lg:items-center lg:py-10 lg:w-[112%] lg:mt-28 lg:mr-10 lg:ml-0 ">
              <div className="text-branco font-lexend text-4xl mr-1 text-center  font-regular mt-[70px] lg:flex-col  lg:text-center  lg:justify-center lg:ml-0 lg:mt-16 ">
                LOVERS BOAT TRIP
              </div>
              <div className="text-branco font-inter text-lg text-center w-[82%] lg:text-2xl lg:w-[90%] lg:ml-10 lg:mt-4 lg:mr-14 ">
                Amsterdã é uma cidade da água, e seus 100 canais e 1000 pontes
                são famosos em todo o mundo. Admire a arquitetura moderna ao
                longo das margens do Rio Amstel e os belos edifícios do século
                XVII com seus muitos estilos de empena, elegantes mansões dos
                comerciantes e casas flutuantes peculiares, no coração da cidade
                velha. Todos os barcos têm tetos panorâmicos e janelas de
                correr, garantindo uma vista maravilhosas e grandes fotos.
              </div>
            </div>
            <div className="flex flex-col items-center lg:w-[80%] lg:mr-0 lg:mt-24 lg:ml-20 lg:flex lg:flex-row-reverse">
              <Carrossel images={loversboat} className="" />
            </div>
          </div>

          <div className="flex flex-col place-items-center gap-[70px] lg:grid lg:grid-cols-2 lg:grid-rows-{10} lg:h-screen lg:justify-center ">
            <div className="flex flex-col place-items-center gap-[70px] lg:h-[460px]  lg:items-center lg:py-10 lg:mt-20 lg:w-[112%] lg:ml-24">
              <div className="text-branco font-lexend text-4xl  text-center font-regular mt-[70px] lg:flex-col  lg:text-center  lg:justify-center lg:ml-12 lg:mt-16 ">
                RIJKSMUSEUM
              </div>
              <div className="text-branco font-inter text-lg text-center w-[82%] lg:text-2xl lg:w-[90%] lg:ml-10 lg:mt-4 lg:space-y-4 lg:mr-0">
                O Rijksmuseum é uma das atrações mais importantes de Amsterdam.
                É o segundo museu mais visitado no país, perdendo apenas para o
                Museu Van Gogh, e abriga a maior coleção de arte flamenca do
                mundo. Rembrandt, Vermeer e Van Gogh são apenas alguns dos
                grandes artistas presentes nesta galeria de arte imperdível.
              </div>
            </div>
            <div className="flex flex-col items-center lg:w-[80%] lg:mr-24 lg:mt-40 lg:ml-20 ">
              <Carrossel images={rjm} className="" />
            </div>
          </div>

          <div className="flex flex-col place-items-center gap-[70px]  lg:flex-row-reverse  lg:h-screen lg:justify-center lg:mb-20">
            <div className="flex flex-col place-items-center gap-[70px] lg:h-[460px]   lg:items-center lg:py-10 lg:w-[112%] lg:mt-28 lg:mr-10 lg:ml-0">
              <div className="text-branco font-lexend text-4xl mr-1 text-center  font-regular mt-[70px] lg:flex-col lg:text-center  lg:justify-center lg:ml-0 lg:mt-16">
                SEX MUSEUM
              </div>
              <div className="text-branco font-inter text-lg text-center w-[82%] lg:text-2xl lg:w-[90%] lg:ml-10 lg:mt-4 lg:mr-14 ">
                O primeiro museu do mundo focado neste tópico. Abriu em 1985 e
                tornou-se logo popular entre os visitantes. Se decidir visitar o
                museu, irá aprender mais sobre as práticas históricas e rituais
                relacionados com as relações sexuais e ver objetos recolhidos de
                todos cantos do planeta. O museu tem vários itens, sobretudo
                fotografias, gravações áudio e estátuas, bem como vários
                brinquedos sexuais usados em vários períodos históricos.
              </div>
            </div>
            <div className="flex flex-col items-center lg:w-[80%] lg:mt-24 lg:mr-0 lg:ml-20 lg:flex lg:flex-row-reverse">
              <Carrossel images={sexmuseum} className="" />
            </div>
          </div>
        </section>

        <section
          id="tempo"
          className="bg-vermelho font-lexend w-full text-branco"
        >
          <div className="bg-vermelho h-[550px] text-branco">
            <div className="h-[550px] flex flex-col lg:flex-row lg:justify-center lg:flexitems-center items-center py-16 gap-y-6">
              <div className="space-y-4 flex flex-col items-center lg:justify-center lg:flex">
                <div className="text-[30px] lg:text-[45px]">Agora</div>
                <div className="text-[80px] lg:text-[90px]">
                  {weatherData && weatherData.temp.toFixed(1)}°C
                </div>
                <div className="text-[25px] lg:text-[30px] ">Amsterdam</div>
              </div>

              <div className="w-64 lg:rotate-90 rounded h-1 bg-preto"></div>

              <div className="space-y-3 flex flex-col items-center">
                <div className="flex flex-row gap-x-4 items-center">
                  <div className="w-10 lg:w-12">
                    <img src={chuva.src} alt="icone de chuva" />
                  </div>
                  <div className="text-[35px] lg:text-[45px] ">Umidade</div>
                </div>
                <div className="text-[40px] lg:text-[75px]">
                  {weatherData.humidity}%
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer
          id="contato"
          className="bg-preto font-lexend h-[392px] w-full text-branco"
        >
          <div className="container mx-auto h-full">
            <div className="flex flex-col items-center py-24 gap-y-7 h-full">
              <div className="text-3xl">ENTRE EM CONTATO</div>

              <div className="gap-x-10 flex flex-row items-center">
                <a target="_blank" href="https://wa.me/5512991346800">
                  <img
                    className="w-8 hover:-translate-y-1.5 duration-300"
                    src={wpp.src}
                    alt="icon whatsapp"
                  />
                </a>
                <a target="_blank" href="mailto:bibirossi030512@gmail.com">
                  <img
                    className="w-8 py-1 hover:-translate-y-1.5 duration-300"
                    src={email.src}
                    alt="icon e-mail"
                  />
                </a>
              </div>
              <div className="flex flex-col items-center py-11">
                <a target="_blank" href="https://www.byronsolutions.com/">
                  <img className="w-64" src={logo.src} alt="logo da byron" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </body>
  );
}
