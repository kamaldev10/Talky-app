import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import { Title } from "react-head";

const Identitas = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-(--friendly-blue) ">
      <Title>Disability App | Identitas</Title>
      <div className="absolute top-0 left-0">
        <BackButton></BackButton>
      </div>
      <h1 className="absolute top-15 left-1/2 transform -translate-x-1/2 text-xl font-bold">
        Identitas
      </h1>
      <div className="flex flex-col gap-4 text-center ">
        <h2 className="text-md font-semibold">Identitas Pengguna</h2>
        <p>loremipsum</p>
      </div>
    </div>
  );
};

export default Identitas;
