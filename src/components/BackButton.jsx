import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBigLeft } from "lucide-react";

export default function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (!location.key) return null;
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center justify-center p-3 bg-sky-300 hover:bg-sky-500 rounded-xl "
      aria-label="Go Back"
    >
      <ArrowBigLeft className="w-5 h-5 cursor-pointer" />
      <span
        color="#ffffff"
        className="ml-3 font-medium text-sm"
        absoluteStrokeWidth
      >
        Kembali
      </span>
    </button>
  );
}
