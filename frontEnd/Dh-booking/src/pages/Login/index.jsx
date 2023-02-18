import './style.sass'

export function Login(){
    return(
        <div>
        <section class="loginPage">
            <div class="">
                <div class="loginArea">
                    <div class="loginPageImage">
                        <img src="https://static.vecteezy.com/ti/vetor-gratis/p2/620372-aeronave-aviao-rotulo-de-logotipo-de-companhia-aerea-viagem-viagens-aereas-simbolo-de-aviao-ilustracaoial-gratis-vetor.jpg" />
                    </div>
                    <div class="">
                    <form class="loginForm">
                    <div class="formTextInput">
                        <input type="email" id="formEmailInput" />
                        <label class="form-label" for="formEmailInput">E-mail</label>
                    </div>

                    
                    <div class="formTextInput">
                        <input type="password" id="passwordInput" />
                        <label class="form-label" for="passwordInput">Senha</label>
                    </div>

                    <div class="">
                        
                        <div class="form-check">
                        <input type="checkbox" value="" id="formCheckInput" />
                        <label class="form-label" for="formCheckInput"> Salvar dados </label>
                        </div>
                        <a href="#!">Esqueci minha senha</a>
                    </div>
                    <button type="submit" class="loginFormButton">Entrar</button>
                    </form>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

