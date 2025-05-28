import React from "react";
import BackButton from "../components/BackButton";
import { Title } from "react-head";
import Footer from "../components/Footer";
import { motion } from "motion/react";

const Identitas = () => {
  return (
    <>
      <Title>Talky App | Identitas</Title>
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
        <div className="flex items-start justify-start w-full p-4">
          <BackButton />
        </div>

        <div className="w-full min-h-full flex-grow px-4 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col border border-gray-300 rounded-xl bg-white shadow-lg p-6 max-w-xl mx-auto my-5 items-center justify-center space-y-4"
          >
            <h1 className="font-bold text-xl text-center">
              Universitas Negeri Padang
            </h1>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-42 h-42"
            >
              <img
                src="/images/logo-unp.png"
                alt="Logo UNP"
                className="w-full h-full object-contain"
              />
            </motion.div>

            <div className="text-center mt-4 space-y-1">
              <h2 className="text-md font-bold">Kelompok 14 :</h2>
              <p className="text-sm font-semibold">
                Liyana Dalila Rahma Pilica (22003110)
              </p>
            </div>

            <div className="text-center mt-4 space-y-1">
              <h2 className="text-md font-bold">Dosen Pengampu :</h2>
              <p className="text-sm font-semibold">
                Prof. Dr. Marlina, S. Pd., M. Si
              </p>
            </div>
          </motion.div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Identitas;
