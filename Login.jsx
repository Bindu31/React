import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
        
    <div className='home'>
      <h1>Login</h1>
      <form action=''>
        <input type='text' placeholder='Enter Your UserName ' className='form-control'/>
        <input type='text' placeholder='Enter Your Password' className='form-control'/>
      </form>
     <Link to={"/"}><button type="button" class="btn btn-outline-primary w-100 m-2" >Login</button></Link>
        </div>
      
  )
}

export default Login
