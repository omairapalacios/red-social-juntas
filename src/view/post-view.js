import {
  eventShowPostToChange,
  eventDeletePost,
  addAndDeleteLikes,
  eventChangeTypePost,
  eventUpdatePost,
} from '../controller/post-controller.js';

import { showComments, eventAddComment, eventGetAllComments } from '../controller/comment-controller.js';

export default (postData) => {
  const postView = `
    <div class="header-post">
      <span id="${postData.idUser}" class="user-post name-user">Publicado por : ${postData.name}</span>
      <div>
      <span class="user-post "> ${postData.date}</span>
      <a href="http://" class="delete-post"><i class="fas fa-trash"></i></a>
      </div>  
    </div>
    <div class="detail-post">
      <div name="" class="text-post" contentEditable="false">${postData.post} ${postData.urlImg !== '' ? `<img class="img-post" src="${postData.urlImg}">` : ''}</div>
    </div>
    <div class="footer-post">
      <button class="like-post btn-post">
        <i class="fas fa-heart i-like icon-general"><span class="span-like">${postData.numlikes}</span></i>
      </button>
      <button class="update-post btn-post">
        <i class="fas fa-edit icon-social icon-general"></i>
      </button>
      <button class="show-comments btn-post">
        <i class="fas fa-comments icon-social icon-general"></i>
      </button>
      <span class="btn-save-change hidden">Guardar Cambios</span>
      <select name="" id="type-post" class="type-post">
        <option value="1">Público</option>
        <option value="0">Privado</option>
      </select>
    </div>
    <div class="container-comment hide">
    <div class="new-comment detail-comment">
      <textarea id="text-comment" rows="5" placeholder="Ingrese comentario..."></textarea>
      <button class="add-comment btn-post">
        <i class="far fa-paper-plane"></i>
      </button>
    </div>
    <p class="get-comments"> Ver más comentarios... </p>
    <div class="comments-${postData.id}"></div>
    </div>
`;
  const divElemPost = document.createElement('div');
  divElemPost.setAttribute('class', 'card-post');
  divElemPost.setAttribute('id', postData.id);
  divElemPost.innerHTML = postView;

  const btnShowComments = divElemPost.querySelector('.show-comments');
  btnShowComments.addEventListener('click', showComments);

  const addComment = divElemPost.querySelector('.add-comment');
  addComment.addEventListener('click', eventAddComment);

  const btnShowPost = divElemPost.querySelector('.update-post');
  btnShowPost.addEventListener('click', eventShowPostToChange);

  const btnUpdate = divElemPost.querySelector('.btn-save-change');
  btnUpdate.addEventListener('click', eventUpdatePost);

  const btnDelete = divElemPost.querySelector('.delete-post');
  btnDelete.addEventListener('click', eventDeletePost);

  const btnLike = divElemPost.querySelector('.like-post');
  btnLike.addEventListener('click', addAndDeleteLikes);

  const select = divElemPost.querySelector('#type-post');
  select.value = postData.type;
  select.addEventListener('change', eventChangeTypePost);

  const btnGetComments = divElemPost.querySelector('.get-comments');
  btnGetComments.addEventListener('click', eventGetAllComments);

  return divElemPost;
};
