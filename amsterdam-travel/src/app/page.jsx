import homeImage from "./img/home.jpg";
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
    <div className="ease-in">
      <img
        src={images[currentIndex].src}
        alt=""
        className="h-[340px]  w-[430px] "
      />
    </div>
  );
};

const tempo = () => {
  const [weatherData, setWeatherData] = useState(null);

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
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello</h1>
    </main>
  );
}
