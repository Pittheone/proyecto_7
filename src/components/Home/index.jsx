import { Link } from "react-router-dom";
import hotdogsImg from "../../components/imgsassets/hotdogs.jpg";

const Home = () => {
  return (
    <main className="min-h-screen px-4 sm:px-6 py-12 bg-[#fff7f2] text-gray-800">
      <section
        className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12"
        style={{ marginLeft: '300px' }}
      >
        {/* Imagen más larga */}
        <div className="bg-orange-100 p-6 rounded-[2rem] shadow-md w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0">
          <div className="h-[600px] w-full overflow-hidden rounded-[2rem]">
            <img
              src={hotdogsImg}
              alt="Hot dogs"
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </div>
          <div className="mt-4 text-center text-orange-500 font-semibold text-lg">
            Únete al sabor
          </div>
        </div>

        {/* Texto principal */}
        <div className="text-center max-w-2xl px-2">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold italic leading-tight mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
            <span className="block">Vive la experiencia</span>
            <span className="block">De los Completos</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg">
            Descubre el sabor auténtico de Chile en cada mordida. Donde se crean conexiones, se comparten risas y nacen memorias inolvidables. Porque acá creemos que el cliente tiene la razón,
            y que siempre la ha tenido. Prueba nuestro delicioso menú; no es necesario correr, llevamos tu completo favorito a la puerta de tu hogar. ¡No esperes más y disfruta de tu nueva experiencia!
            ¡Bienvenido al lugar donde la creatividad se sirve en pan!
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              to="/completos"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition"
            >
              Ver nuestro menú
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
