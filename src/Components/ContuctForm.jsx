import React from 'react';
import logo from '../../public/logo.svg'
const ContuctForm = () => {
    return (
        <div className='bg-slate-100 '>
            

            <div className='md:flex justify-between mx-10'>
                <div>
                    <p className='text-2xl mt-10'>Do you have a question <br />
                        or want to become a seller?</p>
                    <small>Fill this form and our manager will contact you next 48 hours.</small>

                    <div className='mt-5 flex gap-2 '>
                        <input className='text-1xl border-2 h-12 w-full rounded-lg shadow border-gray-200 px-2' type="text" placeholder='Your name' />

                        <input className='text-1xl border-2 h-12 w-full rounded-lg shadow border-gray-200 px-2' type="email" placeholder='Your email' />
                    </div>

                    <div className='mt-5'>
                        <textarea className='py-2 px-2 shadow  md:block hidden' name="" id="" cols="60" rows="5" placeholder='Your message here'></textarea>

                        <textarea className='py-2 px-2 shadow  md:hidden block rounded' name="" id="" cols="36" rows="2" placeholder='Your message here'></textarea>
                    </div>
                </div>

                <div>
                </div>

                <div>
                    <img className='w-[450px] mt-5' src={logo} alt="" />
                </div>



            </div>

        </div>
    );
};

export default ContuctForm;