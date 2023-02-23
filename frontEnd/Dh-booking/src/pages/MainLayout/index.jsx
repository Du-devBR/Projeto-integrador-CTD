import './style.sass'
import './responsive.sass'
import logotipo from '../../assets/img/logo.svg'
import { useState } from 'react'
//import { Login } from '../Login'
import { Register } from '../Register'
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
            <nav className={toggle ? 'container-nav-open' : 'container-nav'} onClick={menuToggle}>
              <div className='hamburgue-mobile'></div>
              <div>
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
                    <button
                      className='btn-logout'
                      onClick={logout}
                      >
                    </button>
                  </div>
                ):(
                  <>
                    {
                      toggle
                        &&
                        <h1>Menu</h1>

                        // adionar botões de login **************
                    }
                    {/* <button className='btn-signIn'>Login</button>
                    <button className='btn-signUp'>Cadastrar</button> */}
                  </>
                )
              }
              </div>
            </nav>

        }
      </header>
      <section>
          <Register />
      </section>
      <footer>

      </footer>
    </div>
  )
}
