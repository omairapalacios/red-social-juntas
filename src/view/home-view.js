import { addDataPost } from '../controller/post-controller.js';
import printPost from './post-view.js';
import { currentUser } from '../model/auth-user.js';

export default (dataPosts, dataUser) => {
  const homeView = `
    <section class="profile">
      <div class="front"></div>
      <div class="user-profile">
        <img src="${dataUser.photoURL}" alt="" id="user-photo" class="user-photo">
        <div class="detail-user">
          <span id="user-name" class="name-user">${dataUser.displayName}</span>
          <div>${dataUser.typeUser === '' ? '<span id="user-type">Vendedor(a)</span>' : `<span id="user-type">${dataUser.typeUser}</span>`}</div>
        </div>
      </div>
    </section>
    <section id="container-posts-general" class="container-posts-general">
      <div class="card-new-post">
        <textarea name="" id="" placeholder="Comparte talento, técnica y pasión ..."></textarea>
        <div class="footer-new-post">
        <div>
          <label for="upload-image"><i class="icon-general far fa-images"></i></label>
          <input type="file" id="upload-image" class='hide'>
        </div>
          <select name="" id="type-new-post" class="type-new-post type-post">
            <option value="1">Público</option>
            <option value="0">Privado</option>
          </select>
          <button class="btn-share share-post type="submit">COMPARTIR</button>
        </div>
      </div>
      </div>
      <section id="container-posts" class="container-posts">
      </section>
    </section>`;
  const mainELem = document.createElement('main');
  mainELem.innerHTML = homeView;
  const containerPosts = mainELem.querySelector('#container-posts');
  dataPosts.forEach((post) => {
    // publico: 1 ---- publico : 0
    if (post.type === '1' || (post.idUser === currentUser().uid && post.type === '0')) {
      containerPosts.appendChild(printPost(post));
    }
  });
  const btnShare = mainELem.querySelector('button');
  btnShare.addEventListener('click', addDataPost);

  return mainELem;
};
