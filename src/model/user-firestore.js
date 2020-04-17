export const addUserData = (userId, userObj) => {
  const result = firebase.firestore().collection('users').doc(userId).set(userObj);
  return result;
};

export const getUserData = idUser => firebase.firestore().collection('users').doc(idUser).get();

export const updateProfile = (idProfile, newTextProfileType, newTextProfileName,
  newcountry) => {
    console.log(newTextProfileType);
    console.log(newTextProfileName);
  const result = firebase.firestore().collection('users').doc(idProfile).update({
    displayName: newTextProfileName,
    typeUser: newTextProfileType,
    country: newcountry,
  });
  return result;
};
