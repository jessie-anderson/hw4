// keys for actiontypes
import * as axios from 'axios';
import { browserHistory } from 'react-router';
const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const API_KEY = '?key=j_anderson';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
};

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${API_KEY}`).then(response => {
      dispatch({
        type: ActionTypes.FETCH_POSTS,
        payload: response.data,
      });
    }).catch(error => {
      console.log('error occurred getting posts:');
      console.log(error);
    });
  };
}

export function createPost(post) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts/${API_KEY}`, {
      title: post.title,
      tags: post.tags,
      content: post.content,
    })
    .then((response) => {
      browserHistory.push('/');
      dispatch({
        type: ActionTypes.CREATE_POST,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log('error');
      console.log(error);
    });
  };
}

export function updatePost(post) {
  console.log('post to be updated:');
  console.log(post);
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${post.id}${API_KEY}`, post)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: ActionTypes.UPDATE_POST,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      dispatch({
        type: ActionTypes.FETCH_POST,
        payload: response.data,
      });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      browserHistory.push('/');
      dispatch({
        type: ActionTypes.DELETE_POST,
        payload: id,
      });
    }).catch((error) => {
      console.log(error);
    });
  };
}
