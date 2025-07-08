import { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";


// export default function Header() {
//   const {
//     currentUser,
//     cart,
//     authStatus,
//     verifyingUser,
//     logoutUser,
//     getCart,
//     setLoading,
//   } = useContext(UserContext);

//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     setLoading(true);
//     verifyingUser();
//     getCart();
//     setLoading(false);
//   }, []);

//   useEffect(() => {
//     getCart();
//   }, [currentUser]);

//   useEffect(() => {
//     const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
//     setTotal(totalItems);
//   }, [cart]);


const Header = () => {
  return (
    <header className="bg-transparent">
      <nav className="flex justify-between items-center mx-8 py-5">
        <ul className="flex items-center">
          <li className="text-black font-bold text-base px-4 py-2 hover:underline transition cursor-pointer">
            <Link to="/" className="font-medium">
              Inicio
            </Link>
          </li>

          <li className= "text-black font-bold text-base px-4 py-2 hover:underline transition cursor-pointer">
            <Link to="/about" className="font-medium">
            Sobre nosotros
            </Link>

          </li>
          <li className="text-black font-bold text-base px-4 py-2 hover:underline transition cursor-pointer">
            <Link to="/completos" className="font-medium">
              Menú
            </Link>
          </li>
        </ul>

        <section className="flex items-center gap-x-4">
          <Link to="/registro" className="btn-nav">
            Crear cuenta
          </Link>
          <Link to="/iniciar-sesion" className="btn-nav">
            Iniciar sesión
          </Link>
        </section>
      </nav>
    </header>
  );
};

export default Header;
