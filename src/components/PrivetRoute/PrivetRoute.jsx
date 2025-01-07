import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    // -----User Condition-----
    if (!user) {
        return <Navigate to="/login" state={{ from: location.pathname }}></Navigate>
    }

    // -----Loading Condition-----
    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    return children;
};

export default PrivetRoute;