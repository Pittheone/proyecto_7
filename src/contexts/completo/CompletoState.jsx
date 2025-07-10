import { useReducer } from "react";
import CompletoContext from "./CompletoContext";
import CompletoReducer from "./CompletoReducer";
import axiosClient from "../../config/axios";

const CompletoState = (props) => {
  const initialState = {
    completos: [],
    currentCompleto: {
      _id: null,
      idProd: '',
      name: '',
      img: '',
      price: '',
      description: '',
      slug: '',
    }
  };

  const [globalState, dispatch] = useReducer(CompletoReducer, initialState);

  const getCompletos = async () => {
    try {
      const res = await axiosClient.get("/completo/readall"); // http://localhost:3000/api/guitars
      console.log("Esto es lo que viene de la api", res)
      dispatch({
        type: "OBTENER_COMPLETOS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

const setCurrentCompleto = (completoData) => {
  dispatch({
    type: " OBTENER_COMPLETO",
    payload: completoData,
  });
}

//return lo que va a mostrar/renderizar en pantalla
  return (
    <CompletoContext.Provider
      value={{
        completos: globalState.completos,
        currentCompleto: globalState.currentCompletos,
        getCompletos,
        setCurrentCompleto
      }}
    >
      {props.children}
    </CompletoContext.Provider>
  );
};



export default CompletoState;
