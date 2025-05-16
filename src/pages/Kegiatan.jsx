import { kegiatanList } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Howl } from "howler";

import BackButton from "../components/BackButton";
import { Title } from "react-head";

const Kegiatan = () => {
  const handleClick = (item) => {
    const sound = new Howl({
      src: [`/sounds/${item.sound}`],
      volume: 1.0,
      rate: 1,
      loop: false,
      html5: true,
    });
    sound.play();
  };
  return (
    <>
      <Title>Disability App | Kegiatan Sehari-hari</Title>
      <div className="min-h-screen bg-(--friendly-blue) ">
        <header className=" flex flex-col items-start justify-start w-full p-4">
          <BackButton />
        </header>

        <h1 className="mt-5 text-xl font-bold text-center">Kategori</h1>

        <div className="flex flex-wrap justify-center mt-10">
          <div className="grid grid-cols-2 gap-6 place-items-center">
            {kegiatanList.map((item, index) => {
              const isLast = index === kegiatanList.length - 1;
              const isOdd = kegiatanList.length % 2 !== 0;
              const isLonelyLast = isOdd && isLast;

              return (
                <div
                  key={index}
                  className={`w-full flex justify-center ${
                    isLonelyLast ? "col-span-2" : ""
                  }`}
                >
                  <button
                    key={item.nama}
                    onClick={() => handleClick(item)}
                    className={`min-w-[160px] flex justify-center items-center gap-5 uppercase transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 text-white px-6 py-5 rounded-xl shadow-md ${item.warna} cursor-pointer`}
                  >
                    {item.type === "lucide" ? (
                      <item.icon size={20} strokeWidth={2} />
                    ) : (
                      <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                    )}
                    {item.nama}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Kegiatan;
