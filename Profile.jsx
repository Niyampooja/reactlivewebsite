import React from 'react';
import { NavLink } from 'react-router-dom';


const Profile = () => {
    return(
        <>
             <section id="header" className="d-flex align-items-centre">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-12 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1><strong className="brand-name"> Resume  </strong></h1>
                                
                                <h3><strong>Email:</strong>pooja.chaudhary0080@gmail.com</h3>
                                <h2 className="my-3"><strong className="brand-name">Objective: </strong>Aspiring to work with professional organization, in area of Information Technology using my own
                                domain knowledge and strive to contribute my best through sincere, hard and aimed efforts, thus
                                helping in growth of the organization with continuous learning.</h2>
                               <h2 className="my-3"><strong className="brand-name">Work Experience: </strong><br/>+
                               1.Worked as a PHP Developer at Design House India Pvt. Ltd. from July 2019 to December.
                               2.Worked as a PHP Developer at Digital One Realty Services Pvt. Ltd. Dwarka, New Delhi from
                                April 2017 to September 2017.
                                3.Worked as a PHP Developer at Unique Technologies Noida from April 2016 to March 2017.
                               </h2>
                               <h2 className="my-3"><strong className="brand-name">Educational Qualification: </strong><br/>

                               MCA (2013-2016) From MTU <br/>
                               BCA(2009-2012) CCS University , Meerut<br/>
                               12 th (2009) UP Board<br/>
                               10 th (2007) UP Board
                               </h2>
                               <h2 className="my-3"><strong className="brand-name">Computer Skills: </strong><br/>
                               <u>Web Technology :</u> HTML5, CSS3, JavaScript, Jquery, Ajax, React JS<br/>
                              <u> OS :</u> Windows XP, 7, 8, 10, Linux<br/>
                              <u> Languages :</u> PHP<br/>
                              <u> Databases : </u>MYSQL <br/>
                               <u>Data Access Technology :</u> MYSQl
                               </h2>
                               <h3 ><strong className="brand-name"><u>Projects</u></strong></h3>
                               <h2 className="my-3"><u>1. Website: </u> Website Create using PHP, Mysql, HTML5, CSS3 <br/><NavLink to="https://www.uniqutechnologies.com/">https://www.uniqutechnologies.com/</NavLink><br/><br/>
                               <u>2. Unique E-support System: </u>  Create using PHP, Mysql, HTML5, CSS3 <br/><NavLink to="https://www.uniqutechnologies.com/software/adminbox/index">https://www.uniqutechnologies.com/software/adminbox/index</NavLink><br/><br/>
                               <u>3. Unique Online Impress System: </u>  Create using PHP, Mysql, HTML5, CSS3 <br/><NavLink to="https://www.uniqutechnologies.com/online_impress/">https://www.uniqutechnologies.com/online_impress/</NavLink><br/><br/>
                               <u>4. Website Digital One Realty Services Pvt. Ltd.: </u> Website Create using PHP, Mysql, HTML5, CSS3 <br/><NavLink to="http://www.fnydigital.in/">http://www.fnydigital.in/</NavLink><br/><br/>
                               <u>5. Website STPI: </u> Website Create using PHP, Mysql, HTML5, CSS3 <br/><NavLink to="https://intrastpi.stpi.in/stpi/">https://intrastpi.stpi.in/stpi/</NavLink><br/><br/>
                               <u>6. Website Design House India Pvt. Ltd.: </u> Website Create using PHP, Mysql, HTML5, CSS3 <br/><NavLink to="https://designhouse.co.in/">https://designhouse.co.in/</NavLink><br/><br/>
                               <u>7. Dashboard Design House India Pvt Ltd.: </u> Website Create using PHP, Mysql, HTML5, CSS3 <br/><NavLink to="https://designhouse.co.in/dhipl/">https://designhouse.co.in/dhipl/</NavLink><br/><br/>
                                </h2>
                                <h3 ><strong className="brand-name"><u>Other Projects</u></strong></h3>
                                <h2 className="my-3">
                                <u>During MCA 4 Sem. : </u> Quick Pay Online Recharge System form Mobile and DTH Recharge.using PHP, Mysql<br/>
                                <u>During MCA 6 Sem. : </u> CMS Crime Management System is an Application covers complete case
                                    Management System using PHP , MYSQL.<br/>
                                    <u>Website : </u>Create a Complete Responsive Animated Website Using Bootstrap 5. Using <strong className="brand-name">React.js</strong>
                                </h2>
                                <h3 ><strong className="brand-name"><u>Hobbies</u></strong></h3>
                                <h2 className="my-3">1. Job Realated Activities<br/>
                                2 .Music Listening
                                </h2>
                                <h3 ><strong className="brand-name"><u>Persional Information</u></strong></h3>
                                <h2 className="my-3"><u>Husband Name:  </u>Mr. Niyampal Singh<br/>
                               <u>Address : </u>Radhye Shyam Park Sec5, Rajendra Nagar, Ghaziabad<br/>
                               <u>Date of Birth : </u> 19-05-1991<br/>
                               <u>Status: </u>Married<br/>
                               <u>Languages: </u>Hindi , English
                                </h2>
                              
                            </div>
                            
                        </div>
                        </div>
                    </div>
                </div>   
            </section>
           
        </>
    );
};
export default Profile;