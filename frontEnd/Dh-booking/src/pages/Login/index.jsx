import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.sass'
import './responsive.sass'
import {userTeste} from '../../assets/js-mock/userTeste'
import {Eye, EyeSlash} from 'phosphor-react'
import jwt_decode from 'jwt-decode'
import { UserContext } from '../../hooks/userLogin'

export function Login(){

    const [errorEmailInput, setErrorEmailInput] = useState(false)
    const [errorPasswordInput, setErrorPasswordInput] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [messageEmailError, setMessageEmailError] = useState(false)
    const [messagePasswordError, setMessagePasswordError] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [enableLogin, setEnableLogin] = useState(false)
    const [viewPassword, setViewPassword] = useState(false)
    const navigate = useNavigate()

    const { login } = useContext(UserContext)

    const isFormValid = email && password

    const submitForm = (event) => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        const newUser = {
            login: email,
            password: password
        }

        const requestHeaders = {
            'Content-Type': 'application/json'
        }
        const requestConfig = {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: requestHeaders,
        }

        console.log(newUser)
        event.preventDefault()
        if(emailRegex.test(email) && password.length >= 6){

            fetch('http://localhost:8080/api/login', requestConfig)
            .then(res =>{
                console.log(res)
                if(res.ok){
                    setMessageError(false)
                    res.text()
                    .then(token => {
                        const decodeToken = jwt_decode(token)
                        console.log(decodeToken)
                        alert('ok')
                        localStorage.setItem('token', token)
                        login(decodeToken.nome, decodeToken.sobrenome)
                        setTimeout(() => {
                            navigate("/")
                        }, 1000);
                    })
                }else{
                    setMessageError(true)
                }
            })


        }else{
            error()
        }
    }

     const error = (event) => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (!emailRegex.test(email)) {
            setMessageEmailError(true)
            setErrorEmailInput(true)

        }if(password.length < 6){
            setMessagePasswordError(true)
            setErrorPasswordInput(true)
        } else{
            setEnableLogin(true)
        }
    }

    const countKeyUpPassword = (value) =>{
        if (value.target.value.length >= 6) {
          setMessagePasswordError(false)
          setErrorPasswordInput(false)
        }
      }

    const verifyEmailInput = (event) => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        if (emailRegex.test(email)) {
            setMessageEmailError(false)
            setErrorEmailInput(false)
          }
    }

    const toogleViewPassword = () => {
        setViewPassword(!viewPassword)
    }

    return(
    <div className="login-container">
        <form className='form-container' onSubmit={submitForm}>
            <h1>Iniciar Sessão</h1>
            <div className="input-email">
                <label htmlFor="">Email</label>
                <div className="input">
                    <input
                        onChange={(event) => setEmail(event.target.value)}
                        className={errorEmailInput ? 'input-error' : ''}
                        placeholder='projeto-integrador@dh.com.br'
                        onBlur={verifyEmailInput}
                    />
                </div>
            </div>
            <div className="input-password">
                <label htmlFor="">Password</label>
                <div className='input'>
                    <input
                        onChange={(event) => setPassword(event.target.value)}
                        className={errorPasswordInput ? 'input-error' : ''}
                        type={!viewPassword ? 'password' : 'text'}
                        placeholder='******'
                        minLength={() => setMessagePasswordError(false)}
                        onKeyUp={countKeyUpPassword}
                    />
                    <span className='btn-view-password'>
                        {viewPassword ?
                        <Eye onClick={toogleViewPassword} size={20} color="#ff9800" weight="duotone" />
                        :
                        <EyeSlash onClick={toogleViewPassword} size={20} color="#ff9800" weight="duotone" />
                        }
                    </span>
                </div>
            </div>
            {
                messageError
                &&
                <span className='message-error'>Email ou senha divergente</span>
            }
            {
                messageEmailError
                &&
                <span className='message-error'>Formato de email incorreto</span>
            }
            {
                messagePasswordError
                &&
                <span className='message-error'>Senha precisa ser maior que 6 digitos</span>
            }
            <div className='checkbox-input'>
                <input type="checkbox" id="check"/>
                <label for="check">Lembrar-me</label>
            </div>
            <button
                onClick={(event) => error(event)}
                className='login-button'
                disabled={!isFormValid}
                >
                    Entrar
            </button>
            <div className='register'>
                <span>Ainda não possui uma conta?</span>
                <Link
                    to={'/register'}
                    className='register-button'
                    >
                        Criar conta
                </Link>
            </div>
        </form>
    </div>
    )
}
