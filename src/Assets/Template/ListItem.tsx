import React from 'react';
import {FC} from 'react';
import {useTheme} from '@react-navigation/native';
import {Avatar, Icon, Divider} from 'react-native-elements';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface DrawerProps {
  title: string;
  subTitle?: string; //
  onPress: () => void;
  iconRight?: boolean;
  enableDot?: boolean;
  avatar?: React.ReactNode;
}

export const ListItem: FC<DrawerProps> = (props) => {
  const {title, onPress, subTitle, avatar} = props;
  const {colors} = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={{marginBottom: 10, flex: 1}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flex: 8,
            flexDirection: 'row',
            backgroundColor: 'powderblue',
          }}>
          <View>{avatar}</View>
          <View
            style={{
              paddingLeft: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: colors.text, fontSize: 17, fontWeight: '700'}}>
              {title}
            </Text>
            {subTitle ? (
              <Text
                style={{color: colors.text, fontSize: 14, fontWeight: '500'}}>
                {subTitle}
              </Text>
            ) : null}
          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: 'steelblue',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <Icon name="chevron-forward-outline" color="#00aced" type="ionicon" />
        </View>
      </View>
      {/* <View style={{ flexDirection: 'row', flex: 1, justifyContent:'space-between'}}>
        <View style={{flexDirection: 'row', alignItems:'flex-start'}}>
          <View>{avatar}</View>
          <View style={{paddingLeft: 10, backgroundColor: 'red'}}>
            <Text style={{color: colors.text, fontSize: 17, fontWeight: '700'}}>
              {title}
            </Text>
            <Text style={{color: colors.text, fontSize: 14, fontWeight: '500'}}>
              ngacuh bedik gen ney ruuuu
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'blue',
            alignContent:'flex-end'
          }}>
          <Icon name="chevron-forward-outline" color="#00aced" type="ionicon" />
        </View>
      </View> */}
    </TouchableOpacity>
    //  name="g-translate"
  );
};
