import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './com';

const Post = (Props) => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState(null);
    const[loding, setLoding] = useState(false);
    
    const handlingLogin = ()=>{
        setError(null);
        setLoding(true);
        axios.post("http://127.0.0.1:4000/users/signin/",{
            username: username,
            password: password
     }).then(response =>{
         setLoding(false);
        setUserSession(response.data.token, response.data.user);
        Props.history.push('/userpage');
     }).catch(error =>{
       setLoding(false);
       if( error.response.status===401 || error.response.status===400){
       console.log("status");
        setError(error.response.data.message);
       }
       else{
           setError("Something Wrong Please try Again Later");
       }
      
     });
    }
    return(
    <>
        <div>Login</div>
        <div>Username<br/>
        <input type="text" value={username} onChange={e=> setUsername(e.target.value)}/>
        </div>
        <div>Password<br/>
        <input type="password" value={password} onChange={e=> setPassword(e.target.value)} />
        </div><br/>
        {error && <div className="error">{error}</div>}
        <input type="button" value={loding ? "loding...": "Login"} disabled={loding} onClick={handlingLogin} />
    </>
    );
};
export default Post;