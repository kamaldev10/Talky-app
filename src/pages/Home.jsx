import { Title } from "react-head";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Title>Disability App | Beranda </Title>
      <div className="min-h-screen flex items-center justify-center bg-(--friendly-blue) ">
        <div className="flex flex-col gap-4 text-center ">
          <Link
            to="/kategori"
            className="btn-primary transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            Mulai
          </Link>
          <Link
            to="/info"
            className="btn-primary transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            Informasi
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
