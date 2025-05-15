import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import { Title } from "react-head";

const Info = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-(--friendly-blue) ">
      <Title>Disability App | Informasi</Title>
      <div className="absolute top-0 left-0">
        <BackButton></BackButton>
      </div>
      <h1 className="absolute top-15 left-1/2 transform -translate-x-1/2 text-xl font-bold">
        Informasi
      </h1>

      <div className="flex flex-col gap-4 text-center ">
        <Link
          to="/petunjuk"
          className="btn-primary transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          Petunjuk
        </Link>
        <Link
          to="/identitas"
          className="btn-primary transition delay-100 duration-150 ease-initial hover:-translate-y-1 hover:scale-110"
        >
          Identitas Pembuat
        </Link>
      </div>
    </div>
  );
};

export default Info;
