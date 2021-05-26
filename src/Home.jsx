import React from 'react';
import web from '../src/Images/snake.jpg';
import Footer from './Footer';
import Common from './Common';

const Home = () =>{
    return(
        <>
           <Common
            name='Grow Your Business with' 
           imgsrc={web} visit="/service" 
           btname="Get Started"
           />
           <Footer/>
        </>
    );
};
export default Home;