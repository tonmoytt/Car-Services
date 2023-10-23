import { NavLink } from "react-router-dom";
import img from './../../../assets/assets/logo.svg'
import { HiOutlineSearch, HiOutlineShoppingBag } from 'react-icons/hi';



const Navbar = () => {
    const Navbar = <>
        <li className="text-lg font-semibold mr-1"> <NavLink to='/'>Home</NavLink></li>
        <li className="text-lg font-semibold mr-1"> <NavLink to='/about'>About</NavLink></li>
        <li className="text-lg font-semibold mr-1"> <NavLink to='/service'>Services</NavLink></li>
        <li className="text-lg font-semibold mr-1"> <NavLink to='/blog'>Blog</NavLink></li>
        <li className="text-lg font-semibold mr-1"> <NavLink to='/contact'>Contact</NavLink></li>
    </>


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

                    <a className="btn bg-orange-300">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;