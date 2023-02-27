import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.sass'
import './responsive.sass'

export function Register(){

    const [erroInput, setErrorInput] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return(
    <div className="register-container">
        <form className='form-container' onSubmit="{submitForm}">
            <h1>Criar Conta</h1>
            <div className="name-user">
                <div className="input-name-user">
                    <label htmlFor="">Nome</label>
                    <input
                        onChange={(event) => setName(event.target.value)}
                        type="text"
                        placeholder='John'
                    />
                </div>
                <div className="input-lastname-user">
                    <label htmlFor="">Sobrenome</label>
                    <input
                        onChange={(event) => setLastname(event.target.value)}
                        type="text"
                        placeholder='Doe'
                    />
                </div>

            </div>
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
                <label htmlFor="">Senha</label>
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    className={erroInput ? 'input-error' : ''}
                    type="password"
                    placeholder='******'
                    minLength={6}
                />
            </div>
            <div className="input-confirm-password">
                <label htmlFor="">Confirma senha</label>
                <input
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    className={erroInput ? 'input-error' : ''}
                    type="password"
                    placeholder='******'
                    minLength={6}
                />
            </div>
            <button className='login-button'>Entrar</button>
            <div className='register'>
                <span>Ainda não possui uma conta?</span>
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
