import { components } from '../utils/util-view.js';
import { currentUser } from '../model/auth-user.js';
import { getUserData } from '../model/user-firestore.js';
import { getPosts } from '../model/user-post.js';
import { getComments } from '../model/comment-post.js';

export const changeView = (hash) => {
  const container = document.querySelector('#container');
  container.innerHTML = '';
  switch (hash) {
    case '':
    case '#/':
    case '#/login':
      container.appendChild(components.login());
      break;
    case '#/register':
      container.appendChild(components.register());
      break;
    case '#/home':
    {
      getUserData(currentUser().uid)
        .then((response) => {
          const callbackPost = (dataPost) => {
            container.innerHTML = '';
            container.appendChild(components.header());
            container.appendChild(components.home(dataPost, response.data()));
            dataPost.forEach((post) => {
              const callbackComment = (dataComment) => {
                const dataCommentSorted = dataComment.sort((a, b) => ((a.date < b.date) ? 1 : -1));
                const containerComment = document.querySelector(`.comments-${post.id}`);
                if (dataCommentSorted.length >= 0) {
                  containerComment.innerHTML = '';
                  dataCommentSorted.forEach((comment) => {
                    containerComment.appendChild(components.comment(comment));
                  });
                }
              };
              getComments(post.id, callbackComment);
            });
          };
          getPosts(callbackPost);
        });
      break;
    }
    case '#/profile':
      getUserData(currentUser().uid)
        .then((response) => {
          container.innerHTML = '';
          container.appendChild(components.header());
          container.appendChild(components.profile(response.data()));
        });
      break;
    default:
      container.appendChild(components.login());
  }
};
