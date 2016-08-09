import { ActionTypes } from '../actions';

const PostsReducer = (posts = { all: [], post: null }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS: {
      const newPosts = action.payload.map(post => {
        return Object.assign({}, post, { tags: post.tags.split(/[ ,]+/) });
      });
      return Object.assign({}, posts, { all: newPosts });
    }
    case ActionTypes.FETCH_POST: {
      const newPost = Object.assign({}, action.payload, { tags: action.payload.tags.split(/[ ,]+/) });
      return Object.assign({}, posts, { post: newPost });
    }
    case ActionTypes.UPDATE_POST: {
      return Object.assign({}, posts, { post: action.payload });
    }
    case ActionTypes.DELETE_POST: {
      // update local state so delete shows up right away
      const id = action.payload;
      const newPosts = [];
      let j = 0;
      for (let i = 0; i < posts.all.length; i++) {
        if (posts.all[i].id !== id) {
          newPosts[j] = posts.all[i];
          j ++;
        }
      }
      return Object.assign({}, posts, { all: newPosts });
    }
    default: {
      return posts;
    }
  }
};

export default PostsReducer;
