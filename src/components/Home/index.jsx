import { Link } from "react-router-dom";
import hotdogsImg from "../../components/imgsassets/hotdogs.jpg";

const Home = () => {
  return (
    <main className="min-h-screen px-6 py-16 bg-[#fff7f2] text-gray-800">
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

        {/* Imagen con estilo */}
        <div className="relative mx-auto w-full max-w-md rounded-[2rem] overflow-hidden bg-orange-100 shadow-xl p-4">
          <div className="rounded-[2rem] overflow-hidden">
            <img
              src={hotdogsImg}
              alt="Hot dogs"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Texto + Curva SVG */}
        <div className="relative text-center lg:text-left space-y-6 px-4">

          {/* Título con SVG decorativo */}
          <div className="relative inline-block z-10">
            <h1 className="text-5xl sm:text-6xl font-bold italic leading-tight bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
              <span className="block">Vive la</span>
              <span className="block ml-4">experiencia</span>
              <span className="block ml-8">De los</span>
              <span className="block ml-12">Completos</span>
            </h1>

            {/* Curva SVG sin diamante */}
            <svg
              viewBox="0 0 400 250"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
            >
              <path
                d="M10,125 Q200 -50 390 125 Q200 300 10 125"
                stroke="#fb923c"
                strokeWidth="2"
                fill="none"
                opacity="0.2"
              />
            </svg>
          </div>

          {/* Párrafo descriptivo */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed z-10 relative">
            Descubre el sabor auténtico de Chile en cada mordida. Donde se crean
            conexiones, se comparten risas y nacen memorias inolvidables. Porque acá creemos que
            el cliente tiene la razón, y que siempre la ha tenido.
            <br /><br />
            Prueba nuestro delicioso menú; no es necesario correr, llevamos tu
            completo favorito a la puerta de tu hogar. ¡No esperes más y disfruta de tu nueva experiencia!
          </p>

          {/* Botón */}
          <div>
            <Link
              to="/completos"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300"
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
