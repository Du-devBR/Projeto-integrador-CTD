import './style.sass'
import './responsive.sass'
import logotipo from '../../assets/img/logo.svg'
import { useState } from 'react'
import { Login } from '../Login'
import { useMediaQuery } from 'react-responsive'

export function MainLayout(){

  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })

  const [logged, setLogged] = useState(true)
  const [toggle, setToggle] = useState(false)

  // função para limpar o token e colocar o useState(logged) como false

  function logout(){
    setLogged(false)
  }

  function menuToggle(){
    if(toggle){
      setToggle(false)
    }else{
      setToggle(true)
    }
  }

  console.log(toggle)

  return(
    <div className={toggle && isMobile ? 'container-active' : 'container'}>
      <header className= 'container-header'>
        <div className={toggle && isMobile ? 'container-logo-noVisibility' : 'container-logo-visibility'}>
          <img className='img-logo' src={logotipo} alt="" />
          <span className='slogan'>Lorem, ipsum dolor.</span>
        </div>
        {
          !isMobile
            &&
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
                  {/* incrementar rota ao clicar em login ou cadastrar, utlizar react-router-dom */}
                    <button className='btn-signIn'>Login</button>
                    <button className='btn-signUp'>Cadastrar</button>
                  </>
                )
              }
            </nav>
        }
        {
          isMobile
            &&
            <nav className={toggle ? 'container-nav-open' : 'container-nav'}>
              <div className='hamburgue-mobile'  onClick={menuToggle}></div>
              <div className='info-use-logged'>
              {
                logged && toggle ? (
                  <div className="user-logged">
                    <div className="avatar-user">
                      <span>E</span>
                      <span>A</span>
                    </div>
                    <div className="name-user">
                      <span>Olá,</span>
                      <span>Eduardo Ananias</span>
                    </div>
                    <div className="button-logout">
                      <span>Deseja</span>
                      <button
                        className='btn-logout'
                        onClick={logout}
                        >
                          encerrar a sessão?
                    </button>
                    </div>
                  </div>
                ):(
                  <>
                    {
                      toggle
                        &&
                        <div className='menu-nav-mobile'>
                          <h1>Menu</h1>
                          <ul className='nav-list'>
                            <li>
                              <button className='btn-signIn'>Login</button>
                            </li>
                            <li>
                              <button className='btn-signUp'>Cadastrar</button>
                            </li>
                          </ul>
                        </div>
                    }
                  </>
                )
              }
              </div>
            </nav>
        }
      </header>
      <section>

      </section>
      <footer>
        <p>fotter</p>
      </footer>
    </div>
  )
}
