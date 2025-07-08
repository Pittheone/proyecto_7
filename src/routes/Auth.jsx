import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../contexts/user/UserContext";

export default function AuthRoute({ component: component }) {
const userCtx = useContext(UserContext);
const { authStatus, verifyUser } = userCtx;

useEffect(() => {
    const verifyToken = async () => {
        await verifyUser();
    };
    verifyToken();
    
}, [authStatus, verifyUser]);

return <>{authStatus ? <Navigate replace to="/" /> : <Component />}</>;
}