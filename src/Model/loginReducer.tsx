import {UserType} from './UserModel';

export type LoginAction = {
  type: string;
  user: UserType;
};

const loginReducer = (state: UserType, action: LoginAction) => {
  switch (action.type) {
    case 'RETRIVE_TOKEN':
      return {
        ...state,
        access_token: action.user.access_token,
      };
    case 'LOGIN':
      return {
        ...state,
        userId: action.user.userId,
        access_token: action.user.access_token,
        username: action.user.username,
        token_type: action.user.token_type,
        roles: action.user.roles,
      };
    case 'LOGOUT':
      return {
        ...state,
        userId: null,
        access_token: null,
        username: null,
        token_type: null,
        roles: null,
        
      };
    case 'REGISTER':
      return {
        ...state,
        userId: action.user.userId,
        access_token: action.user.access_token,
        username: action.user.username,
        token_type: action.user.token_type,
        roles: action.user.roles,
      };
    default:
      return state;
  }
};
export {loginReducer};

// ShoppingCart
