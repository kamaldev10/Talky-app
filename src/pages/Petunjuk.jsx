import React from "react";
import BackButton from "../components/BackButton";
import { Title } from "react-head";

const Petunjuk = () => {
  return (
    <>
      <Title>Disability App | Petunjuk</Title>
      <div className=" min-h-screen flex flex-col items-center justify-center bg-(--friendly-blue) ">
        <div className="flex items-start justify-start w-full p-4">
          <BackButton />
        </div>
        <h1 className="mt-5 text-xl font-bold text-center">Petunjuk</h1>

        <div className=" flex-grow flex flex-col gap-4 text-center p-10">
          <ol className="list-decimal list-outside text-justify">
            <li className="normal-case text-sm mb-2">
              Klik tombol yang anda inginkan
            </li>
            <li className="normal-case text-sm mb-2">
              Bunyi akan muncul setelah anda tekan{" "}
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Petunjuk;
