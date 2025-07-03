import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import CompletoState from "./contexts/completo/CompletoState";
import CompletoList from "./components/Completo/List";
import SingleCompleto from "./components/Completo/Single";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import UserState from "./contexts/user/UserState";
import AuthRoute from "./routes/Auth";
import PrivateRoute from "./routes/Private";
import Profile from "./components/Profile";

const Router = () => {
  return (
    <>
    <UserState>
      <CompletoState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />  
              <Route path="registro" element={<Register />} />
              <Route 
              path="iniciar-sesion" 
              element={<AuthRoute component={Login} />}
              />
              <Route
              path="perfil"
              element={<PrivateRoute component={Profile}/>} 
              />
    
              <Route path="completos" element={<CompletoList />} /> 
              <Route path="completos/:id" element={<SingleCompleto/>} />      
              {/* <Route path="/index" element={<Home />} />       */}
            </Route>
          </Routes>
        </BrowserRouter>
      </CompletoState>
      </UserState>
    </>
  );
};

export default Router;
