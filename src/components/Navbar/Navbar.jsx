import { Link, NavLink, useLoaderData } from "react-router-dom";
import "./Navbar.css"
import logoVisa from "../../assets/visaLogo.png"
import { useContext, useState } from "react";
import userIcon from "../../assets/user.png"
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {

    const visaTypeData = useLoaderData();

    const { user, handleLogOut } = useContext(AuthContext);

    const [theme, setTheme] = useState("light");

    const handleToggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme)
        document.documentElement.setAttribute("data-theme", newTheme)
    }

    return (
        <div className="">
            <div className="navbar px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {/* ------------------- */}
                            <NavLink to="/" className="">Home</NavLink>
                            <NavLink to="/allVisas" className="text-base font-normal text-gray-700 uppercase">All Visas</NavLink>
                            <NavLink to="/addVisa" className="text-base font-medium text-gray-700 uppercase">Add Visa</NavLink>
                            <NavLink to="/myAddedVisas" className="text-base font-medium text-gray-700 uppercase">My Added Visas</NavLink>
                            <NavLink to="/myVisaApplications" className="text-base font-medium text-gray-700 uppercase">My Visa Applications</NavLink>
                        </ul>
                    </div>
                    <Link>
                        <div>
                            <img className="w-28 md:w-40" src={logoVisa} alt="Logo Visa" />
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10">
                        <NavLink to="/" className="text-lg font-normal text-gray-700 uppercase">Home</NavLink>
                        <NavLink to="/allVisas" className="text-lg font-normal text-gray-700 uppercase">All Visas</NavLink>
                        <NavLink to="/addVisa" className="text-lg font-normal text-gray-700 uppercase">Add Visa</NavLink>
                        <NavLink to="/myAddedVisas" className="text-lg font-normal text-gray-700 uppercase">My Added Visas</NavLink>
                        <NavLink to="/myVisaApplications" className="text-lg font-normal text-gray-700 uppercase">My Visa Applications</NavLink>
                        {/* <NavLink to="/others" className="text-lg font-medium text-gray-700 uppercase">Others</NavLink> */}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* ---Theme--- */}
                    <div className="mr-5">
                        <label className="swap swap-rotate">
                            <input
                                type="checkbox"
                                onClick={handleToggleTheme} />
                            <svg
                                className="swap-on h-7 w-7 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>
                            {/* ---Moon Icon--- */}
                            <svg
                                className="swap-off h-7 w-7 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                    </div>
                    {/* ---Login User--- */}
                    <div className="">
                        <div className="dropdown dropdown-end">
                            <div className="flex">
                                {
                                    user && user?.email ? <>
                                        <div className="relative group">
                                            <div className="flex items-center gap-5 mr-5 cursor-pointer">
                                                <img className="w-14 h-14 rounded-full" src={user?.photoURL || userIcon} alt="Profile" />
                                            </div>

                                            <div className="absolute hidden group-hover:block bg-slate-300 rounded px-4 py-2 top-[57px] -right-24 transform -translate-x-1/2 z-10">
                                                <div className="">
                                                    <div className="text-xl font-semibold my-2">
                                                        {user?.displayName || ""}
                                                    </div>
                                                    <div className="text-center my-3">
                                                        {user?.displayName &&
                                                            <button onClick={handleLogOut} className="w-full border border-solid border-gray-500 text-xl font-normal bg-[#015CB5] text-white py-1 px-4 rounded-md">Log Out</button> || ""}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                        :
                                        <>
                                            <Link to="/login" className="text-lg font-normal text-white bg-[#015CB5] py-2 px-6 rounded-md ml-3 hover:bg-[#13af42]">Login</Link>
                                            <Link to="/register" className="text-lg font-normal text-white bg-[#015CB5] py-2 px-3 rounded-md ml-3 hover:bg-[#13af42]">Register</Link>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;