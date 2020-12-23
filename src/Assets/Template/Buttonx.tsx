import React from 'react';
import {FC} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RowContent} from './RowContent';
import {Icon} from 'react-native-elements';
import styles from '../Template/Style'

interface ButtonxProps {
  color?: string[];
  onPress?: () => void;
  textColor?: string;
  buttonWide?: number;
  iconName?: string;
  buttonText?: string
}

export const Buttonx: FC<ButtonxProps> = ({
  onPress,
  color,
  textColor,
  buttonWide,
  iconName,
  buttonText
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <LinearGradient
        colors={color ? color : ['#08d4c4', '#01ab9d']}
        style={{
          width: buttonWide ? buttonWide : 150,
          height: 40,
          borderRadius: 20,
          padding: 5,
        }}>
        <RowContent>
          <Text
            style={{
              color: textColor ? textColor : '#ffff',
              fontSize: 17,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            {buttonText? buttonText:''}
          </Text>
          {iconName ? (
            <Icon
              name={iconName}
              type="ionicon"
              color={textColor ? textColor : '#ffff'}
            />
          ) : null}
        </RowContent>
      </LinearGradient>
    </TouchableOpacity>
  );
};
