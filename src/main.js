import { init } from './routers/index.js';

const configInitial = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyBzjNMWg4J7_a319uC-76A5NigM_f_JN9o',
    authDomain: 'my-first-blog-fb.firebaseapp.com',
    databaseURL: 'https://my-first-blog-fb.firebaseio.com',
    projectId: 'my-first-blog-fb',
    storageBucket: 'my-first-blog-fb.appspot.com',
    messagingSenderId: '87065563047',
    appId: '1:87065563047:web:e9ca07354efb51ba2ff082',
    measurementId: 'G-6J4CQYRREH',
  };
  firebase.initializeApp(firebaseConfig);

  init();
};
window.addEventListener('load', configInitial);
