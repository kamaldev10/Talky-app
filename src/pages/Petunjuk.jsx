import React from "react";
import BackButton from "../components/BackButton";
import { Title } from "react-head";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const slideVariants = {
  left: {
    hidden: { opacity: 0, x: -80 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  },
  right: {
    hidden: { opacity: 0, x: 80 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  },
};

const Petunjuk = () => {
  const steps = [
    {
      title: "Isi Biodata Pengguna",
      content: (
        <ul className="list-disc list-outside pl-4">
          <li>Lengkapi semua data diri yang diminta pada form biodata</li>
          <li>Pastikan informasi yang dimasukkan sudah benar dan sesuai</li>
        </ul>
      ),
    },
    {
      title: "Menu Informasi",
      content: (
        <ul className="list-disc list-outside pl-4">
          <p className="list-none">
            Tekan tombol <strong>"Informasi"</strong> untuk mengakses:
          </p>
          <li>
            <strong>Petunjuk:</strong> Panduan lengkap penggunaan aplikasi
          </li>
          <li>
            <strong>Identitas Pembuat:</strong>
            <ol className="list-decimal pl-5">
              <li>Nama kelompok pengembang</li>
              <li>Dosen pengampu</li>
              <li>Nama pembuat aplikasi</li>
            </ol>
          </li>
        </ul>
      ),
    },
    {
      title: "Menu Mulai",
      content: (
        <ol className="list-disc pl-4 space-y-2">
          <p className="list-none">
            Tekan tombol <strong>"Mulai"</strong> untuk mengakses:
          </p>
          <li>
            <strong>Kategori Sehari-hari:</strong>
            <ul className="list-disc pl-6">
              <li>Pilih gambar sesuai kebutuhan</li>
              <li>Gambar akan mengeluarkan suara</li>
              <li>Contoh: "Saya ingin makan"</li>
            </ul>
          </li>
          <li>
            <strong>Kategori Informasi Tentang Saya:</strong>
            <ul className="list-disc pl-6">
              <li>Menampilkan data diri dari biodata</li>
              <li>Data muncul otomatis</li>
            </ul>
          </li>
          <li>
            <strong>Kategori Tentang Keluarga:</strong>
            <ul className="list-disc pl-6">
              <li>Gambar anggota keluarga tersedia</li>
              <li>Contoh: Menekan "ayah" akan berbunyi "Ayah"</li>
            </ul>
          </li>
        </ol>
      ),
    },
    {
      title: "Update Biodata",
      content: (
        <ul className="list-disc list-outside pl-6">
          <li>Gunakan fitur "Update Biodata" jika ingin ubah data pribadi</li>
          <li>Data akan otomatis tersimpan</li>
        </ul>
      ),
    },
    {
      title: "Keluar Dari Aplikasi",
      content: (
        <ul className="list-disc list-outside pl-6">
          <li>Tekan "Kembali" untuk kembali ke menu sebelumnya</li>
          <li>Tekan "Kembali" hingga ke halaman utama</li>
          <li>Tutup aplikasi sesuai perangkat Anda</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Title>Talky App | Petunjuk</Title>
      <div className="min-h-screen flex flex-col bg-blue-100">
        <div className="flex items-start justify-start w-full p-4">
          <BackButton />
        </div>

        <div className="flex-grow px-4 md:px-20 py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg rounded-2xl p-6 md:p-10 space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl font-bold text-center uppercase"
            >
              Petunjuk Penggunaan Aplikasi
            </motion.h1>

            <div className="space-y-6">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={isEven ? slideVariants.left : slideVariants.right}
                    className="border-sky-300 border-2 p-4 rounded-md space-y-2"
                  >
                    <h2 className="text-md font-bold underline underline-offset-4 text-center">
                      {step.title}
                    </h2>
                    <div>{step.content}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Petunjuk;
