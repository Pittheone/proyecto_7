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
                        currentUser: action.payload
                    };
                    case "LOGOUT_EXITOSO":
                        return {
                            ...globalState,
                            currentUser: null,
                            authStatus: false,
                            msg: action.payload
                        };
            default: globalState;
        // case "LOGIN_EXITOSO":
        //     localStorage.setItem("token", action.payload);
        //     return {
        //         ...globalState,
        //         authStatus: true
        //     };
        // case "LOGOUT_USUARIO":
        //     localStorage.removeItem("token");
        //     return {
        //         ...globalState,
        //         currentUser: {},
        //         authStatus: false
        //     };
        // default:
        //     return globalState;
    }
}

export default UserReducer;