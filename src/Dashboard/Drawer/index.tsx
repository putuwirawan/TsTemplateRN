import React from 'react';
import {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import Routers from '../../Routers';

import {HomeStackScreen} from '../Home';
import {Page1StackScreen} from '../Page1';
import {DrawerContent} from './DrawerContent'





export const DrawerScreen: FC = ({}) => {

  const Drawer = createDrawerNavigator<Routers>();
 

  return (
    // <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: 'blue',
          itemStyle: {marginVertical: 5},
         
        }}
        
        drawerContent={props=> <DrawerContent {...props}  />}
        >
        <Drawer.Screen name='HomeScreen' component={HomeStackScreen} />
        <Drawer.Screen name="Page1Screen" component={Page1StackScreen} />
      </Drawer.Navigator>
    // </NavigationContainer>
  );
};
