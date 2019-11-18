import React from 'react'
import Tabs from '../../components/tabs'
import RegistrationForm from '../../components/registration-form'
import LoginForm from '../../components/login-form'
import './authorization.scss'

const Authorization = props => {

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div class="auth-block">
            <Tabs>
                <div id="Регистрация">
                    <div className="card">
                        <div className="card-content">
                            <span class="card-title">Зарегистрироваться</span>
                            <RegistrationForm onSubmit={onSubmit} />
                        </div>
                    </div>
                </div>
                <div id="Вход">
                    <div className="card">
                        <div className="card-content">
                            <span class="card-title">Войти в систему</span>
                            <LoginForm onSubmit={onSubmit} />
                        </div>
                    </div>
                </div>
            </Tabs>
        </div>
    )
}

export default Authorization
