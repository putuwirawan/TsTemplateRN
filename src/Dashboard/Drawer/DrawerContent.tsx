import React, {useContext, useEffect} from 'react';
import {FC} from 'react';
import {View, Text, Switch, StyleSheet, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {Avatar, Icon, Divider} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';
import Routers from '../../Routers';
import {AppContext} from '../../Model/context';
import {ListItem} from '../../Assets/Template/ListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface DrawerContentProps {
  navigation: any;
}

export const DrawerContent: FC<DrawerContentProps> = (props) => {
  const {signOut, toggleTheme} = useContext(AppContext);

  const [userLogin, setUserLogin] = React.useState<string | null>(null);
  const paperTheme = useTheme();
  const {colors} = useTheme();

  const getUserLogin = async () => {
    const user = await AsyncStorage.getItem('userName');
    setUserLogin(user);
  };
  useEffect(() => {
    getUserLogin();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <View>
        <View
          style={{
            margin: 10,
            padding: 10,
            flexDirection: 'row',
            alignContent: 'flex-start',
          }}>
          <Avatar
            rounded
            size="small"
            title="US"
            activeOpacity={0.7}
            source={{
              uri:
                'https://th.bing.com/th/id/OIP.O9QGKTfehvwFJHXkYVE4tQHaEK?w=295&h=180&c=7&o=5&dpr=1.25&pid=1.7',
            }}
          />
          <View
            style={{
              paddingLeft: 20,
              alignContent: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <Text>{userLogin}</Text>
            <Text>@katul.com</Text>
          </View>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <View>
          <ListItem
            avatar={
              <Avatar
                rounded
                size="medium"
                source={{
                  uri:
                    'https://th.bing.com/th/id/OIP.O9QGKTfehvwFJHXkYVE4tQHaEK?w=295&h=180&c=7&o=5&dpr=1.25&pid=1.7',
                }}
                activeOpacity={0.7}
              />
            }
            title="Home"
            onPress={() => props.navigation.navigate('HomeScreen')}
            enableDot
          />
          <ListItem
            title="Page1 ne adane"
            onPress={() => props.navigation.navigate('Page1Screen')}
          />
        </View>
      </DrawerContentScrollView>
      <View style={{borderTopWidth: 1}}>
        <TouchableOpacity
          onPress={() => {
            toggleTheme();
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 12,
              paddingHorizontal: 16,
            }}>
            <Text style={{color: colors.text}}>Dark Theme</Text>
            <View pointerEvents="none">
              <Switch value={paperTheme.dark} />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* Footer */}

      <View style={styles.bottomDrawerSection}>
        <ListItem
          label="Sign-Out"
          onPress={async () => {
            await AsyncStorage.removeItem('userToken');
            await AsyncStorage.removeItem('userName');
            signOut();
          }}
          icon="log-out-outline"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  drawerContent: {flex: 1},
  bottomDrawerSection: {
    marginBottom: 10,
    borderBottomColor: '#ACE6D8',
    borderTopWidth: 2,
    borderTopColor: '#A2C6BD',
  },
});
