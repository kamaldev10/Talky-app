import fs from "fs";
import googleTTS from "google-tts-api";

const kegiatan = [
  { nama: "Makan" },
  { nama: "Minum" },
  { nama: "Tidur" },
  { nama: "Mandi" },
  { nama: "Ke Toilet" },
  { nama: "Memakai Baju" },
  { nama: "JalanJalan" },
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
