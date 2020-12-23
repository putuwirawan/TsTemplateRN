import React from 'react';
import {FC} from 'react';
import {View, Text} from 'react-native';

interface CenterProps {
  color?:string
}

export const Center: FC<CenterProps> = ({children,color}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:color? color:'transparent'}}>
      {children}
    </View>
  );
};
