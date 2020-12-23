import React from 'react';
import {FC} from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import Routers from '../Routers';
import Style from '../Assets/Template/Style';
import {Center} from '../Assets/Template/Center';
import {Buttonx} from '../Assets/Template/Buttonx';
import styles, {baseColor} from '../Assets/Template/Style';
import * as Animatable from 'react-native-animatable';
import {Image} from 'react-native-elements';

type Props = StackScreenProps<Routers, 'SplashScreen'>;

export const splashScren: FC<Props> = ({navigation}) => {
  const logo = require('../Assets/Images/logo.png');
  const title = 'Planet Surf';

  return (
    <View
      style={[
        Style.container,
        {backgroundColor: baseColor.darkTheme.bacground},
      ]}>
      <View style={{flex: 2}}>
        <Animatable.View
          style={{flex: 2, alignItems: 'center', paddingTop: 50}}
          animation="zoomIn"
          duration={1500}>
          <Center>
            <Image
              source={logo}
              style={styles.dashboardLogo}
              resizeMode="stretch"
            />
          </Center>
        </Animatable.View>

        <View style={{flex: 1, alignItems: 'center'}}>
          <Animatable.Text
            style={[styles.title, {color: '#fff'}]}
            animation="flipInY"
            duration={2000}>
            {' '}
            {title}
          </Animatable.Text>
        </View>
      </View>
      <Animatable.View
        animation="slideInUp"
        duration={2000}
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          padding: 15,
        }}>
        <Text style={styles.subTitle}>Stay Connected With EveryOne !</Text>
        <Text style={[styles.subHeader, {color: 'grey', fontStyle: 'italic'}]}>
          Sign In with account
        </Text>
        <View>
          <Buttonx
            onPress={() => navigation.navigate('SignInScreen')}
            color={['blue', 'red']}
            iconName="chevron-forward-sharp"
            textColor="yellow"
            buttonWide={200}
            buttonText="Get Start"
          />
        </View>
      </Animatable.View>
    </View>
  );
};
