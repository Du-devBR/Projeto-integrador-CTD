import './style.sass'

export function Login(){
    return(
    <div className="login-container">
        <div className='image-container'>
            <img src="https://static.vecteezy.com/ti/vetor-gratis/p2/620372-aeronave-aviao-rotulo-de-logotipo-de-companhia-aerea-viagem-viagens-aereas-simbolo-de-aviao-ilustracaoial-gratis-vetor.jpg" />
        </div>
        <form className='form-container'>
            <input type="email" />
            <input type="password" />
            <div className='checkbox-input'><input type="checkbox" id="check"/> <label for="check">Lembrar-me</label></div>
            <button className='login-button'>Entrar</button>
            <div className='register'><span>Ainda não possui uma conta?</span><button className='register-button'>Criar conta</button></div>
        </form>
    </div>
    )
}
