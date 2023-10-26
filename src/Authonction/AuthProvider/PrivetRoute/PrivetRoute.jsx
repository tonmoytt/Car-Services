import { useContext } from "react";
 
import { Navigate, useLocation } from "react-router-dom";
import { AuthConnect } from "../AuthProvider";

 

const PrivetRoute = ({children}) => {
    const {user,loder} =useContext(AuthConnect)
    const location=useLocation()
    console.log(location.pathname);

    if(loder){
        return <span className="loading loading-spinner text-success"></span>
    }
    if(user){
        return children
    }
    return  <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRoute;