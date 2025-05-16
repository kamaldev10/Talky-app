import BackButton from "../components/BackButton";
import { Title } from "react-head";
import { getUser } from "../utils/userStorage";
import { useEffect, useState } from "react";

const InfoKeluarga = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = getUser();
    setUser(userData);
  }, []);

  const kakakList = user?.namaKakak?.filter((k) => k.trim()) || [];
  const adikList = user?.namaAdik?.filter((a) => a.trim()) || [];

  return (
    <>
      <Title>Disability App | Info Keluarga</Title>
      <div className=" min-h-screen flex flex-col items-center justify-center bg-(--friendly-blue) ">
        <div className="flex items-start justify-start w-full p-4">
          <BackButton />
        </div>
        <h1 className="mt-5 text-xl font-bold text-center ">Keluarga Saya</h1>

        <div className="flex-grow flex gap-4 items-center ">
          <div className="flex flex-col gap-4 text-center text-wrap">
            <button className=" w-full min-w-2xs max-w-xs p-4 bg-green-500 hover:bg-green-700 rounded-tl-xl rounded-br-xl  transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110">
              <p className="text-white">
                Kakek saya bernama
                <span className="font-bold uppercase ms-2 text-violet-700">
                  {user?.namaKakek || "Kakek Pengguna"}
                </span>
              </p>
            </button>
            <button className=" w-full min-w-2xs max-w-xs p-4 bg-green-500 hover:bg-green-700 rounded-tl-xl rounded-br-xl  transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110">
              <p className="text-white">
                Nenek saya bernama
                <span className="font-bold uppercase ms-2 text-violet-700">
                  {user?.namaNenek || "Nenek Pengguna"}
                </span>
              </p>
            </button>
            <button className=" w-full min-w-2xs max-w-xs p-4 bg-green-500 hover:bg-green-700 rounded-tl-xl rounded-br-xl  transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110">
              <p className="text-white">
                Ayah saya bernama
                <span className="font-bold uppercase ms-2 text-violet-700">
                  {user?.namaAyah || "Ayah Pengguna"}
                </span>
              </p>
            </button>
            <button className="w-full  min-w-2xs max-w-xs p-4 bg-green-500 hover:bg-green-700 rounded-tl-xl rounded-br-xl  transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110">
              <p className="text-white">
                Ibu saya bernama
                <span className="font-bold uppercase ms-2 text-violet-700">
                  {user?.namaIbu || "Kakek Pengguna"}
                </span>
              </p>
            </button>
            {/* Tampilkan Kakak */}
            {kakakList.length > 0 ? (
              <button className="w-full min-w-2xs max-w-xs p-4 bg-green-500 hover:bg-green-700 rounded-tl-xl rounded-br-xl transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110">
                <p className="text-white">
                  Kakak saya ada {kakakList.length} yaitu
                  <span className="ms-2 uppercase font-bold text-violet-700">
                    {kakakList.join(", ")}
                  </span>
                </p>
              </button>
            ) : (
              <button className="w-full min-w-2xs max-w-xs p-4 bg-green-500 hover:bg-green-700 rounded-tl-xl rounded-br-xl transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110">
                <p className="text-white ">
                  Saya
                  <span className="mx-1 text-red-500 font-bold uppercase">
                    tidak
                  </span>
                  punya kakak.
                </p>
              </button>
            )}

            {/* Tampilkan Adik */}
            {adikList.length > 0 ? (
              <button className="w-full min-w-2xs max-w-xs p-4 bg-green-500 hover:bg-green-700 rounded-tl-xl rounded-br-xl transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110">
                <p className="text-white">
                  Adik saya ada {adikList.length} yaitu
                  <span className="ms-2 uppercase text-violet-700">
                    {adikList.join(", ")}
                  </span>
                </p>
              </button>
            ) : (
              <button className="w-full min-w-2xs max-w-xs p-4 bg-green-500 hover:bg-green-700 rounded-tl-xl rounded-br-xl transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110">
                <p className="text-white">
                  Saya
                  <span className="mx-1 text-red-500 font-bold uppercase">
                    tidak
                  </span>
                  punya adik.
                </p>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoKeluarga;
