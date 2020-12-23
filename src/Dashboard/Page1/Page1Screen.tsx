import React from 'react';
import {FC} from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Routers from '../../Routers';

type Props = StackScreenProps<Routers, 'Page1Screen'>;

export const Page1Screen: FC<Props> = ({navigation, route}) => {
  return (
    <View>
      <Text>Page 1 Screen</Text>
      <Button
        title="go to Home"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
    </View>
  );
};
