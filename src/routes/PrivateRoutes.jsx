import PropTypes from 'prop-types';
import { useContext } from "react";
import 'react-loading-skeleton/dist/skeleton.css';
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);
    // state={location.pathname}

    if (loading) {
        return <span className="mx-auto text-center loading loading-infinity loading-lg"></span>
    }

{/* <span>
            <Skeleton/> 
        <Skeleton count={5}/>
        </span>   */}
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;