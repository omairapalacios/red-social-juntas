import {
  signInEmailEvent,
  signGoogleEvent,
  signFacebookEvent,
  passwordShow,
} from '../controller/login-controller.js';

export default () => {
  const loginView = `
    <section class="section-banner">
      <div class="container-banner">
      </div>      
    </section>
    <section class="section-main">
      <div class="container-logo">
        <img src="./img/logo.png" alt="logo" class="icon-logo-main">
      </div>      
      <form action="" class="form">
        <p>¡Bienvenidx!</p>
        <p> Sé parte de esta red,<span class="c-green"> promociona y encuentra</span> <span >talento.</span>  </p>
        <input type="email" id="email-login" class="input-text" placeholder="Email" required>
        <div class="pass-eye"> 
          <input type="password" id="password-login" class="input-password" placeholder="Password" required>
          <button class="eye-class btn-post">
            <i id="btn-eye" class="fas fa-unlock-alt icon-general"></i>
          </button>
        </div>
        

        
        <button id="btn-login" class="btn btn-general" type="submit">INGRESAR</button>
        <div class="container-errors">
          <span class="errors" id="error-email"></span>
          <span class="errors" id="error-message"></span>
          <span class="errors" id="error-password"></span>
          <span class="errors" id="error-email"></span>
        </div>
        <p>Ó bien ingresa con...</p>
      <button id="btn-facebook" class="btn-social-net" type="submit"><img src="https://image.flaticon.com/icons/svg/733/733547.svg" alt=""></button>
      <button id="btn-google" class="btn-social-net" type="submit"><img src="https://image.flaticon.com/icons/png/512/720/720255.png" alt=""></button>
      <p>¿No tienes una cuenta? <a class="c-orange" href="#/register">Regístrate</a></p>
      </form>`;

  const mainElem = document.createElement('main');
  mainElem.className = 'viewLogin';
  mainElem.innerHTML = loginView;

  const btnLogin = mainElem.querySelector('#btn-login');
  btnLogin.addEventListener('click', signInEmailEvent);
  const btnFacebook = mainElem.querySelector('#btn-facebook');
  btnFacebook.addEventListener('click', signFacebookEvent);
  const btnGoogle = mainElem.querySelector('#btn-google');
  btnGoogle.addEventListener('click', signGoogleEvent);
  const showPass = mainElem.querySelector('#btn-eye');
  showPass.addEventListener('click', passwordShow);

  return mainElem;
};
