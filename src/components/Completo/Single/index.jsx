import { Link, useLocation, useNavigate } from "react-router-dom";
import { formatCLP } from "../../../Utils/formatCLP";
import UserContext from "../../../contexts/user/UserContext";
import { useContext, useEffect, useState } from "react";
import CompletoContext from "../../../contexts/completo/CompletoContext";

const SingleCompleto = () => {
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  const { completo } = location?.state || {};

  const userCtx = useContext(UserContext);
  const { authStatus, cart, editCart, getCart } = userCtx;

  const { setCurrentCompleto } = useContext(CompletoContext);

  useEffect(() => {
    if (!completo) {
      navigate("/completos");
      return;
    }

    setCurrentCompleto(completo);
    getCart();
  }, []);

  const handleChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (quantity === 0) return;

    const item = {
      priceID: completo.priceID,
      name: completo.name,
      quantity,
      price: completo.price,
      img: completo.img,
      slug: completo.slug,
    };

    const existingItemIndex = cart.findIndex((el) => el.priceID === item.priceID);

    let updatedCart;

    if (existingItemIndex !== -1) {
      updatedCart = cart.map((el, i) =>
        i === existingItemIndex ? { ...el, quantity: item.quantity } : el
      );
    } else {
      updatedCart = [...cart, item];
    }

    await editCart(updatedCart);
  };

  if (!completo) return null;

  const { name, description, img, price } = completo;
  const quantityOptions = [0, 1, 2, 3, 4, 5];

  return (
    <main className="min-h-screen bg-[#fff7f2] text-gray-800 px-6 py-16">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Card de información */}
        <section className="relative w-full max-w-xl rounded-[2rem] overflow-hidden bg-orange-100 shadow-xl p-6 space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-orange-600">
            {name}
          </h1>

          <div className="w-16 h-1 bg-orange-500 rounded mt-1 mb-2"></div>

          <p className="text-lg text-gray-600 italic leading-relaxed text-center">
            {description}
          </p>

          <p className="text-2xl font-semibold text-gray-800 text-center">
            <span className="text-base font-normal text-gray-500 mr-2">Precio:</span>
            {formatCLP(price)}
          </p>

          {authStatus && (
            <form onSubmit={handleSubmit} className="space-y-4 text-center">
              <div className="flex flex-col items-center">
                <label className="block mb-2 font-medium text-gray-700">
                  Cantidad
                </label>

                <select
                  className="w-32 border border-orange-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  value={quantity}
                  onChange={handleChange}
                >
                  {quantityOptions.map((q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className={`w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full font-semibold transition duration-300 ${
                  quantity === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={quantity === 0}
              >
                {cart.length ? "Modificar carrito" : "Agregar al carrito"}
              </button>
            </form>
          )}

          {/* Botón volver al menú */}
          <div className="mt-6">
            <Link
              to="/completos"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full font-semibold transition duration-300 text-center block"
            >
              Volver al menú
            </Link>
          </div>

          {!authStatus && (
            <Link to="/registro">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full font-semibold transition duration-300 mt-6">
                Regístrate para comprar
              </button>
            </Link>
          )}
        </section>

        {/* Imagen */}
        <figure>
          <img
            src={img}
            alt={description}
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
          />
        </figure>
      </div>
    </main>
  );
};

export default SingleCompleto;
