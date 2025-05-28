import React, { useEffect, useState } from "react";
import { Title } from "react-head";
import BackButton from "../components/BackButton";
import { getUser } from "../utils/userStorage";
import GoogleStyleLoader from "../components/loader/GoogleStyleLoader";

const InfoSaya = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = getUser();
    setUser(userData);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const hobiList = Array.isArray(user?.hobi)
    ? user.hobi.filter((k) => k.trim())
    : typeof user?.hobi === "string"
    ? [user.hobi.trim()]
    : [];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <GoogleStyleLoader />
      </div>
    );
  }

  return (
    <>
      <Title>Talky App | Info Saya</Title>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--friendly-blue)]">
        <header className="flex items-start justify-start w-full p-4">
          <BackButton />
        </header>

        <div className="flex-grow flex gap-4 items-center ">
          <div className="flex flex-col gap-4 text-center border-2 border-gray-700 shadow-lg shadow-violet-400 rounded-md py-20 px-10">
            <button className="min-w-2xs p-4 bg-violet-700 rounded-tl-3xl rounded-tr-3xl rounded-b-md transition duration-150 ease-in-out hover:scale-110">
              <p className="text-white">
                Nama saya adalah
                <span className="font-bold uppercase mx-1">
                  {user?.nama || "Pengguna"}
                </span>
              </p>
            </button>

            <button className="min-w-2xs p-4 bg-orange-500 rounded-xl transition duration-150 ease-in-out hover:scale-110">
              <p className="text-white">
                Umur saya adalah
                <span className="font-bold uppercase mx-1">
                  {user?.umur || "12"}
                </span>
                tahun
              </p>
            </button>

            {hobiList.length > 1 ? (
              <div className="w-full min-w-2xs max-w-xs p-4 bg-sky-700  rounded-bl-3xl rounded-t-md rounded-br-3xl transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110">
                <p className="text-white font-semibold">Hobi saya adalah:</p>
                <ol className="list-decimal list-inside text-left text-white mt-2">
                  {hobiList.map((hobi, index) => (
                    <li
                      key={index}
                      className="capitalize font-medium text-violet-100"
                    >
                      {hobi}
                    </li>
                  ))}
                </ol>
              </div>
            ) : (
              <button className="min-w-2xs p-4 bg-green-500 hover:bg-green-700 rounded-tl-xl rounded-br-xl transition duration-150 ease-in-out hover:scale-110">
                <p className="text-white">
                  Hobi saya adalah
                  <span className="font-bold uppercase mx-1">
                    {hobiList[0] || "Membaca"}
                  </span>
                </p>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSaya;
