import MockFirebase from 'mock-cloud-firestore';
import {
  addPost,
  getPosts,
  updatePost,
  deletePost,
  updateTypePost,
} from '../src/model/user-post.js';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        post001: {
          post: 'probando mocks',
          idUser: 'user001',
          name: 'omaira palacios',
          email: 'omairapalacios95@gmail.com',
          date: '12/01/2020',
          numlikes: 0,
          type: '1',
        },
        post002: {
          post: 'probando mocks 3',
          idUser: 'user002',
          name: 'maricruz josefina',
          email: 'maricruz@gmail.com',
          date: '12/01/2020',
          numlikes: 0,
          type: '1',
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
const objectPost = {
  post: 'probando mocks 2',
  idUser: 'user002',
  name: 'Lizbeth Jaico',
  email: 'lizbethjaico@gmail.com',
  date: '12/01/2020',
  numlikes: 0,
  type: '1',
};

describe('addPost', () => {
  it('should add a post', done => addPost(objectPost).then(() => {
    const callback = (post) => {
      const result = post.find(elem => elem.post === 'testing mocks 2');
      expect(result.post).toBe('testing mocks 2');
      done();
    };
    getPosts(callback);
  }));

  it('should get a post', done => getPosts((data) => {
    const result = data.filter(elem => elem.idUser === 'user001');
    expect(result).toHaveLength(1);
    done();
  }));

  it('should update a post', done => updatePost('post001', 'modify mocks').then(() => {
    const callback = (post) => {
      const result = post.find(elem => elem.post === 'modify mocks');
      expect(result.post).toBe('modify mocks');
      done();
    };
    getPosts(callback);
  }));

  it('should delete a post', done => deletePost('post002').then(() => {
    const callback = (post) => {
      const result = post.find(elem => elem.id === 'post002');
      expect(result).toBe(undefined);
      done();
    };
    getPosts(callback);
  }));

  it('should update post type', done => updateTypePost('post001', '0').then(() => {
    const callback = (post) => {
      const result = post.find(elem => elem.type === '0');
      expect(result.type).toBe('0');
      done();
    };
    getPosts(callback);
  }));
});
