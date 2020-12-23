import {createContext} from 'react';
import {UserType} from './UserModel';

interface AuthLogin {
  signIn: (user: UserType) => void;
  signOut: () => void;
  signUp: () => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AuthLogin>({
  signIn: () => null,
  signOut: () => null,
  signUp: () => null,
  toggleTheme: () => null,
});

export {AppContext};
