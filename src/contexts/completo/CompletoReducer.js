const CompletoReducer = (globalState, action) => {
    switch (action.type) {
        case "OBTENER_COMPLETOS":
            return {
                ...globalState,
                completos: action.payload,
            };
        default:
            return globalState; //solo lo que está en base de datos
    }
}

export default CompletoReducer;