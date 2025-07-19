import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/user/UserContext"
import { Navigate} from "react-router-dom";

export default function PrivateRoute({ component: Component }) {
  const userCtx = useContext(UserContext);

  const { authStatus, verifyUser } = userCtx;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      return await verifyUser();
    };

    verifyToken();
    setLoading(false);
  }, [authStatus]);

  if (loading) return null

  return (
    <>
      {" "}
      { authStatus ? <Component /> : <Navigate replace to="/iniciar-sesion" /> }
      {" "}
    </>
  )
}












// const PrivateRoute = () => {
//   return (
//     <div>PrivateRoute</div>
//   )
// }

// export default PrivateRoute