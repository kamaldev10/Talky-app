import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setUser, getUser } from "../utils/userStorage";
import HobbyInput from "../components/HobbyInput ";
import { Slide, toast } from "react-toastify";
import GoogleStyleLoader from "../components/loader/GoogleStyleLoader";

const BiodataForm = () => {
  const [formData, setFormData] = useState({
    nama: "",
    umur: "",
    hobi: [""],
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedUser = getUser();
    if (savedUser) {
      setFormData({
        nama: savedUser.nama || "",
        umur: savedUser.umur || "",
        hobi:
          Array.isArray(savedUser.hobi) && savedUser.hobi.length > 0
            ? savedUser.hobi
            : [""],
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleHobbyChange = (e, index) => {
    const updatedHobbies = [...formData.hobi];
    updatedHobbies[index] = e.target.value;
    setFormData((prev) => ({ ...prev, hobi: updatedHobbies }));
  };

  const addHobby = () => {
    setFormData((prev) => ({ ...prev, hobi: [...prev.hobi, ""] }));
  };

  const removeHobby = (index) => {
    const updatedHobbies = [...formData.hobi];
    updatedHobbies.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      hobi: updatedHobbies.length ? updatedHobbies : [""],
    }));
  };

  if (!location.key) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setUser(formData);

      toast.success("Biodata berhasil disimpan!", {
        position: "top-center",
        autoClose: 999,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Slide,
      });

      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 1000);
    } catch (err) {
      setLoading(false);
      console.error("Gagal menyimpan data:", err);
      alert("Terjadi kesalahan saat menyimpan data.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--friendly-blue)]">
      <div className="flex-grow flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full w-sm md:w-lg bg-white rounded-lg shadow-lg p-8 my-10"
        >
          <h1 className="text-xl font-bold mb-6 text-center text-violet-700">
            Form Biodata
          </h1>

          {/* Nama */}
          <div className="mb-4">
            <label
              htmlFor="nama"
              className="block mb-1 text-sm font-semibold text-black"
            >
              Nama Lengkap <span className="text-red-600">*</span>
            </label>
            <input
              id="nama"
              name="nama"
              type="text"
              value={formData.nama}
              onChange={handleChange}
              required
              placeholder="Masukkan nama lengkap"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
              autoFocus
            />
          </div>

          {/* Umur */}
          <div className="mb-4">
            <label
              htmlFor="umur"
              className="block mb-1 text-sm font-semibold text-black"
            >
              Umur <span className="text-red-600">*</span>
            </label>
            <input
              id="umur"
              name="umur"
              type="number"
              min="0"
              max="120"
              value={formData.umur}
              onChange={handleChange}
              required
              placeholder="Masukkan umur"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
            />
          </div>

          {/* Hobi */}
          <HobbyInput
            values={formData.hobi}
            onChange={handleHobbyChange}
            onAdd={addHobby}
            onRemove={removeHobby}
          />

          <div className="flex justify-between gap-5">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-1/2 bg-gray-700 hover:bg-gray-800 text-white py-3 rounded-md text-sm font-semibold  transition"
            >
              Batal
            </button>
            <button
              type="submit"
              className="w-1/2 bg-green-700 hover:bg-green-800 text-white py-3 rounded-md text-sm font-semibold transition"
              disabled={loading}
            >
              {loading ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </form>
      </div>

      {loading && (
        <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
          <GoogleStyleLoader />
        </div>
      )}
    </div>
  );
};

export default BiodataForm;
