import React from 'react';
import img from '../../public/img.png'
const HomeBanner = () => {
    return (
        <div className='bg-black text-white h-[550px]'>


            <div className='md:flex px-10 justify-between bg-black'>



                <div className='md:mt-20  md:text-left text-center'>
                    <p className='md:text-6xl text-3xl font-semibold'>Authentic Home <br />food in UK</p>
                    <p className='md:text-1xl mt-5'>What2Eat is a courier service in which authentic home cook <br />
                        food is delivered to a customer.</p>

                    <div>
                        <img className='w-[600px] md:hidden block' src={img} alt="" />
                    </div>

                    {/* Search fileds */}
                    <div className='md:relative md:flex block mt-10'>
                        <input className='w-2/3 text-black rounded-lg md:h-[50px] h-[35px] px-2' type="text" placeholder='Search'/>
                        <button className='absolute text-white left-[290px] px-4 md:h-[50px] h-[35px] bg-yellow-400 rounded-r-lg md:block hidden '>Search</button>

                    </div>
                    <button className='text-white bg-yellow-400 rounded-lg mx-24 mt-2 md:hidden p-2'>Search</button>
                    {/* Search fileds */}
                </div>

                <div>
                    <img className='w-[600px] md:block hidden' src={img} alt="" />
                </div>


            </div>




        </div>
    );
};

export default HomeBanner;