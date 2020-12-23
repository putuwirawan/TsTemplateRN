import React, {useContext} from 'react';
import {FC} from 'react';
import {View, Text, Dimensions, Alert} from 'react-native';
import {Center} from '../Assets/Template/Center';
import {StackScreenProps} from '@react-navigation/stack';
import Routers from '../Routers';
import Style from '../Assets/Template/Style';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar, Input, Image} from 'react-native-elements';
import {Buttonx} from '../Assets/Template/Buttonx';
import {Linkx} from '../Assets/Template/Linkx';
import {AppContext} from '../Model/context';
import {Login} from '../Assets/Helper/API_helper';

type Props = StackScreenProps<Routers, 'SignInScreen'>;

const userInfo = {username: 'katul', password: '123456'};

export const SignInScreen: FC<Props> = ({navigation}) => {
  const {signIn} = useContext(AppContext);

  const {width} = Dimensions.get('screen');
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_userChange: false,
    securePassword: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const userChange = (val: string) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_userChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_userChange: false,
        isValidUser: false,
      });
    }
  };
  const handleValidUser = (val: string) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };
  const handlePasswordChange = (val: string) => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };
  const securePasswordChange = () => {
    setData({
      ...data,
      securePassword: !data.securePassword,
    });
  };
  const handleSignIn = async () => {
    {
      if (data.username && data.password) {
        let response = await Login({
          userName: data.username,
          password: data.password,
        });
        if (response.error) {
          Alert.alert(response.error_description);
        } else {
          signIn(response);
        }
      } else {
        Alert.alert('Check Username and password');
      }
    }
  };

  return (
    <View style={[Style.container, {backgroundColor: '#000C66'}]}>
      <View style={{flex: 1}}>
        <Center>
          <Text style={[Style.subHeader, {color: '#5CD85A'}]}> WELCOME</Text>
          <Image
            source={require('../Assets/Images/tulisanPs.png')}
            style={{width: (width * 3) / 4, height: 50}}
            resizeMode="stretch"
          />
        </Center>
      </View>

      <LinearGradient
        start={{x: -1, y: 0}}
        end={{x: 1, y: 2}}
        colors={['#0000FF', '#7EC8E3']}
        style={{
          borderTopRightRadius: width / 2.5,
          borderTopLeftRadius: width / 2.5,
          flex: 3,
        }}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Avatar
            source={require('../Assets/Images/logo.png')}
            size="medium"
            activeOpacity={0.7}
            avatarStyle={{resizeMode: 'cover'}}
          />
        </View>
        <View
          style={{
            flex: 4,
            alignItems: 'center',
          }}>
          <View style={{width: 300, alignItems: 'center', paddingTop: 50}}>
            <Input
              placeholder="Enter Username"
              onChangeText={(val) => userChange(val)}
              onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
              errorMessage={
                !data.isValidUser ? 'Username must be 4 characters long' : ''
              }
              rightIcon={{
                type: 'ionicon',
                name: 'checkmark-done-outline',
                color: !data.check_userChange ? 'transparent' : '#2cff00',
              }}
              leftIcon={{type: 'ionicon', name: 'person-outline'}}
            />
            <Input
              placeholder="Enter Password"
              secureTextEntry={data.securePassword ? true : false}
              onChangeText={(val) => handlePasswordChange(val)}
              errorMessage={
                !data.isValidPassword
                  ? 'Password must be 6 characters long'
                  : ''
              }
              leftIcon={{type: 'ionicon', name: 'key-outline'}}
              rightIcon={
                data.securePassword
                  ? {
                      type: 'font-awesome',
                      name: 'eye',
                      color: '#cf00ff',
                      onPress: () => securePasswordChange(),
                    }
                  : {
                      type: 'font-awesome',
                      name: 'eye-slash',
                      color: '#2cff00',
                      onPress: () => securePasswordChange(),
                    }
              }
            />
          </View>
          <View style={{justifyContent: 'space-around'}}>
            <Buttonx
              buttonText="Login"
              iconName="log-in-outline"
              buttonWide={170}
              onPress={async () => handleSignIn()}
            />
            <Linkx
              linkxText="Go To Register"
              textColor="#000C66"
              onPress={() => {
                navigation.navigate('SignUpScreen');
              }}
            />
          </View>
        </View>
      </LinearGradient>

      {/* </View> */}
    </View>
  );
};
