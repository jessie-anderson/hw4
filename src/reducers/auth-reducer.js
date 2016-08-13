import { ActionTypes } from '../actions';

const AuthReducer = (auth = { authenticated: false }, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return {
        authenticated: true,
      };
    case ActionTypes.DEAUTH_USER:
      return {
        authenticated: false,
      };
    case ActionTypes.AUTH_ERROR:
      return {
        authenticated: false,
      };
    default: return auth;
  }
};

export default AuthReducer;
