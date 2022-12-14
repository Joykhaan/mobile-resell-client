import React from 'react';
import CeoSection from '../../CeoSection/CeoSection';
import Advertise from '../Sections/Advertise/Advertise';
import Banner from '../Sections/Banner/Banner';
import Categories from '../Sections/Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <Categories></Categories>
            <CeoSection></CeoSection>
        </div>
    );
};

export default Home;