import React from 'react';
 
const Userpage =(Props)=>{
    const handleLogout = () =>{
        Props.history.push('/post');
    }
    return(
        <>
        <div>
            <h1>Userpage</h1>
        </div>
        <input type="button" value="Logout" onClick={handleLogout} />
        </>
    );
};

export default Userpage;