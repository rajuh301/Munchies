import React from 'react';

const HomeKitchen = () => {
    return (
        <div className='bg-slate-200'>
            <div className='mx-10'>
                <p className=' py-5 text-3xl md:text-left text-center'>Home Kitchen</p>

                <div className="md:btn-group mt-5 border-2 border-yellow-300 rounded-lg text-center">
                    <button className="px-8 btn bg-yellow-300 border-2 border-yellow-300">All</button>
                    <button className="px-8 btn border-2 border-yellow-300">Button</button>
                    <button className="px-8 btn border-2 border-yellow-300">Free delivery</button>
                    <button className="px-8 btn border-2 border-yellow-300">New</button>
                    <button className="px-8 btn border-2 border-yellow-300">Coming</button>
                </div>

                <div className='mt-5'>
                    <select className="select select-success w-1/6 max-w-xs">
                        <option disabled selected>Filters</option>
                        <option>One Piece</option>
                        <option>Naruto</option>
                        <option>Death Note</option>
                        <option>Attack on Titan</option>
                        <option>Bleach</option>
                        <option>Fullmetal Alchemist</option>
                        <option>Jojo's Bizarre Adventure</option>
                    </select>
                </div>

            </div>

        </div>
    );
};

export default HomeKitchen;
