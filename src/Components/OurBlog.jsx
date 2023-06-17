import React from 'react';
import img1 from '../../public/foodImg/01.jpg'
import img2 from '../../public/foodImg/02.jpg'
import img3 from '../../public/foodImg/03.jpg'
import img4 from '../../public/foodImg/04.jpg'
import img5 from '../../public/foodImg/05.jpg'

const OurBlog = () => {
    return (
        <div className='mx-10'>

            <p className='md:text-3xl md:mt-10'>Our Blog</p>

            <div className='md:flex'>


                <div className='md:w-1/4'>

                    <div className='border rounded-lg shadow my-5'>
                        <img className='w-full h-52 rounded-lg' src={img1} alt="" />
                        <p className='font-bold px-2'>Most Satisfying Cake decorating Cake ideas </p>
                        <small className='px-2'>Quis hendrerit nibh mauris sed faucibus
                            Quis hendrerit nibh mauris sed faucibus</small>
                    </div>

                    <div className='border rounded-lg shadow my-5'>
                        <img className='w-full h-52 rounded-lg' src={img2} alt="" />
                        <p className='font-bold px-2'>Most Satisfying Cake decorating Cake ideas </p>
                        <small className='px-2'>Quis hendrerit nibh mauris sed faucibus
                            Quis hendrerit nibh mauris sed faucibus</small>
                    </div>
                </div>



                <div className='md:w-2/4 my-5 text-center'>
                    <img className='px-5 ' src={img3} alt="" />
                    <p className='px-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem voluptatem pariatur placeat qui quas sed deserunt. Mollitia autem aliquam optio!</p>
                </div>


                <div className='md:w-1/4'>

                    <div className='border rounded-lg shadow my-5'>
                        <img className='w-full h-52 rounded-lg' src={img4} alt="" />
                        <p className='font-bold px-2'>Most Satisfying Cake decorating Cake ideas </p>
                        <small className='px-2'>Quis hendrerit nibh mauris sed faucibus
                            Quis hendrerit nibh mauris sed faucibus</small>
                    </div>

                    <div className='border rounded-lg shadow my-5'>
                        <img className='w-full h-52 rounded-lg' src={img5} alt="" />
                        <p className='font-bold px-2'>Most Satisfying Cake decorating Cake ideas </p>
                        <small className='px-2'>Quis hendrerit nibh mauris sed faucibus
                            Quis hendrerit nibh mauris sed faucibus</small>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default OurBlog;