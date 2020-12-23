import React from 'react';
import {FC} from 'react';
import {useTheme} from '@react-navigation/native';
import {Icon} from 'react-native-elements';

interface DrawerProps {
  onPress?: () => void;
}

export const DrawerBotton: FC<DrawerProps> = ({onPress}) => {
  const {colors} = useTheme();
  return (
    <Icon
      name="list-outline"
      type="ionicon"
      size={30}
      onPress={onPress}
      color={colors.text}
    />
  );
};
