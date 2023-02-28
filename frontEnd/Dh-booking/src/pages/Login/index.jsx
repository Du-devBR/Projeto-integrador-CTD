import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.sass'
import './responsive.sass'
import {userTeste} from '../../assets/js-mock/userTeste'

export function Login(){

    const [erroInput, setErrorInput] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userLogin, setUserLogin] = useState([{}])
    const [enableLogin, setEnableLogin] = useState(false)
    const navigate = useNavigate()

    const submitForm = (event) => {
        event.preventDefault()
        if(email === '' || password === ''){
            setErrorInput(true)

        }else{
            setUserLogin({
                'email': email,
                'password': password
            })
        }
    }

     const error = (event) => {
        // event.preventDefault()
        if(userLogin.email !== userTeste.email && userLogin.password !== userTeste.password){
            setMessageError(true)
            setErrorInput(true)
        }else{
            setMessageError(false)
            setEnableLogin(true)
        }
    }

    useEffect(() => {
        if(enableLogin) {
            if(userLogin.email === userTeste.email && userLogin.password === userTeste.password){
                localStorage.setItem('user', JSON.stringify(userTeste))
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            }
        }
    }, [userLogin, enableLogin])

    useEffect(() => {
        console.log('erro: '+ messageError)
    }, [messageError])

    useEffect(() => {
        const userLocalStorage = localStorage.getItem('user')

        if(userLocalStorage === null){

        }else{
            setTimeout(() => {
                navigate("/")
            }, 2000);
        }
    })

    return(
    <div className="login-container">
        <form className='form-container' onSubmit={submitForm}>
            <h1>Iniciar Sessão</h1>
            <div className="input-email">
                <label htmlFor="">Email</label>
                <input
                    onChange={(event) => setEmail(event.target.value)}
                    className={erroInput ? 'input-error' : ''}
                    type="email"
                    placeholder='projeto-integrador@dh.com.br'
                />
            </div>
            <div className="input-password">
                <label htmlFor="">Password</label>
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    className={erroInput ? 'input-error' : ''}
                    type="password"
                    placeholder='******'
                    minLength={6}
                    onKeyDown={() =>setErrorInput(false)}
                />
            </div>
            {
                messageError
                &&
                <span className='message-error'>Email ou senha divergente</span>
            }
            <div className='checkbox-input'>
                <input type="checkbox" id="check"/>
                <label for="check">Lembrar-me</label>
            </div>
            <button
                onClick={(event) => error(event)}
                className='login-button'
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
