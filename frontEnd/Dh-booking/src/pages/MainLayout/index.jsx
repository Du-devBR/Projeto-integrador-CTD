import './style.sass'
import './responsive.sass'
import logotipo from '../../assets/img/logo.svg'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link, Outlet } from 'react-router-dom'
import twitter from '../../assets/img/twitter.svg'
import linkedn from '../../assets/img/linkedn.svg'
import instagram from '../../assets/img/instagram.svg'
import facebook from '../../assets/img/facebook.svg'
import copyright from '../../assets/img/copyright.svg'


export function MainLayout(){

  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })

  const [logged, setLogged] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [userLogged, setUserLogged] = useState({})


  // função para limpar o token e colocar o useState(logged) como false

  function logout(){
    setLogged(false)
    localStorage.removeItem('user')
  }

  function menuToggle(){
    if(toggle){
      setToggle(false)
    }else{
      setToggle(true)
    }
  }

  useEffect(() => {
    const value = localStorage.getItem('user')
    if(value === null){
      // console.log('local storage vazio')
    }else{
      setLogged(true)
    }
  }, [userLogged])

  useEffect(() => {
    const user = localStorage.getItem('user')
    setUserLogged(JSON.parse(user))
  }, [])

  console.log(logged)

  return(
    <div className={toggle && isMobile ? 'container-active' : 'container'}>
      <header className= {isMobile ? 'container-header-mobile' : 'container-header'}>
        <Link to={''} className={toggle && isMobile ? 'container-logo-noVisibility' : 'container-logo-visibility'}>
          <img className='img-logo' src={logotipo} alt="" />
          <span className='slogan'>Reserve seu proximo destino.</span>
        </Link>
        {
          !isMobile
            &&
            <nav className='container-menu-nav'>
              {
                logged ? (
                  <div className="user-logged">
                    <div className="avatar-user">
                      <span>{userLogged.name.substr(0, 1)}</span>
                      <span>{userLogged.lastname.substr(0, 1)}</span>
                    </div>
                    <div className="name-user">
                      <span>Olá,</span>
                      <span>{`${userLogged.name} ${userLogged.lastname}`}</span>
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
          <section className={isMobile ? 'section-mobile' : 'section-desktop'}>
            <Outlet />
          </section>
      }
      <footer className={isMobile ? 'container-footer-mobile' :'container-footer-desktop'}>
        <div className="footer-copyright">
          <div className="copyright">
            <img src={copyright} alt="" />
          </div>
          <ul className='nav-social-newtork'>
            <li><img src={facebook} alt="" /></li>
            <li><img src={twitter} alt="" /></li>
            <li><img src={linkedn} alt="" /></li>
            <li><img src={instagram} alt="" /></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
