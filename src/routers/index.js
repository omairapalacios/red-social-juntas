/* eslint-disable no-console */

import { changeView } from './router.js';

export const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => (changeView(window.location.hash)));
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      window.location.hash = '#/home';
      console.log('Existe usuario logueado');
    } else {
      console.log('No existe usuario logueado');
    }
  });
};
