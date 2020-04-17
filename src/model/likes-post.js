
export const addLikes = (idPost, idUser, displayName) => {
  const likeRef = firebase.firestore().collection('likes').doc();
  const likesNum = firebase.firestore().collection('posts').doc(idPost);
  const increment = firebase.firestore.FieldValue.increment(1);
  const batch = firebase.firestore().batch();
  batch.set(likeRef, { idPostLike: idPost, idUserLike: idUser, nameUser: displayName });
  batch.set(likesNum, { numlikes: increment }, { merge: true });
  batch.commit();
};

export const deleteLikes = (idLike, idPost) => {
  const likeRef = firebase.firestore().collection('likes').doc(idLike);
  const likesNum = firebase.firestore().collection('posts').doc(idPost);
  const decrement = firebase.firestore.FieldValue.increment(-1);
  const batch = firebase.firestore().batch();
  batch.delete(likeRef);
  batch.set(likesNum, { numlikes: decrement }, { merge: true });
  batch.commit();
};

export const getUserLike = (idPost, idUser) => {
  const result = firebase.firestore().collection('likes')
    .where('idUserLike', '==', idUser)
    .where('idPostLike', '==', idPost)
    .get();
  return result;
};
