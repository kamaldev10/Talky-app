import {
  User,
  ArrowBigLeftDash,
  ArrowBigRightDash,
  LogOut,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { clearUser, getUser } from "../utils/userStorage";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = getUser();
    setUser(userData);
  }, []);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Panggil server logout
      await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Hapus data user di localStorage browser
      clearUser();

      // Redirect ke halaman login / biodata / beranda
      navigate("/biodata");
    } catch (err) {
      alert("Gagal logout: " + err.message);
    }
  };

  return (
    <>
      <header className="flex justify-between items-center bg-[var(--friendly-blue)] py-4 px-4 border-b-2 border-violet-500 relative z-20">
        <h1 className="font-bold text-xl text-violet-700">Disability App</h1>
        {/* Toggle button visible on small screens */}
        <button
          className="md:hidden flex items-center p-2 rounded-md text-violet-700  transition cursor-pointer"
          aria-label="Toggle User Info Sidebar"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <ArrowBigLeftDash size={20} />
          ) : (
            <ArrowBigRightDash size={20} />
          )}
        </button>
        {/* User info visible on md and up */}
        <ul className="hidden md:flex items-center gap-2 md:gap-10 text-violet-700">
          <li className="flex items-center ">
            <User size={18} strokeWidth={1.5} className="stroke-violet-700" />
            <p className="text-xs ms-1 font-semibold ">
              {user?.nama || "Pengguna"}
            </p>
          </li>
          <li
            className="flex items-center text-violet-700 cursor-pointer"
            onClick={handleLogout}
          >
            <LogOut size={18} strokeWidth={1.5} />
            <p className="text-xs ms-1 text-violet-700 font-semibold">Keluar</p>
          </li>
        </ul>
      </header>

      <aside
        className={`
          fixed top-0 right-0 min-h-auto min-w-1/2 max-w-xs rounded-bl-2xl bg-white bg-opacity-40 shadow-lg z-30
          transform transition-transform duration-200 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
        aria-hidden={!isOpen}
      >
        <div className="pt-2 ps-3 mb-2 border-b-1 border-b-viole-300">
          <button
            className="cursor-pointer text-violet-700"
            onClick={() => setIsOpen(false)}
            aria-label="Close Sidebar"
          >
            <ArrowBigLeftDash size={20} />
          </button>
        </div>
        <div className="ps-10  pb-5 pt-1 flex flex-col gap-4">
          <ul className="list-none flex flex-col gap-3 cursor-pointer">
            <li className="flex items-center text-violet-700">
              <User size={18} strokeWidth={1.5} />
              <p className="text-xs ms-3 text-violet-700 font-semibold">
                {user?.nama || "Pengguna"}
              </p>
            </li>
            <li
              className="flex items-center text-violet-700"
              onClick={handleLogout}
            >
              <LogOut size={18} strokeWidth={1.5} />
              <p className="text-xs ms-3 text-violet-700 font-semibold">
                Keluar
              </p>
            </li>
          </ul>
        </div>
      </aside>

      {/* Overlay background when sidebar open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/30 backdrop-blur-[1px] z-20"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Header;
