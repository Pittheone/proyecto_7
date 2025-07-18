import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/user/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const ctx = useContext(UserContext);
  const { loginUser } = ctx;

  const [logUser, setLogUser] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setLogUser({ ...logUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(logUser);
    if (res) setErrorMsg(res);
    else navigate("/");
  };

  return (
    <main className="min-h-screen bg-[#fff7f2] flex items-center justify-center px-6 py-16">
      <section className="bg-orange-100 rounded-[2rem] shadow-xl p-10 w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-extrabold text-orange-600">Iniciar sesión</h2>
          <p className="text-gray-700">
            ¿Aún sin cuenta?{" "}
            <Link to="/registro" className="text-orange-500 font-medium hover:underline">
              Regístrate
            </Link>
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
              Tu correo electrónico
            </label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-800 mb-1">
              Tu contraseña
            </label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              required
              className="w-full px-4 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Botón */}
          <div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full font-semibold transition duration-300"
            >
              Acceder a tu cuenta
            </button>
          </div>

          {/* Error */}
          {errorMsg && (
            <p className="text-center text-red-600 text-sm font-medium">{errorMsg}</p>
          )}
        </form>
      </section>
    </main>
  );
}
