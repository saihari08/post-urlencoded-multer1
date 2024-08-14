import React, { useRef } from 'react'
import {Link, useNavigate} from "react-router-dom";

function Signin() {

  let navigate=useNavigate();
  let emailInputRef=useRef();
  let passwordInputRef=useRef();
  let quoteInputRef=useRef();

  return (
<div className='App'>
<form>
    <h2 style={{backgroundColor:"grey",borderRadius:"25px",color:"black",
      boxShadow:"10px 10px 10px black"
    }}>Login</h2>
    
    <div> 
      <input ref={emailInputRef} type="text" placeholder='Email-id' ></input>
    </div>
        
    <div> 
      <input ref={passwordInputRef} type="text" placeholder='password' ></input>
    </div>
    <div> 
      <input ref={quoteInputRef}type="text" placeholder='Quote' ></input>
    </div>

<div>  
  <button type="button" onClick={()=>{
    if(emailInputRef.current.value=="saihari@gmail.com" && 
      passwordInputRef.current.value=="saihari"){
    
    navigate("/dashboard",{state:{quote:quoteInputRef.current.value}})
  }else{
    alert("invalid email or password");
  }
  }}>Login</button>   
  </div>

 <br></br>
 <Link to="/signup">Create Account</Link>
 
 </form>
</div>
  )
}
export default Signin


