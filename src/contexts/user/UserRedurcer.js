const UserReducer = (globalState, action) => {
  switch (action.type) {
    case "REGISTRO_EXITOSO":
      return {
        ...globalState,
        message: "Usuario registrado correctamente",
      };
    case "LOGIN_EXITOSO":
      return {
        ...globalState,
        authStatus: true,
      };
    case "GET_USER_DATA":
      return {
        ...globalState,
        authStatus: true,
        currentUser: action.payload,
      };
    case "LOGOUT_EXITOSO":
      return {
        ...globalState,
        currentUser: null,
        authStatus: false,
        msg: action.payload,
      };
    case "GET_CART":
      return {
        ...globalState,
        cart: action.payload,
      };
    case "GET_CHECKOUT_SESSION":
      return {
        ...globalState,
        sessionURL: action.payload,
      };
    case "CHANGE_STATUS_LOADING":
      return {
        ...globalState,
        globalLoading: action.payload,
      };

    default:
      globalState;
  }
};

export default UserReducer;
