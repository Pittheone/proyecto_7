import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/user/UserContext";
import { formatCLP } from "../../Utils/formatCLP";

export default function Checkout() {
  const userCtx = useContext(UserContext);
  const { cart, sessionURL, getCheckoutSession, editCart } = userCtx;
  const [total, setTotal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    getCheckoutSession();
  };

  useEffect(() => {
    if (sessionURL) window.location.href = sessionURL;
  }, [sessionURL]);

  useEffect(() => {
    const reduceTotalFromOrder = () => {
      return cart.reduce((acc, cv) => {
        return acc + cv.price * cv.quantity;
      }, 0);
    };

    setTotal(reduceTotalFromOrder());
  }, [cart]);

  const handleChange = (e) => {
    const updatedCart = cart.map((elt) =>
      elt.priceID === e.target.name
        ? { ...elt, quantity: parseInt(e.target.value) }
        : elt
    );

    editCart(updatedCart);
  };

  const handleRemove = (e, currentPriceID) => {
    e.preventDefault();

    const updatedCart = cart.filter((elt) => elt.priceID !== currentPriceID);
    editCart(updatedCart);
  };

  return (
    <main className="min-h-screen bg-[#fff7f2] text-gray-800 px-6 py-16">
      <div className="max-w-4xl mx-auto bg-orange-100 rounded-[2rem] shadow-xl p-8 space-y-10">
        <h1 className="text-4xl font-extrabold text-orange-600 text-center">Tu carrito</h1>

        <form>
          <ul className="space-y-8">
            {cart.map((e) => (
              <li key={e._id} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <figure className="w-32 h-32 overflow-hidden rounded-xl shadow-md">
                  <img
                    src={e.img}
                    alt={e.name}
                    className="w-full h-full object-cover"
                  />
                </figure>

                <div className="flex-1 space-y-2">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-semibold">{e.name}</h3>
                    <p className="text-lg font-bold text-gray-800">{formatCLP(e.price * e.quantity)}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <select
                      value={e.quantity}
                      name={e.priceID}
                      onChange={handleChange}
                      className="border border-orange-300 rounded-md px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>

                    <button
                      type="button"
                      onClick={(evt) => handleRemove(evt, e.priceID)}
                      className="text-sm text-orange-600 hover:underline"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-white rounded-xl shadow-md mt-12 p-6">
            <div className="flex items-center justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>{formatCLP(total)}</span>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={handleSubmit}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
            >
              Procesar pago
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
