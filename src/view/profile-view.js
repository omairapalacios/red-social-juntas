import { eventUpdateProfile } from '../controller/profile-controller.js';

export default (dataUser) => {
  const homeProfile = `  
  <div class="container-profile">
      <div class="front"></div>
      <div class="user-profile">
        <img src="${dataUser.photoURL}" alt="" id="user-photo" class="user-photo">
      </div>
    </div>
    <div class="container-update-profile">
      <form class="form-profile">
      <h2 class="">Editar perfil</h2>
        <label>Nombre:</label>
        <input type="text" class="input-text" id="u-name" value="${dataUser.displayName}">
        <label>Email:</label>
        <input type="text" disabled class="input-text" id="u-email" value="${dataUser.email}">
        <label>Ocupación:</label>
        <select id="u-type" class="select-ocupation">
          <option value="Comprador(a)">Comprador(a)</option>
          <option value="Vendedor(a)">Vendedor(a)</option>
        </select>
        <label>País:</label>
        <input id="u-country" type="text" class="input-text" id="u-email" value="">
        <div class="container-button">
          <button type="submit" class="btn button-save" id="button-save"> GUARDAR</button>
        </div>
        </form>
    </div class="container-update-profile">
  </div>`;

  const mainElem = document.createElement('main');
  mainElem.innerHTML = homeProfile;

  const btnUpdate = mainElem.querySelector('#button-save');
  btnUpdate.addEventListener('click', eventUpdateProfile);
  return mainElem;
};
