import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't display if no previous history
  if (!location.key) return null;

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center justify-center p-2 bg-transparent "
      aria-label="Go Back"
    >
      <ArrowLeft className="w-5 h-5 cursor-pointer" />
      <span className="ml-3 font-medium text-sm">Kembali</span>
    </button>
  );
}
