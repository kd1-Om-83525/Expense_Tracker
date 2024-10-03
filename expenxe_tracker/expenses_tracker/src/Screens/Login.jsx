import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../service/user";
import { useState } from "react";
import { toast } from "react-toastify";

function Login(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const nagivate=useNavigate();

    const onLogin =async()=>{
        if(username.length==0){
            toast.success('username is required');
        }else if(password.length==0){
            toast.success('password is required');
        }else{ 
            const result=await login(username,password)
            console.log(result);
            if(result['status']==200){
            nagivate('/');
            console.log("login successfull");
        }
        }
    }
    return(
        <div>
            <h2 className="header" >Login<div style={{textAlign:'end'}}>
            <Link to="/" className="btn btn-danger">
            Log Out
            </Link>
            </div></h2>
            
            <div className="form">
                <div className="row">
                <label className="mb-3 ">Username</label>
                <input type="text" 
                onChange={(e)=>{setUsername(e.target.value)}}
                className="form-control"
                />
                </div>
                <div className="row">
                <label>Password</label>
                <input type="text"
                onChange={(e)=>{setPassword(e.target.value)}} 
                className="form-control mb-3"
                />
                
                </div>
                <button style={{textAlign:"center"}} className='btn btn-success' onClick={onLogin} >Login</button>
            </div>
        </div>
    )
}

export default Login;