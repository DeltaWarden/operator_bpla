import React from 'react'
import ParticlesComponent from '../../components/libraries/particles.jsx' 
import { useNavigate } from "react-router-dom";

import "./login.css"

const loginpage = () => {
  const navigate = useNavigate();
 
  const handleSubmit = e => {
    e.preventDefault()
    const email = e.target.token.value
    const password = e.target.password.value
    // Условный запрос на БД
    if (email === "qwerty" && password === "123456") {
      navigate('/test');
      
    }
  }

  return (
    <>
    <ParticlesComponent />
    <div className='wrapper-login'>
        <h2>Вход</h2>
        <hr className='line'/>

        <form onSubmit={handleSubmit}>
            <div className="group">      
                <input type="text" id='token' required/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor='token'>Токен</label>
            </div>
            <div className="group">      
                <input type="password" id='password' required/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor='password'>Пароль</label>
            </div>
            <button type="submit" className="button">Подключиться</button>
        </form>
    </div>
    </>
  )
}

export default loginpage