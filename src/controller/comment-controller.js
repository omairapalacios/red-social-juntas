import {
  deleteComment,
  updateComment,
  addComment,
  getAllComments,
} from '../model/comment-post.js';
import { currentUser } from '../model/auth-user.js';

export const showComments = (event) => {
  const btnShowComment = event.target;
  const container = btnShowComment.closest('.card-post').querySelector('.container-comment');
  container.classList.toggle('hide');
};

export const eventAddComment = (event) => {
  event.preventDefault();
  const btnAddComment = event.target;
  const postId = btnAddComment.closest('.card-post').id;
  const comment = btnAddComment.closest('.card-post').querySelector('#text-comment');
  const objComment = {
    idPost: postId,
    textComment: comment.value,
    idUser: currentUser().uid,
    user: currentUser().displayName,
    date: new Date(),
  };
  if (comment.value !== '') {
    addComment(objComment)
      .then((doc) => {
        comment.value = '';
        console.log('comentario agregado exitosamente', doc);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};


export const eventDeleteComment = (event) => {
  const btnDeleteComment = event.target;
  const idComment = btnDeleteComment.closest('.comment').id;
  const idUserComment = btnDeleteComment.closest('.comment').querySelector('.comment-name-user').id;
  const idUserPost = btnDeleteComment.closest('.card-post').querySelector('.user-post').id;
  if (currentUser().uid === idUserComment || currentUser().uid === idUserPost) {
    deleteComment(idComment)
      .then((doc) => {
        console.log('comentario eliminado', doc);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const eventUpdateComment = (event) => {
  const btnUpdateComment = event.target;
  const idComment = btnUpdateComment.closest('.comment').id;
  const textComment = btnUpdateComment.closest('.comment').querySelector('textarea');
  const idUserComment = btnUpdateComment.closest('.comment').querySelector('.comment-name-user').id;
  const idUserPost = btnUpdateComment.closest('.card-post').querySelector('.user-post').id;
  if (currentUser().uid === idUserComment || currentUser().uid === idUserPost) {
    updateComment(idComment, textComment.value)
      .then((doc) => {
        console.log('comentario editado', doc);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const eventGetAllComments = (event) => {
  const btnGetAllComments = event.target;
  const idPost = btnGetAllComments.closest('.card-post').id;
  getAllComments(idPost)
    .then((abc) => {
      abc.forEach((doc) => {
        console.log(doc.data());
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
