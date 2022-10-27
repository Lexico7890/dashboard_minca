import React, { useState } from 'react'
import './styles.css'
import { Auth } from 'aws-amplify';
import { useStateContext } from '../../contexts/ContextProvider'


const Login = () => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const { login, setLogin } = useStateContext();

  const handleChangeName = (e) => {
    setUserName(e.target.value)
  }

  const handleChangePass = (e) => {
    setPassword(e.target.value)
  }

  const signIn = async() => {
    try {
      const user = await Auth.signIn(username, password)
      user && setLogin(false)
      console.log("entro ",login)
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  return (
    <div className='containerLeft'>
      <div className='box'>
        <div className='form'>
          <h2>Sign in</h2>
          <div className='inputBox'>
            <input type="text" required="required" onChange={handleChangeName}/>
            <span>Usuario</span>
            <i></i>
          </div>
          <div className='inputBox'>
            <input type="password" required="required" onChange={handleChangePass}/>
            <span>Password</span>
            <i></i>
          </div>
          <div className='links'>
            <a href="#">Olvide la contrasenia</a>
            <a href="#">Sign up</a>
          </div>
          <input type="submit" value="Login" onClick={signIn}/>
        </div>
      </div>
    </div>
    
  )
}

export default Login