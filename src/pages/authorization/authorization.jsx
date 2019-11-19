import React from 'react'
import { connect } from 'react-redux'
import Tabs from '../../components/tabs'
import RegistrationForm from '../../components/registration-form'
import LoginForm from '../../components/login-form'
import * as actions from '../../data/actions'
import './authorization.scss'

const Authorization = props => {

    const onSubmit = (data) => {
        props.userRegisterFetch(data)
        // console.log(props.currentUser)
    }

    if (props.authStatus === 201) {
        console.log(props.authStatus)
    }

    if (props.authStatus === 409) {
        console.log(props.authStatus)
    }

    // console.log(props.authStatus)

    return (
        <div className="auth-block">
            <Tabs>
                <div id="Регистрация">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Зарегистрироваться</span>
                            <RegistrationForm onSubmit={onSubmit} />
                        </div>
                    </div>
                </div>
                <div id="Вход" selected={props.authStatus}>
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Вход</span>
                            <LoginForm onSubmit={onSubmit} />
                        </div>
                    </div>
                </div>
            </Tabs>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
        authStatus: state.auth.authStatus
    }
}

const mapDispatchToProps = {
    userRegisterFetch: actions.userRegisterFetch
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization)
