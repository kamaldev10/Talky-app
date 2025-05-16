import React, { useEffect, useState } from "react";
import { Title } from "react-head";
import BackButton from "../components/BackButton";
import { getUser } from "../utils/userStorage";

const InfoSaya = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = getUser();
    setUser(userData);
  }, []);

  return (
    <>
      <Title>Disability App | Info Saya</Title>
      <div className=" min-h-screen flex flex-col items-center justify-center bg-(--friendly-blue) ">
        <header className="flex items-start justify-start w-full p-4">
          <BackButton />
        </header>

        <div className="flex-grow flex gap-4 items-center ">
          <div className="flex flex-col gap-4 text-center text-wrap ">
            <button className="min-w-2xs p-4 bg-indigo-500 hover:bg-indigo-700 rounded-tl-xl rounded-br-xl  transition duration-150 ease-in-out hover:scale-110">
              <p className="text-white">
                Saya adalah{" "}
                <span className="font-bold uppercase mx-2">
                  {user?.nama || "Pengguna"}
                </span>
              </p>
            </button>
            <button className=" min-w-2xs p-4 bg-indigo-500 hover:bg-indigo-700 rounded-tl-xl rounded-br-xl  transition  duration-150 ease-in-out  hover:scale-110">
              <p className="text-white">
                Umur saya adalah
                <span className="font-bold uppercase mx-1">
                  {user?.umur || "12"}
                </span>
                tahun
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSaya;
