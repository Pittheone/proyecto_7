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
import SucessPage from "./components/Sucess";
import CancelPage from "./components/Cancel";
import Checkout from "./components/Checkout";
import About from "./components/About";

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
              <Route
              path="carrito"
              element={<PrivateRoute component={Checkout}/>}
              />
    
              <Route path="completos" element={<CompletoList />} /> 
              <Route path="completos/:slug" element={<SingleCompleto/>} />
              <Route path='pago-exitoso' element={<SucessPage />} />
              <Route path='pago-cancelado' element={<CancelPage />} />
              <Route path="about" element={<About />} />
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
