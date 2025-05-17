import fs from "fs";
import googleTTS from "google-tts-api";
import { getUser } from "./src/utils/userStorage";
import { useEffect } from "react";

useEffect(() => {
  const user = getUser();
});

const kegiatan = [
  { nama: "Makan" },
  { nama: "Minum" },
  { nama: "Tidur" },
  { nama: "Mandi" },
  { nama: "Ke Toilet" },
  { nama: "Memakai Baju" },
  { nama: "JalanJalan" },
  // { nama: `nama saya adalah ${user?.nama}` },
  // { nama: `umur saya adalah ${user?.umur}` },
  // { nama: `kakek saya bernama ${user?.namaKakek}` },
  // { nama: `kakek saya bernama ${user?.namaNenek}` },
  // { nama: `kakek saya bernama ${user?.namaAyah}` },
  // { nama: `kakek saya bernama ${user?.namaIbu}` },
  // { nama: `kakek saya bernama ${user?.namaKakak}` },
  // { nama: `kakek saya bernama ${user?.namaAdik}` },
];

const outputDir = "./public/sounds";
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

for (const item of kegiatan) {
  const text = `Saya ingin ${item.nama}`;
  const fileName =
    item.nama.toLowerCase().replace(/\s+/g, "-").replace(/-+/g, "-") + ".mp3";
  const filePath = `${outputDir}/${fileName}`;

  const url = googleTTS.getAudioUrl(text, {
    lang: "id",
    slow: false,
    host: "https://translate.google.com",
  });

  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(filePath, Buffer.from(buffer));
  console.log(`✔️ Saved: ${filePath}`);
}
