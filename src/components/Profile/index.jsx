import { useState, useContext, useEffect } from "react";
import UserContext from "../../contexts/user/UserContext";

export default function Profile() {
  const userCtx = useContext(UserContext);
  const { updateUser } = userCtx;
  const { name, adress, email } = userCtx.currentUser;

  const [userForm, setUserForm] = useState({
    name: "",
    adress: "",
    email: ""
  });

  useEffect(() => {
    const updateData = () => {
      return setUserForm({
        ...userForm,
        name, adress, email
      })
    };

    updateData();
  }, []);
  

  const handleChange = (event) => {
    setUserForm({
      ...userForm,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = async (event) => {
    event.preventDefault();
    await updateUser(userForm);
  };

  return (
    <main className="min-h-screen bg-[#fff7f2] text-gray-800 px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold italic text-orange-600">
              Tu perfil
            </h2>
            <p className="text-gray-600 mt-2">
              ¿Quieres modificar información importante de tu cuenta?
            </p>
          </div>

          <form onSubmit={sendData} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tu nombre de usuario
                </label>
                <input
                  type="text"
                  name="name"
                  value={userForm.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tu email
                </label>
                <input
                  type="email"
                  name="email"
                  value={userForm.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dirección
                </label>
                <input
                  type="text"
                  name="adress"
                  value={userForm.adress}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
              >
                Guardar cambios
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
