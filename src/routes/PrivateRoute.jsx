import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../customHooks/useAuth";

const PrivateRoute = ({children}) => {
  const { user, loader } = useAuth();
  const location = useLocation();

  if (loader) {
    return (
      <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
        <div className="flex space-x-2 animate-pulse">
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    );
  }
  if (user) {
    return children
  }

  return <Navigate to='/login' state={{from: location}}></Navigate>;
};

export default PrivateRoute;
