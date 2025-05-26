import React from "react";
import BackButton from "../components/BackButton";
import { Title } from "react-head";
import Footer from "../components/Footer";

const Identitas = () => {
  return (
    <>
      <Title>Disability App | Identitas</Title>
      <div className=" min-h-screen flex flex-col items-center justify-center bg-(--friendly-blue)  ">
        <div className="flex items-start justify-start w-full p-4">
          <BackButton />
        </div>
        <div className="w-full flex-grow ">
          <div className="flex flex-col border border-gray-800 rounded-xl max-h-dvh min-h-[75vh] mx-10 my-5 items-center justify-center">
            <h1 className="mb-5 font-bold text-xl">Universitas Andalas</h1>
            <div className="border w-36 h-36">
              <img src="" alt="logo-unand" />
            </div>

            <h2 className="mt-5 text-md font-bold text-center">Kelompok 14</h2>
            <h3>Liyana Piscila</h3>
            <h2 className="mt-5 text-md font-bold text-center">
              Dosen Pengampu
            </h2>
            <h3>Antonio, S.pd.</h3>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Identitas;
