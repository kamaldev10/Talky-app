// generateSounds.js
import fs from "fs";
import fetch from "node-fetch";
import googleTTS from "google-tts-api";

// Data aktivitas
const kegiatan = [
  { nama: "Makan" },
  { nama: "Minum" },
  { nama: "Tidur" },
  { nama: "Mandi" },
  { nama: "Ke Toilet" },
  { nama: "Memakai Baju" },
  { nama: "Jalan Jalan" },
];

// Data keluarga
const keluarga = [
  { nama: "Ayah" },
  { nama: "Ibu" },
  { nama: "Adik" },
  { nama: "Kakak" },
  { nama: "Kakek" },
  { nama: "Nenek" },
];

// Fungsi untuk menghasilkan file audio
async function generateSounds(data, folder, kalimatTemplate) {
  const outputDir = `./public/sounds/${folder}`;
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  for (const item of data) {
    const text = kalimatTemplate(item.nama);
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
}

// Jalankan fungsi untuk dua kategori
(async () => {
  await generateSounds(kegiatan, "activity", (nama) => `Saya ingin ${nama}`);
  await generateSounds(keluarga, "family", (nama) => ` ${nama}`);
})();
