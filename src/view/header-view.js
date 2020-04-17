import { signOutSesion } from '../controller/login-controller.js';
import { showMenu } from '../controller/header-controller.js';

export default () => {
  const headerView = `
  <nav>
    <button id="menu" class="menu">
        <i class="icon-menu fas fa-bars"></i>
        <ul class="ul-menu-mobile hide">      
          <li class="home">
            <a class="nav-container-link" href="#/home"> MURO</a>
          </li>
          <li class="profile-heade">
            <a  class="nav-container-link" href="#/profile"> PERFIL</a>
          </li>
          <li class="sign-out-mobile">
            <a class="nav-container-link">SALIR
              <i id="sign-out" class="icon-log-out fas fa-sign-out-alt"></i>
            </a>
          </li>
        </ul>
    </button>
    <ul class="ul-menu-desktop">      
      <li class="home">
        <a class="nav-container-link" href="#/home"> MURO</a>
      </li>
      <li class="profile-heade">
        <a  class="nav-container-link" href="#/profile"> PERFIL</a>
      </li>
      <li class="sign-out-desktop">
        <a class="nav-container-link">
          <i id="sign-out" class="icon-log-out fas fa-sign-out-alt"></i>
        </a>
      </li>
    </ul>
  </nav>
`;
  const headerELem = document.createElement('header');
  headerELem.innerHTML = headerView;

  const btnLogoutMobile = headerELem.querySelector('.sign-out-mobile');
  btnLogoutMobile.addEventListener('click', signOutSesion);

  const btnLogoutDesktop = headerELem.querySelector('.sign-out-desktop');
  btnLogoutDesktop.addEventListener('click', signOutSesion);

  const btnMenu = headerELem.querySelector('#menu');
  btnMenu.addEventListener('click', showMenu);

  return headerELem;
};
