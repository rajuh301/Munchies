import React from 'react';
import './LocalStyle.css'
import { FaBox, FaSearch } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='bg-black'>
            <div className="navbar bg-black text-white px-10 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Menu</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contuct</a></li>
                        </ul>
                    </div>
                    <a className="border-2 glow-border p-2 rounded-lg text-purple-400">Munchies</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Contuct</a></li>

                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    
                <p><FaSearch></FaSearch></p>
                <p><FaBox></FaBox></p>


                </div>
            </div>
        </div>
    );
};

export default Navbar;