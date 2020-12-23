import React from 'react';
import {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {DrawerActions,useTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';

import Routers from '../../Routers';
import {HomeScreen} from './HomeScreen';
import {DrawerBotton} from '../../Assets/Template/DrawerBotton';
type Props = StackScreenProps<Routers, 'HomeScreen'>;

export const HomeStackScreen: FC<Props> = ({navigation, route}) => {
  const {colors} = useTheme();
  const Stack = createStackNavigator<Props>();


  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.primary},
        
        headerTitleStyle: {fontWeight: 'bold'},
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="route"
        component={HomeScreen}
        options={{
          title: 'Welcome',
          headerLeft: () => <DrawerBotton onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}/>,
        }}
      />
    </Stack.Navigator>
  );
};
