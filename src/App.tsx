import React, {useReducer} from 'react';

import {LoginStackScreen} from './Login';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';

import {DrawerScreen} from './Dashboard/Drawer';
import {View} from 'react-native-animatable';
import {ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from './Model/context';
import {UserType, initUser} from './Model/UserModel';
import {loginReducer} from './Model/loginReducer';

const App = () => {
  const [isLoading, setIsloading] = React.useState(true);
  const isCancelled = React.useRef(false);
  const [isLogin, setIsLogin] = React.useState(false);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const CustomDefaultTheme = {
    ...DefaultTheme,

    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
      primary: '#4c966d',
    },
  };
  const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
      primary: '#5da07b',
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const [state, dispatch] = useReducer(loginReducer, initUser);

  const authContext = React.useMemo(
    () => ({
      signIn: async (foundUser: UserType) => {
        try {
          await AsyncStorage.setItem(
            'access_token',
            String(foundUser.access_token),
          );
          await AsyncStorage.setItem('userName', String(foundUser.username));
          await AsyncStorage.setItem('roles', String(foundUser.roles));
          await AsyncStorage.setItem('userId', String(foundUser.userId));
          await AsyncStorage.setItem(
            'token_type',
            String(foundUser.token_type),
          );
        } catch (e) {
          console.log(e);
        }
        dispatch({
          type: 'LOGIN',
          user: foundUser,
        });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('access_token');
          await AsyncStorage.removeItem('userName');
          await AsyncStorage.removeItem('roles');
          await AsyncStorage.removeItem('userId');
        } catch (e) {
          console.log(e);
        }
        dispatch({
          type: 'LOGOUT',
          user: {
            userId: null,
            access_token: null,
            username: null,
            token_type: null,
            roles: null,
          },
        });
      },
      signUp: () => {},

      toggleTheme: async () => {
        await setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    [],
  );

  const checkUser = async () => {
    let access_token: string | null = null;

    if (!isCancelled.current) {
      try {
        access_token = await AsyncStorage.getItem('access_token');
      } catch (e) {
        console.log(e);
      }

      if (access_token !== 'undefined' && access_token !== null) {
        setIsLogin(true);
      }
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  }, []);
  React.useEffect(() => {
    checkUser();
  }, [state]);

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <NavigationContainer theme={theme}>
      <AppContext.Provider value={authContext}>
        {isLogin ? <DrawerScreen /> : <LoginStackScreen />}
      </AppContext.Provider>
    </NavigationContainer>
  );
};

export default App;
