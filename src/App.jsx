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

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <HeadProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="info" element={<Info />} />
            <Route path="kategori" element={<Kategori />} />
            <Route path="petunjuk" element={<Petunjuk />} />
            <Route path="identitas" element={<Identitas />} />
            <Route path="kegiatan" element={<Kegiatan />} />
            <Route path="info-saya" element={<InfoSaya />} />
          </Route>
        </Routes>
      </Router>
    </HeadProvider>
  );
}

export default App;
