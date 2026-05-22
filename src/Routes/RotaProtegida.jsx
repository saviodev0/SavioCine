import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

function RotaProtegida() {
  const { usuario } = useContext(AuthContext);

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default RotaProtegida;
