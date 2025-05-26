import { Title } from "react-head";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";
import { getUser, setUser } from "../utils/userStorage";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = getUser();

    if (!user) {
      navigate("/biodata");
    } else {
      setUser(user);
    }
  }, [navigate]);

  return (
    <>
      <Title>Disability App | Beranda </Title>
      <div className="relative min-h-screen flex flex-col">
        <div>
          <Header />
        </div>
        <div className="flex-grow flex items-center justify-center bg-(--friendly-blue)">
          <div className="flex flex-col gap-4 text-center">
            <Link
              to="/kategori"
              className="btn-primary bg-rose-500 transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              Mulai
            </Link>
            <Link
              to="/info"
              className="btn-primary bg-indigo-600 transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              Informasi
            </Link>
            <Link
              to="/biodata"
              className="btn-primary bg-green-600 transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              Update Biodata
            </Link>
          </div>
        </div>
        <div>
          <Footer />
        </div>{" "}
        {/* Overlay loader */}
      </div>
    </>
  );
};

export default Home;
