import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaSpinner } from "react-icons/fa";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <FaSpinner className="text-5xl text-blue-500 animate-spin" />
            </div>
        );
    }

    if (!user) {
        return <Navigate state={{from:location.pathname}} to='/login' />;
    }

    return children;
};

export default PrivateRoute;
