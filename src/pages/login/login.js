import "../../lib/config-firebase.js";
import { loginGoogle } from "../../lib/auth-firebase.js";
//import "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

export default () => {
  const containerLogin = document.createElement('div')

  const templateLogin = `
    <p class="paragrafoLogin">Login</p>
    <input type="email" id="inputEmail" placeholder="Insira seu Email">
    <input type="password" id="inputSenha" placeholder="Insira sua senha" /><br>
    <a href="" > <p class='reset-password'>Esqueceu sua senha?</p></a><br>
    <br><button type="submit" id="btnEntrar">Entrar</button><br>
    <button class="btn-google" id="buttonGoogle">Entrar com o Google
    </button><br>
    <p id="message" class="successMessage errorMessage"></p>
  `;
  containerLogin.innerHTML = templateLogin;

  const loginButtonGoogle = containerLogin.querySelector("#buttonGoogle");
  const messageSuccess = containerLogin.querySelector(".successMessage");
  const messageError = containerLogin.querySelector('.errorMessage');
  
  
  loginButtonGoogle.addEventListener("click", (e) => {
    e.preventDefault();
    loginGoogle().then((result) => {
        messageSuccess.innerHTML = "Login google feito com sucesso!";
        //window.location.hash = "#feed"; //substituir mensagem quando criar pagina de timeline com posts 
      })
      .catch((error) => {
        messageError.innerHTML = "Login não deu certo, tente novamente!";
      });
  });

return containerLogin;
}
