import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <main className="min-h-screen bg-[#fff7f2] flex items-center justify-center px-6 py-24">
      <section className="bg-orange-100 rounded-[2rem] shadow-xl p-10 max-w-xl w-full text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-600">
          ¡Gracias por tu compra!
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Tu pago fue procesado con éxito. Estamos preparando tu pedido para que lo disfrutes muy pronto. 🍴
        </p>

        <div className="mt-6">
          <Link
            to="/completos"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            Volver al menú
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SuccessPage;
