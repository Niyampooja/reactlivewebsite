import React from 'react';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const Common = (props) =>{
    return(
        <>
            <section id="header" className="d-flex align-items-centre">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>{props.name} <strong className="brand-name"> Pooja Chaudhary </strong></h1>
                                <h2 className="my-3">We are the Team of Talented Developer making Websites</h2>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-2 header-img">
                            <img src={props.imgsrc} className="img-fluid flex-auto animated" alt="home"/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>   
            </section>
            <Footer/>
        </>
    );
};
export default Common;