import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-green-400 px-5 h-32 text-2xl text-white'>

            <div className="md:flex justify-between mx-5 mt-5">
                <p>WHAT2EAT</p>
                <ul className='md:flex gap-5 mx-auto'>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contuct</a></li>
                </ul>

                <duv className="flex gap-4 items-center">
                    <FaFacebook></FaFacebook>
                    <FaInstagram></FaInstagram>
                </duv>


                </div>



                <div className='w-full h-[2px] mt-5 bg-white'></div>

            <small className='flex justify-center mt-2'>Copyright @2021 What2Eat</small>

        </div>
    );
};

export default Footer;