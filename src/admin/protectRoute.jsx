import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ErrorPage from "./error";
const ProtectedRoute = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.adminSlice.isLoggedIn);

    if (!isLoggedIn) {
        return <ErrorPage/>
    }
    return children;
};

export default ProtectedRoute;
