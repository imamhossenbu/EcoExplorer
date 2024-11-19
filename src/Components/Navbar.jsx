import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(user);

    return (
        <div className="w-full mb-16">
            <div className="fixed top-0 left-0 z-50 bg-base-100 w-full lg:px-10 backdrop-blur-md py-3">
                <div className="navbar">
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
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
                            >
                                <NavLink
                                    to='/'
                                    className={({ isActive }) => isActive ? 'bg-blue-600 text-white rounded-lg px-6 py-2 inline-flex items-center' : 'inline-flex items-center'}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to='/about'
                                    className={({ isActive }) => isActive ? 'bg-blue-600 text-white rounded-lg px-6 py-2 inline-flex items-center' : 'inline-flex items-center'}
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to='/contact'
                                    className={({ isActive }) => isActive ? 'bg-blue-600 text-white rounded-lg px-6 py-2 inline-flex items-center' : 'inline-flex items-center'}
                                >
                                    Contact Us
                                </NavLink>
                            </ul>
                        </div>
                        <a className="btn btn-ghost font-bold text-3xl">EcoExplorer</a>
                    </div>
                    <div className="navbar-center hidden lg:flex items-center justify-center flex-grow">
                        <ul className="menu menu-horizontal px-1 space-x-4 text-md font-semibold">
                            <NavLink
                                to='/'
                                className={({ isActive }) => isActive ? 'bg-blue-600 text-white rounded-lg px-6 py-2 inline-flex items-center' : 'inline-flex items-center'}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to='/about'
                                className={({ isActive }) => isActive ? 'bg-blue-600 text-white rounded-lg px-6 py-2 inline-flex items-center' : 'inline-flex items-center'}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to='/contact'
                                className={({ isActive }) => isActive ? 'bg-blue-600 text-white rounded-lg px-6 py-2 inline-flex items-center' : 'inline-flex items-center'}
                            >
                                Contact Us
                            </NavLink>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ? (
                                <div>
                                    <a onClick={() => logout(navigate('/login'))} className="btn btn-neutral font-semibold">
                                    Log Out
                                </a>
                                <h1>{user.email}</h1>
                                <img src={user.photoURL}/>
                                </div>
                                
                            ) : (
                                <NavLink to='/login' className="btn btn-neutral font-semibold">
                                    Log In
                                </NavLink>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
