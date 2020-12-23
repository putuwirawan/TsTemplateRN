import React from 'react';
import {FC} from 'react';
import {View, Text, Button, Dimensions, Alert, ScrollView} from 'react-native';
import {Center} from '../Assets/Template/Center';
import {StackScreenProps} from '@react-navigation/stack';
import Routers from '../Routers';
import Style, {baseColor} from '../Assets/Template/Style';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar, Input, Image} from 'react-native-elements';
import {Buttonx} from '../Assets/Template/Buttonx';
import {Linkx} from '../Assets/Template/Linkx';

type Props = StackScreenProps<Routers, 'SignUpScreen'>;

export const SignUpScreen: FC<Props> = ({navigation}) => {
  const {width} = Dimensions.get('screen');
  const [data, setData] = React.useState({
    name: '',
    username: '',
    password: '',
    check_userChange: false,
    check_rePasswordChange: false,
    securePassword: true,
    isValidName: true,
    isValidUser: true,
    isValidPassword: true,
    isconfirmPassword: true,
  });
  const userChange = (val: string) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        check_userChange: true,
      });
    } else {
      setData({
        ...data,

        check_userChange: false,
      });
    }
  };
  const nameChange = (val: string) => {
    if (val.trim().length >= 3) {
      setData({
        ...data,
        name: val,
        isValidName: true,
      });
    } else {
      setData({
        ...data,
        name: val,
        isValidName: false,
      });
    }
  };
  const handleValidUser = (val: string) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
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
  const handleConfirmPasswordChange = (val: string) => {
    if (val == data.password) {
      setData({
        ...data,
        check_rePasswordChange: true,
        isconfirmPassword: true,
      });
    } else {
      setData({
        ...data,
        check_rePasswordChange: false,
        isconfirmPassword: false,
      });
    }
  };
  const securePasswordChange = () => {
    setData({
      ...data,
      securePassword: !data.securePassword,
    });
  };
  const handleRegister = () => {
    if (
      !data.isValidPassword ||
      !data.isValidName ||
      !data.isconfirmPassword ||
      !data.isValidUser ||
      !data.check_userChange ||
      !data.check_rePasswordChange
    ) {
      Alert.alert('Not Valid Data, Check yor data !');
    } else {
      Alert.alert('OK ruu');
    }
  };
  return (
    <View style={[Style.container, {backgroundColor: '#000C66'}]}>
      <View style={{flex: 1}}>
        <Center>
          <Text style={[Style.subHeader, {color: '#5CD85A'}]}>
            {' '}
            Register Account
          </Text>
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
        <View
          style={{
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Avatar
            source={require('../Assets/Images/logo.png')}
            size="medium"
            activeOpacity={0.7}
            avatarStyle={{resizeMode: 'cover'}}
          />
        </View>
        <ScrollView horizontal={false} centerContent={true}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <View style={{width: 300, alignItems: 'center', paddingTop: 50}}>
              <Input
                placeholder="Enter Name"
                leftIcon={{type: 'ionicon', name: 'person-add-outline'}}
                onChangeText={(val) => nameChange(val)}
                errorMessage={
                  !data.isValidName ? 'Name must be 3 characters long' : ''
                }
              />
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
              <Input
                placeholder="ReEnter Password"
                onChangeText={(val) => handleConfirmPasswordChange(val)}
                errorMessage={!data.isconfirmPassword ? 'invalid Password' : ''}
                leftIcon={{type: 'ionicon', name: 'key-outline'}}
                rightIcon={{
                  type: 'ionicon',
                  name: 'checkmark-done-outline',
                  color: !data.check_rePasswordChange
                    ? 'transparent'
                    : '#2cff00',
                }}
              />
            </View>
            <View style={{justifyContent: 'space-around'}}>
              <Buttonx
                buttonText="Register"
                iconName="create-outline"
                buttonWide={170}
                onPress={() => handleRegister()}
              />
              <Linkx
                linkxText="Go Back"
                textColor="#000C66"
                onPress={() => {
                  navigation.navigate('SplashScreen');
                }}
              />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>

      {/* </View> */}
    </View>
  );
};
