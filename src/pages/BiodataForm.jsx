import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SiblingsInput from "../components/SiblingsInput";
import { getUser, setUser } from "../utils/userStorage";

const BiodataForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: "",
    umur: "",
    namaKakek: "",
    namaNenek: "",
    namaAyah: "",
    namaIbu: "",
    namaKakak: [""],
    namaAdik: [""],
  });

  const handleChange = (e, index, type) => {
    const { name, value } = e.target;

    if (type === "kakak") {
      const kakakArray = [...formData.namaKakak];
      kakakArray[index] = value;
      setFormData((prev) => ({
        ...prev,
        namaKakak: kakakArray,
      }));
    } else if (type === "adik") {
      const adikArray = [...formData.namaAdik];
      adikArray[index] = value;
      setFormData((prev) => ({
        ...prev,
        namaAdik: adikArray,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const addSibling = (type) => {
    if (type === "kakak") {
      setFormData((prev) => ({
        ...prev,
        namaKakak: [...prev.namaKakak, ""],
      }));
    } else if (type === "adik") {
      setFormData((prev) => ({
        ...prev,
        namaAdik: [...prev.namaAdik, ""],
      }));
    }
  };

  const removeSibling = (index, type) => {
    if (type === "kakak") {
      const kakakArray = [...formData.namaKakak];
      kakakArray.splice(index, 1);
      setFormData((prev) => ({
        ...prev,
        namaKakak: kakakArray.length ? kakakArray : [""],
      }));
    } else if (type === "adik") {
      const adikArray = [...formData.namaAdik];
      adikArray.splice(index, 1);
      setFormData((prev) => ({
        ...prev,
        namaAdik: adikArray.length ? adikArray : [""],
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      setUser(formData); // simpan langsung di localStorage lewat setUser (import dari userStorage.js)

      alert("Biodata berhasil disimpan.");
      navigate("/");
    } catch (err) {
      console.error("Gagal menyimpan data:", err);
      alert("Terjadi kesalahan saat menyimpan data.");
    }
  };

  useEffect(() => {
    async function loadUser() {
      const savedData = await getUser();
      if (savedData) {
        setFormData({
          ...savedData,
          // pastikan kakak dan adik array minimal ada 1 item kosong
          namaKakak: savedData.namaKakak?.length ? savedData.namaKakak : [""],
          namaAdik: savedData.namaAdik?.length ? savedData.namaAdik : [""],
        });
      }
    }
    loadUser();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--friendly-blue)]">
      <div className="flex-grow flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 mt-2"
          noValidate
        >
          <h1 className="text-xl font-bold mb-6 text-center text-violet-700">
            Form Pengisian Biodata
          </h1>

          <div className="mb-4">
            <label
              htmlFor="nama"
              className="block mb-1 text-sm font-semibold text-violet-700"
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

          <div className="mb-4">
            <label
              htmlFor="umur"
              className="block mb-1 text-sm font-semibold text-violet-700"
            >
              Umur <span className="text-red-600">*</span>
            </label>
            <input
              id="umur"
              name="umur"
              type="number"
              min="0"
              max="120"
              step="1"
              inputMode="numeric"
              pattern="[0-9]*"
              value={formData.umur}
              onChange={(e) => {
                const value = e.target.value;
                // Izinkan kosong, tapi jika diisi harus angka bulat dan dalam rentang 0-120
                if (value === "" || (/^\d+$/.test(value) && +value <= 120)) {
                  handleChange(e);
                }
              }}
              required
              placeholder="Masukkan umur"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="namaKakek"
              className="block mb-1 text-sm font-semibold text-violet-700"
            >
              Nama Kakek <span className="text-red-600">*</span>
            </label>
            <input
              id="namaKakek"
              name="namaKakek"
              type="text"
              value={formData.namaKakek}
              onChange={handleChange}
              required
              placeholder="Masukkan nama Kakek"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="namaNenek"
              className="block mb-1 text-sm font-semibold text-violet-700"
            >
              Nama Nenek <span className="text-red-600">*</span>
            </label>
            <input
              id="namaNenek"
              name="namaNenek"
              type="text"
              value={formData.namaNenek}
              onChange={handleChange}
              required
              placeholder="Masukkan nama Nenek"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="namaAyah"
              className="block mb-1 text-sm font-semibold text-violet-700"
            >
              Nama Ayah <span className="text-red-600">*</span>
            </label>
            <input
              id="namaAyah"
              name="namaAyah"
              type="text"
              value={formData.namaAyah}
              onChange={handleChange}
              required
              placeholder="Masukkan nama Ayah"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="namaIbu"
              className="block mb-1 text-sm font-semibold text-violet-700"
            >
              Nama Ibu <span className="text-red-600">*</span>
            </label>
            <input
              id="namaIbu"
              name="namaIbu"
              type="text"
              value={formData.namaIbu}
              onChange={handleChange}
              required
              placeholder="Masukkan nama Ibu"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
            />
          </div>

          {/* Kakak */}
          <SiblingsInput
            label="Nama Kakak"
            values={formData.namaKakak}
            onChange={(e, idx) => handleChange(e, idx, "kakak")}
            onAdd={() => addSibling("kakak")}
            onRemove={(idx) => removeSibling(idx, "kakak")}
          />
          {/* Adik */}
          <SiblingsInput
            label="Nama Adik"
            values={formData.namaAdik}
            onChange={(e, idx) => handleChange(e, idx, "adik")}
            onAdd={() => addSibling("adik")}
            onRemove={(idx) => removeSibling(idx, "adik")}
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-1/2  bg-violet-700 text-white py-3 rounded-md text-sm font-semibold hover:bg-violet-800 transition"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BiodataForm;
