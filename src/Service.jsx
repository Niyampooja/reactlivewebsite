import React from 'react';
import Card from './Card';
import ServiceData from './ServiceData';
import Footer from './Footer';

const Service = () =>{
    return(
        <>
         <div className="mt-5">
            <h1 className="text-center">Our Services</h1>
        </div>
            <div className="contaainer-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row gy-4">
                    {
                        ServiceData.map((val, ind) => {
                            return <Card key={ind}
                                imgsrc={val.imgsrc}
                                title={val.title}
                            />
                        })
                    }
                   </div>            
                </div>
                 </div>
            </div>
            <Footer/>
        </>
    );
};
export default Service;