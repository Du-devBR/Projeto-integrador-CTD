import './style.sass'
import './responsive.sass'
import logotipo from '../../assets/img/logo.svg'
import { useContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import twitter from '../../assets/img/twitter.svg'
import linkedn from '../../assets/img/linkedn.svg'
import instagram from '../../assets/img/instagram.svg'
import facebook from '../../assets/img/facebook.svg'
import copyright from '../../assets/img/copyright.svg'
import { UserContext } from '../../hooks/userLogin'
import { sweetAlertCancel } from '../../hooks/sweetAlert'


export function MainLayout(){

  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })
  const [toggle, setToggle] = useState(false)
  const [nameUser, setNameUser] = useState(null)
  const [lastNameUser, setLastNameUser] = useState(null)
  const [loggedLocal, setLoggedLocal] = useState(false)

  const { login, logged, logoutContext } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    const userLocal = localStorage.getItem('nameUser')
    const lastNameLocal = localStorage.getItem('lastName')
    setNameUser(JSON.parse(userLocal))
    setLastNameUser(JSON.parse(lastNameLocal))
  }, [login])

  useEffect(() => {
    const localStorageUser = localStorage.getItem('token')
    if(localStorageUser){
      setLoggedLocal(true)
    }else{
      setLoggedLocal(false)
    }
  }, [])

  async function logout(){
    const confirm = await sweetAlertCancel('Gostaria de deslogar da conta?')
    if(confirm){
      localStorage.removeItem("nameUser")
      localStorage.removeItem("lastName")
      localStorage.removeItem("token")
      localStorage.removeItem("email")
      setLoggedLocal(false)
      navigate('/')
      logoutContext()
    }

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
          <span className='slogan'>Reserve seu proximo destino.</span>
        </Link>
        {
          !isMobile
            &&
            <nav className='container-menu-nav'>
              {
                logged || loggedLocal ? (
                  <div className="user-logged">
                    <div className="avatar-user">
                      {nameUser && <span>{nameUser.charAt(0)}</span>}
                      {lastNameUser && <span>{lastNameUser.charAt(0)}</span>}
                    </div>
                    <div className="name-user">
                      <span>Olá,</span>
                      <span>{`${nameUser} ${lastNameUser}`}</span>
                    </div>
                    <button
                      className='btn-logout'
                      onClick={logout}
                      >
                    </button>
                  </div>
                ):(
                  <>
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
                (logged || loggedLocal) && toggle ? (
                  <div className="user-logged">
                    <div className="avatar-user">
                      {nameUser && <span>{nameUser.charAt(0)}</span>}
                      {lastNameUser && <span>{lastNameUser.charAt(0)}</span>}
                    </div>
                    <div className="name-user">
                      <span>Olá,</span>
                      <span>{`${nameUser} ${lastNameUser}`}</span>
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
