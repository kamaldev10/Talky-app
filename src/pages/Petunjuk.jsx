import React from "react";
import BackButton from "../components/BackButton";
import { Link } from "react-router-dom";
import { Title } from "react-head";

const Petunjuk = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-(--friendly-blue) ">
      <Title>Disability App | Petunjuk</Title>
      <div className="absolute top-0 left-0">
        <BackButton></BackButton>
      </div>
      <h1 className="absolute top-15 left-1/2 transform -translate-x-1/2 text-xl font-bold">
        Petunjuk
      </h1>
      <div className="flex flex-col gap-4 text-center ">
        <h2 className="text-md font-semibold">Petunjuk Penggunaan Aplikasi</h2>
        <p>loremipsum</p>
      </div>
    </div>
  );
};

export default Petunjuk;
