import { useReducer } from "react";
import CompletoContext from "./CompletoContext";
import CompletoReducer from "./CompletoReducer";
import axiosClient from "../../config/axios";

const CompletoState = (props) => {
  const initialState = {
    completos: []
  };

  const [globalState, dispatch] = useReducer(CompletoReducer, initialState);

  const getCompletos = async () => {
    try {
      const res = await axiosClient.get("/completo/readall"); // http://localhost:3000/api/guitars
      console.log(res)
      dispatch({
        type: "OBTENER_COMPLETOS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
//return lo que va a mostrar/renderizar en pantalla
  return (
    <CompletoContext.Provider
      value={{
        completos: globalState.completos,
        getCompletos
      }}
    >
      {props.children}
    </CompletoContext.Provider>
  );
};



export default CompletoState;
