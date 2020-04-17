export const uploadImage = (image) => {
  const storageRef = firebase.storage().ref(`images/${image.name}`);
  return storageRef.put(image)
    .then(snapshot => snapshot.ref.getDownloadURL());
};
