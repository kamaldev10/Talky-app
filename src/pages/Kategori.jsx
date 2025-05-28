import React from "react";
import { Title } from "react-head";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

const Kategori = () => {
  return (
    <>
      <Title>Talky App | Kategori</Title>
      <div className=" min-h-screen flex flex-col items-center justify-center bg-(--friendly-blue) ">
        <header className="flex items-start justify-start w-full p-4">
          <BackButton />
        </header>
        <h1 className="mt-5 text-xl font-bold text-center">Kategori</h1>

        <div className="flex-grow flex gap-4 items-center ">
          <div className="flex flex-col gap-4 text-center">
            <Link
              to="kegiatan"
              className="btn-primary bg-cyan-700 transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              Kegiatan Sehari-hari
            </Link>

            <Link
              to="info-keluarga"
              className="btn-primary bg-lime-700 transition delay-100 duration-150 ease-initial hover:-translate-y-1 hover:scale-110"
            >
              Keluarga saya
            </Link>

            <Link
              to="info-saya"
              className="btn-primary bg-amber-700 transition delay-100 duration-150 ease-initial hover:-translate-y-1 hover:scale-110"
            >
              Informasi saya
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kategori;
