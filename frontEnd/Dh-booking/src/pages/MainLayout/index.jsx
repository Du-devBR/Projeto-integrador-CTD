import './style.sass'
import './responsive.sass'
import logotipo from '../../assets/img/logo.svg'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Home } from '../Home'
import { Link, Outlet } from 'react-router-dom'

export function MainLayout(){

  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })

  const [logged, setLogged] = useState(false)
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

  return(
    <div className={toggle && isMobile ? 'container-active' : 'container'}>
      <header className= {isMobile ? 'container-header-mobile' : 'container-header'}>
        <Link to={''} className={toggle && isMobile ? 'container-logo-noVisibility' : 'container-logo-visibility'}>
          <img className='img-logo' src={logotipo} alt="" />
          <span className='slogan'>Lorem, ipsum dolor.</span>
        </Link>
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
                    <Link to={'login'} className='btn-signIn'>Login</Link>
                    <Link to={'register'} className='btn-signUp'>Cadastrar</Link>
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
                              <Link to={'login'} onClick={menuToggle} className='btn-signIn'>Login</Link>
                            </li>
                            <li>
                              <Link to={'register'} onClick={menuToggle} className='btn-signUp'>Cadastrar</Link>
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
      {
        !toggle
          &&
          <section>
            <Outlet />
          </section>
      }
      <footer>
        <p>fotter</p>
      </footer>
    </div>
  )
}
