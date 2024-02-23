"use client";
import React from "react";
import Image from "next/image";
import homeImage from "./img/home.jpg";

export default function Home() {
  return (
    <body className="h-screen bg-preto w-390 h-844 ">
      <main className="w-full  ">
        <section className="min-h-screen flex flex-col md:flex-row ">
          <div className="w-full md :w-1/2">
            <Image
              src={homeImage}
              layout="fill"
              objectFit="cover"
              alt="Imagem de fundo"
              className="absolute inset-0 opacity-85"
            />
          </div>
          <navbar className="p-4 md:p-8 absolute top-0 left-0 px-2 md:px-6 py-2 md:py-4 font-inter w-full md:w-auto">
            <div className="ml-9 mt-12 text-xl font-normal text-white">
              Amsterdam Travel
            </div>
          </navbar>

          <div className="text-branco text-bold font-lexend mb-4 py-12 p-4 md:p-8 md:px-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full md:w-auto">
            <div className="flex flex-col place-items-center text-4xl font-medium mt-80 mb-0 text-white py-4 px-6 w-full md:w-auto justify-center ">
              A AVENTURA
              <br />
              COMEÇA AQUI
              <br />
            </div>
            <div className="flex flex-col place-items-center ">
              <button
                onClick={() => {
                  const element = document.getElementById("sobre");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full md:w-auto flex flex-col place-items-center"
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
      </main>
    </body>
  );
}
