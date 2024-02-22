import Image from "next/image";
import logo from "./img/byronbranco.png";
import wpp from "./img/whats.png"
import email from "./img/email.png"

export default function Home() {
  return (
    <main>
      <footer className= "bg-preto font-lexend h-[392px] w-full text-branco">
        <div className= "container mx-auto">
          <div className="flex flex-col items-center py-24 gap-y-7">
            
            <div className="text-3xl">ENTRE EM CONTATO</div>
            
            <div className="gap-x-10 flex flex-row items-center">
                <a target="_blank" href="https://wa.me/5512991346800">
                  <img className="w-8 hover:-translate-y-1.5 duration-300" src={wpp.src} alt="icon whatsapp" />
                </a>
                <a target="_blank" href="mailto:bibirossi030512@gmail.com">
                  <img className="w-8 py-1 hover:-translate-y-1.5 duration-300" src={email.src} alt="icon e-mail" />
                </a>
            </div>
            <div className="flex flex-col items-center py-11">
            <a target="_blank" href="https://www.byronsolutions.com/"><img className="w-64" src={logo.src} alt="logo da byron" /></a>
          </div>
          </div>
          
          
      
        </div>
      </footer>
    </main>
  );
}
