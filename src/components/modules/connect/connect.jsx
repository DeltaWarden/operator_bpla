import './connect.css'

import React from 'react'

const connect = () => {
  return (
    <div className='wrapper-login'>
        <h2>Вход</h2>
        <hr className='line'/>

        <form>
            <div className="group">      
                <input type="text" required/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Токен</label>
            </div>
            <div className="group">      
                <input type="password" required/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Пароль</label>
            </div>
            <a href="main" className="button">Подключиться</a>
        </form>
    </div>
    
  )
}

export default connect;