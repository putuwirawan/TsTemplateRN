import React from 'react';
import {FC} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Icon} from 'react-native-elements';

import {HomeScreen} from '../Dashboard/Home/HomeScreen';
import {Page1StackScreen} from '../Dashboard/Page1';
import Routers from '../Routers';
import { Page1Screen } from './Page1/Page1Screen';

export const MainMenu: FC<Routers> = ({}) => {
  const MainStack = createStackNavigator<Routers>();
  const drawerButton = () => (
    <Icon name="list-outline" type="ionicon" size={30} onPress={() => {}} />
  );
  const settingButton = () => (
    <Icon name="settings-outline" type="ionicon" size={30} onPress={() => {}} />
  );
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {backgroundColor: '#009387'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
          headerTitleAlign: 'center',
        }}>
        <MainStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Welcome',
            headerLeft: drawerButton,
            headerRight: settingButton,
          }}
        />
        <MainStack.Screen
          name="Page1Screen"
          component={Page1Screen}
          options={{title: 'Page1', headerLeft: drawerButton}}
         
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
