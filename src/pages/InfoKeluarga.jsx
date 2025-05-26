import { keluargaList } from "../data";
import BackButton from "../components/BackButton";
import { Title } from "react-head";
import { Howl } from "howler";
import { useEffect, useState } from "react";
import GoogleStyleLoader from "../components/loader/GoogleStyleLoader";

const InfoKeluarga = () => {
  const handleClick = (item) => {
    const sound = new Howl({
      src: [`/sounds/family/${item.sound}`],
      volume: 1.0,
      rate: 1,
      loop: false,
      html5: true,
    });
    sound.play();
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <GoogleStyleLoader />
      </div>
    );
  }

  return (
    <>
      <Title>Disability App | Info Keluarga</Title>
      <div className="min-h-screen bg-blue-100 px-4 pb-10">
        <header className="p-4">
          <BackButton />
        </header>
        <h1 className="text-xl font-bold text-center mb-6">Keluarga</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {keluargaList.map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(item)}
              className="flex flex-col items-center bg-white rounded-xl p-4 shadow-md hover:scale-105 transition"
            >
              <img
                loading="lazy"
                src={item.image}
                alt={item.nama}
                className="w-24 h-24 object-cover rounded-full mb-2"
              />
              <span className="font-bold text-center uppercase text-sm text-gray-700">
                {item.nama}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfoKeluarga;
