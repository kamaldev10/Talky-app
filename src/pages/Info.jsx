import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import { Title } from "react-head";

const Info = () => {
  return (
    <>
      <Title>Disability App | Informasi</Title>
      <div className=" min-h-screen flex flex-col items-center justify-center bg-(--friendly-blue) ">
        <header className="flex items-start justify-start w-full p-4">
          <BackButton />
        </header>
        <h1 className="mt-5 text-xl font-bold text-center">Informasi</h1>

        <div className="flex-grow flex gap-4 items-center ">
          <div className="flex flex-col gap-4 text-center">
            <Link
              to="petunjuk"
              className="btn-primary transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              Petunjuk
            </Link>
            <Link
              to="identitas"
              className="btn-primary transition delay-100 duration-150 ease-initial hover:-translate-y-1 hover:scale-110"
            >
              Identitas Pembuat
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
