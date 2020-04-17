import registerUserEmailEvent, { passwordShow } from '../controller/register-controller.js';

export default () => {
  const registerView = `
    <section class='section-banner'>
    </section>
    <section class='section-main'>
      <div class='container-logo'>
        <img src='./img/logo.png' alt='logo' class='icon-logo-main'>
      </div>
      <p> Sé parte de esta red,<span class='c-green'> promociona y encuentra</span> <span >talento.</span> </p>
      <form>
        <input id='username' type='text' class='input-text' placeholder='Nombre de usuario'>      
        <input id='email-register' type='email' class='input-text'  placeholder='Correo Electronico'>
        <div class='pass-eye'> 
          <input type='password' id='password-login' class='input-password' placeholder='Password' required>
          <button class='eye-class btn-post'>
            <i id='btn-eye' class='fas fa-unlock-alt icon-general'></i>
          </button>
        </div>
        <select  class='input-text'  id = "typeUser" >
        <option  value = "COMPRADOR(A)" >COMPRADOR(A) </option>
        <option  value = "VENDEDOR(A)" > VENDEDOR(A) </ option>
        </select>
        <span class='errors' id='error-message'></span>
        <span class='errors' id='error-password'></span>
        <span class='errors' id='error-email'></span>
      </div>
        <button id='btn-register' class='btn btn-general' type='submit'>REGISTRAME</button>
        <p>¿Ya tienes una cuenta? <a href='#/login'>Inicia Sesión</a></p>
        </form>
    </section> `;

  const mainElem = document.createElement('main');
  mainElem.className = 'viewRegister';
  mainElem.innerHTML = registerView;
  const btnRegister = mainElem.querySelector('#btn-register');
  btnRegister.addEventListener('click', registerUserEmailEvent);
  const showPass = mainElem.querySelector('#btn-eye');
  showPass.addEventListener('click', passwordShow);
  return mainElem;
};
