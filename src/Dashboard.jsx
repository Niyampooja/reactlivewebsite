import React from 'react';
 
const Dashboard =(Props)=>{
    const handleLogout = () =>{
        Props.history.push('/post');
    }
    return(
        <>
        <div>
            <h1>Dashboard</h1>
        </div>
        <input type="button" value="Logout" onClick={handleLogout} />
        </>
    );
};

export default Dashboard;