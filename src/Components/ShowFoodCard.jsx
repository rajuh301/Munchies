import React from 'react';
import { FaPlus, FaStar } from 'react-icons/fa';

const ShowFoodCard = ({ card }) => {
    const { name, image, price, rating, discount, delivery_time } = card;
    console.log(card)
    return (
        <div className='mt-10'>

            <div className="card card-compact w-72 bg-base-100 shadow-xl">
                <figure><img className='w-full h-52' src={image} alt="Shoes" /></figure>
                <p className='absolute bg-yellow-400 p-1 rounded-tl-lg'>{discount}%</p>
                <div className="card-body">

                    <div>
                        <div className='flex font-bold'>
                            <p>{name}</p>
                            <p className='text-end mb-5'>$ {price}</p>
                        </div>

                        <div className='flex'>

                            <p className='text-start flex gap-1 items-center'><FaStar></FaStar><span>{rating}</span> <span className='mx-2'>{delivery_time} min</span></p>
                           <FaPlus className='bg-yellow-600 rounded w-4 h-4 text-white'></FaPlus>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ShowFoodCard;