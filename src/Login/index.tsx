import React from 'react';
import {FC} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';

import Routers from '../Routers';
// screen
import {splashScren} from './splashScren';
import {SignInScreen} from './SignInScreen';
import {SignUpScreen} from './SignUpScreen';


export const LoginStackScreen: FC = (props) => {
  const RootStack = createStackNavigator<Routers>();
  return (
    // <NavigationContainer {...props}>
    <RootStack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <RootStack.Screen name="SplashScreen" component={splashScren} />
      <RootStack.Screen name="SignInScreen" component={SignInScreen} />
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </RootStack.Navigator>
    // </NavigationContainer>
  );
};

// export LoginStackScreen;
