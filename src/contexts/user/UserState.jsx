import { useReducer } from "react";
import axiosClient from "../../config/axios";
import UserContext from "../user/UserContext";
import userReducer from "./UserRedurcer"; //no debería ser como el de arriba?

const UserState = (props) => {
  const initialState = {
    currentUser: {
      name: "",
      email: "",
      adress: "",
    },
    cart: [],
    authStatus: false,
    sessionURL: null,
    globalLoading: false,
  };
//función que obtenga datos por ID
  const [globalState, dispatch] = useReducer(userReducer, initialState);

  const registerUser = async (form) => {
    try {
      const res = await axiosClient.post("/users/register", form); // http://localhost:3000/api/users/register
      console.log("esto es usertate", res);
      dispatch({
        type: "REGISTRO_EXITOSO",
        payload: res.data,
      });
      return true;
    } catch (error) {
      return false;
    }
  };

  const updateUser = async (formData) => {
    await axiosClient.put("/users/update", formData, {
      withCredentials: true,
    });
  };

  const loginUser = async (form) => {
    try {
      await axiosClient.post("/users/login", form, {
        withCredentials: true,
      });

      dispatch({
        type: "LOGIN_EXITOSO",
      });
      return;
    } catch (error) {
      return error.response.data.msg;
    }
  };

  const verifyUser = async () => {
    try {
      const res = await axiosClient.get("/users/verifytoken", {
        withCredentials: true,
      });
      const userData = res.data.user;
      dispatch({
        type: "GET_USER_DATA",
        payload: userData,
      });
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const logoutUser = async (navigate) => {
    try {
      await axiosClient.post("/users/logout", {}, { withCredentials: true });
      dispatch({
        type: "LOGOUT_EXITOSO",
        payload: "Sesion cerrada correctamente",
      });
      navigate("iniciar-sesion");
    } catch (error) {
      console.log("Error cerrando sesion", error);
    }
  };

  const editCart = async (data) => {
    try {
      const res = await axiosClient.put(
        "/carts/edit-cart", 
        { products: data },
        { withCredentials: true }
      );
      await getCart();
      return res.data.msg;
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const getCart = async () => {
    try {
      const res = await axiosClient.get("/carts/get-cart", {
        withCredentials: true,
      });
        console.log("esto es get cart", res)
      dispatch({
        type: "GET_CART",
        payload: res.data.cart.products,
      });
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const getCheckoutSession = async () => {
 try {
 const res = await axiosClient.get('/carts/create-checkout-session', {
 withCredentials: true
 })
 dispatch({
 type: "GET_CHECKOUT_SESSION",
 payload: res.data.session_url
})
 } catch (error) {
console.log(error);
 return;
 }
 }
 const setLoading = (status) => {
 dispatch({
type: "CHANGE_STATUS_LOADING",
 dispatch: status
 })
 }

  return (
    <UserContext.Provider
      value={{
        currentUser: globalState.currentUser,
        cart: globalState.cart,
        authStatus: globalState.authStatus,
        loginUser,
        registerUser,
        verifyUser,
        logoutUser,
        updateUser,
        editCart,
        getCart,
        getCheckoutSession,
        setLoading
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
