import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { HeadProvider } from "react-head";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Petunjuk from "./pages/Petunjuk";
import Identitas from "./pages/Identitas";
import Kegiatan from "./pages/Kegiatan";
import InfoSaya from "./pages/InfoSaya";
import Kategori from "./pages/Kategori";
import InfoKeluarga from "./pages/InfoKeluarga";
import BiodataForm from "./pages/BiodataForm";

function Layout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

function App() {
  return (
    <HeadProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="kategori" element={<Kategori />} />
            <Route path="kategori/kegiatan" element={<Kegiatan />} />
            <Route path="kategori/info-saya" element={<InfoSaya />} />
            <Route path="kategori/info-keluarga" element={<InfoKeluarga />} />

            <Route path="info" element={<Info />} />
            <Route path="info/petunjuk" element={<Petunjuk />} />
            <Route path="info/identitas" element={<Identitas />} />
          </Route>

          {/* letakkan ini di luar Layout, biar nggak ikut <Outlet /> */}
          <Route path="/biodata" element={<BiodataForm />} />
        </Routes>
      </Router>
    </HeadProvider>
  );
}

export default App;
