/* eslint-disable no-console */
import {
  signInUserEmail, signInUserFacebook, signInUserGoogle, signOut,
} from '../model/auth-user.js';
import {
  addUserData,
} from '../model/user-firestore.js';

export const signInEmailEvent = (event) => {
  event.preventDefault();
  const btnLogin = event.target;
  const email = btnLogin.closest('form').querySelector('input[type=email]');
  const password = btnLogin.closest('form').querySelector('input[type=password]');
  const msgError = btnLogin.closest('form').querySelector('#error-message');
  const msgErrorEmail = btnLogin.closest('form').querySelector('#error-email');
  const msgErrorPassword = btnLogin.closest('form').querySelector('#error-password');
  if (email.value !== '' && password.value !== '') {
    signInUserEmail(email.value, password.value)
      .then((result) => {
        if (result.user.emailVerified) {
          window.location.hash = '#/home';
        } else {
          console.log('Realice la verificación de registro en su correo electrónico porfavor');
        }
      }).catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        if (errorCode === 'auth/invalid-email') {
          msgError.innerHTML = 'El formato del correo electronico ingresado no es valido(*)';
        } else if (errorCode === 'auth/wrong-password') {
          msgError.innerHTML = 'La contraseña ingresada es incorrecta(*)';
        } else if (errorCode === 'auth/user-not-found') {
          msgError.innerHTML = 'El correo no se encuentra registrado(*)';
        }
      });
  } else {
    msgErrorEmail.innerHTML = 'Por favor ingrese un correo electrónico(*)';
    msgErrorPassword.innerHTML = 'Por favor ingrese una contraseña(*)';
  }
};

export const signFacebookEvent = (event) => {
  event.preventDefault();
  signInUserFacebook()
    .then((result) => {
      const userId = result.user.uid;
      const userObj = {
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
        email: result.user.email,
        typeUser: 'Vendedor (a)',
      };
      addUserData(userId, userObj);
      window.location.hash = '#/home';
    }).catch((error) => {
      const errorCode = error.code;
      const erroMessage = error.message;
      console.log(errorCode, erroMessage);
      const email = error.email;
      const credential = error.credential;
      console.log(email, credential);
    });
};

export const signGoogleEvent = (event) => {
  event.preventDefault();
  signInUserGoogle()
    .then((result) => {
      const userId = result.user.uid;
      const userObj = {
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
        email: result.user.email,
        typeUser: 'Vendedor',
      };
      addUserData(userId, userObj);
      window.location.hash = '#/home';
    }).catch((error) => {
      const errorCode = error.code;
      const erroMessage = error.message;
      console.log(errorCode, erroMessage);
    });
};

export const signOutSesion = (event) => {
  event.preventDefault();
  signOut()
    .then((doc) => {
      console.log('Sesión cerrada', doc);
      window.location.hash = '#/login';
    }).catch((error) => {
      const errorCode = error.code;
      const erroMessage = error.message;
      console.log(errorCode, erroMessage);
    });
};

export const passwordShow = () => {
  const tipo = document.querySelector('#password-login');
  if (tipo.type === 'password') {
    tipo.type = 'text';
  } else {
    tipo.type = 'password';
  }
};
