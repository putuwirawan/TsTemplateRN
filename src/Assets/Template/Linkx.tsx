import React from 'react';
import {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface LinkxProps {
  onPress?: () => void;
  textColor?: string;
  linkxText?: string;
}

export const Linkx: FC<LinkxProps> = ({
  onPress,
  textColor,

  linkxText,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{alignItems:'center',justifyContent:'center', marginTop:10}} >
      <Text
        style={{
          color: textColor ? textColor : '#ffff',textAlign:'center',
          fontSize: 20,
          fontStyle:'italic',
          fontWeight: 'bold',
          marginHorizontal: 10,
        }}>
        {linkxText ? linkxText : ''}
      </Text>
    </TouchableOpacity>
  );
};
