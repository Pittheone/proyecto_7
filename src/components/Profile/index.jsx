import { useState, useContext, useEffect } from "react";

import UserContext from "../../contexts/user/UserContext";

export default function Profile() {

  const userCtx = useContext(UserContext);


  const { updateUser } = userCtx;



  const { name, email, address } =
    userCtx
    console.log(name, email, address);

  const [userForm, setUserForm] = useState({
    username: "",
    address: "",
  });
//armar 
  // useEffect(() => {
  //   const updateData = () => {
  //     return setUserForm({
  //       ...userForm,
  //       name,
  //       address,
  //     });
  //   };

  //   updateData();
  // }, []);

useEffect(() => {
  if (userCtx.currentUser) {
    setUserForm({
      username: userCtx?.currentUser?.name || "", // o "username" si ese es el campo correcto
      address: userCtx?.currentUser?.address || "",
    });
  }
}, [userCtx.currentUser]);

  const handleChange = async (event) => {
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
    <>
      <div className="mx-auto py-4 px-8">
        <div className="space-y-16 ">
          <section>
            <form
              onSubmit={(e) => {
                sendData(e);
              }}
            >
              <div className="">
                <div className="px-4">
                  <div>
                    <h2 className="text-3xl font-bold mt-8">Tu perfil</h2>
                    <p className="mt-2 mb-8 text-sm">
                      Aquí va informacion importante sobre tu cuenta.
                    </p>
                  </div>

                  <div className="mt-6 grid grid-cols-4 gap-6">
                    <div className="col-span-4 sm:col-span-2">
                      <label className="form-label">Tu nombre de usuario</label>
                      <input
                        type="text"
                        name="username"
                        value={userForm?.username} //
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className="form-input"
                      />
                    </div>

                    <div className="col-span-4 sm:col-span-2">
                      <label className="form-label">Tu email</label>
                      <input
                        disabled
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className="form-input"
                      />
                    </div>



                    <div className="col-span-4 sm:col-span-3">
                      <label className="form-label">Dirección</label>
                      <input
                        type="text"
                        name="address"
                        value={userForm?.address} //
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 px-4 py-3">
                  <button type="submit" className="form-button w-auto">
                    Guardar cambios
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
