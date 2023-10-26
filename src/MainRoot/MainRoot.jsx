import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/navbar/Navbar";
// import TOGGLE from "../components/Home/navbar/TOGGLE/TOGGLE";

 

const MainRoot = () => {
    return (
        <div>
            {/* <TOGGLE></TOGGLE> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainRoot;