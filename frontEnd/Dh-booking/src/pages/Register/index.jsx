import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.sass'
import './responsive.sass'

export function Register(){

    const [errorNameInput, setErrorNameInput] = useState(false)
    const [errorLastnameInput, setErrorLastnameInput] = useState(false)
    const [errorEmailInput, setErrorEmailInput] = useState(false)
    const [errorPasswordInput, setErrorPasswordInput] = useState(false)
    const [errorCheckPasswordInput, setErrorCheckPasswordInput] = useState(false)
    const [messageErrorName, setMessageErrorName] = useState(false)
    const [messageErrorLastname, setMessageErrorLastname] = useState(false)
    const [messageErrorEmail, setMessageErrorEmail] = useState(false)
    const [messageErrorPassword, setMessageErrorPassword] = useState(false)
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const isFormValid = name && lastname && email && password && confirmPassword;

    const submitNewUser = (event) => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        event.preventDefault()

        if(name.length > 2 && lastname.length > 2 && emailRegex.test(email) && password.length >= 6 && (password === confirmPassword)){
            alert('cadastrado')

        }else{
            error()
        }
    }

    const error = (event) => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        if(name.length < 2){
            setErrorNameInput(true)
            setMessageErrorName(true)

        }if(lastname.length < 3){
            setErrorLastnameInput(true)
            setMessageErrorLastname(true)

        }if (!emailRegex.test(email)) {
            setErrorEmailInput(true)
            setMessageErrorEmail(true)

        }if(password.length < 6){
            setErrorPasswordInput(true)
            setMessageErrorPassword(true)
        }if(confirmPassword !== password){
            setErrorCheckPasswordInput(true)

        }
    }

    const verifyEmailInput = (event) => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        if(name.length > 2){
            setErrorNameInput(false)
            setMessageErrorName(false)

        }if(lastname.length > 2){
            setErrorLastnameInput(false)
            setMessageErrorLastname(false)

        }if (emailRegex.test(email)) {
            setErrorEmailInput(false)
            setMessageErrorEmail(false)

        }if(password.length >= 6){
            setErrorPasswordInput(false)
            setMessageErrorPassword(false)
        }if(confirmPassword === password){
            setErrorCheckPasswordInput(false)

        }
    }

    return(
    <div className="register-container">
        <form className='form-container' onSubmit={submitNewUser}>
            <h1>Criar Conta</h1>
            <div className="name-user">
                <div className="input-name-user">
                    <label htmlFor="">Nome</label>
                    <input
                        className={errorNameInput ? 'input-error' : ''}
                        onChange={(event) => setName(event.target.value)}
                        type="text"
                        placeholder='John'
                        onBlur={verifyEmailInput}
                    />
                    {
                        messageErrorName &&
                        <span className='message-error'>Nome minimo de 2 letras</span>
                    }
                </div>
                <div className="input-lastname-user">
                    <label htmlFor="">Sobrenome</label>
                    <input
                        className={errorLastnameInput ? 'input-error' : ''}
                        onChange={(event) => setLastname(event.target.value)}
                        type="text"
                        placeholder='Doe'
                        onBlur={verifyEmailInput}
                    />
                    {
                        messageErrorLastname &&
                        <span className='message-error'>Sobrenome minimo de 2 letras</span>
                    }
                </div>

            </div>
            <div className="input-email">
                <label htmlFor="">Email</label>
                <input
                    onChange={(event) => setEmail(event.target.value)}
                    className={errorEmailInput ? 'input-error' : ''}
                    type="email"
                    placeholder='projeto-integrador@dh.com.br'
                    onBlur={verifyEmailInput}
                />
                {
                    messageErrorEmail &&
                    <span className='message-error'>Formato de email incorreto</span>
                }
            </div>
            <div className="input-password">
                <label htmlFor="">Senha</label>
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    className={errorPasswordInput ? 'input-error' : ''}
                    type="password"
                    placeholder='******'
                    onBlur={verifyEmailInput}
                />
                {
                    messageErrorPassword &&
                    <span className='message-error'>Senha precisa ser maior que 6 digitos</span>
                }
            </div>
            <div className="input-confirm-password">
                <label htmlFor="">Confirma senha</label>
                <input
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    className={errorCheckPasswordInput ? 'input-error' : ''}
                    type="password"
                    placeholder='******'
                    onBlur={verifyEmailInput}
                />
                {
                    errorCheckPasswordInput &&
                    <span className='message-error'>Senha precisa se igual</span>
                }
            </div>
            <button
                disabled={!isFormValid}
                className='login-button'
                >
                    Entrar
            </button>
            <div className='register'>
                <span>Já tem conta?</span>
                <Link
                    to={'/login'}
                    className='register-button'
                    >
                        Iniciar sessão
                </Link>
            </div>
        </form>
    </div>
    )
}
