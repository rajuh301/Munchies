import React from 'react';
import Navbar from './Navbar';
import HomeBanner from './HomeBanner';
import HomeKitchen from './HomeKitchen';
import FoodCard from './FoodCard';
import OurBlog from './OurBlog';
import ContuctForm from './ContuctForm';
import Footer from './Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomeBanner></HomeBanner>
            <HomeKitchen></HomeKitchen>
            <FoodCard></FoodCard>
            <OurBlog></OurBlog>
            <ContuctForm></ContuctForm>
            <Footer></Footer>
        </div>
    );
};

export default Main;