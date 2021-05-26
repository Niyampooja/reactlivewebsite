import React, { useState } from 'react';
import Footer from './Footer';
const Contact = () =>{
    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        msg: '',
    });
    const InputEvent = (event) =>{
        const { name, value} = event.target;
        setData((prevalue)=>{
            return{
                ...prevalue,
                [name] : value,
            }
        })
    };
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My Name is $data.name .My Phone Number is $data.phone.
        and Email is $ {email}.and Here is what I want to say $ {msg}`);
    };
    return(
        <>
            
         <div className="mt-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
            <div className="container contact_div">
                <div className="row">
                   <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" name="name" value={data.name} onChange={InputEvent} placeholder="Write Your Name" />
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Phone</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Write your Number Here!" />
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1"  name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-outline-primary" type="submit">Submit </button>
                    </div>
                    </form>
                   </div>
                   
                 </div>
            </div>
            <Footer/>
        </>
        
       
    );
};
export default Contact;