const CompletoReducer = (globalState, action) => {
    switch (action.type) {
        case "OBTENER_COMPLETOS":
            return {
                ...globalState,
                completos: action.payload,
            };
            case "OBTENER_COMPLETO":
                return {
                    ...globalState,
                    currentCompleto: action.payload,
                }
        default:
            return globalState; 
    }
}

export default CompletoReducer;