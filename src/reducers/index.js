import { combineReducers } from 'redux';

import PostsReducer from './posts-reducer';

const postsReducer = combineReducers({
  posts: PostsReducer,
});

export default postsReducer;
