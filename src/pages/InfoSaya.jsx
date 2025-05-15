import React from "react";
import { Title } from "react-head";
import BackButton from "../components/BackButton";
import { Link } from "react-router-dom";

const InfoSaya = () => {
  return (
    <>
      <Title>Disability App | Informasi Saya</Title>
      <div className="relative min-h-screen flex items-center justify-center bg-(--friendly-blue) ">
        <div className="absolute top-0 left-0">
          <BackButton></BackButton>
        </div>
        {/* <h1 className="absolute top-15 left-1/2 transform -translate-x-1/2 text-xl font-bold">
          Informasi Saya
        </h1> */}
        <h2 className="absolute top-13 left-1/2 transform -translate-x-1/2 text-md mt-3 font-bold">
          Aku adalah Ultramen mebiuss
        </h2>

        <img
          className="w-full"
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjJ0MWU4bHNjbTNvYm1reW50cWhwZ2puZDVnbXpqYWZxaGZ2cmgxaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EkhQKcriTUg6s/giphy.gif"
        />

        <div className="flex flex-col gap-4 text-center ">
          <h2></h2>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default InfoSaya;
