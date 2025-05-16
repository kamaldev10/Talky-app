import {
  Utensils,
  CupSoda,
  Bed,
  ShowerHead,
  Toilet,
  Shirt,
} from "lucide-react";
import { faPersonWalking } from "@fortawesome/free-solid-svg-icons";

export const kegiatanList = [
  {
    nama: "Makan",
    icon: Utensils,
    warna: "bg-red-500",
    type: "lucide",
    sound: "makan.mp3",
  },
  {
    nama: "Minum",
    icon: CupSoda,
    warna: "bg-blue-500",
    type: "lucide",
    sound: "minum.mp3",
  },
  {
    nama: "Tidur",
    icon: Bed,
    warna: "bg-purple-500",
    type: "lucide",
    sound: "tidur.mp3",
  },
  {
    nama: "Mandi",
    icon: ShowerHead,
    warna: "bg-cyan-500",
    type: "lucide",
    sound: "mandi.mp3",
  },
  {
    nama: "Toilet",
    icon: Toilet,
    warna: "bg-gray-600",
    type: "lucide",
    sound: "ke-toilet.mp3",
  },
  {
    nama: "Baju",
    icon: Shirt,
    warna: "bg-green-600",
    type: "lucide",
    sound: "memakai-baju.mp3",
  },
  {
    nama: "Jalan - Jalan",
    icon: faPersonWalking,
    warna: "bg-yellow-500",
    type: "fa",
    sound: "jalan-jalan.mp3",
  },
];
