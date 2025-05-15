import React from "react";
import { Title } from "react-head";
import { Link } from "react-router-dom";

const Kategori = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-(--friendly-blue) ">
        <Title>Disability App | Kategori</Title>
        <div className="flex flex-col gap-4 text-center ">
          <Link
            to="/kegiatan"
            className="btn-primary transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            Kegiatan Sehari-hari
          </Link>
          <Link
            to="/info-saya"
            className="btn-primary transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            Informasi Saya
          </Link>
        </div>
      </div>
    </>
  );
};

export default Kategori;
