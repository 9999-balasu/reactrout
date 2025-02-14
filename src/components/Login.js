
import React, { useState } from 'react'

const Login = () => {
    const[data,setData] = useState({
     username : '',
     password : ''   
    })
    const{username,password} = data;
    const changeHandler = e =>{
      setData({ ...data,[e.target.name]:[e.target.value]

      })
    }

    const submitHandler = e => {
      e.preventDefault()
      console.log(data);
    }
  return (
    <div>
     
        <center>
        <h1>Login Form</h1>
          <form onSubmit={submitHandler}>
          <input className='border-2 border-sky-500 m-1' type='text' name="username" value={username} onChange={changeHandler}/> <br/> 
          <input className='border-2 border-sky-500 m-1' type='password' name="password" value={password} onChange={changeHandler}/> <br/> 
          <input type='submit' name='submit'/> 
            </form>  
        </center>
    </div>
  )
}

export default Login