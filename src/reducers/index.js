import { combineReducers } from 'redux';

import PostsReducer from './posts-reducer';
import AuthReducer from './auth-reducer';

const postsReducer = combineReducers({
  posts: PostsReducer,
  auth: AuthReducer,
});

export default postsReducer;
