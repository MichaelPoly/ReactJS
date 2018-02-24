import React from 'react';

export default class LoginBlock extends React.Component
{
    render()
    {
        return (
          <div className="loginBlock">
            <div className="login">
              <form className="loginForm" action="#" method="post">
                <label>Логин<input type="text" name="login" value=""></input></label>
                <label>Пароль<input type="password" name="pwd" value=""></input></label>
                <input type="submit" name="Войти" value="Войти" className="LogBtn"></input>
              </form>
            </div>
          </div>
        );
    }
}
