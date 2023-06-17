import React, { useEffect, useState } from 'react';
import ShowFoodCard from './ShowFoodCard';

const FoodCard = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='bg-slate-200 pb-10'>
            <div className='md:grid grid-cols-4 mx-10 py-5'>
                {
                    data.map(card => <ShowFoodCard
                        key={card.id}
                        card={card}
                    ></ShowFoodCard>)
                }
            </div>
            <p className='border-2 border-yellow-400 w-40 mx-auto mt-10 text-2xl  rounded-lg mb-10'>+ Load more...</p>
        </div>
    );
};

export default FoodCard;