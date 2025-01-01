import { useContext } from "react";
import { AuthContext } from "@/Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Loader } from "lucide-react";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);
  if (loading) {
    return <Loader></Loader>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;
