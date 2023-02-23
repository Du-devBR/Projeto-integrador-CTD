import './style.sass'

export function Register(){
    return(
    <div className="register-container">
        <div className='image-container'>
            <img src="https://static.vecteezy.com/ti/vetor-gratis/p2/620372-aeronave-aviao-rotulo-de-logotipo-de-companhia-aerea-viagem-viagens-aereas-simbolo-de-aviao-ilustracaoial-gratis-vetor.jpg" />
        </div>
        <form className='form-container'>
            <label for='register-email'>E-mail</label>
            <input type="email" id='register-email'/>
            <label for='register-password'>Senha</label>
            <input type="password" id='register-password'/>
            <label for='register-confirm-password'>Confirmar senha</label>
            <input type="password" id='register-confirm-password'/>
            <div className='checkbox-input'><input type="checkbox" id="check"/> <label for="check">Lembrar-me</label></div>
            <button className='register-button'>Cadastrar</button>
        </form>
    </div>
    )
}

