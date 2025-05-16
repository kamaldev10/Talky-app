// src/utils/userStorage.js

const USER_KEY = "userData";

/**
 * Simpan data user ke localStorage
 * @param {Object} data
 */
export function setUser(data) {
  try {
    const json = JSON.stringify(data);
    localStorage.setItem(USER_KEY, json);
  } catch (err) {
    console.error("Gagal menyimpan user data:", err);
  }
}

/**
 * Ambil data user dari localStorage
 * @returns {Object|null}
 */
export function getUser() {
  try {
    const data = localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error("Gagal membaca user data:", err);
    return null;
  }
}

/**
 * Hapus data user dari localStorage
 */
export function clearUser() {
  try {
    localStorage.removeItem(USER_KEY);
  } catch (err) {
    console.error("Gagal menghapus user data:", err);
  }
}
