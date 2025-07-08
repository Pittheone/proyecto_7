import aboutUsImg from "../../components/imgsassets/about-us.jpg";
import stomachAcheImg from "../../components/imgsassets/stomach-ache.jpg";
import manImg from "../../components/imgsassets/happy-man.jpg";
import womanImg from "../../components/imgsassets/happy-woman.jpg";
import womanTwoImg from "../../components/imgsassets/happy-woman-two.jpg";

const AboutUs = () => {
  return (
    <main className="min-h-screen px-4 sm:px-6 py-16 bg-[#fff7f2] text-gray-800 space-y-32">

      {/* Sección 1: Nuestra historia */}
      <section className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Texto izquierda */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-5xl sm:text-6xl font-bold italic leading-tight mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
            Conoce nuestra historia
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Somos amantes de los completos, pero también de la buena alimentación.
            Creamos una propuesta única: completos chilenos con ingredientes sanos, frescos y sabrosos.
            <br /><br />
            Desde nuestros inicios, nos propusimos transformar este clásico nacional en una experiencia nutritiva sin perder el sabor que todos amamos.
            ¡Gracias por ser parte de esta revolución deliciosa!
          </p>
        </div>

        {/* Imagen derecha */}
        <div className="lg:w-1/2">
          <img
            src={aboutUsImg}
            alt="Completos saludables"
            className="w-full rounded-2xl shadow-md object-cover"
          />
        </div>
      </section>

      {/* Sección 2: El problema */}
      <section className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12">
        {/* Texto derecha */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-5xl sm:text-6xl font-bold italic leading-tight mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
            El problema
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Después de años de comer comida rápida, nuestro cuerpo comenzó a resentirse: dolores de estómago, falta de energía y sensación constante de pesadez.
            Lo peor era que muchos ni siquiera sabíamos por qué. <br /><br />
            Así descubrimos que lo que parecía “normal” no lo era. El exceso de grasas saturadas, sodio y procesados estaba afectando nuestro día a día.
            ¡Queríamos cambiar eso! Y por eso creamos una nueva forma de disfrutar completos: igual de ricos, pero mucho más amables con tu cuerpo.
          </p>
        </div>

        {/* Imagen izquierda */}
        <div className="lg:w-1/2">
          <img
            src={stomachAcheImg}
            alt="Dolor de estómago"
            className="w-full rounded-2xl shadow-md object-cover"
          />
        </div>
      </section>

<section className="bg-[#fff7f2] py-20">
  <div className="max-w-6xl mx-auto text-center px-4 space-y-8">
    {/* Encabezado de Reviews */}
    <div>
      <p className="text-gray-700 font-semibold text-lg">
        ★★★★★ 4.8/5 rating - 9,772 reviews
      </p>
      <h2 className="text-5xl sm:text-6xl font-bold italic bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
        _Amado por miles_
      </h2>
    </div>

    {/* Tarjetas de Reviews */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
      
      {/* Review 1 */}
      <div className="border border-gray-300 rounded-xl p-6 shadow-md flex flex-col items-center text-center">
        <img
          src={manImg}
          alt="Usuario feliz"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <p className="text-sm font-semibold mb-2">★★★★★ 5/5 rating</p>
        <p className="text-gray-700 text-base mb-4">
          “Desde que probé nuestros completos saludables, ya no me siento pesado ni con malestar después de comer. ¡Volví a disfrutar sin culpa!”
        </p>
        <p className="font-bold">JUAN</p>
      </div>

      {/* Review 2 */}
      <div className="border border-gray-300 rounded-xl p-6 shadow-md flex flex-col items-center text-center">
        <img
          src={womanImg}
          alt="Usuaria feliz"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <p className="text-sm font-semibold mb-2">★★★★★ 5/5 rating</p>
        <p className="text-gray-700 text-base mb-4">
          “Nunca pensé que un completo pudiera ser saludable y delicioso a la vez. ¡Una experiencia que repito semana a semana!”
        </p>
        <p className="font-bold">CAMILA</p>
      </div>

      {/* Review 3 */}
      <div className="border border-gray-300 rounded-xl p-6 shadow-md flex flex-col items-center text-center">
        <img
          src={womanTwoImg}
          alt="Usuaria feliz"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <p className="text-sm font-semibold mb-2">★★★★★ 5/5 rating</p>
        <p className="text-gray-700 text-base mb-4">
          “Mi digestión ha mejorado desde que dejé los completos clásicos y probé esta alternativa saludable. ¡Sabor increíble y sin culpa!”
        </p>
        <p className="font-bold">FERNANDA</p>
      </div>
    </div>
  </div>
</section>

    </main>
  );
};

export default AboutUs;
