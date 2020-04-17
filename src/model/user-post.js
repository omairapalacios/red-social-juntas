
import { getDatePostandComment } from '../utils/util-date.js';

const date = new Date();
export const addPost = (newPost, typePost, user, nameUser, emailUser, url) => {
  const db = firebase.firestore();
  const result = db.collection('posts').add({
    post: newPost,
    idUser: user,
    name: nameUser,
    email: emailUser,
    date: getDatePostandComment(date),
    numlikes: 0,
    type: typePost,
    urlImg: url,
  });
  return result;
};

export const getPosts = (callback) => {
  const result = firebase.firestore().collection('posts').orderBy('date', 'desc')
    .onSnapshot((querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        arr.push(obj);
      });
      callback(arr);
    });
  return result;
};

export const updatePost = (idPost, newTextPost) => {
  const result = firebase.firestore().collection('posts').doc(idPost).update({
    post: newTextPost,
  });
  return result;
};

export const deletePost = (idPost) => {
  const result = firebase.firestore().collection('posts').doc(idPost).delete();
  return result;
};

export const updateTypePost = (idPost, typePost) => {
  const result = firebase.firestore().collection('posts').doc(idPost).update({
    type: typePost,
  });
  return result;
};
