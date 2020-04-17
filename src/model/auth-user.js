
export const signInUserEmail = (email, password) => (
  firebase.auth().signInWithEmailAndPassword(email, password));

export const signInUserGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
export const signInUserFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
export const registerUserEmail = (email, password) => (
  firebase.auth().createUserWithEmailAndPassword(email, password));

export const signOut = () => firebase.auth().signOut();

export const currentUser = () => firebase.auth().currentUser;
