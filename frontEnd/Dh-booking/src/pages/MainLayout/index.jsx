import './style.sass'
import logotipo from '../../assets/img/logo.svg'
import { useState } from 'react'
import { Login } from '../Login'

export function MainLayout(){

  const [logged, setLogged] = useState(true)

  // função para limpar o token e colocar o useState(logged) como false

  function logout(){
    setLogged(false)
  }

  return(
    <div className="container">
      <header className="container-header">
        <div className="container-logo">
          <img className='img-logo' src={logotipo} alt="" />
          <span className='slogan'>Lorem, ipsum dolor.</span>
        </div>
        <nav className='container-menu-nav'>
          {
            logged ? (
              <div className="user-logged">
                <div className="avatar-user">
                  <span>E</span>
                  <span>A</span>
                </div>
                <div className="name-user">
                  <span>Olá,</span>
                  <span>Eduardo Ananias</span>
                </div>
                <button
                  className='btn-logout'
                  onClick={logout}
                  >
                </button>
              </div>
            ):(
              <>
                <button className='btn-signIn'>Login</button>
                <button className='btn-signUp'>Cadastrar</button>
              </>
            )
          }
        </nav>
      </header>
      <section>
          <Login />
      </section>
      <footer>
          
      </footer>
    </div>
  )
}
