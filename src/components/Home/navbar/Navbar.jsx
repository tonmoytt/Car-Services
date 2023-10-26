import { Link, NavLink } from "react-router-dom";
import img from './../../../assets/assets/logo.svg'
import { HiOutlineSearch, HiOutlineShoppingBag } from 'react-icons/hi';
import { useContext } from "react";
import { AuthConnect } from "../../../Authonction/AuthProvider/AuthProvider";



const Navbar = () => {
    const {user,SignOut} =useContext(AuthConnect)
    const Navbar = <>
        <li className="text-lg font-semibold mr-1"> <NavLink to='/'>Home</NavLink></li>
        <li className="text-lg font-semibold mr-1"> <NavLink to='/about'>About</NavLink></li>
        <li className="text-lg font-semibold mr-1"> <NavLink to='/service'>Services</NavLink></li>
        <li className="text-lg font-semibold mr-1"> <NavLink to='/blog'>Blog</NavLink></li>
        <li className="text-lg font-semibold mr-1"> <NavLink to='/contact'>Contact</NavLink></li>
    </>

const hendelout=() =>{
    SignOut()
    .then(result =>{
       console.log( result.user);
    })
    .catch(error =>{
        console.error(error);
        swal({
            title: "Opps!",
            text: "Successfull Logout",
            icon: "success",
            button: "Opps!",
        });
    })
}
    return (
        <div className="mt-10 mx-6">

            <div className="navbar bg-base-100 item-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                Navbar
                            }
                        </ul>
                    </div>

                    <img className="  h-16" src={img} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {
                            Navbar
                        }

                    </ul>
                </div>
                <div className="navbar-end">

                    <div className="flex gap-6 mr-3">
                        {
                            <HiOutlineShoppingBag></HiOutlineShoppingBag>

                        }

                        {

                           <button><HiOutlineSearch></HiOutlineSearch></button> 
                        }

                    </div>

                     <div>
                        {
                            user ? <>
                            <span> {user.email}   </span>  <button onClick={hendelout} className=" btn btn-sm  bg-sky-200 md:text-lg lg:text-lg   hover:font-bold hover:underline hover:bg-orange-200">SignOut</button></>
                            :
                            <Link to="/login"><button className="btn text-lg btn-outline btn-secondary">Appointment</button></Link>
                        }
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;