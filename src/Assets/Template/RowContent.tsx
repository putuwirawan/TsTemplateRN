import React from 'react';
import {FC} from 'react';
import {View, Text} from 'react-native';

interface Props {
  color?: string;
  padding?: number;
}

export const RowContent: FC<Props> = ({children, color, padding}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: color ? color : 'transparent',
        padding: padding ? padding : 5,
      }}>
      {children}
    </View>
  );
};
