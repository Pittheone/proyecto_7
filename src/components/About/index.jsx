import aboutUsImg from "../../components/imgsassets/about-us.jpg";
import stomachAcheImg from "../../components/imgsassets/stomach-ache.jpg";
import manImg from "../../components/imgsassets/happy-man.jpg";
import womanImg from "../../components/imgsassets/happy-woman.jpg";
import womanTwoImg from "../../components/imgsassets/happy-woman-two.jpg";
import placeImg from "../../components/imgsassets/place.jpg";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <main className="min-h-screen px-4 sm:px-6 py-16 bg-[#fff7f2] text-gray-800 space-y-32">

      {/* Sección 1: Nuestra historia */}
      <section className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
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

        <div className="lg:w-1/2">
          <img
            src={stomachAcheImg}
            alt="Dolor de estómago"
            className="w-full rounded-2xl shadow-md object-cover"
          />
        </div>
      </section>

      {/* Sección 3: Nuestro lugar */}
      <section className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <img
            src={placeImg}
            alt="Nuestro local"
            className="w-full rounded-2xl shadow-md object-cover"
          />
        </div>

        <div className="lg:w-1/2 text-left">
          <h2 className="text-5xl sm:text-6xl font-bold italic leading-tight mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
            Nuestro lugar
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Te damos la bienvenida a un espacio moderno, acogedor y lleno de energía positiva.
            Nuestro local fue diseñado para que disfrutes cada bocado en un ambiente limpio, cómodo y rodeado de buena vibra.
            <br /><br />
            Ya sea que vengas solo, con amigos o en familia, aquí siempre encontrarás una sonrisa y un completo saludable esperándote. Visítamos en av Vickuña Maquena 555.
          </p>
        </div>
      </section>

      {/* Sección 4: Reviews */}
      <section className="bg-[#fff7f2] py-20">
        <div className="max-w-6xl mx-auto text-center px-4 space-y-8">
          <div>
            <p className="text-gray-700 font-semibold text-lg">
              ★★★★★ 4.8/5 rating - 9,772 reviews
            </p>
            <h2 className="text-5xl sm:text-6xl font-bold italic bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
              Amado por miles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {/* Review 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center bg-white"
            >
              <img src={manImg} alt="Usuario feliz" className="w-24 h-24 rounded-full object-cover mb-4" />
              <p className="text-sm font-semibold mb-2">★★★★★ 5/5 rating</p>
              <p className="text-gray-700 text-base mb-4">
                “Desde que probé nuestros completos saludables, ya no me siento pesado ni con malestar después de comer. ¡Volví a disfrutar sin culpa!”
              </p>
              <p className="font-bold">JUAN</p>
            </motion.div>

            {/* Review 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200, delay: 0.2 }}
              viewport={{ once: true }}
              className="border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center bg-white"
            >
              <img src={womanImg} alt="Usuaria feliz" className="w-24 h-24 rounded-full object-cover mb-4" />
              <p className="text-sm font-semibold mb-2">★★★★★ 5/5 rating</p>
              <p className="text-gray-700 text-base mb-4">
                “Nunca pensé que un completo pudiera ser saludable y delicioso a la vez. ¡Una experiencia que repito semana a semana!”
              </p>
              <p className="font-bold">CAMILA</p>
            </motion.div>

            {/* Review 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200, delay: 0.4 }}
              viewport={{ once: true }}
              className="border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center bg-white"
            >
              <img src={womanTwoImg} alt="Usuaria feliz" className="w-24 h-24 rounded-full object-cover mb-4" />
              <p className="text-sm font-semibold mb-2">★★★★★ 5/5 rating</p>
              <p className="text-gray-700 text-base mb-4">
                “Mi digestión ha mejorado desde que dejé los completos clásicos y probé esta alternativa saludable. ¡Sabor increíble y sin culpa!”
              </p>
              <p className="font-bold">FERNANDA</p>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutUs;
