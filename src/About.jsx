import React from 'react';
import web from '../src/Images/snake.jpg';
import Common from './Common';

const About = () =>{
    return(
        <>
           <Common  
           name='Welcome to About' 
           imgsrc={web} visit="/contact" 
           btname="Contact Now"               
           />
        </>
    );
};
export default About;