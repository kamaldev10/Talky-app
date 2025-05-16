import React from "react";
import BackButton from "../components/BackButton";
import { Title } from "react-head";

const Identitas = () => {
  return (
    <>
      <Title>Disability App | Petunjuk</Title>
      <div className=" min-h-screen flex flex-col items-center justify-center bg-(--friendly-blue) ">
        <div className="flex items-start justify-start w-full p-4">
          <BackButton />
        </div>
        <h1 className="mt-5 text-xl font-bold text-center">
          Identitas Developer
        </h1>

        <div className=" flex-grow flex flex-col gap-4 text-center p-10">
          <p className="text-sm indent-5 text-start">
            Saya adalah seorang mahasiswa jurusan Sistem Informasi Angkatan 2021
            Universitas Riau.
          </p>
        </div>
      </div>
    </>
  );
};

export default Identitas;
